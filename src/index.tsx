import { render } from 'solid-js/web';
import App from './App';

window.addEventListener('load', () => {
	const root = document.createElement('div') as HTMLElement;

	// Insert the new root component after div#tabs
	document
		.querySelector("#tabs")
		.parentElement
		.insertBefore(
			root,
			tabs.nextSibling
		);

	render(() => <App />, root);
});
