import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Leaders from './Leaders';
import BasicInfo from './BasicInfo';
import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route component={App} />
			<Route path="/home" component={BasicInfo} />
			<Route path="/leaders" component={Leaders} />
		</div>
	</BrowserRouter>, 
	document.getElementById('root'));
registerServiceWorker();
