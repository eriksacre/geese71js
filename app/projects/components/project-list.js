/** @jsx React.DOM */

var React = require('react');
var ProjectCard = require('./project-card');
var SetTitleMixin = require('../../shared/set-title-mixin');

if(!process.env.TEST) {
    require('./project-list.scss');
}

var ProjectList = React.createClass({
    mixins: [SetTitleMixin],

    render: function() {
        var projects = this.props.data.map(function(project) {
            return (<ProjectCard key={project.id} data={project} url='#/projects/' />);
        });

        return (
            <div>
                <div className="ProjectList">
                    {projects}
                </div>
                <div>
                    <a href="#/people">People</a>
                </div>
            </div>
        );
    }
});

module.exports = ProjectList;