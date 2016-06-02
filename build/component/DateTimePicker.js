'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _react2.default.createElement('span', { className: 'glyphicon form-control-feedback glyphicon-ok' });

var _ref2 = _react2.default.createElement('span', {
  className: 'glyphicon form-control-feedback glyphicon-warning-sign'
});

var _ref3 = _react2.default.createElement('span', { className: 'glyphicon form-control-feedback glyphicon-remove' });

var _ref4 = _react2.default.createElement('span', { className: 'glyphicon form-control-feedback' });

var DateTimePicker = function (_Component) {
  _inherits(DateTimePicker, _Component);

  function DateTimePicker() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DateTimePicker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = _this.props, _this.setRef = function (ref) {
      _this.componentRef = ref;
    }, _this.handleGetValue = function () {
      return _this.props.getValue(_this.componentRef.value);
    }, _this.iconSet = function (position) {
      var _this$props = _this.props;
      var iconType = _this$props.iconType;
      var icon = _this$props.icon;

      switch (true) {
        case position === icon:
          return _react2.default.createElement(
            'span',
            { className: 'input-group-addon' },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-' + iconType })
          );
        default:
          return null;
      }
    }, _this.setBsStyleGroup = function () {
      var bsStyle = _this.state.bsStyle;

      switch (bsStyle) {
        case 'success':
          return 'has-success';
        case 'warning':
          return 'has-warning';
        case 'error':
          return 'has-error';
        default:
          return '';
      }
    }, _this.handleBsStyle = function () {
      var _this$state = _this.state;
      var bsStyle = _this$state.bsStyle;
      var hasFeedback = _this$state.hasFeedback;

      switch (bsStyle) {
        case 'success':
          return hasFeedback ? _ref : null;
        case 'warning':
          return hasFeedback ? _ref2 : null;
        case 'error':
          return hasFeedback ? _ref3 : null;
        default:
          return hasFeedback ? _ref4 : null;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTimePicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _state = this.state;
      var id = _state.id;
      var locale = _state.locale;
      var format = _state.format;
      var disabledDates = _state.disabledDates;
      var daysOfWeekDisabled = _state.daysOfWeekDisabled;
      var viewMode = _state.viewMode;
      var allowInputToggle = _state.allowInputToggle;
      var getValue = _state.getValue;
      var minDate = _state.minDate;
      var maxDate = _state.maxDate;
      var icon = _state.icon;
      var inline = _state.inline;
      var sideBySide = _state.sideBySide;
      var calendarWeeks = _state.calendarWeeks;
      var toolbarPlacement = _state.toolbarPlacement;
      var tooltips = _state.tooltips;

      var options = {
        locale: locale,
        format: format,
        disabledDates: disabledDates,
        daysOfWeekDisabled: daysOfWeekDisabled,
        viewMode: viewMode,
        allowInputToggle: icon === undefined && allowInputToggle === false ? true : allowInputToggle,
        minDate: minDate,
        maxDate: maxDate,
        inline: inline,
        sideBySide: sideBySide,
        calendarWeeks: calendarWeeks,
        toolbarPlacement: toolbarPlacement,
        tooltips: tooltips
      };
      if (getValue) {
        (0, _jquery2.default)('#' + id).datetimepicker(options).on('dp.change', this.handleGetValue);
      } else {
        (0, _jquery2.default)('#' + id).datetimepicker(options);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state;
      var label = _state2.label;
      var help = _state2.help;
      var id = _state2.id;
      var name = _state2.name;
      var placeholder = _state2.placeholder;
      var disabled = _state2.disabled;
      var required = _state2.required;
      var hasFeedback = _state2.hasFeedback;
      var icon = _state2.icon;

      var labelText = label ? _react2.default.createElement(
        'label',
        { className: 'control-label', htmlFor: id },
        label
      ) : null;
      var divFeedback = hasFeedback ? 'form-group has-feedback' : 'form-group';
      var classInput = icon === undefined ? 'col-xs-12' : 'input-group';
      var divBsStyle = this.setBsStyleGroup();
      return _react2.default.createElement(
        'div',
        { key: id, className: divFeedback + ' ' + divBsStyle },
        labelText,
        _react2.default.createElement(
          'div',
          { className: classInput, id: id },
          this.iconSet('left'),
          _react2.default.createElement('input', {
            ref: this.setRef,
            className: 'form-control',
            type: 'text',
            name: name,
            required: required,
            disabled: disabled,
            placeholder: placeholder
          }),
          this.iconSet('right')
        ),
        this.handleBsStyle(),
        _react2.default.createElement(
          'span',
          { className: 'help-block' },
          help
        )
      );
    }
  }]);

  return DateTimePicker;
}(_react.Component);

DateTimePicker.propTypes = {
  id: _react.PropTypes.string.isRequired,
  iconType: _react.PropTypes.string,
  icon: _react.PropTypes.oneOf(['right', 'left']),
  placeholder: _react.PropTypes.string,
  locale: _react.PropTypes.string,
  format: _react.PropTypes.string,
  minDate: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object])),
  maxDate: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object])),
  disabledDates: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object])),
  daysOfWeekDisabled: _react.PropTypes.arrayOf(_react.PropTypes.number),
  viewMode: _react.PropTypes.oneOf(['decades', 'years', 'months', 'days']),
  allowInputToggle: _react.PropTypes.bool,
  hasFeedback: _react.PropTypes.bool,
  bsStyle: _react.PropTypes.oneOf(['', 'success', 'warning', 'error']),
  getValue: _react.PropTypes.func,
  inline: _react.PropTypes.bool,
  sideBySide: _react.PropTypes.bool,
  calendarWeeks: _react.PropTypes.bool,
  toolbarPlacement: _react.PropTypes.oneOf(['default', 'top', 'bottom']),
  disabled: _react.PropTypes.bool,
  tooltips: _react.PropTypes.shape({
    today: _react.PropTypes.string,
    clear: _react.PropTypes.string,
    close: _react.PropTypes.string,
    selectMonth: _react.PropTypes.string,
    prevMonth: _react.PropTypes.string,
    nextMonth: _react.PropTypes.string,
    selectYear: _react.PropTypes.string,
    prevYear: _react.PropTypes.string,
    nextYear: _react.PropTypes.string,
    selectDecade: _react.PropTypes.string,
    prevDecade: _react.PropTypes.string,
    nextDecade: _react.PropTypes.string,
    prevCentury: _react.PropTypes.string,
    nextCentury: _react.PropTypes.string
  })
};
DateTimePicker.defaultProps = {
  iconType: 'calendar',
  viewMode: 'days',
  allowInputToggle: false,
  locale: 'en',
  hasFeedback: false,
  calendarWeeks: false,
  toolbarPlacement: 'default',
  tooltips: {
    today: 'Go to today',
    clear: 'Clear selection',
    close: 'Close the picker',
    selectMonth: 'Select Month',
    prevMonth: 'Previous Month',
    nextMonth: 'Next Month',
    selectYear: 'Select Year',
    prevYear: 'Previous Year',
    nextYear: 'Next Year',
    selectDecade: 'Select Decade',
    prevDecade: 'Previous Decade',
    nextDecade: 'Next Decade',
    prevCentury: 'Previous Century',
    nextCentury: 'Next Century'
  }
};
exports.default = DateTimePicker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnQvRGF0ZVRpbWVQaWNrZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O1dBNktVLHdDQUFNLFdBQVUsOENBQWhCLEc7O1lBSUE7QUFDRSxhQUFVO0FBRFosRTs7WUFNQSx3Q0FBTSxXQUFVLGtEQUFoQixHOztZQUlBLHdDQUFNLFdBQVUsaUNBQWhCLEc7O0lBekxKLGM7Ozs7Ozs7Ozs7Ozs7OzRNQTBGSixLLEdBQVEsTUFBSyxLLFFBNENiLE0sR0FBUyxVQUFDLEdBQUQsRUFBUztBQUNoQixZQUFLLFlBQUwsR0FBb0IsR0FBcEI7QUFDRCxLLFFBQ0QsYyxHQUFpQixZQUFNO0FBQ3JCLGFBQU8sTUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixNQUFLLFlBQUwsQ0FBa0IsS0FBdEMsQ0FBUDtBQUNELEssUUFDRCxPLEdBQVUsVUFBQyxRQUFELEVBQWM7QUFBQSx3QkFDSyxNQUFLLEtBRFY7QUFBQSxVQUNkLFFBRGMsZUFDZCxRQURjO0FBQUEsVUFDSixJQURJLGVBQ0osSUFESTs7QUFFdEIsY0FBUSxJQUFSO0FBQ0UsYUFBSyxhQUFhLElBQWxCO0FBQ0UsaUJBQ0U7QUFBQTtZQUFBLEVBQU0sV0FBVSxtQkFBaEI7WUFDRSx3Q0FBTSxXQUFXLHlCQUF5QixRQUExQztBQURGLFdBREY7QUFLRjtBQUNFLGlCQUFPLElBQVA7QUFSSjtBQVVELEssUUFDRCxlLEdBQWtCLFlBQU07QUFBQSxVQUNkLE9BRGMsR0FDRixNQUFLLEtBREgsQ0FDZCxPQURjOztBQUV0QixjQUFRLE9BQVI7QUFDRSxhQUFLLFNBQUw7QUFDRSxpQkFBTyxhQUFQO0FBQ0YsYUFBSyxTQUFMO0FBQ0UsaUJBQU8sYUFBUDtBQUNGLGFBQUssT0FBTDtBQUNFLGlCQUFPLFdBQVA7QUFDRjtBQUNFLGlCQUFPLEVBQVA7QUFSSjtBQVVELEssUUFDRCxhLEdBQWdCLFlBQU07QUFBQSx3QkFDYSxNQUFLLEtB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O0FBVVIsa0JBQWMsZUFWTjtBQVdSLGdCQUFZLGlCQVhKO0FBWVIsZ0JBQVksYUFaSjtBQWFSLGlCQUFhLGtCQWJMO0FBY1IsaUJBQWE7QUFkTDtBQVJVLEM7a0JBc0tULGMiLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSdcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBEYXRlVGltZVBpY2tlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpY29uVHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpY29uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgJ3JpZ2h0JyxcbiAgICAgICdsZWZ0J1xuICAgIF0pLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWluRGF0ZTogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgICAgXSlcbiAgICApLFxuICAgIG1heERhdGU6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICAgIF0pXG4gICAgKSxcbiAgICBkaXNhYmxlZERhdGVzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgICBdKVxuICAgICksXG4gICAgZGF5c09mV2Vla0Rpc2FibGVkOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5udW1iZXJcbiAgICApLFxuICAgIHZpZXdNb2RlOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgJ2RlY2FkZXMnLCAneWVhcnMnLCAnbW9udGhzJywgJ2RheXMnXG4gICAgXSksXG4gICAgYWxsb3dJbnB1dFRvZ2dsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFzRmVlZGJhY2s6IFByb3BUeXBlcy5ib29sLFxuICAgIGJzU3R5bGU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICAnJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdlcnJvcidcbiAgICBdKSxcbiAgICBnZXRWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaWRlQnlTaWRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjYWxlbmRhcldlZWtzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0b29sYmFyUGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgJ2RlZmF1bHQnLCAndG9wJywgJ2JvdHRvbSdcbiAgICBdKSxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdG9vbHRpcHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB0b2RheTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGNsZWFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgY2xvc2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzZWxlY3RNb250aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHByZXZNb250aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIG5leHRNb250aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNlbGVjdFllYXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBwcmV2WWVhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIG5leHRZZWFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2VsZWN0RGVjYWRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcHJldkRlY2FkZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIG5leHREZWNhZGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBwcmV2Q2VudHVyeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIG5leHRDZW50dXJ5OiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSlcbiAgfVxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGljb25UeXBlOiAnY2FsZW5kYXInLFxuICAgIHZpZXdNb2RlOiAnZGF5cycsXG4gICAgYWxsb3dJbnB1dFRvZ2dsZTogZmFsc2UsXG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIGhhc0ZlZWRiYWNrOiBmYWxzZSxcbiAgICBjYWxlbmRhcldlZWtzOiBmYWxzZSxcbiAgICB0b29sYmFyUGxhY2VtZW50OiAnZGVmYXVsdCcsXG4gICAgdG9vbHRpcHM6IHtcbiAgICAgIHRvZGF5OiAnR28gdG8gdG9kYXknLFxuICAgICAgY2xlYXI6ICdDbGVhciBzZWxlY3Rpb24nLFxuICAgICAgY2xvc2U6ICdDbG9zZSB0aGUgcGlja2VyJyxcbiAgICAgIHNlbGVjdE1vbnRoOiAnU2VsZWN0IE1vbnRoJyxcbiAgICAgIHByZXZNb250aDogJ1ByZXZpb3VzIE1vbnRoJyxcbiAgICAgIG5leHRNb250aDogJ05leHQgTW9udGgnLFxuICAgICAgc2VsZWN0WWVhcjogJ1NlbGVjdCBZZWFyJyxcbiAgICAgIHByZXZZZWFyOiAnUHJldmlvdXMgWWVhcicsXG4gICAgICBuZXh0WWVhcjogJ05leHQgWWVhcicsXG4gICAgICBzZWxlY3REZWNhZGU6ICdTZWxlY3QgRGVjYWRlJyxcbiAgICAgIHByZXZEZWNhZGU6ICdQcmV2aW91cyBEZWNhZGUnLFxuICAgICAgbmV4dERlY2FkZTogJ05leHQgRGVjYWRlJyxcbiAgICAgIHByZXZDZW50dXJ5OiAnUHJldmlvdXMgQ2VudHVyeScsXG4gICAgICBuZXh0Q2VudHVyeTogJ05leHQgQ2VudHVyeSdcbiAgICB9XG4gIH1cbiAgc3RhdGUgPSB0aGlzLnByb3BzXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgbG9jYWxlLFxuICAgICAgZm9ybWF0LFxuICAgICAgZGlzYWJsZWREYXRlcyxcbiAgICAgIGRheXNPZldlZWtEaXNhYmxlZCxcbiAgICAgIHZpZXdNb2RlLFxuICAgICAgYWxsb3dJbnB1dFRvZ2dsZSxcbiAgICAgIGdldFZhbHVlLFxuICAgICAgbWluRGF0ZSxcbiAgICAgIG1heERhdGUsXG4gICAgICBpY29uLFxuICAgICAgaW5saW5lLFxuICAgICAgc2lkZUJ5U2lkZSxcbiAgICAgIGNhbGVuZGFyV2Vla3MsXG4gICAgICB0b29sYmFyUGxhY2VtZW50LFxuICAgICAgdG9vbHRpcHNcbiAgICB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBsb2NhbGUsXG4gICAgICBmb3JtYXQsXG4gICAgICBkaXNhYmxlZERhdGVzLFxuICAgICAgZGF5c09mV2Vla0Rpc2FibGVkLFxuICAgICAgdmlld01vZGUsXG4gICAgICBhbGxvd0lucHV0VG9nZ2xlOiBpY29uID09PSB1bmRlZmluZWQgJiZcbiAgICAgIGFsbG93SW5wdXRUb2dnbGUgPT09IGZhbHNlID8gdHJ1ZSA6IGFsbG93SW5wdXRUb2dnbGUsXG4gICAgICBtaW5EYXRlLFxuICAgICAgbWF4RGF0ZSxcbiAgICAgIGlubGluZSxcbiAgICAgIHNpZGVCeVNpZGUsXG4gICAgICBjYWxlbmRhcldlZWtzLFxuICAgICAgdG9vbGJhclBsYWNlbWVudCxcbiAgICAgIHRvb2x0aXBzXG4gICAgfVxuICAgIGlmIChnZXRWYWx1ZSkge1xuICAgICAgalF1ZXJ5KGAjJHtpZH1gKS5kYXRldGltZXBpY2tlcihvcHRpb25zKS5vbihcbiAgICAgICAgJ2RwLmNoYW5nZScsIHRoaXMuaGFuZGxlR2V0VmFsdWVcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgalF1ZXJ5KGAjJHtpZH1gKS5kYXRldGltZXBpY2tlcihvcHRpb25zKVxuICAgIH1cbiAgfVxuICBzZXRSZWYgPSAocmVmKSA9PiB7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSByZWZcbiAgfVxuICBoYW5kbGVHZXRWYWx1ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5nZXRWYWx1ZSh0aGlzLmNvbXBvbmVudFJlZi52YWx1ZSlcbiAgfVxuICBpY29uU2V0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBpY29uVHlwZSwgaWNvbiB9ID0gdGhpcy5wcm9wc1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBwb3NpdGlvbiA9PT0gaWNvbjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnZ2x5cGhpY29uIGdseXBoaWNvbi0nICsgaWNvblR5cGV9Pjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG4gIHNldEJzU3R5bGVHcm91cCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGJzU3R5bGUgfSA9IHRoaXMuc3RhdGVcbiAgICBzd2l0Y2ggKGJzU3R5bGUpIHtcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICByZXR1cm4gJ2hhcy1zdWNjZXNzJ1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHJldHVybiAnaGFzLXdhcm5pbmcnXG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHJldHVybiAnaGFzLWVycm9yJ1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuICB9XG4gIGhhbmRsZUJzU3R5bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBic1N0eWxlLCBoYXNGZWVkYmFjayB9ID0gdGhpcy5zdGF0ZVxuICAgIHN3aXRjaCAoYnNTdHlsZSkge1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHJldHVybiBoYXNGZWVkYmFjayA/XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGZvcm0tY29udHJvbC1mZWVkYmFjayBnbHlwaGljb24tb2tcIi8+IDpcbiAgICAgICAgICBudWxsXG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgcmV0dXJuIGhhc0ZlZWRiYWNrID8gKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJnbHlwaGljb24gZm9ybS1jb250cm9sLWZlZWRiYWNrIGdseXBoaWNvbi13YXJuaW5nLXNpZ25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsXG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHJldHVybiBoYXNGZWVkYmFjayA/XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGZvcm0tY29udHJvbC1mZWVkYmFjayBnbHlwaGljb24tcmVtb3ZlXCIvPiA6XG4gICAgICAgICAgbnVsbFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGhhc0ZlZWRiYWNrID9cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZm9ybS1jb250cm9sLWZlZWRiYWNrXCIvPiA6IG51bGxcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxhYmVsLFxuICAgICAgaGVscCxcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIGhhc0ZlZWRiYWNrLFxuICAgICAgaWNvblxuICAgIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gKGxhYmVsKSA/XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9e2lkfT57bGFiZWx9PC9sYWJlbD4gOiBudWxsXG4gICAgY29uc3QgZGl2RmVlZGJhY2sgPSAoaGFzRmVlZGJhY2spID9cbiAgICAgICdmb3JtLWdyb3VwIGhhcy1mZWVkYmFjaycgOiAnZm9ybS1ncm91cCdcbiAgICBjb25zdCBjbGFzc0lucHV0ID0gaWNvbiA9PT0gdW5kZWZpbmVkID8gJ2NvbC14cy0xMicgOiAnaW5wdXQtZ3JvdXAnXG4gICAgY29uc3QgZGl2QnNTdHlsZSA9IHRoaXMuc2V0QnNTdHlsZUdyb3VwKClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9e2RpdkZlZWRiYWNrICsgJyAnICsgZGl2QnNTdHlsZX0+XG4gICAgICAgIHtsYWJlbFRleHR9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0lucHV0fSBpZD17aWR9PlxuICAgICAgICAgIHt0aGlzLmljb25TZXQoJ2xlZnQnKX1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17dGhpcy5zZXRSZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHt0aGlzLmljb25TZXQoJ3JpZ2h0Jyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5oYW5kbGVCc1N0eWxlKCl9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICB7aGVscH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVUaW1lUGlja2VyXG4iXX0=