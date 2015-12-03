## React DateTimePicker Bootstrap
[![Build Status](https://travis-ci.org/iMasterAle/react-datetimepicker-bootstrap.svg)](https://travis-ci.org/iMasterAle/react-datetimepicker-bootstrap) [![npm version](https://badge.fury.io/js/react-datetimepicker-bootstrap.svg)](https://badge.fury.io/js/react-datetimepicker-bootstrap)

- This project is a port of  [bootstrap-datetimepicker](https://eonasdan.github.io/bootstrap-datetimepicker/) for React.

## Docs & Help

- [Changelog](/CHANGELOG.md)

## Usage
Installation:

Using [npm](https://npmjs.com):

    $ npm install react-datetimepicker-bootstrap

```js
// ES5
var DateTimePicker = require('react-datetimepicker-bootstrap');

var Example = React.createClass({
  render: function() {
    return (
      <DateTimePicker id="datetimepicker" />
    );
  }
});

// ES6
import DateTimePicker from 'react-datetimepicker-bootstrap';

class Example extends React.Component {
    render() {
        return (
            <DateTimePicker id="datetimepicker" />
        );
    }
}

export default Example;
```

## Props component:

Props | Type | isRequired | Default | Description
:---: | :--: | :--------: | :-----: | :---------:
__id__ | _string_ | :heavy_check_mark: | undefined | DateTimePicker Id
__icon__ | _string_ | :heavy_multiplication_x: | undefined | The position of the icon, accept: 'left' or 'right'
__iconType__ | _string_ | :heavy_multiplication_x: | 'calendar' | View the bootstrap [iconSet](http://getbootstrap.com/components/#glyphicons)
__placeholder__ | _string_ | :heavy_multiplication_x: | undefined | The simple placeholder input
__locale__ | _string_ | :heavy_multiplication_x: | 'en' | Translate the calendar e.g.: 'it', 'en', 'ru', ...
__format__ | _string_ | :heavy_multiplication_x: | moment().format() | Set the format date view e.g.: 'D/M/YYYY'
__minDate__ | _arrayOf_(_string_) or _object_ | :heavy_multiplication_x: | undefined | Set the minDate start in the calendar, accept: moment() or new Date()
__maxDate__ | _arrayOf_(_string_) or _object_ | :heavy_multiplication_x: | undefined | Set the maxDate start in the calendar, accept: moment() or new Date()
__disabledDates__ | _arrayOf_(_string_) or _object_ | :heavy_multiplication_x: | undefined | Disable the dates
__daysOfWeekDisabled__ | _array_ | :heavy_multiplication_x: | undefined | Disable a single day in the week, e.g.: [0,6]
__viewMode__ | _string_ | :heavy_multiplication_x: | 'days' | Set the viewMode of the calendar, accept: 'decades', 'years', 'months'
__allowInputToggle__ | _bool_ | :heavy_multiplication_x: | false | It'll show the datetimepicker on the textbox focus. If the icon is empty then it's set true
__hasFeedback__ | _bool_ | :heavy_multiplication_x: | false | It show the typical feedback bootstrap style
__bsStyle__ | _string_ | :heavy_multiplication_x: | '' | Set the validation color, accept: 'success', 'error', 'warning'
__getValue__ | _func_ | :heavy_multiplication_x: | undefined | Return the date selected
__inline__ | _bool_ | :heavy_multiplication_x: | false | View the datetimepicker without the modal view
__sideBySide__ | _bool_ | :heavy_multiplication_x: | false | View the datetimepicker without the icon date/time
__calendarWeeks__ | _bool_ | :heavy_multiplication_x: | false | It shows the week of the year to the left of first day of the week
__toolbarPlacement__ | _bool_ | :heavy_multiplication_x: | false | It changes the placement of the icon toolbar

## Thanks

Thanks for yours contribute
