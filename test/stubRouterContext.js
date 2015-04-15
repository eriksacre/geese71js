var React = require('react');

var stubRouterContext = function(Component, props, stubs) {
    function RouterStub() { }

    RouterStub.makePath = function() {};
    RouterStub.makeHref = function() {};
    RouterStub.transitionTo = function() {};
    RouterStub.replaceWith = function() {};
    RouterStub.goBack = function() {};
    RouterStub.getCurrentPath = function() {};
    RouterStub.getCurrentRoutes = function() {};
    RouterStub.getCurrentPathname = function() {};
    RouterStub.getCurrentParams = function() {};
    RouterStub.getCurrentQuery = function() {};
    RouterStub.isActive = function() {};
    RouterStub.getRouteAtDepth = function() {};
    RouterStub.setRouteComponentAtDepth = function() {};

    if(stubs) {
        for(var key in stubs) {
            RouterStub[key] = stubs[key];
        }
    }

    return React.createClass({
        childContextTypes: {
            router: React.PropTypes.func,
            routeDepth: React.PropTypes.number
        },

        getChildContext () {
            return {
                router: RouterStub,
                routeDepth: 0
            };
        },

        render () {
            return <Component {...props} />
        }
    });
};

module.exports = stubRouterContext;