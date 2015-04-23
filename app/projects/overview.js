/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;
var RouterContextMixin = require('../shared/router-context-mixin');
var ProjectStore = require('./stores/project-store');
var ProjectActions = require('./actions/project-actions');

var Overview = React.createClass({
    mixins: [RouterContextMixin],

    getInitialState: function() {
        return { project: ProjectStore.findById(this.getParams().id) };
    },

    componentDidMount: function() {
        ProjectStore.addChangeListener(this.onChange);
        // Only here for the case where the user starts the app on this page
        if(!this.state.project)
            ProjectActions.receiveAll();
    },

    componentWillUnmount: function() {
        ProjectStore.removeChangeListener(this.onChange);
    },

    onChange: function() {
        this.setState({ project: ProjectStore.findById(this.getParams().id) });
    },

    toggleFavourite: function(e) {
        e.preventDefault();
        if(this.state.project.favourite)
            ProjectActions.clearFavourite(this.state.project.id);
        else
            ProjectActions.setFavourite(this.state.project.id);
    },

    render: function() {
        var name = '';
        if(this.state.project)
            name = this.state.project.name;

        var fav = '☆';
        if(this.state.project && this.state.project.favourite)
            fav = '★';

        return (
            <div>
                <div>{name} <a href="#" onClick={this.toggleFavourite}>{fav}</a> -- {this.getQuery().name}</div>
                <Link to="projects">Return to projects</Link>
            </div>
        );
    }
});

module.exports = Overview;