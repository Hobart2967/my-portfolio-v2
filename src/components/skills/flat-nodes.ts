import { GraphNode } from './graph-node';
import { GraphNodeLink } from './graph-node-link';

export interface FlatNodes<T> {
  nodes: GraphNode<T>[];
  links: GraphNodeLink[];
}