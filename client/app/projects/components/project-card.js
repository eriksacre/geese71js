var React = require('react');
var Link = require('react-router').Link;

if(!process.env.TEST) {
    require('./project-card.css');
}

module.exports = React.createClass({
    render: function() {
        var fav = '';
        if(this.props.data.favourite)
            fav = ' ★';

        return (
            <div className="ProjectList-project">
                <Link to="overview" params={this.props.data}>{this.props.data.name}</Link>
                {fav}
            </div>
        );
    }
});