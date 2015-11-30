'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

require('eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePicker = (function (_React$Component) {
    _inherits(DateTimePicker, _React$Component);

    function DateTimePicker(props) {
        _classCallCheck(this, DateTimePicker);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DateTimePicker).call(this, props));

        _this.state = _this.props;

        _this.setRef = function (ref) {
            _this.componentRef = ref;
        };

        _this.handleGetValue = function () {
            return _this.props.getValue(_this.componentRef.value);
        };

        _this.iconSet = function (position) {
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
        };

        _this.setBsStyleGroup = function () {
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
        };

        _this.handleBsStyle = function () {
            var _this$state = _this.state;
            var bsStyle = _this$state.bsStyle;
            var hasFeedback = _this$state.hasFeedback;

            switch (bsStyle) {
                case 'success':
                    return hasFeedback ? _react2.default.createElement('span', { className: 'glyphicon form-control-feedback glyphicon-ok' }) : null;
                case 'warning':
                    return hasFeedback ? _react2.default.createElement('span', { className: 'glyphicon form-control-feedback glyphicon-warning-sign' }) : null;
                case 'error':
                    return hasFeedback ? _react2.default.createElement('span', { className: 'glyphicon form-control-feedback glyphicon-remove' }) : null;
                default:
                    return hasFeedback ? _react2.default.createElement('span', { className: 'glyphicon form-control-feedback' }) : null;
            }
        };

        return _this;
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
                sideBySide: sideBySide
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
})(_react2.default.Component);

DateTimePicker.defaultProps = {
    iconType: 'calendar',
    viewMode: 'days',
    allowInputToggle: false
};
DateTimePicker.propTypes = {
    id: _react2.default.PropTypes.string.isRequired,
    iconType: _react2.default.PropTypes.string,
    icon: _react2.default.PropTypes.oneOf(['right', 'left', 'icon']),
    placeholder: _react2.default.PropTypes.string,
    locale: _react2.default.PropTypes.string,
    format: _react2.default.PropTypes.string,
    minDate: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object])),
    maxDate: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object])),
    disabledDates: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object])),
    daysOfWeekDisabled: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number),
    viewMode: _react2.default.PropTypes.oneOf(['decades', 'years', 'months', 'days']),
    allowInputToggle: _react2.default.PropTypes.bool,
    hasFeedback: _react2.default.PropTypes.bool,
    bsStyle: _react2.default.PropTypes.oneOf(['', 'success', 'warning', 'error']),
    getValue: _react2.default.PropTypes.func,
    inline: _react2.default.PropTypes.bool,
    sideBySide: _react2.default.PropTypes.bool
};

module.exports = DateTimePicker;