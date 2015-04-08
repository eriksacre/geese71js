/** @jsx React.DOM */

var React = require('react');

if(!process.env.TEST) {
    require('./project-list.scss');
}

var ProjectList = React.createClass({
    render: function() {
        var projects = this.props.data.map(function(project) {
            return (<div className="ProjectList-project" key={project.id}>{project.name}</div>);
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