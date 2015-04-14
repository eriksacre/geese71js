/** @jsx React.DOM */

var React = require('react');

var Overview = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
        return (<div>{this.context.router.getCurrentParams().id}</div>);
    }
});

module.exports = Overview;