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

window.$ = _jquery2.default;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnQvRGF0ZVRpbWVQaWNrZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRkEsT0FBTyxDQUFQOztXQStLVSx3Q0FBTSxXQUFVLDhDQUFoQixHOztZQUlBO0FBQ0UsYUFBVTtBQURaLEU7O1lBTUEsd0NBQU0sV0FBVSxrREFBaEIsRzs7WUFJQSx3Q0FBTSxXQUFVLGlDQUFoQixHOztJQXpMSixjOzs7Ozs7Ozs7Ozs7Ozs0TUEwRkosSyxHQUFRLE1BQUssSyxRQTRDYixNLEdBQVMsVUFBQyxHQUFELEVBQVM7QUFDaEIsWUFBSyxZQUFMLEdBQW9CLEdBQXBCO0FBQ0QsSyxRQUNELGMsR0FBaUIsWUFBTTtBQUNyQixhQUFPLE1BQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsTUFBSyxZQUFMLENBQWtCLEtBQXRDLENBQVA7QUFDRCxLLFFBQ0QsTyxHQUFVLFVBQUMsUUFBRCxFQUFjO0FBQUEsd0JBQ0ssTUFBSyxLQURWO0FBQUEsVUFDZCxRQURjLGVBQ2QsUUFEYztBQUFBLFVBQ0osSUFESSxlQUNKLElBREk7O0FBRXRCLGNBQVEsSUFBUjtBQUNFLGFBQUssYUFBYSxJQUFsQjtBQUNFLGlCQUNFO0FBQUE7WUFBQSxFQUFNLFdBQVUsbUJBQWhCO1lBQ0Usd0NBQU0sV0FBVyx5QkFBeUIsUUFBMUM7QUFERixXQURGO0FBS0Y7QUFDRSxpQkFBTyxJQUFQO0FBUko7QUFVRCxLLFFBQ0QsZSxHQUFrQixZQUFNO0FBQUEsVUFDZCxPQURjLEdBQ0YsTUFBSyxLQURILENBQ2QsT0FEYzs7QUFFdEIsY0FBUSxPQUFSO0FBQ0UsYUFBSyxTQUFMO0FBQ0UsaUJBQU8sYUFBUDtBQUNGLGFBQUssU0FBTDtBQUNFLGlCQUFPLGFBQVA7QUFDRixhQUFLLE9BQUw7QUFDRSxpQkFBTyxXQUFQO0FBQ0Y7QUFDRSxpQkFBTyxFQUFQO0FBUko7QUFVRCxLLFFBQ0QsYSxHQUFnQixZ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QVJGO0FBU1IsY0FBVSxXQVRGO0FBVVIsa0JBQWMsZUFWTjtBQVdSLGdCQUFZLGlCQVhKO0FBWVIsZ0JBQVksYUFaSjtBQWFSLGlCQUFhLGtCQWJMO0FBY1IsaUJBQWE7QUFkTDtBQVJVLEM7a0JBc0tULGMiLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG53aW5kb3cuJCA9ICRcbmltcG9ydCAnZW9uYXNkYW4tYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyL3NyYy9qcy9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXIuanMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgRGF0ZVRpbWVQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaWNvblR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWNvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICdyaWdodCcsXG4gICAgICAnbGVmdCdcbiAgICBdKSxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1pbkRhdGU6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICAgIF0pXG4gICAgKSxcbiAgICBtYXhEYXRlOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgICBdKVxuICAgICksXG4gICAgZGlzYWJsZWREYXRlczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgICAgXSlcbiAgICApLFxuICAgIGRheXNPZldlZWtEaXNhYmxlZDogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMubnVtYmVyXG4gICAgKSxcbiAgICB2aWV3TW9kZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICdkZWNhZGVzJywgJ3llYXJzJywgJ21vbnRocycsICdkYXlzJ1xuICAgIF0pLFxuICAgIGFsbG93SW5wdXRUb2dnbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc0ZlZWRiYWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBic1N0eWxlOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgJycsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InXG4gICAgXSksXG4gICAgZ2V0VmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2lkZUJ5U2lkZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2FsZW5kYXJXZWVrczogUHJvcFR5cGVzLmJvb2wsXG4gICAgdG9vbGJhclBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICdkZWZhdWx0JywgJ3RvcCcsICdib3R0b20nXG4gICAgXSksXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHRvb2x0aXBzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdG9kYXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBjbGVhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGNsb3NlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2VsZWN0TW9udGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBwcmV2TW9udGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBuZXh0TW9udGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzZWxlY3RZZWFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcHJldlllYXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBuZXh0WWVhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNlbGVjdERlY2FkZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHByZXZEZWNhZGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBuZXh0RGVjYWRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcHJldkNlbnR1cnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBuZXh0Q2VudHVyeTogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pXG4gIH1cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpY29uVHlwZTogJ2NhbGVuZGFyJyxcbiAgICB2aWV3TW9kZTogJ2RheXMnLFxuICAgIGFsbG93SW5wdXRUb2dnbGU6IGZhbHNlLFxuICAgIGxvY2FsZTogJ2VuJyxcbiAgICBoYXNGZWVkYmFjazogZmFsc2UsXG4gICAgY2FsZW5kYXJXZWVrczogZmFsc2UsXG4gICAgdG9vbGJhclBsYWNlbWVudDogJ2RlZmF1bHQnLFxuICAgIHRvb2x0aXBzOiB7XG4gICAgICB0b2RheTogJ0dvIHRvIHRvZGF5JyxcbiAgICAgIGNsZWFyOiAnQ2xlYXIgc2VsZWN0aW9uJyxcbiAgICAgIGNsb3NlOiAnQ2xvc2UgdGhlIHBpY2tlcicsXG4gICAgICBzZWxlY3RNb250aDogJ1NlbGVjdCBNb250aCcsXG4gICAgICBwcmV2TW9udGg6ICdQcmV2aW91cyBNb250aCcsXG4gICAgICBuZXh0TW9udGg6ICdOZXh0IE1vbnRoJyxcbiAgICAgIHNlbGVjdFllYXI6ICdTZWxlY3QgWWVhcicsXG4gICAgICBwcmV2WWVhcjogJ1ByZXZpb3VzIFllYXInLFxuICAgICAgbmV4dFllYXI6ICdOZXh0IFllYXInLFxuICAgICAgc2VsZWN0RGVjYWRlOiAnU2VsZWN0IERlY2FkZScsXG4gICAgICBwcmV2RGVjYWRlOiAnUHJldmlvdXMgRGVjYWRlJyxcbiAgICAgIG5leHREZWNhZGU6ICdOZXh0IERlY2FkZScsXG4gICAgICBwcmV2Q2VudHVyeTogJ1ByZXZpb3VzIENlbnR1cnknLFxuICAgICAgbmV4dENlbnR1cnk6ICdOZXh0IENlbnR1cnknXG4gICAgfVxuICB9XG4gIHN0YXRlID0gdGhpcy5wcm9wc1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGZvcm1hdCxcbiAgICAgIGRpc2FibGVkRGF0ZXMsXG4gICAgICBkYXlzT2ZXZWVrRGlzYWJsZWQsXG4gICAgICB2aWV3TW9kZSxcbiAgICAgIGFsbG93SW5wdXRUb2dnbGUsXG4gICAgICBnZXRWYWx1ZSxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBtYXhEYXRlLFxuICAgICAgaWNvbixcbiAgICAgIGlubGluZSxcbiAgICAgIHNpZGVCeVNpZGUsXG4gICAgICBjYWxlbmRhcldlZWtzLFxuICAgICAgdG9vbGJhclBsYWNlbWVudCxcbiAgICAgIHRvb2x0aXBzXG4gICAgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbG9jYWxlLFxuICAgICAgZm9ybWF0LFxuICAgICAgZGlzYWJsZWREYXRlcyxcbiAgICAgIGRheXNPZldlZWtEaXNhYmxlZCxcbiAgICAgIHZpZXdNb2RlLFxuICAgICAgYWxsb3dJbnB1dFRvZ2dsZTogaWNvbiA9PT0gdW5kZWZpbmVkICYmXG4gICAgICBhbGxvd0lucHV0VG9nZ2xlID09PSBmYWxzZSA/IHRydWUgOiBhbGxvd0lucHV0VG9nZ2xlLFxuICAgICAgbWluRGF0ZSxcbiAgICAgIG1heERhdGUsXG4gICAgICBpbmxpbmUsXG4gICAgICBzaWRlQnlTaWRlLFxuICAgICAgY2FsZW5kYXJXZWVrcyxcbiAgICAgIHRvb2xiYXJQbGFjZW1lbnQsXG4gICAgICB0b29sdGlwc1xuICAgIH1cbiAgICBpZiAoZ2V0VmFsdWUpIHtcbiAgICAgICQoYCMke2lkfWApLmRhdGV0aW1lcGlja2VyKG9wdGlvbnMpLm9uKFxuICAgICAgICAnZHAuY2hhbmdlJywgdGhpcy5oYW5kbGVHZXRWYWx1ZVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKGAjJHtpZH1gKS5kYXRldGltZXBpY2tlcihvcHRpb25zKVxuICAgIH1cbiAgfVxuICBzZXRSZWYgPSAocmVmKSA9PiB7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSByZWZcbiAgfVxuICBoYW5kbGVHZXRWYWx1ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5nZXRWYWx1ZSh0aGlzLmNvbXBvbmVudFJlZi52YWx1ZSlcbiAgfVxuICBpY29uU2V0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBpY29uVHlwZSwgaWNvbiB9ID0gdGhpcy5wcm9wc1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBwb3NpdGlvbiA9PT0gaWNvbjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnZ2x5cGhpY29uIGdseXBoaWNvbi0nICsgaWNvblR5cGV9Pjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG4gIHNldEJzU3R5bGVHcm91cCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGJzU3R5bGUgfSA9IHRoaXMuc3RhdGVcbiAgICBzd2l0Y2ggKGJzU3R5bGUpIHtcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICByZXR1cm4gJ2hhcy1zdWNjZXNzJ1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHJldHVybiAnaGFzLXdhcm5pbmcnXG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHJldHVybiAnaGFzLWVycm9yJ1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuICB9XG4gIGhhbmRsZUJzU3R5bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBic1N0eWxlLCBoYXNGZWVkYmFjayB9ID0gdGhpcy5zdGF0ZVxuICAgIHN3aXRjaCAoYnNTdHlsZSkge1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHJldHVybiBoYXNGZWVkYmFjayA/XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGZvcm0tY29udHJvbC1mZWVkYmFjayBnbHlwaGljb24tb2tcIi8+IDpcbiAgICAgICAgICBudWxsXG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgcmV0dXJuIGhhc0ZlZWRiYWNrID8gKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJnbHlwaGljb24gZm9ybS1jb250cm9sLWZlZWRiYWNrIGdseXBoaWNvbi13YXJuaW5nLXNpZ25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsXG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHJldHVybiBoYXNGZWVkYmFjayA/XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGZvcm0tY29udHJvbC1mZWVkYmFjayBnbHlwaGljb24tcmVtb3ZlXCIvPiA6XG4gICAgICAgICAgbnVsbFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGhhc0ZlZWRiYWNrID9cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZm9ybS1jb250cm9sLWZlZWRiYWNrXCIvPiA6IG51bGxcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxhYmVsLFxuICAgICAgaGVscCxcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIGhhc0ZlZWRiYWNrLFxuICAgICAgaWNvblxuICAgIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gKGxhYmVsKSA/XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9e2lkfT57bGFiZWx9PC9sYWJlbD4gOiBudWxsXG4gICAgY29uc3QgZGl2RmVlZGJhY2sgPSAoaGFzRmVlZGJhY2spID9cbiAgICAgICdmb3JtLWdyb3VwIGhhcy1mZWVkYmFjaycgOiAnZm9ybS1ncm91cCdcbiAgICBjb25zdCBjbGFzc0lucHV0ID0gaWNvbiA9PT0gdW5kZWZpbmVkID8gJ2NvbC14cy0xMicgOiAnaW5wdXQtZ3JvdXAnXG4gICAgY29uc3QgZGl2QnNTdHlsZSA9IHRoaXMuc2V0QnNTdHlsZUdyb3VwKClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9e2RpdkZlZWRiYWNrICsgJyAnICsgZGl2QnNTdHlsZX0+XG4gICAgICAgIHtsYWJlbFRleHR9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0lucHV0fSBpZD17aWR9PlxuICAgICAgICAgIHt0aGlzLmljb25TZXQoJ2xlZnQnKX1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17dGhpcy5zZXRSZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHt0aGlzLmljb25TZXQoJ3JpZ2h0Jyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5oYW5kbGVCc1N0eWxlKCl9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICB7aGVscH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVUaW1lUGlja2VyXG4iXX0=