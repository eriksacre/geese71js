var React = require('react');

module.exports = {
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