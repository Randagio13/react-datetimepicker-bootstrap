'use strict';

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

var _ref2 = _react2.default.createElement('span', { className: 'glyphicon form-control-feedback glyphicon-warning-sign' });

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
        toolbarPlacement: toolbarPlacement
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
          _react2.default.createElement('input', { ref: this.setRef, className: 'form-control', type: 'text', name: name, required: required, disabled: disabled, placeholder: placeholder }),
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

DateTimePicker.defaultProps = {
  iconType: 'calendar',
  viewMode: 'days',
  allowInputToggle: false,
  locale: 'en',
  hasFeedback: false,
  calendarWeeks: false,
  toolbarPlacement: 'default'
};
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
  disabled: _react.PropTypes.bool
};

module.exports = DateTimePicker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnQvRGF0ZVRpbWVQaWNrZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0F5STZCLHdDQUFNLFdBQVUsOENBQVYsRUFBTjs7WUFFQSx3Q0FBTSxXQUFVLHdEQUFWLEVBQU47O1lBRUEsd0NBQU0sV0FBVSxrREFBVixFQUFOOztZQUVBLHdDQUFNLFdBQVUsaUNBQVYsRUFBTjs7SUEzSXZCOzs7Ozs7Ozs7Ozs7Ozs0TUEwREosUUFBUSxNQUFLLEtBQUwsUUF1Q1IsU0FBUyxVQUFDLEdBQUQsRUFBUztBQUNoQixZQUFLLFlBQUwsR0FBb0IsR0FBcEIsQ0FEZ0I7S0FBVCxRQUdULGlCQUFpQixZQUFNO0FBQ3JCLGFBQU8sTUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixNQUFLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBM0IsQ0FEcUI7S0FBTixRQUdqQixVQUFVLFVBQUMsUUFBRCxFQUFjO3dCQUNLLE1BQUssS0FBTCxDQURMO1VBQ2QsZ0NBRGM7VUFDSix3QkFESTs7QUFFdEIsY0FBUSxJQUFSO0FBQ0UsYUFBSyxhQUFhLElBQWI7QUFDSCxpQkFDRTs7Y0FBTSxXQUFVLG1CQUFWLEVBQU47WUFDRSx3Q0FBTSxXQUFXLHlCQUF5QixRQUF6QixFQUFqQixDQURGO1dBREYsQ0FERjtBQURGO0FBUUksaUJBQU8sSUFBUCxDQURGO0FBUEYsT0FGc0I7S0FBZCxRQWFWLGtCQUFrQixZQUFNO1VBQ2QsVUFBWSxNQUFLLEtBQUwsQ0FBWixRQURjOztBQUV0QixjQUFRLE9BQVI7QUFDRSxhQUFLLFNBQUw7QUFDRSxpQkFBTyxhQUFQLENBREY7QUFERixhQUdPLFNBQUw7QUFDRSxpQkFBTyxhQUFQLENBREY7QUFIRixhQUtPLE9BQUw7QUFDRSxpQkFBTyxXQUFQLENBREY7QUFMRjtBQVFJLGlCQUFPLEVBQVAsQ0FERjtBQVBGLE9BRnNCO0tBQU4sUUFhbEIsZ0JBQWdCLFlBQU07d0JBQ2EsTUFBSyxL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RHVCLEVBQ25CLFNBRG1CLEVBQ1IsU0FEUSxFQUNHLE9BREgsQ0FBaEIsQ0FBVDtBQUdBLFlBQVUsT0FwRGEsU0FvRGIsQ0FBVSxJQUFWO0FBQ1YsVUFBUSxPQXJEZSxTQXFEZixDQUFVLElBQVY7QUFDUixjQUFZLE9BdERXLFNBc0RYLENBQVUsSUFBVjtBQUNaLGlCQUFlLE9BdkRRLFNBdURSLENBQVUsSUFBVjtBQUNmLG9CQUFrQixPQXhESyxTQXdETCxDQUFVLEtBQVYsQ0FBZ0IsQ0FDaEMsU0FEZ0MsRUFDckIsS0FEcUIsRUFDZCxRQURjLENBQWhCLENBQWxCO0FBR0EsWUFBVSxPQTNEYSxTQTJEYixDQUFVLElBQVY7OztBQXVIZCxPQUFPLE9BQVAsR0FBaUIsY0FBakIiLCJmaWxlIjoiRGF0ZVRpbWVQaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2VvbmFzZGFuLWJvb3RzdHJhcC1kYXRldGltZXBpY2tlci9zcmMvanMvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyLmpzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgRGF0ZVRpbWVQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGljb25UeXBlOiAnY2FsZW5kYXInLFxuICAgIHZpZXdNb2RlOiAnZGF5cycsXG4gICAgYWxsb3dJbnB1dFRvZ2dsZTogZmFsc2UsXG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIGhhc0ZlZWRiYWNrOiBmYWxzZSxcbiAgICBjYWxlbmRhcldlZWtzOiBmYWxzZSxcbiAgICB0b29sYmFyUGxhY2VtZW50OiAnZGVmYXVsdCdcbiAgfTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGljb25UeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGljb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICAncmlnaHQnLFxuICAgICAgJ2xlZnQnXG4gICAgXSksXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtaW5EYXRlOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgICBdKVxuICAgICksXG4gICAgbWF4RGF0ZTogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgICAgXSlcbiAgICApLFxuICAgIGRpc2FibGVkRGF0ZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICAgIF0pXG4gICAgKSxcbiAgICBkYXlzT2ZXZWVrRGlzYWJsZWQ6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm51bWJlclxuICAgICksXG4gICAgdmlld01vZGU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICAnZGVjYWRlcycsICd5ZWFycycsICdtb250aHMnLCAnZGF5cydcbiAgICBdKSxcbiAgICBhbGxvd0lucHV0VG9nZ2xlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYXNGZWVkYmFjazogUHJvcFR5cGVzLmJvb2wsXG4gICAgYnNTdHlsZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICcnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2Vycm9yJ1xuICAgIF0pLFxuICAgIGdldFZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNpZGVCeVNpZGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGNhbGVuZGFyV2Vla3M6IFByb3BUeXBlcy5ib29sLFxuICAgIHRvb2xiYXJQbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICAnZGVmYXVsdCcsICd0b3AnLCAnYm90dG9tJ1xuICAgIF0pLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuICBzdGF0ZSA9IHRoaXMucHJvcHM7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgbG9jYWxlLFxuICAgICAgZm9ybWF0LFxuICAgICAgZGlzYWJsZWREYXRlcyxcbiAgICAgIGRheXNPZldlZWtEaXNhYmxlZCxcbiAgICAgIHZpZXdNb2RlLFxuICAgICAgYWxsb3dJbnB1dFRvZ2dsZSxcbiAgICAgIGdldFZhbHVlLFxuICAgICAgbWluRGF0ZSxcbiAgICAgIG1heERhdGUsXG4gICAgICBpY29uLFxuICAgICAgaW5saW5lLFxuICAgICAgc2lkZUJ5U2lkZSxcbiAgICAgIGNhbGVuZGFyV2Vla3MsXG4gICAgICB0b29sYmFyUGxhY2VtZW50XG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGxvY2FsZSxcbiAgICAgIGZvcm1hdCxcbiAgICAgIGRpc2FibGVkRGF0ZXMsXG4gICAgICBkYXlzT2ZXZWVrRGlzYWJsZWQsXG4gICAgICB2aWV3TW9kZSxcbiAgICAgIGFsbG93SW5wdXRUb2dnbGU6IGljb24gPT09IHVuZGVmaW5lZCAmJiBhbGxvd0lucHV0VG9nZ2xlID09PSBmYWxzZSA/IHRydWUgOiBhbGxvd0lucHV0VG9nZ2xlLFxuICAgICAgbWluRGF0ZSxcbiAgICAgIG1heERhdGUsXG4gICAgICBpbmxpbmUsXG4gICAgICBzaWRlQnlTaWRlLFxuICAgICAgY2FsZW5kYXJXZWVrcyxcbiAgICAgIHRvb2xiYXJQbGFjZW1lbnRcbiAgICB9O1xuICAgIGlmIChnZXRWYWx1ZSkge1xuICAgICAgalF1ZXJ5KGAjJHtpZH1gKS5kYXRldGltZXBpY2tlcihvcHRpb25zKS5vbignZHAuY2hhbmdlJywgdGhpcy5oYW5kbGVHZXRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeShgIyR7aWR9YCkuZGF0ZXRpbWVwaWNrZXIob3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIHNldFJlZiA9IChyZWYpID0+IHtcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHJlZjtcbiAgfTtcbiAgaGFuZGxlR2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZ2V0VmFsdWUodGhpcy5jb21wb25lbnRSZWYudmFsdWUpO1xuICB9O1xuICBpY29uU2V0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBpY29uVHlwZSwgaWNvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgcG9zaXRpb24gPT09IGljb246XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J2dseXBoaWNvbiBnbHlwaGljb24tJyArIGljb25UeXBlfT48L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuICBzZXRCc1N0eWxlR3JvdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBic1N0eWxlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHN3aXRjaCAoYnNTdHlsZSkge1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHJldHVybiAnaGFzLXN1Y2Nlc3MnO1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHJldHVybiAnaGFzLXdhcm5pbmcnO1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICByZXR1cm4gJ2hhcy1lcnJvcic7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9O1xuICBoYW5kbGVCc1N0eWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYnNTdHlsZSwgaGFzRmVlZGJhY2sgfSA9IHRoaXMuc3RhdGU7XG4gICAgc3dpdGNoIChic1N0eWxlKSB7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgcmV0dXJuIGhhc0ZlZWRiYWNrID8gPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGZvcm0tY29udHJvbC1mZWVkYmFjayBnbHlwaGljb24tb2tcIi8+IDogbnVsbDtcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICByZXR1cm4gaGFzRmVlZGJhY2sgPyA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZm9ybS1jb250cm9sLWZlZWRiYWNrIGdseXBoaWNvbi13YXJuaW5nLXNpZ25cIi8+IDogbnVsbDtcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgcmV0dXJuIGhhc0ZlZWRiYWNrID8gPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGZvcm0tY29udHJvbC1mZWVkYmFjayBnbHlwaGljb24tcmVtb3ZlXCIvPiA6IG51bGw7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gaGFzRmVlZGJhY2sgPyA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZm9ybS1jb250cm9sLWZlZWRiYWNrXCIvPiA6IG51bGw7XG4gICAgfVxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGFiZWwsXG4gICAgICBoZWxwLFxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgaGFzRmVlZGJhY2ssXG4gICAgICBpY29uXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbGFiZWxUZXh0ID0gKGxhYmVsKSA/IDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj17aWR9PntsYWJlbH08L2xhYmVsPiA6IG51bGw7XG4gICAgY29uc3QgZGl2RmVlZGJhY2sgPSAoaGFzRmVlZGJhY2spID8gJ2Zvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrJyA6ICdmb3JtLWdyb3VwJztcbiAgICBjb25zdCBjbGFzc0lucHV0ID0gaWNvbiA9PT0gdW5kZWZpbmVkID8gJ2NvbC14cy0xMicgOiAnaW5wdXQtZ3JvdXAnO1xuICAgIGNvbnN0IGRpdkJzU3R5bGUgPSB0aGlzLnNldEJzU3R5bGVHcm91cCgpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17aWR9IGNsYXNzTmFtZT17ZGl2RmVlZGJhY2sgKyAnICcgKyBkaXZCc1N0eWxlfT5cbiAgICAgICAge2xhYmVsVGV4dH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzSW5wdXR9IGlkPXtpZH0+XG4gICAgICAgICAge3RoaXMuaWNvblNldCgnbGVmdCcpfVxuICAgICAgICAgIDxpbnB1dCByZWY9e3RoaXMuc2V0UmVmfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIG5hbWU9e25hbWV9IHJlcXVpcmVkPXtyZXF1aXJlZH0gZGlzYWJsZWQ9e2Rpc2FibGVkfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAge3RoaXMuaWNvblNldCgncmlnaHQnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLmhhbmRsZUJzU3R5bGUoKX1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVscC1ibG9ja1wiPlxuICAgICAgICAgIHtoZWxwfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0ZVRpbWVQaWNrZXI7XG4iXX0=