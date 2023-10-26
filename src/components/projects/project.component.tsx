import { JSXElement, children } from 'solid-js';
import './project.component.scss';

export function Project(props: {
  title: string;
  image: string;
  children: JSXElement;
  link: string;
}) {
  return <div class="card project">
    <div class="project__title">{props.title}</div>
    <div class="project__image">
      <img src={props.image}/>
    </div>
    <div class="project__description">
      {props.children}
    </div>
  </div>
}