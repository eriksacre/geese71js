/** @jsx React.DOM */
var React = require('react');
var ProjectList = require('./components/project-list');

var projects = [
    { id: 1, name: 'Geese71' },
    { id: 2, name: 'Personal to do' },
    { id: 3, name: 'One-to-one' }
];

module.exports = {
    show: function() {
        React.render(<ProjectList data={projects} />, document.body);
    }
};