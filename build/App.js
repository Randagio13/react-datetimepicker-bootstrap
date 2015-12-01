'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('bootstrap/dist/css/bootstrap.min.css');

require('eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css');

var _DateTimePicker = require('./component/DateTimePicker');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(process.env.BABEL_ENV);
if (process.env.BABEL_ENV !== 'production') {
    ReactDOM.render(React.createElement(_DateTimePicker2.default, { id: 'datetimepicker' }), document.getElementById('app'));
}
exports.default = _DateTimePicker2.default;