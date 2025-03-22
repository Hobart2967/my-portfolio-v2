import { render } from 'solid-js/web';
import { PresentationView } from './views/presentation/presentation.view';

import './main.scss';

const app = document.getElementById('app');

if (app) {
	render(
		() => <PresentationView />,
		app
	);
}
