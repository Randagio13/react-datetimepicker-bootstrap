import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css' // eslint-disable-line
import 'eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js' // eslint-disable-line

import DateTimePicker from './component/DateTimePicker'
if (process.env.NODE_ENV !== 'production') {
  ReactDOM.render(
    <DateTimePicker id="datetimepicker" />,
    document.getElementById('app')
  )
}

export default DateTimePicker
