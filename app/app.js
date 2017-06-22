// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;
var Route = require('react-router').Route;
var IndexRoute	= require('react-router').IndexRoute;
var Main = require('./components/Main');
var Search = require('./components/children/Search'); 
var Saved = require('./components/children/SavedArticles');

ReactDOM.render(
	<Router history={hashHistory}>

		<Route path='/' component={Main}>

			<Route path='search' component={Search} />

			<Route path='saved' component={Saved} />

			<IndexRoute component={Search} />
			
		</Route>

	</Router>,
	document.getElementById('app')
)