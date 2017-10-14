import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';

import BeeApp from './bee';
import Settings from './settings';
import Songs from './songs';

const ToBeeMusicApp = document.getElementById('bee-app');

ReactDOM.render(
	<Provider store={store}>
		<BeeApp>
		  <Router>
			  <Switch>
		        <Route  path="/" component={Settings} />
		        <Route exact path="/songs" component={Songs} />
		         <Route render={() => <h1>Page not found</h1>} />
		       </Switch>
		  </Router>
		</BeeApp>
  </Provider>,
  ToBeeMusicApp
 );

