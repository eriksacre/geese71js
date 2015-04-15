/** @jsx React.DOM */

var React = require('react');

var Overview = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
        var router = this.context.router;
        return (<div>{router.getCurrentParams().id} -- {router.getCurrentQuery().name}</div>);
    }
});

module.exports = Overview;