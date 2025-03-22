import type { GraphNode } from './graph-node';
import type { GraphNodeLink } from './graph-node-link';

export interface FlatNodes<T> {
	nodes: Array<GraphNode<T>>;
	links: GraphNodeLink[];
}
