/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;
var ProjectList = require('./components/project-list');
var ProjectStore = require('./stores/project-store');
var ProjectActions = require('./actions/project-actions');

var Projects = React.createClass({
    getInitialState: function() {
        return { projects: ProjectStore.getAll() };
    },

    componentDidMount: function() {
        ProjectStore.addChangeListener(this.onChange);
        ProjectActions.receiveAll();
    },

    componentWillUnmount: function() {
        ProjectStore.removeChangeListener(this.onChange);
    },

    onChange: function() {
        this.setState({ projects: ProjectStore.getAll() });
    },

    render: function() {
        return (
            <div>
                <ProjectList data={this.state.projects} title="Projects" />
                <Link to="people">People</Link>
            </div>
        );
    }
});

module.exports = Projects;