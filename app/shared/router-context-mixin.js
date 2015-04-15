var React = require('react');

var RouterContextMixin = {
    contextTypes: {
        router: React.PropTypes.func
    },

    getParams: function() {
        return this.context.router.getCurrentParams();
    },

    getQuery: function() {
        return this.context.router.getCurrentQuery();
    }
};

module.exports = RouterContextMixin;