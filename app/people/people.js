/** @jsx React.DOM */
var React = require('react');
var PeopleList = require('./components/people-list');

var people = [
    { id: 1, name: 'Erik' },
    { id: 2, name: 'Jurgen' },
    { id: 3, name: 'Katty' }
];

module.exports = {
    show: function() {
        React.render(<PeopleList data={people} />, document.body);
    }
};