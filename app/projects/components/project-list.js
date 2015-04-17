/** @jsx React.DOM */

var React = require('react');
var ProjectCard = require('./project-card');
var SetTitleMixin = require('../../shared/set-title-mixin');

if(!process.env.TEST) {
    require('./project-list.css');
}

var ProjectList = React.createClass({
    mixins: [SetTitleMixin],

    render: function() {
        var projects = this.props.data.map(function(project) {
            return (<ProjectCard key={project.id} data={project} />);
        });

        return (
            <div className="ProjectList">
                {projects}
            </div>
        );
    }
});

module.exports = ProjectList;