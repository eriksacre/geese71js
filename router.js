var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;

// Some requires to include these into main.js
require('./app/shared/set-title-mixin');

var People = require('./utils/react-proxy?name=people!./app/people/people');
var Projects = require('./utils/react-proxy?name=projects!./app/projects/projects');
var Overview = require('./utils/react-proxy?name=projects!./app/projects/overview');

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <RouteHandler />
            </div>
        );
    }
});

var NotFound = React.createClass({
    render: function() {
        return (<h1>Not found</h1>);
    }
});

var routes = (
    <Route handler={App}>
        <DefaultRoute handler={Projects} />
        <Route name="people" handler={People} />
        <Route name="projects" handler={Projects} />
        <Route name="overview" path="/projects/:id" handler={Overview} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});