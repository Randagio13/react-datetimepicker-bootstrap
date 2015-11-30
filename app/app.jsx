import 'bootstrap/dist/css/bootstrap.min.css';
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css';
import DateTimePicker from './component/DateTimePicker';
if (process.env.NODE_ENV !== 'production') {
    ReactDOM.render(<DateTimePicker id="datetimepicker" inline />, document.getElementById('app'));
}
export default DateTimePicker;
