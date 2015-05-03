var React = require('react');
var assign = require('object-assign');

module.exports = function(Component, props, stubs) {
    function RouterStub() { }

    assign(RouterStub, {
        makePath () {},
        makeHref () {},
        transitionTo () {},
        replaceWith () {},
        goBack () {},
        getCurrentPath () {},
        getCurrentRoutes () {},
        getCurrentPathname () {},
        getCurrentParams () {},
        getCurrentQuery () {},
        isActive () {},
        getRouteAtDepth() {},
        setRouteComponentAtDepth() {}
    }, stubs);

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