import type { NodeObject } from 'three-forcegraph';
import type { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';

export interface GraphNode<T> extends NodeObject {
	name: string;
	id: string;
	hidden?: boolean;
	data: T;
	groupIndex: number;
	fx?: number;
	x?: number;
	vx?: number;
	fy?: number;
	y?: number;
	vy?: number;
	fz?: number;
	z?: number;
	vz?: number;
	children?: Array<GraphNode<T>>;

	element$?: HTMLElement;
	spaceObject$?: CSS2DObject;
}
