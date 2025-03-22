export interface GraphNode<T> {
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
}
