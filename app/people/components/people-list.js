/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;
var SetTitleMixin = require('../../shared/set-title-mixin');

if(!process.env.TEST) {
    require('./people-list.css');
}

var PeopleList = React.createClass({
    mixins: [SetTitleMixin],

    render: function() {
        var people = this.props.data.map(function(person) {
            return (<li className="PeopleList-person" key={person.id}>{person.name}</li>);
        });

        return (
            <div>
                <ul className="PeopleList">
                    {people}
                </ul>
            </div>
        );
    }
});

module.exports = PeopleList;