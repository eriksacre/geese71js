var React = require('react');
var Link = require('react-router').Link;
var SetTitleMixin = require('../../shared/set-title-mixin');

if(!process.env.TEST) {
    require('./people-list.css');
}

module.exports = React.createClass({
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
                <Link to="projects">Projects</Link>
            </div>
        );
    }
});