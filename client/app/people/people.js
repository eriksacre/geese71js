var React = require('react');
var PeopleList = require('./components/people-list');

var data = [
    { id: 1, name: 'Erik' },
    { id: 2, name: 'Jurgen' },
    { id: 3, name: 'Katty' }
];

module.exports = React.createClass({
    render: function() {
        return (<PeopleList data={data} title="People" />);
    }
});