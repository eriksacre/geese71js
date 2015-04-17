/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;

if(!process.env.TEST) {
    require('./project-card.css');
}

var ProjectCard = React.createClass({
    render: function() {
        return (
            <div className="ProjectList-project">
                <Link to="overview" params={this.props.data}>{this.props.data.name}</Link>
            </div>
        );
    }
});

module.exports = ProjectCard;