/** @jsx React.DOM */

var React = require('react');

if(!process.env.TEST) {
    require('./project-card.scss');
}

var ProjectCard = React.createClass({
    projectUrl: function(id) {
        return this.props.url + id;
    },

    render: function() {
        return (
            <div className="ProjectList-project">
                <a href={this.projectUrl(this.props.data.id)}>{this.props.data.name}</a>
            </div>
        );
    }
});

module.exports = ProjectCard;