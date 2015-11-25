## React DateTimePicker Bootstrap
[![npm version](https://badge.fury.io/js/react-datetimepicker-bootstrap.svg)](https://badge.fury.io/js/react-datetimepicker-bootstrap)

- This project is a port of  [bootstrap-datetimepicker](https://eonasdan.github.io/bootstrap-datetimepicker/) for React.

## Usage
Installation:
```
npm install react-datetimepicker-bootstrap
```

```javascript
// ES5
var DateTimePicker = require('react-datetimepicker-bootstrap');

var Example = React.createClass({
  render: function() {
    return (
      <DateTimePicker />
    );
  }
});

// ES6
import DateTimePicker from 'react-datetimepicker-bootstrap';

class Example extends React.Component {
    render() {
        return (
            <DateTimePicker />
        );
    }
}

export default Example;
```

## Props component:
- __id__ _string_ is __required__.
- __icon__ _string_ values: __empty__, __left__ or __right__.
- __iconType__ _string_ view iconSet. [here](http://getbootstrap.com/components/#glyphicons) and default value is 'calendar'.
- __placeholder__ _string_ the simple placeholder input.
- __locale__ _string_ translate the calendar e.g.: 'it', 'en', 'ru', ...
- __format___ _string_ e.g.: 'D/M/YYYY'.
- __disabledDates__ _arrayOf_ _string_ or _object_ e.g.(moment or new Date()).
- __daysOfWeekDisabled__ _array_ e.g. [0, 6].
- __viewMode__ _string_ accept: 'decades', 'years', 'months', __'days'__ is default.
- __allowInputToggle__ _bool_ will show datetimepicker on textbox focus.
- __hasFeedback__ _bool_ show the tipical bootstrap feedback style.
- __getValue__ _func_ return the input value.
