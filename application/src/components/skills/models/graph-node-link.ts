import type { LinkObject } from 'three-forcegraph';
import type { GraphNode } from './graph-node';

export interface GraphNodeLink<T = unknown> extends LinkObject {
	source: string;
	sourceGroupIndex: number;
	target: GraphNode<T>;
	targetGroupIndex: number;
}
