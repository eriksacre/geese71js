var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var stubRouterContext = require('../../stubRouterContext');
var assert = require('assert');
var BrowserEnv = require('../../browser-env');

describe('Just testing', function() {
    BrowserEnv();

    it('ensures Mocha is setup properly', function() {
        assert.equal(1, 1);
    });

    it('ensures we can test React components', function() {
        var PeopleList = require('../../../app/people/components/people-list');
        var data = [{id: 1, name: 'Erik'}];
        var Subject = stubRouterContext(PeopleList, {data: data, title: 'Test'});

        var peopleList = TestUtils.renderIntoDocument(<Subject />);
        var li = TestUtils.findRenderedDOMComponentWithTag(peopleList, 'li');

        assert.equal(li.getDOMNode().textContent, 'Erik');
        assert.equal(document.title, 'Test');
    });
});