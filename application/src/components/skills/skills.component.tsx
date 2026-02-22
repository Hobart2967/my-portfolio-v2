import elementResizeDetectorMaker from 'element-resize-detector';
import * as d3 from 'd3';
import {
	BufferAttribute,
	BufferGeometry,
	Euler,
	Line,
	LineBasicMaterial
} from 'three';
import {
	CSS2DObject,
	CSS2DRenderer
} from 'three/examples/jsm/renderers/CSS2DRenderer';
import ForceGraph3D, { ForceGraph3DInstance } from '3d-force-graph';

import { SkillTree } from './models/skill-tree.model';
import { GraphNode } from './models/graph-node';
import { GraphNodeLink } from './models/graph-node-link';
import { createSignal, onMount } from 'solid-js';

import './skills.component.scss';
import { skills } from './skills';

type Coords = { x: number; y: number; z: number; };

export function Skills() {
	let graph: HTMLDivElement | undefined;

	onMount(() => {
		if (!graph) {
			throw new Error('Could not find graph element');
		}

		document.addEventListener('DOMContentLoaded', () => {
			initTree(graph);
		});
	});

	function initTree(graphElement: HTMLDivElement) {
		const nodes: GraphNode<SkillTree>[] = [];
		const links: GraphNodeLink<SkillTree>[] = [];
		parseSkillTree(skills, 1, nodes, links);

		// HACK: ForceGraph3D is not typed correctly
		const myGraph: (element: HTMLElement) => ForceGraph3DInstance<GraphNode<SkillTree>, GraphNodeLink<SkillTree>>
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			= (ForceGraph3D as unknown as any)({
				extraRenderers: [new CSS2DRenderer()]
			});

		const groupColors: string[] = [
			'#1d948f',
			'#1d941d',
			'#32ec32',
			'#ccc'
		];
		const nodeColorScale = d3.scaleOrdinal(d3.schemeRdYlGn[4]);
		const graph = myGraph(graphElement);
		let focusedNode: GraphNode<SkillTree> | undefined | null = null;

		graph
		// .linkColor(({targetGroupIndex}: any) => groupColors[targetGroupIndex % groupColors.length])
			.nodeColor(node => nodeColorScale(node.id as string))
			.linkThreeObject((link: GraphNodeLink) => {
				/*
				 * 2 (nodes) x 3 (r+g+b) bytes between [0, 1]
				 * For example:
				 * new Float32Array([
				 *   1, 0, 0,  // source node: red
				 *   0, 1, 0   // target node: green
				 * ]);
				 */
				const colors = new Float32Array(
					new Array<number>()
						.concat(
							...[
								link.sourceGroupIndex,
								link.targetGroupIndex
							]
								.map(groupIndex => groupColors[groupIndex % groupColors.length])
								.map(x => d3.color(x)
									?.rgb())
								.filter(x => x !== undefined)
								.map(({ r, g, b }: d3.RGBColor) => [
									r,
									g,
									b
								].map(v => v / 255) as number[])
						)
				);

				const material = new LineBasicMaterial({ vertexColors: true });
				const geometry = new BufferGeometry();
				geometry.setAttribute(
					'position',
					new BufferAttribute(new Float32Array(2 * 3), 3)
				);
				geometry.setAttribute('color', new BufferAttribute(colors, 3));
				const line = new Line(geometry, material);

				return line;
			})

			.onNodeHover(
				node =>
					graphElement.style.cursor
            = node && (node.children ?? []).length
							? 'pointer'
							: 'default'
			)
			.onNodeClick(node => {
				focusedNode = node;
				focusNode(node, graph);
			})
			.linkPositionUpdate((object3d, { start, end }) => {
				const line = object3d as Line;
				const startR = graph.nodeRelSize();
				const endR = graph.nodeRelSize();
				const lineLen = Math.sqrt(
					[
						'x',
						'y',
						'z'
					]
						.map(dim => {
							const endValue = (end as unknown as Record<string, number>)[dim] || 0;
							const startValue = (start as unknown as Record<string, number>)[dim] || 0;

							return Math.pow(endValue - startValue, 2);
						})
						.reduce((acc, v) => acc + v, 0)
				);

				const linePos = line.geometry.getAttribute(
					'position'
				) as BufferAttribute;

				// calculate coordinate on the node's surface instead of center
				const positions = [
					startR / lineLen,
					// eslint-disable-next-line @stylistic/js/no-mixed-operators
					1 - endR / lineLen
				].map(t =>
					[
						'x',
						'y',
						'z'
					].map(
						dim => {
							const startValue = (start as unknown as Record<string, number>)[dim];
							const difference = startValue * t;
							const endValue = (end as unknown as Record<string, number>)[dim] - difference;

							return startValue + endValue;
						}
					));

				const positionsFlat: number[] = [];

				for (const position of positions) {
					positionsFlat.push(...position);
				}
				linePos.set(positionsFlat);
				linePos.needsUpdate = true;

				return true;
			})
			.backgroundColor('rgba(0,0,0,0)')
			.linkOpacity(0.9)
			.linkWidth(() => 4)
		// .backgroundColor('rgba(0,0,0,0)')
			.nodeThreeObject(node => {
				const nodeEl = document.createElement('div');
				nodeEl.textContent = `${node.name}`;
				nodeEl.className = 'skills__node-label';
				const _2dElement = new CSS2DObject(nodeEl);

				node.element$ = nodeEl;
				node.spaceObject$ = _2dElement;

				return _2dElement;
			})
			.nodeThreeObjectExtend(true)
			.width((graphElement as HTMLElement).clientWidth)
			.height(765)
			.nodeColor(({ groupIndex, id }) =>
				id === 'me'
					? '#ff0000'
					: groupColors[groupIndex % groupColors.length])
			.cooldownTicks(100)
			.graphData({ nodes: nodes, links });

		graph.d3Force('link')
			?.distance(() => 50);

		document.defaultView?.setTimeout(() => {
			const node = nodes.find(x => x.id === 'me');
			focusedNode = node;
			focusNode(node!, graph);
		}, 500);

		const canvas = graphElement.querySelector('canvas');
		if (canvas) {
			canvas
				.addEventListener('wheel', function (e) {
					e.preventDefault();
					e.stopPropagation();

					return false;
				});
		}

		let rotation: Euler | null = null;

		document.defaultView!.setInterval(() => {
			const cameraPosition = graph.cameraPosition();

			if (rotation && graph.rotation.equals(rotation)) {
				return;
			}

			rotation = graph.rotation;

			nodes.forEach(x => {
				if (!x.element$) {
					return;
				}

				const distance = calculate3dDistance(cameraPosition, x as Coords);
				const defaultSize = 24;
				const minimumSize = 5;
				const currentSize = (x.element$ as HTMLElement).style.fontSize;
				const percentage = Math.min(1, distance / 600);
				const sizeShare = percentage * defaultSize;

				const targetSize = `${Math.max(
					minimumSize,
					Math.round((defaultSize - sizeShare) * 10) / 10
				)}px`;
				let focusBoost = 0;
				if (
					focusedNode
          && !isChildOf(focusedNode, x, links)
          && focusedNode.id !== x.id
				) {
					focusBoost = 0.3;
				}

				if (targetSize !== currentSize) {
					(x.element$ as HTMLElement).style.fontSize = targetSize;
					const partialReduction = 0.8 * percentage;
					(x.element$ as HTMLElement).style.opacity = `${
						1 - partialReduction - focusBoost
					}`;
				}
			});
		}, 1000 / 30);

		let lastWidth = 0;

		function refreshWidth(triggerRecheck?: boolean, force?: boolean) {
			const width = graphElement.offsetWidth;
			if (lastWidth === width && !force) {
				if (triggerRecheck) {
					requestAnimationFrame(() => refreshWidth(true, force));
				}

				return;
			}

			graph.width(width);
			console.log('Updated to ', width);
			lastWidth = width;

			if (triggerRecheck) {
				requestAnimationFrame(() => refreshWidth(true, force));
			}
		}

		requestAnimationFrame(() => refreshWidth(true, true));

		document.addEventListener('resize', () => refreshWidth(false, true));

		elementResizeDetectorMaker()
			.listenTo(graphElement, () => refreshWidth(false));
	}

	function isChildOf(parent: GraphNode<SkillTree>, child: GraphNode<SkillTree>, links: GraphNodeLink[]) {
		let currentChildId = child.id;
		let currentLink: GraphNodeLink | undefined = undefined;
		let isChild = false;

		do {
			currentLink = links.find(x => x.target.id === currentChildId);
			if (currentLink) {
				currentChildId = currentLink.source;
			}

			if (currentLink && currentLink.source === parent.id) {
				isChild = true;
				break;
			}
		} while (currentLink);

		return isChild;
	}

	function focusNode(
		node: GraphNode<SkillTree>,
		graph: ForceGraph3DInstance<GraphNode<SkillTree>,
			GraphNodeLink<SkillTree>>
	) {
		if (node.x === undefined || node.y === undefined || node.z === undefined) {
			return;
		}

		const maxDistance = (node.children ?? [])
			.map(child => calculate3dDistance(node as Coords, child as Coords))
			.reduce<number>((prev, cur) => Math.max(prev ?? 0, cur ?? 0), 0);

		const distance = (maxDistance + 20) * 2;
		const ratio = distance / Math.hypot(node.x, node.y, node.z);
		const distRatio = 1 + ratio;

		const coords = {
			x: node.x,
			y: node.y,
			z: node.z
		};

		graph.cameraPosition(
			{ x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
			coords,
			3000
		);
	}

	function calculate3dDistance(a: Coords, b: Coords): number {
		const { x: x1, y: y1, z: z1 } = a;
		const { x: x2, y: y2, z: z2 } = b;
		const distance = Math.sqrt(
			Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)
		);

		return distance;
	}

	// #endregion

	// #region PRivate Methods
	const [
		disabled,
		setDisabled
	] = createSignal(true);

	function parseSkillTree(
		skillTree: SkillTree,
		groupIndex: number,
		nodes: GraphNode<SkillTree>[],
		links: GraphNodeLink[]
	): GraphNode<SkillTree> {
		const { id, name, children, fx, fy, fz, vx, vy, vz, x, y, z, collapsed }
      = skillTree;

		const node: GraphNode<SkillTree> = {
			id,
			name,
			fx,
			fy,
			fz,
			vx,
			x,
			vy,
			y,
			vz,
			z,
			data: skillTree,
			groupIndex
		};

		nodes.push(node);

		node.children = collapsed
			? []
			: (children || [])
				.map(child => {
					links.push({
						sourceGroupIndex: groupIndex,
						source: id,
						target: child as GraphNode<SkillTree>,
						targetGroupIndex: groupIndex + 1
					});

					return parseSkillTree(child, groupIndex + 1, nodes, links);
				})
				.filter(x => x);

		return node;
	}

	return (
		<div>
			<div class="title">
				Skills
			</div>

			<div class="card skills">
				<div class="skills-wrapper">
					<div class={'deactivate-toggle ' + (disabled()
						? 'active'
						: '')}>
						<button
							class="button"
							onClick={() => setDisabled(!disabled())}>
							Deactivate Skill-Tree
						</button>
					</div>

					<div class={'card overlay ' + (disabled()
						? 'active'
						: '')}>
						<button
							class="button"
							onClick={() => setDisabled(!disabled())}>
							Reveal my Skill-Tree
						</button>
					</div>

					<div ref={graph}></div>

					<div class={'deactivate-toggle ' + (disabled()
						? 'active'
						: '')}>
						<button
							class="button"
							onClick={() => setDisabled(!disabled())}>
							Deactivate Skill-Tree
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
