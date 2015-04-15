/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;
var RouterContextMixin = require('../shared/router-context-mixin');

var Overview = React.createClass({
    mixins: [RouterContextMixin],

    render: function() {
        return (
            <div>
                <div>{this.getParams().id} -- {this.getQuery().name}</div>
                <Link to="projects">Return to projects</Link>
            </div>
        );
    }
});

module.exports = Overview;