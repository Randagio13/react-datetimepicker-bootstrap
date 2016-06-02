'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnQvRGF0ZVRpbWVQaWNrZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O1dBNktVLHdDQUFNLFdBQVUsOENBQWhCLEc7O1lBSUE7QUFDRSxhQUFVO0FBRFosRTs7WUFNQSx3Q0FBTSxXQUFVLGtEQUFoQixHOztZQUlBLHdDQUFNLFdBQVUsaUNBQWhCLEc7O0lBekxKLGM7Ozs7Ozs7Ozs7Ozs7OzRNQTBGSixLLEdBQVEsTUFBSyxLLFFBNENiLE0sR0FBUyxVQUFDLEdBQUQsRUFBUztBQUNoQixZQUFLLFlBQUwsR0FBb0IsR0FBcEI7QUFDRCxLLFFBQ0QsYyxHQUFpQixZQUFNO0FBQ3JCLGFBQU8sTUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixNQUFLLFlBQUwsQ0FBa0IsS0FBdEMsQ0FBUDtBQUNELEssUUFDRCxPLEdBQVUsVUFBQyxRQUFELEVBQWM7QUFBQSx3QkFDSyxNQUFLLEtBRFY7QUFBQSxVQUNkLFFBRGMsZUFDZCxRQURjO0FBQUEsVUFDSixJQURJLGVBQ0osSUFESTs7QUFFdEIsY0FBUSxJQUFSO0FBQ0UsYUFBSyxhQUFhLElBQWxCO0FBQ0UsaUJBQ0U7QUFBQTtZQUFBLEVBQU0sV0FBVSxtQkFBaEI7WUFDRSx3Q0FBTSxXQUFXLHlCQUF5QixRQUExQztBQURGLFdBREY7QUFLRjtBQUNFLGlCQUFPLElBQVA7QUFSSjtBQVVELEssUUFDRCxlLEdBQWtCLFlBQU07QUFBQSxVQUNkLE9BRGMsR0FDRixNQUFLLEtBREgsQ0FDZCxPQURjOztBQUV0QixjQUFRLE9BQVI7QUFDRSxhQUFLLFNBQUw7QUFDRSxpQkFBTyxhQUFQO0FBQ0YsYUFBSyxTQUFMO0FBQ0UsaUJBQU8sYUFBUDtBQUNGLGFBQUssT0FBTDtBQUNFLGlCQUFPLFdBQVA7QUFDRjtBQUNFLGlCQUFPLEVBQVA7QUFSSjtBQVVELEssUUFDRCxhLEdBQWdCLFlBQU07QUFBQSx3QkFDYSxN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VSxXQVRGO0FBVVIsa0JBQWMsZUFWTjtBQVdSLGdCQUFZLGlCQVhKO0FBWVIsZ0JBQVksYUFaSjtBQWFSLGlCQUFhLGtCQWJMO0FBY1IsaUJBQWE7QUFkTDtBQVJVLEM7a0JBc0tULGMiLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnZW9uYXNkYW4tYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyL3NyYy9qcy9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXIuanMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgRGF0ZVRpbWVQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaWNvblR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWNvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICdyaWdodCcsXG4gICAgICAnbGVmdCdcbiAgICBdKSxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1pbkRhdGU6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICAgIF0pXG4gICAgKSxcbiAgICBtYXhEYXRlOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgICBdKVxuICAgICksXG4gICAgZGlzYWJsZWREYXRlczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgICAgXSlcbiAgICApLFxuICAgIGRheXNPZldlZWtEaXNhYmxlZDogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMubnVtYmVyXG4gICAgKSxcbiAgICB2aWV3TW9kZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICdkZWNhZGVzJywgJ3llYXJzJywgJ21vbnRocycsICdkYXlzJ1xuICAgIF0pLFxuICAgIGFsbG93SW5wdXRUb2dnbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc0ZlZWRiYWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBic1N0eWxlOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgJycsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InXG4gICAgXSksXG4gICAgZ2V0VmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2lkZUJ5U2lkZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2FsZW5kYXJXZWVrczogUHJvcFR5cGVzLmJvb2wsXG4gICAgdG9vbGJhclBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICdkZWZhdWx0JywgJ3RvcCcsICdib3R0b20nXG4gICAgXSksXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHRvb2x0aXBzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdG9kYXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBjbGVhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGNsb3NlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2VsZWN0TW9udGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBwcmV2TW9udGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBuZXh0TW9udGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzZWxlY3RZZWFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcHJldlllYXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBuZXh0WWVhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNlbGVjdERlY2FkZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHByZXZEZWNhZGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBuZXh0RGVjYWRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcHJldkNlbnR1cnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBuZXh0Q2VudHVyeTogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pXG4gIH1cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpY29uVHlwZTogJ2NhbGVuZGFyJyxcbiAgICB2aWV3TW9kZTogJ2RheXMnLFxuICAgIGFsbG93SW5wdXRUb2dnbGU6IGZhbHNlLFxuICAgIGxvY2FsZTogJ2VuJyxcbiAgICBoYXNGZWVkYmFjazogZmFsc2UsXG4gICAgY2FsZW5kYXJXZWVrczogZmFsc2UsXG4gICAgdG9vbGJhclBsYWNlbWVudDogJ2RlZmF1bHQnLFxuICAgIHRvb2x0aXBzOiB7XG4gICAgICB0b2RheTogJ0dvIHRvIHRvZGF5JyxcbiAgICAgIGNsZWFyOiAnQ2xlYXIgc2VsZWN0aW9uJyxcbiAgICAgIGNsb3NlOiAnQ2xvc2UgdGhlIHBpY2tlcicsXG4gICAgICBzZWxlY3RNb250aDogJ1NlbGVjdCBNb250aCcsXG4gICAgICBwcmV2TW9udGg6ICdQcmV2aW91cyBNb250aCcsXG4gICAgICBuZXh0TW9udGg6ICdOZXh0IE1vbnRoJyxcbiAgICAgIHNlbGVjdFllYXI6ICdTZWxlY3QgWWVhcicsXG4gICAgICBwcmV2WWVhcjogJ1ByZXZpb3VzIFllYXInLFxuICAgICAgbmV4dFllYXI6ICdOZXh0IFllYXInLFxuICAgICAgc2VsZWN0RGVjYWRlOiAnU2VsZWN0IERlY2FkZScsXG4gICAgICBwcmV2RGVjYWRlOiAnUHJldmlvdXMgRGVjYWRlJyxcbiAgICAgIG5leHREZWNhZGU6ICdOZXh0IERlY2FkZScsXG4gICAgICBwcmV2Q2VudHVyeTogJ1ByZXZpb3VzIENlbnR1cnknLFxuICAgICAgbmV4dENlbnR1cnk6ICdOZXh0IENlbnR1cnknXG4gICAgfVxuICB9XG4gIHN0YXRlID0gdGhpcy5wcm9wc1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGZvcm1hdCxcbiAgICAgIGRpc2FibGVkRGF0ZXMsXG4gICAgICBkYXlzT2ZXZWVrRGlzYWJsZWQsXG4gICAgICB2aWV3TW9kZSxcbiAgICAgIGFsbG93SW5wdXRUb2dnbGUsXG4gICAgICBnZXRWYWx1ZSxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBtYXhEYXRlLFxuICAgICAgaWNvbixcbiAgICAgIGlubGluZSxcbiAgICAgIHNpZGVCeVNpZGUsXG4gICAgICBjYWxlbmRhcldlZWtzLFxuICAgICAgdG9vbGJhclBsYWNlbWVudCxcbiAgICAgIHRvb2x0aXBzXG4gICAgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbG9jYWxlLFxuICAgICAgZm9ybWF0LFxuICAgICAgZGlzYWJsZWREYXRlcyxcbiAgICAgIGRheXNPZldlZWtEaXNhYmxlZCxcbiAgICAgIHZpZXdNb2RlLFxuICAgICAgYWxsb3dJbnB1dFRvZ2dsZTogaWNvbiA9PT0gdW5kZWZpbmVkICYmXG4gICAgICBhbGxvd0lucHV0VG9nZ2xlID09PSBmYWxzZSA/IHRydWUgOiBhbGxvd0lucHV0VG9nZ2xlLFxuICAgICAgbWluRGF0ZSxcbiAgICAgIG1heERhdGUsXG4gICAgICBpbmxpbmUsXG4gICAgICBzaWRlQnlTaWRlLFxuICAgICAgY2FsZW5kYXJXZWVrcyxcbiAgICAgIHRvb2xiYXJQbGFjZW1lbnQsXG4gICAgICB0b29sdGlwc1xuICAgIH1cbiAgICBpZiAoZ2V0VmFsdWUpIHtcbiAgICAgIGpRdWVyeShgIyR7aWR9YCkuZGF0ZXRpbWVwaWNrZXIob3B0aW9ucykub24oXG4gICAgICAgICdkcC5jaGFuZ2UnLCB0aGlzLmhhbmRsZUdldFZhbHVlXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeShgIyR7aWR9YCkuZGF0ZXRpbWVwaWNrZXIob3B0aW9ucylcbiAgICB9XG4gIH1cbiAgc2V0UmVmID0gKHJlZikgPT4ge1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gcmVmXG4gIH1cbiAgaGFuZGxlR2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZ2V0VmFsdWUodGhpcy5jb21wb25lbnRSZWYudmFsdWUpXG4gIH1cbiAgaWNvblNldCA9IChwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgaWNvblR5cGUsIGljb24gfSA9IHRoaXMucHJvcHNcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgcG9zaXRpb24gPT09IGljb246XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J2dseXBoaWNvbiBnbHlwaGljb24tJyArIGljb25UeXBlfT48L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuICBzZXRCc1N0eWxlR3JvdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBic1N0eWxlIH0gPSB0aGlzLnN0YXRlXG4gICAgc3dpdGNoIChic1N0eWxlKSB7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgcmV0dXJuICdoYXMtc3VjY2VzcydcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICByZXR1cm4gJ2hhcy13YXJuaW5nJ1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICByZXR1cm4gJ2hhcy1lcnJvcidcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgfVxuICBoYW5kbGVCc1N0eWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYnNTdHlsZSwgaGFzRmVlZGJhY2sgfSA9IHRoaXMuc3RhdGVcbiAgICBzd2l0Y2ggKGJzU3R5bGUpIHtcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICByZXR1cm4gaGFzRmVlZGJhY2sgP1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBmb3JtLWNvbnRyb2wtZmVlZGJhY2sgZ2x5cGhpY29uLW9rXCIvPiA6XG4gICAgICAgICAgbnVsbFxuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHJldHVybiBoYXNGZWVkYmFjayA/IChcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGZvcm0tY29udHJvbC1mZWVkYmFjayBnbHlwaGljb24td2FybmluZy1zaWduXCJcbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbFxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICByZXR1cm4gaGFzRmVlZGJhY2sgP1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBmb3JtLWNvbnRyb2wtZmVlZGJhY2sgZ2x5cGhpY29uLXJlbW92ZVwiLz4gOlxuICAgICAgICAgIG51bGxcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBoYXNGZWVkYmFjayA/XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGZvcm0tY29udHJvbC1mZWVkYmFja1wiLz4gOiBudWxsXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBsYWJlbCxcbiAgICAgIGhlbHAsXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBoYXNGZWVkYmFjayxcbiAgICAgIGljb25cbiAgICB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IChsYWJlbCkgP1xuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPXtpZH0+e2xhYmVsfTwvbGFiZWw+IDogbnVsbFxuICAgIGNvbnN0IGRpdkZlZWRiYWNrID0gKGhhc0ZlZWRiYWNrKSA/XG4gICAgICAnZm9ybS1ncm91cCBoYXMtZmVlZGJhY2snIDogJ2Zvcm0tZ3JvdXAnXG4gICAgY29uc3QgY2xhc3NJbnB1dCA9IGljb24gPT09IHVuZGVmaW5lZCA/ICdjb2wteHMtMTInIDogJ2lucHV0LWdyb3VwJ1xuICAgIGNvbnN0IGRpdkJzU3R5bGUgPSB0aGlzLnNldEJzU3R5bGVHcm91cCgpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPXtkaXZGZWVkYmFjayArICcgJyArIGRpdkJzU3R5bGV9PlxuICAgICAgICB7bGFiZWxUZXh0fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NJbnB1dH0gaWQ9e2lkfT5cbiAgICAgICAgICB7dGhpcy5pY29uU2V0KCdsZWZ0Jyl9XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e3RoaXMuc2V0UmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dGhpcy5pY29uU2V0KCdyaWdodCcpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuaGFuZGxlQnNTdHlsZSgpfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWxwLWJsb2NrXCI+XG4gICAgICAgICAge2hlbHB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlVGltZVBpY2tlclxuIl19