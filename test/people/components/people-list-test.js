var jsdom = require('mocha-jsdom');
var assert = require('assert');

// See: https://github.com/danvk/mocha-react
describe('Just testing', function() {
    jsdom();

    it('ensures Mocha is setup properly', function() {
        assert.equal(1, 1);
    });

    it('ensures we can test React components', function() {
        var React = require('react/addons');
        var stubRouterContext = require('../../stubRouterContext');
        var PeopleList = require('../../../app/people/components/people-list');
        var data = [{id: 1, name: 'Erik'}];
        var Subject = stubRouterContext(PeopleList, {data: data, title: 'Test'});
        var TestUtils = React.addons.TestUtils;

        var peopleList = TestUtils.renderIntoDocument(<Subject />);
        var ul = TestUtils.findRenderedDOMComponentWithTag(peopleList, 'ul');
        assert.equal(ul.getDOMNode().textContent, 'Erik');
        assert.equal(document.title, 'Test');
    });
});