'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnQvRGF0ZVRpbWVQaWNrZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBK0tVLHdDQUFNLFdBQVUsOENBQVYsRUFBTjs7WUFJQTtBQUNFLGFBQVUsd0RBQVY7Q0FERjs7WUFNQSx3Q0FBTSxXQUFVLGtEQUFWLEVBQU47O1lBSUEsd0NBQU0sV0FBVSxpQ0FBVixFQUFOOztJQXpMSjs7Ozs7Ozs7Ozs7Ozs7NE1BMEZKLFFBQVEsTUFBSyxLQUFMLFFBNENSLFNBQVMsVUFBQyxHQUFELEVBQVM7QUFDaEIsWUFBSyxZQUFMLEdBQW9CLEdBQXBCLENBRGdCO0tBQVQsUUFHVCxpQkFBaUIsWUFBTTtBQUNyQixhQUFPLE1BQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsTUFBSyxZQUFMLENBQWtCLEtBQWxCLENBQTNCLENBRHFCO0tBQU4sUUFHakIsVUFBVSxVQUFDLFFBQUQsRUFBYzt3QkFDSyxNQUFLLEtBQUwsQ0FETDtVQUNkLGdDQURjO1VBQ0osd0JBREk7O0FBRXRCLGNBQVEsSUFBUjtBQUNFLGFBQUssYUFBYSxJQUFiO0FBQ0gsaUJBQ0U7O2NBQU0sV0FBVSxtQkFBVixFQUFOO1lBQ0Usd0NBQU0sV0FBVyx5QkFBeUIsUUFBekIsRUFBakIsQ0FERjtXQURGLENBREY7QUFERjtBQVFJLGlCQUFPLElBQVAsQ0FERjtBQVBGLE9BRnNCO0tBQWQsUUFhVixrQkFBa0IsWUFBTTtVQUNkLFVBQVksTUFBSyxLQUFMLENBQVosUUFEYzs7QUFFdEIsY0FBUSxPQUFSO0FBQ0UsYUFBSyxTQUFMO0FBQ0UsaUJBQU8sYUFBUCxDQURGO0FBREYsYUFHTyxTQUFMO0FBQ0UsaUJBQU8sYUFBUCxDQURGO0FBSEYsYUFLTyxPQUFMO0FBQ0UsaUJBQU8sV0FBUCxDQURGO0FBTEY7QUFRSSxpQkFBTyxFQUFQLENBREY7QUFQRixPQUZzQjtLQUFOLFFBYWxCLGdCQUFnQixZQUFNO3dCQUNhLE1BQUss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QVUsTUFBVjtBQUNaLGNBQVUsaUJBQVUsTUFBVjtBQUNWLGNBQVUsaUJBQVUsTUFBVjtBQUNWLGtCQUFjLGlCQUFVLE1BQVY7QUFDZCxnQkFBWSxpQkFBVSxNQUFWO0FBQ1osZ0JBQVksaUJBQVUsTUFBVjtBQUNaLGlCQUFhLGlCQUFVLE1BQVY7QUFDYixpQkFBYSxpQkFBVSxNQUFWO0dBZEwsQ0FBVjs7QUFoREUsZUFpRUcsZUFBZTtBQUNwQixZQUFVLFVBQVY7QUFDQSxZQUFVLE1BQVY7QUFDQSxvQkFBa0IsS0FBbEI7QUFDQSxVQUFRLElBQVI7QUFDQSxlQUFhLEtBQWI7QUFDQSxpQkFBZSxLQUFmO0FBQ0Esb0JBQWtCLFNBQWxCO0FBQ0EsWUFBVTtBQUNSLFdBQU8sYUFBUDtBQUNBLFdBQU8saUJBQVA7QUFDQSxXQUFPLGtCQUFQO0FBQ0EsaUJBQWEsY0FBYjtBQUNBLGVBQVcsZ0JBQVg7QUFDQSxlQUFXLFlBQVg7QUFDQSxnQkFBWSxhQUFaO0FBQ0EsY0FBVSxlQUFWO0FBQ0EsY0FBVSxXQUFWO0FBQ0Esa0JBQWMsZUFBZDtBQUNBLGdCQUFZLGlCQUFaO0FBQ0EsZ0JBQVksYUFBWjtBQUNBLGlCQUFhLGtCQUFiO0FBQ0EsaUJBQWEsY0FBYjtHQWRGOztrQkE4SlciLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2VvbmFzZGFuLWJvb3RzdHJhcC1kYXRldGltZXBpY2tlci9zcmMvanMvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyLmpzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgRGF0ZVRpbWVQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaWNvblR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWNvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICdyaWdodCcsXG4gICAgICAnbGVmdCdcbiAgICBdKSxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1pbkRhdGU6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICAgIF0pXG4gICAgKSxcbiAgICBtYXhEYXRlOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgICBdKVxuICAgICksXG4gICAgZGlzYWJsZWREYXRlczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgICAgXSlcbiAgICApLFxuICAgIGRheXNPZldlZWtEaXNhYmxlZDogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMubnVtYmVyXG4gICAgKSxcbiAgICB2aWV3TW9kZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICdkZWNhZGVzJywgJ3llYXJzJywgJ21vbnRocycsICdkYXlzJ1xuICAgIF0pLFxuICAgIGFsbG93SW5wdXRUb2dnbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc0ZlZWRiYWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBic1N0eWxlOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgJycsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InXG4gICAgXSksXG4gICAgZ2V0VmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2lkZUJ5U2lkZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2FsZW5kYXJXZWVrczogUHJvcFR5cGVzLmJvb2wsXG4gICAgdG9vbGJhclBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICdkZWZhdWx0JywgJ3RvcCcsICdib3R0b20nXG4gICAgXSksXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHRvb2x0aXBzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdG9kYXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBjbGVhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGNsb3NlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2VsZWN0TW9udGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBwcmV2TW9udGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBuZXh0TW9udGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzZWxlY3RZZWFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcHJldlllYXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBuZXh0WWVhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNlbGVjdERlY2FkZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHByZXZEZWNhZGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBuZXh0RGVjYWRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcHJldkNlbnR1cnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBuZXh0Q2VudHVyeTogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaWNvblR5cGU6ICdjYWxlbmRhcicsXG4gICAgdmlld01vZGU6ICdkYXlzJyxcbiAgICBhbGxvd0lucHV0VG9nZ2xlOiBmYWxzZSxcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgaGFzRmVlZGJhY2s6IGZhbHNlLFxuICAgIGNhbGVuZGFyV2Vla3M6IGZhbHNlLFxuICAgIHRvb2xiYXJQbGFjZW1lbnQ6ICdkZWZhdWx0JyxcbiAgICB0b29sdGlwczoge1xuICAgICAgdG9kYXk6ICdHbyB0byB0b2RheScsXG4gICAgICBjbGVhcjogJ0NsZWFyIHNlbGVjdGlvbicsXG4gICAgICBjbG9zZTogJ0Nsb3NlIHRoZSBwaWNrZXInLFxuICAgICAgc2VsZWN0TW9udGg6ICdTZWxlY3QgTW9udGgnLFxuICAgICAgcHJldk1vbnRoOiAnUHJldmlvdXMgTW9udGgnLFxuICAgICAgbmV4dE1vbnRoOiAnTmV4dCBNb250aCcsXG4gICAgICBzZWxlY3RZZWFyOiAnU2VsZWN0IFllYXInLFxuICAgICAgcHJldlllYXI6ICdQcmV2aW91cyBZZWFyJyxcbiAgICAgIG5leHRZZWFyOiAnTmV4dCBZZWFyJyxcbiAgICAgIHNlbGVjdERlY2FkZTogJ1NlbGVjdCBEZWNhZGUnLFxuICAgICAgcHJldkRlY2FkZTogJ1ByZXZpb3VzIERlY2FkZScsXG4gICAgICBuZXh0RGVjYWRlOiAnTmV4dCBEZWNhZGUnLFxuICAgICAgcHJldkNlbnR1cnk6ICdQcmV2aW91cyBDZW50dXJ5JyxcbiAgICAgIG5leHRDZW50dXJ5OiAnTmV4dCBDZW50dXJ5J1xuICAgIH1cbiAgfTtcbiAgc3RhdGUgPSB0aGlzLnByb3BzO1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGZvcm1hdCxcbiAgICAgIGRpc2FibGVkRGF0ZXMsXG4gICAgICBkYXlzT2ZXZWVrRGlzYWJsZWQsXG4gICAgICB2aWV3TW9kZSxcbiAgICAgIGFsbG93SW5wdXRUb2dnbGUsXG4gICAgICBnZXRWYWx1ZSxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBtYXhEYXRlLFxuICAgICAgaWNvbixcbiAgICAgIGlubGluZSxcbiAgICAgIHNpZGVCeVNpZGUsXG4gICAgICBjYWxlbmRhcldlZWtzLFxuICAgICAgdG9vbGJhclBsYWNlbWVudCxcbiAgICAgIHRvb2x0aXBzXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGxvY2FsZSxcbiAgICAgIGZvcm1hdCxcbiAgICAgIGRpc2FibGVkRGF0ZXMsXG4gICAgICBkYXlzT2ZXZWVrRGlzYWJsZWQsXG4gICAgICB2aWV3TW9kZSxcbiAgICAgIGFsbG93SW5wdXRUb2dnbGU6IGljb24gPT09IHVuZGVmaW5lZCAmJlxuICAgICAgYWxsb3dJbnB1dFRvZ2dsZSA9PT0gZmFsc2UgPyB0cnVlIDogYWxsb3dJbnB1dFRvZ2dsZSxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBtYXhEYXRlLFxuICAgICAgaW5saW5lLFxuICAgICAgc2lkZUJ5U2lkZSxcbiAgICAgIGNhbGVuZGFyV2Vla3MsXG4gICAgICB0b29sYmFyUGxhY2VtZW50LFxuICAgICAgdG9vbHRpcHNcbiAgICB9O1xuICAgIGlmIChnZXRWYWx1ZSkge1xuICAgICAgalF1ZXJ5KGAjJHtpZH1gKS5kYXRldGltZXBpY2tlcihvcHRpb25zKS5vbihcbiAgICAgICAgJ2RwLmNoYW5nZScsIHRoaXMuaGFuZGxlR2V0VmFsdWVcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeShgIyR7aWR9YCkuZGF0ZXRpbWVwaWNrZXIob3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIHNldFJlZiA9IChyZWYpID0+IHtcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHJlZjtcbiAgfTtcbiAgaGFuZGxlR2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZ2V0VmFsdWUodGhpcy5jb21wb25lbnRSZWYudmFsdWUpO1xuICB9O1xuICBpY29uU2V0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBpY29uVHlwZSwgaWNvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgcG9zaXRpb24gPT09IGljb246XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J2dseXBoaWNvbiBnbHlwaGljb24tJyArIGljb25UeXBlfT48L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuICBzZXRCc1N0eWxlR3JvdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBic1N0eWxlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHN3aXRjaCAoYnNTdHlsZSkge1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHJldHVybiAnaGFzLXN1Y2Nlc3MnO1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHJldHVybiAnaGFzLXdhcm5pbmcnO1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICByZXR1cm4gJ2hhcy1lcnJvcic7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9O1xuICBoYW5kbGVCc1N0eWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYnNTdHlsZSwgaGFzRmVlZGJhY2sgfSA9IHRoaXMuc3RhdGU7XG4gICAgc3dpdGNoIChic1N0eWxlKSB7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgcmV0dXJuIGhhc0ZlZWRiYWNrID9cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZm9ybS1jb250cm9sLWZlZWRiYWNrIGdseXBoaWNvbi1va1wiLz4gOlxuICAgICAgICAgIG51bGw7XG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgcmV0dXJuIGhhc0ZlZWRiYWNrID8gKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJnbHlwaGljb24gZm9ybS1jb250cm9sLWZlZWRiYWNrIGdseXBoaWNvbi13YXJuaW5nLXNpZ25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsO1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICByZXR1cm4gaGFzRmVlZGJhY2sgP1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBmb3JtLWNvbnRyb2wtZmVlZGJhY2sgZ2x5cGhpY29uLXJlbW92ZVwiLz4gOlxuICAgICAgICAgIG51bGw7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gaGFzRmVlZGJhY2sgP1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIi8+IDogbnVsbDtcbiAgICB9XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBsYWJlbCxcbiAgICAgIGhlbHAsXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBoYXNGZWVkYmFjayxcbiAgICAgIGljb25cbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBsYWJlbFRleHQgPSAobGFiZWwpID9cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj17aWR9PntsYWJlbH08L2xhYmVsPiA6IG51bGw7XG4gICAgY29uc3QgZGl2RmVlZGJhY2sgPSAoaGFzRmVlZGJhY2spID9cbiAgICAgICdmb3JtLWdyb3VwIGhhcy1mZWVkYmFjaycgOiAnZm9ybS1ncm91cCc7XG4gICAgY29uc3QgY2xhc3NJbnB1dCA9IGljb24gPT09IHVuZGVmaW5lZCA/ICdjb2wteHMtMTInIDogJ2lucHV0LWdyb3VwJztcbiAgICBjb25zdCBkaXZCc1N0eWxlID0gdGhpcy5zZXRCc1N0eWxlR3JvdXAoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9e2RpdkZlZWRiYWNrICsgJyAnICsgZGl2QnNTdHlsZX0+XG4gICAgICAgIHtsYWJlbFRleHR9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0lucHV0fSBpZD17aWR9PlxuICAgICAgICAgIHt0aGlzLmljb25TZXQoJ2xlZnQnKX1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17dGhpcy5zZXRSZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHt0aGlzLmljb25TZXQoJ3JpZ2h0Jyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5oYW5kbGVCc1N0eWxlKCl9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICB7aGVscH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlVGltZVBpY2tlcjtcbiJdfQ==