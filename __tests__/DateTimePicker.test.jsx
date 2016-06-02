/* eslint-disable */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import DateTimePicker from '../app/component/DateTimePicker';
import expect from 'expect';

describe('DateTimePicker', () => {
  it('Render component', () => {
    // Render a checkbox with label in the document
    const date = TestUtils.renderIntoDocument(
      <DateTimePicker id="datetimepicker" />
    );
    // const dateNode = ReactDOM.findDOMNode(date);
    // Verify that it's Off by default
    expect(date).toExist();
    // expect(date.props.sideBySide).toBe(true);
    // expect(dateNode.id).toContain('string');
    // Simulate a click and verify that it is now On
    // TestUtils.Simulate.change(
    //   TestUtils.findRenderedDOMComponentWithTag(date, 'input')
    // );
  });

  it('Test Props id', () => {
    // Render a checkbox with label in the document
    const date = TestUtils.renderIntoDocument(
      <DateTimePicker id="datetimepicker" />
    );
    expect(date.props.id).toBe('datetimepicker');
    // expect(date.props.sideBySide).toBe(true);
    // expect(date.props.id).toContain('string');
    // Simulate a click and verify that it is now On
    // TestUtils.Simulate.change(
    //   TestUtils.findRenderedDOMComponentWithTag(date, 'input')
    // );
  });

  it('Test Props tooltips default', () => {
    // Render a checkbox with label in the document
    const tooltips = {
      today: 'Go to today',
      clear: 'Clear selection',
      close: 'Close the picker',
      selectMonth: 'Select Month',
      prevMonth: 'Previous Month',
      nextMonth: 'Next Month',
      selectYear: 'Select Year',
      prevYear: 'Previous Year',
      nextYear: 'Next Year',
      selectDecade: 'Select Decade',
      prevDecade: 'Previous Decade',
      nextDecade: 'Next Decade',
      prevCentury: 'Previous Century',
      nextCentury: 'Century'
    };
    const date = TestUtils.renderIntoDocument(
      <DateTimePicker id="datetimepicker" tooltips={tooltips} />
    );
    expect(date.props.tooltips).toEqual(tooltips);
    // expect(date.props.sideBySide).toBe(true);
    // expect(date.props.id).toContain('string');
    // Simulate a click and verify that it is now On
    // TestUtils.Simulate.change(
    //   TestUtils.findRenderedDOMComponentWithTag(date, 'input')
    // );
  });
});
