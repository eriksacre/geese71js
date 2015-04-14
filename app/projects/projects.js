/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;
var ProjectList = require('./components/project-list');

var data = [
    {id: 1, name: 'Geese71'},
    {id: 2, name: 'Personal to do'},
    {id: 3, name: 'One-to-one'}
];

var Projects = React.createClass({
    render: function() {
        return (
            <div>
                <ProjectList data={data} title="Projects" />
                <Link to="people">People</Link>
            </div>
        );
    }
});

module.exports = Projects;