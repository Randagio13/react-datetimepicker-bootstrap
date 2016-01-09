'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js');

var _react = require('react');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = React.createElement('span', { className: 'glyphicon form-control-feedback glyphicon-ok' });

var _ref2 = React.createElement('span', { className: 'glyphicon form-control-feedback glyphicon-warning-sign' });

var _ref3 = React.createElement('span', { className: 'glyphicon form-control-feedback glyphicon-remove' });

var _ref4 = React.createElement('span', { className: 'glyphicon form-control-feedback' });

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
                    return React.createElement(
                        'span',
                        { className: 'input-group-addon' },
                        React.createElement('span', { className: 'glyphicon glyphicon-' + iconType })
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

            var labelText = label ? React.createElement(
                'label',
                { className: 'control-label', htmlFor: id },
                label
            ) : null;
            var divFeedback = hasFeedback ? 'form-group has-feedback' : 'form-group';
            var classInput = icon === undefined ? 'col-xs-12' : 'input-group';
            var divBsStyle = this.setBsStyleGroup();
            return React.createElement(
                'div',
                { key: id, className: divFeedback + ' ' + divBsStyle },
                labelText,
                React.createElement(
                    'div',
                    { className: classInput, id: id },
                    this.iconSet('left'),
                    React.createElement('input', { ref: this.setRef, className: 'form-control', type: 'text', name: name, required: required, disabled: disabled, placeholder: placeholder }),
                    this.iconSet('right')
                ),
                this.handleBsStyle(),
                React.createElement(
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
    id: React.PropTypes.string.isRequired,
    iconType: React.PropTypes.string,
    icon: React.PropTypes.oneOf(['right', 'left']),
    placeholder: React.PropTypes.string,
    locale: React.PropTypes.string,
    format: React.PropTypes.string,
    minDate: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object])),
    maxDate: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object])),
    disabledDates: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object])),
    daysOfWeekDisabled: React.PropTypes.arrayOf(React.PropTypes.number),
    viewMode: React.PropTypes.oneOf(['decades', 'years', 'months', 'days']),
    allowInputToggle: React.PropTypes.bool,
    hasFeedback: React.PropTypes.bool,
    bsStyle: React.PropTypes.oneOf(['', 'success', 'warning', 'error']),
    getValue: React.PropTypes.func,
    inline: React.PropTypes.bool,
    sideBySide: React.PropTypes.bool,
    calendarWeeks: React.PropTypes.bool,
    toolbarPlacement: React.PropTypes.oneOf(['default', 'top', 'bottom']),
    disabled: React.PropTypes.bool
};

module.exports = DateTimePicker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnQvRGF0ZVRpbWVQaWNrZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBeUlxQyw4QkFBTSxTQUFTLEVBQUMsOENBQThDLEdBQUU7O1lBRWhFLDhCQUFNLFNBQVMsRUFBQyx3REFBd0QsR0FBRTs7WUFFMUUsOEJBQU0sU0FBUyxFQUFDLGtEQUFrRCxHQUFFOztZQUVwRSw4QkFBTSxTQUFTLEVBQUMsaUNBQWlDLEdBQUU7O0lBM0lsRixjQUFjO2NBQWQsY0FBYzs7YUFBZCxjQUFjOzs7Ozs4QkFBZCxjQUFjOzs7Ozs7d0hBQWQsY0FBYywwRUEwRGhCLEtBQUssR0FBRyxNQUFLLEtBQUssUUF1Q2xCLE1BQU0sR0FBRyxVQUFDLEdBQUcsRUFBSztBQUNkLGtCQUFLLFlBQVksR0FBRyxHQUFHLENBQUM7U0FDM0IsUUFDRCxjQUFjLEdBQUcsWUFBTTtBQUNuQixtQkFBTyxNQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBSyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkQsUUFDRCxPQUFPLEdBQUcsVUFBQyxRQUFRLEVBQUs7OEJBQ0ssTUFBSyxLQUFLO2dCQUE1QixRQUFRLGVBQVIsUUFBUTtnQkFBRSxJQUFJLGVBQUosSUFBSTs7QUFDckIsb0JBQVEsSUFBSTtBQUNSLHFCQUFLLFFBQVEsS0FBSyxJQUFJO0FBQ2xCLDJCQUNJOzswQkFBTSxTQUFTLEVBQUMsbUJBQW1CO3dCQUMvQiw4QkFBTSxTQUFTLEVBQUUsc0JBQXNCLEdBQUcsUUFBUSxBQUFDLEdBQVE7cUJBQ3hELENBQ1Q7QUFBQSxBQUNOO0FBQ0ksMkJBQU8sSUFBSSxDQUFDO0FBQUEsYUFDbkI7U0FDSixRQUNELGVBQWUsR0FBRyxZQUFNO2dCQUNiLE9BQU8sR0FBSSxNQUFLLEtBQUssQ0FBckIsT0FBTzs7QUFDZCxvQkFBUSxPQUFPO0FBQ1gscUJBQUssU0FBUztBQUNWLDJCQUFPLGFBQWEsQ0FBQztBQUFBLEFB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LFNBQVMsQ0FBQyxJQUFJO0FBQ2pDLFdBQU8sRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUMzQixFQUFFLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQ3BDLENBQUM7QUFDRixZQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0FBQzlCLFVBQU0sRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDNUIsY0FBVSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNoQyxpQkFBYSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUNuQyxvQkFBZ0IsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUNwQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FDN0IsQ0FBQztBQUNGLFlBQVEsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUk7Q0FDakM7O0FBNEdMLE1BQU0sQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDIiwiZmlsZSI6IkRhdGVUaW1lUGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdlb25hc2Rhbi1ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXIvc3JjL2pzL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci5qcyc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBEYXRlVGltZVBpY2tlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaWNvblR5cGU6ICdjYWxlbmRhcicsXG4gICAgICAgIHZpZXdNb2RlOiAnZGF5cycsXG4gICAgICAgIGFsbG93SW5wdXRUb2dnbGU6IGZhbHNlLFxuICAgICAgICBsb2NhbGU6ICdlbicsXG4gICAgICAgIGhhc0ZlZWRiYWNrOiBmYWxzZSxcbiAgICAgICAgY2FsZW5kYXJXZWVrczogZmFsc2UsXG4gICAgICAgIHRvb2xiYXJQbGFjZW1lbnQ6ICdkZWZhdWx0J1xuICAgIH07XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgaWNvblR5cGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGljb246IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbXG4gICAgICAgICAgICAncmlnaHQnLFxuICAgICAgICAgICAgJ2xlZnQnXG4gICAgICAgIF0pLFxuICAgICAgICBwbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbG9jYWxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBmb3JtYXQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG1pbkRhdGU6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgICAgICAgUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG4gICAgICAgICAgICBdKVxuICAgICAgICApLFxuICAgICAgICBtYXhEYXRlOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgICAgICAgIFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgICAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICAgICAgUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxuICAgICAgICAgICAgXSlcbiAgICAgICAgKSxcbiAgICAgICAgZGlzYWJsZWREYXRlczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgICAgICBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICAgICAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgICAgICAgIFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgICAgICAgICAgIF0pXG4gICAgICAgICksXG4gICAgICAgIGRheXNPZldlZWtEaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG4gICAgICAgICksXG4gICAgICAgIHZpZXdNb2RlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoW1xuICAgICAgICAgICAgJ2RlY2FkZXMnLCAneWVhcnMnLCAnbW9udGhzJywgJ2RheXMnXG4gICAgICAgIF0pLFxuICAgICAgICBhbGxvd0lucHV0VG9nZ2xlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgaGFzRmVlZGJhY2s6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgICBic1N0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoW1xuICAgICAgICAgICAgJycsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InXG4gICAgICAgIF0pLFxuICAgICAgICBnZXRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGlubGluZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHNpZGVCeVNpZGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgICBjYWxlbmRhcldlZWtzOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgdG9vbGJhclBsYWNlbWVudDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICAgICAgICdkZWZhdWx0JywgJ3RvcCcsICdib3R0b20nXG4gICAgICAgIF0pLFxuICAgICAgICBkaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuICAgIHN0YXRlID0gdGhpcy5wcm9wcztcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICBmb3JtYXQsXG4gICAgICAgICAgICBkaXNhYmxlZERhdGVzLFxuICAgICAgICAgICAgZGF5c09mV2Vla0Rpc2FibGVkLFxuICAgICAgICAgICAgdmlld01vZGUsXG4gICAgICAgICAgICBhbGxvd0lucHV0VG9nZ2xlLFxuICAgICAgICAgICAgZ2V0VmFsdWUsXG4gICAgICAgICAgICBtaW5EYXRlLFxuICAgICAgICAgICAgbWF4RGF0ZSxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBpbmxpbmUsXG4gICAgICAgICAgICBzaWRlQnlTaWRlLFxuICAgICAgICAgICAgY2FsZW5kYXJXZWVrcyxcbiAgICAgICAgICAgIHRvb2xiYXJQbGFjZW1lbnRcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICBmb3JtYXQsXG4gICAgICAgICAgICBkaXNhYmxlZERhdGVzLFxuICAgICAgICAgICAgZGF5c09mV2Vla0Rpc2FibGVkLFxuICAgICAgICAgICAgdmlld01vZGUsXG4gICAgICAgICAgICBhbGxvd0lucHV0VG9nZ2xlOiBpY29uID09PSB1bmRlZmluZWQgJiYgYWxsb3dJbnB1dFRvZ2dsZSA9PT0gZmFsc2UgPyB0cnVlIDogYWxsb3dJbnB1dFRvZ2dsZSxcbiAgICAgICAgICAgIG1pbkRhdGUsXG4gICAgICAgICAgICBtYXhEYXRlLFxuICAgICAgICAgICAgaW5saW5lLFxuICAgICAgICAgICAgc2lkZUJ5U2lkZSxcbiAgICAgICAgICAgIGNhbGVuZGFyV2Vla3MsXG4gICAgICAgICAgICB0b29sYmFyUGxhY2VtZW50XG4gICAgICAgIH07XG4gICAgICAgIGlmIChnZXRWYWx1ZSkge1xuICAgICAgICAgICAgalF1ZXJ5KGAjJHtpZH1gKS5kYXRldGltZXBpY2tlcihvcHRpb25zKS5vbignZHAuY2hhbmdlJywgdGhpcy5oYW5kbGVHZXRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqUXVlcnkoYCMke2lkfWApLmRhdGV0aW1lcGlja2VyKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFJlZiA9IChyZWYpID0+IHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSByZWY7XG4gICAgfTtcbiAgICBoYW5kbGVHZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZ2V0VmFsdWUodGhpcy5jb21wb25lbnRSZWYudmFsdWUpO1xuICAgIH07XG4gICAgaWNvblNldCA9IChwb3NpdGlvbikgPT4ge1xuICAgICAgICBjb25zdCB7aWNvblR5cGUsIGljb259ID0gdGhpcy5wcm9wcztcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIHBvc2l0aW9uID09PSBpY29uOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydnbHlwaGljb24gZ2x5cGhpY29uLScgKyBpY29uVHlwZX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNldEJzU3R5bGVHcm91cCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge2JzU3R5bGV9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgc3dpdGNoIChic1N0eWxlKSB7XG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hhcy1zdWNjZXNzJztcbiAgICAgICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaGFzLXdhcm5pbmcnO1xuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaGFzLWVycm9yJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBoYW5kbGVCc1N0eWxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7YnNTdHlsZSwgaGFzRmVlZGJhY2t9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgc3dpdGNoIChic1N0eWxlKSB7XG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzRmVlZGJhY2sgPyA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZm9ybS1jb250cm9sLWZlZWRiYWNrIGdseXBoaWNvbi1va1wiLz4gOiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc0ZlZWRiYWNrID8gPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGZvcm0tY29udHJvbC1mZWVkYmFjayBnbHlwaGljb24td2FybmluZy1zaWduXCIvPiA6IG51bGw7XG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc0ZlZWRiYWNrID8gPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGZvcm0tY29udHJvbC1mZWVkYmFjayBnbHlwaGljb24tcmVtb3ZlXCIvPiA6IG51bGw7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNGZWVkYmFjayA/IDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIi8+IDogbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7bGFiZWwsIGhlbHAsIGlkLCBuYW1lLCBwbGFjZWhvbGRlciwgZGlzYWJsZWQsIHJlcXVpcmVkLCBoYXNGZWVkYmFjaywgaWNvbn0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBsYWJlbFRleHQgPSAobGFiZWwpID8gPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPXtpZH0+e2xhYmVsfTwvbGFiZWw+IDogbnVsbDtcbiAgICAgICAgY29uc3QgZGl2RmVlZGJhY2sgPSAoaGFzRmVlZGJhY2spID8gJ2Zvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrJyA6ICdmb3JtLWdyb3VwJztcbiAgICAgICAgY29uc3QgY2xhc3NJbnB1dCA9IGljb24gPT09IHVuZGVmaW5lZCA/ICdjb2wteHMtMTInIDogJ2lucHV0LWdyb3VwJztcbiAgICAgICAgY29uc3QgZGl2QnNTdHlsZSA9IHRoaXMuc2V0QnNTdHlsZUdyb3VwKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aWR9IGNsYXNzTmFtZT17ZGl2RmVlZGJhY2sgKyAnICcgKyBkaXZCc1N0eWxlfT5cbiAgICAgICAgICAgICAgICB7bGFiZWxUZXh0fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0lucHV0fSBpZD17aWR9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5pY29uU2V0KCdsZWZ0Jyl9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e3RoaXMuc2V0UmVmfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIG5hbWU9e25hbWV9IHJlcXVpcmVkPXtyZXF1aXJlZH0gZGlzYWJsZWQ9e2Rpc2FibGVkfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmljb25TZXQoJ3JpZ2h0Jyl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMuaGFuZGxlQnNTdHlsZSgpfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlbHAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAge2hlbHB9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGVUaW1lUGlja2VyO1xuIl19