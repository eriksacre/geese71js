/** @jsx React.DOM */

var React = require('react');

if(!process.env.TEST) {
    require('./people-list.scss');
}

var PeopleList = React.createClass({
    render: function() {
        var people = this.props.data.map(function(person) {
            return (<li className="PeopleList-person" key={person.id}>{person.name}</li>);
        });

        return (
            <div>
                <ul className="PeopleList">
                    {people}
                </ul>
                <a href="#/projects">Projects</a>
            </div>
        );
    }
});

module.exports = PeopleList;