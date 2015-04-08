jest.dontMock('../../../app/people/components/people-list');

describe('PeopleList', function() {
    it('shows a list of people', function() {
        var React = require('react/addons');
        var PeopleList = require('../../../app/people/components/people-list');
        var TestUtils = React.addons.TestUtils;

        var data = [{id: 1, name: 'Erik'}];
        var list = TestUtils.renderIntoDocument(<PeopleList data={data} />);

        var div = TestUtils.findRenderedDOMComponentWithTag(list, 'li');
        expect(div.getDOMNode().textContent).toEqual('Erik');
    });
});