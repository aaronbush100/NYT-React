// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;
var Route = require('react-router').Route;
var IndexRoute	= require('react-router').IndexRoute;
var Main = require('./components/Main');
var Form = require('./components/children/Form'); 
var Saved = require('./components/children/Save');

ReactDOM.render(
	<Router history={hashHistory}>

		<Route path='/' component={Main}>

			<Route path='form' component={Form} />

			<Route path='save' component={Save} />

			<Route path='results' component={Results} />

			<IndexRoute component={} />
			
		</Route>

	</Router>,
	document.getElementById('app')
)