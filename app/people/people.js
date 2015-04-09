/** @jsx React.DOM */
var React = require('react');
var PeopleList = require('./components/people-list');

var People = {
    data: [
        { id: 1, name: 'Erik' },
        { id: 2, name: 'Jurgen' },
        { id: 3, name: 'Katty' }
    ],

    show: function() {
        React.render(<PeopleList data={this.data} title="People" />, document.body);
    }
};

module.exports = People;