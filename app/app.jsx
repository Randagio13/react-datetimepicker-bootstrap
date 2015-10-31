import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import DateTimePicker from './component/DateTimePicker';

ReactDom.render(<DateTimePicker placeholder="Ale" />, document.getElementById('app'));
