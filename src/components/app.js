import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
import About from '../routes/about';

export default class App extends Component {

	handleRoute = e => {
		// this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/tremulous_fork/" />
					<About path="/tremulous_fork/about" />
				</Router>
			</div>
		);
	}
}
