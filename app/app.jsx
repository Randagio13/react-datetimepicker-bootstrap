import 'bootstrap/dist/css/bootstrap.min.css';
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css';
import DateTimePicker from './component/DateTimePicker';
console.log(process.env.BABEL_ENV);
if (process.env.BABEL_ENV !== 'production') {
    ReactDOM.render(<DateTimePicker id="datetimepicker" />, document.getElementById('app'));
}
export default DateTimePicker;
