import React from 'react';
import TestUtils from 'react-addons-test-utils';
import DateTimePicker from '../app/component/DateTimePicker.jsx';
import expect from 'expect';

describe('DateTimePicker', () => {
  it('Render component', () => {
    // Render a checkbox with label in the document
    const date = TestUtils.renderIntoDocument(<DateTimePicker id="datetimepicker" />);
    // const dateNode = ReactDOM.findDOMNode(date);
    console.log(date.props);
    // Verify that it's Off by default
    // expect(date.props.id).toEqual('datetimepicker');
    expect(date).toExist();
    // expect(date.props.sideBySide).toBe(true);
    // expect(dateNode.id).toContain('string');
    // Simulate a click and verify that it is now On
    // TestUtils.Simulate.change(
    //   TestUtils.findRenderedDOMComponentWithTag(date, 'input')
    // );
  });
});
