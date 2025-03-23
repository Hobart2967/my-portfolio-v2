import { For, JSXElement } from 'solid-js';
import './project.component.scss';

export function Project(props: {
	title: string;
	image: string;
	children: JSXElement;
	link: string | null;
	techStack: string[]
}) {
	return (
		<div class="card project">
			<div class="project__title">
				{props.title}
			</div>

			<div class="project__image">
				<img src={props.image} />
			</div>

			<div class="project__description">
				{props.children}
			</div>

			<div class="project_tech_stack dp-f g-8 mt-16 fw-wrap">
				<For each={props.techStack}>
					{item =>
						<div class="tag">
							{item}
						</div>}
				</For>
			</div>
		</div>
	);
}
