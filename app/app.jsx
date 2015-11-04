import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import DateTimePicker from './component/DateTimePicker';

ReactDom.render(<DateTimePicker id="mydatepicker" icon="left" />, document.getElementById('app'));
