## React DateTimePicker Bootstrap [![npm version](https://badge.fury.io/js/react-datetimepicker-bootstrap.svg)](https://badge.fury.io/js/react-datetimepicker-bootstrap) [![Build Status](https://travis-ci.org/iMasterAle/react-datetimepicker-bootstrap.svg)](https://travis-ci.org/iMasterAle/react-datetimepicker-bootstrap)

- This project is a port of  [bootstrap-datetimepicker](https://eonasdan.github.io/bootstrap-datetimepicker/) for React.

## Docs & Help

- [Changelog](/CHANGELOG.md)

## Installation

Using [npm](https://npmjs.com):

```
$ npm install --save react-datetimepicker-bootstrap
```

## Usage

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
### `id`:
- __Type:__ _string_.
- __isRequired:__ ✔
- __DefaultValue:__ _`undefined`_
- __Description:__ component id.

### `icon`:
- __Type:__ _string_.
- __isRequired:__ ✘
- __DefaultValue:__ _`undefined`_
- __Description:__ The position of the icon, accept: `left` or `right`.

### `iconType`:
- __Type:__ _string_.
- __isRequired:__ ✘
- __DefaultValue:__ _`calendar`_
- __Description:__ View the bootstrap [iconSet](http://getbootstrap.com/components/#glyphicons).

### `placeholder`:
- __Type:__ _string_.
- __isRequired:__ ✘
- __DefaultValue:__ _`undefined`_
- __Description:__ The simple placeholder input.

### `locale`:
- __Type:__ _string_.
- __isRequired:__ ✘
- __DefaultValue:__ _`en`_
- __Description:__ Translate the calendar `e.g.: 'it', 'en', 'ru', ...` .

### `format`:
- __Type:__ _string_.
- __isRequired:__ ✘
- __DefaultValue:__ _`moment().format()`_
- __Description:__ Set the format date view e.g: `D/M/YYYY`.

### `minDate`:
- __Type:__ _arrayOf_(_string_) or _object_.
- __isRequired:__ ✘
- __DefaultValue:__ _`undefined`_
- __Description:__ Set the minDate start in the calendar, accept: `moment()` or `new Date()`.

### `maxDate`:
- __Type:__ _arrayOf_(_string_) or _object_.
- __isRequired:__ ✘
- __DefaultValue:__ _`undefined`_
- __Description:__ Set the minDate start in the calendar, accept: `moment()` or `new Date()`.

### `disabledDates`:
- __Type:__ _arrayOf_(_string_) or _object_.
- __isRequired:__ ✘
- __DefaultValue:__ _`undefined`_
- __Description:__ Disable the dates.

### `daysOfWeekDisabled`:
- __Type:__ _array_.
- __isRequired:__ ✘
- __DefaultValue:__ _`undefined`_
- __Description:__ Disable a single day in the week, e.g: `[0,6]`.

### `viewMode`:
- __Type:__ _string_.
- __isRequired:__ ✘
- __DefaultValue:__ _`days`_
- __Description:__ Set the viewMode of the calendar, accept: `decades`, `years`, `months`.

### `allowInputToggle`:
- __Type:__ _boolean_.
- __isRequired:__ ✘
- __DefaultValue:__ _`false`_
- __Description:__ It'll show the datetimepicker on the textbox focus. If the icon is empty then it's set true.

### `hasFeedback`:
- __Type:__ _boolean_.
- __isRequired:__ ✘
- __DefaultValue:__ _`false`_
- __Description:__ It show the typical feedback bootstrap style.

### `bsStyle`:
- __Type:__ _string_.
- __isRequired:__ ✘
- __DefaultValue:__ _`''`_
- __Description:__ Set the validation color, accept: `success`, `error`, `warning`.

### `getValue`:
- __Type:__ _function_.
- __isRequired:__ ✘
- __DefaultValue:__ _`undefined`_
- __Description:__ Return the date selected.

### `inline`:
- __Type:__ _boolean_.
- __isRequired:__ ✘
- __DefaultValue:__ _`false`_
- __Description:__ View the datetimepicker without the modal view.

### `sideBySide`:
- __Type:__ _boolean_.
- __isRequired:__ ✘
- __DefaultValue:__ _`false`_
- __Description:__ View the datetimepicker without the icon date/time.

### `calendarWeeks`:
- __Type:__ _boolean_.
- __isRequired:__ ✘
- __DefaultValue:__ _`false`_
- __Description:__ It shows the week of the year to the left of first day of the week.

### `toolbarPlacement`:
- __Type:__ _boolean_.
- __isRequired:__ ✘
- __DefaultValue:__ _`false`_
- __Description:__ It changes the placement of the icon toolbar.

### `disabled`:
- __Type:__ _boolean_.
- __isRequired:__ ✘
- __DefaultValue:__ _`false`_
- __Description:__ It disabled the input field.

### `tooltips`:
- __Type:__ _object_.
- __isRequired:__ ✘.
- __DefaultValue:__
```js
{
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
    nextCentury: 'Next Century'
}
```
- __Description:__ This will change the `tooltips` over each icon to a custom string.

## License
MIT [(http://www.opensource.org/licenses/mit-license.php)](http://www.opensource.org/licenses/mit-license.php)
