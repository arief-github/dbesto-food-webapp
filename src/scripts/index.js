import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/resto-detail.css';
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import App from './views/app';
import RegisterSW from './utils/sw-register';

const app = new App({
	button: document.querySelector('#hamburgerButton'),
  	drawer: document.querySelector('#navigationDrawer'),
  	content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
	app.renderPage();
	RegisterSW();
});