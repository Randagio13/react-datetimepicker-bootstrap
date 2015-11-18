import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import DateTimePicker from './component/DateTimePicker';
import Perf from 'react-addons-perf';
Perf.start();
ReactDom.render(<DateTimePicker id="mydatepicker" icon="left" placeholder="Insert date" locale="it" format="D/M/YYYY" disabledDates={['2015-11-21']} hasFeedback getValue={(value) => console.log('callback', value)} />, document.getElementById('app'));
Perf.stop();
Perf.printInclusive(
    Perf.getLastMeasurements()
);
Perf.printExclusive(
    Perf.getLastMeasurements()
);
Perf.printDOM();
