/** @jsx React.DOM */
var React = require('react');
var PeopleList = require('./components/people-list');

var data = [
    { id: 1, name: 'Erik' },
    { id: 2, name: 'Jurgen' },
    { id: 3, name: 'Katty' }
];

var People = React.createClass({
    render: function() {
        return (<PeopleList data={data} title="People" />);
    }
});

module.exports = People;