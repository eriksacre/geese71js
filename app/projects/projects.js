/** @jsx React.DOM */
var React = require('react');
var ProjectList = require('./components/project-list');

var Projects = {
    data: [
        {id: 1, name: 'Geese71'},
        {id: 2, name: 'Personal to do'},
        {id: 3, name: 'One-to-one'}
    ],

    show: function() {
        React.render(<ProjectList data={this.data} />, document.body);
    }
};

module.exports = Projects;