/** @jsx React.DOM */

var React = require('react');

var Overview = {
    data: {id: 1, name: 'Geese71'},

    show: function() {
        React.render(<div>{this.data}</div>, document.body);
    }
};

module.exports = Overview;