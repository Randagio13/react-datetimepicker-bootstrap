'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('bootstrap/dist/css/bootstrap.min.css');

require('eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css');

var _DateTimePicker = require('./component/DateTimePicker');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {
  ReactDOM.render(_react2.default.createElement(_DateTimePicker2.default, { id: 'datetimepicker' }), document.getElementById('app'));
} // eslint-disable-line


exports.default = _DateTimePicker2.default;