import 'bootstrap/dist/css/bootstrap.min.css';
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import DateTimePicker from './component/DateTimePicker';
console.log(DateTimePicker);
ReactDom.render(<DateTimePicker id="datetimepicker" icon="left" allowInputToggle minDate={new Date()} maxDate={new Date('2015/11/30')} />, document.getElementById('app'));
// export default DateTimePicker;
