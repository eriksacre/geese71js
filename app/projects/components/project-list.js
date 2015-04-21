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
        var cards = [];
        var projects = this.props.data;
        for(var key in projects)
            cards.push(<ProjectCard key={key} data={projects[key]} />);

        return (
            <div className="ProjectList">
                {cards}
            </div>
        );
    }
});

module.exports = ProjectList;