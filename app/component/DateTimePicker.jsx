import 'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js';
import React from 'react';
import jQuery from 'jquery';

class DateTimePicker extends React.Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        iconType: 'calendar',
        viewMode: 'days',
        allowInputToggle: false
    }
    static propTypes = {
        id: React.PropTypes.string.isRequired,
        iconType: React.PropTypes.string,
        icon: React.PropTypes.oneOf([
            'right',
            'left'
        ]),
        placeholder: React.PropTypes.string,
        locale: React.PropTypes.string,
        format: React.PropTypes.string,
        disabledDates: React.PropTypes.arrayOf(
            React.PropTypes.oneOfType([
                React.PropTypes.string,
                React.PropTypes.object
            ])
        ),
        daysOfWeekDisabled: React.PropTypes.arrayOf(
            React.PropTypes.number
        ),
        viewMode: React.PropTypes.oneOf([
            'decades', 'years', 'months', 'days'
        ]),
        allowInputToggle: React.PropTypes.bool,
        hasFeedback: React.PropTypes.bool,
        bsStyle: React.PropTypes.oneOf([
            '', 'success', 'warning', 'error'
        ]),
        getValue: React.PropTypes.func
    }
    state = this.props;
    componentDidMount() {
        const {
            id,
            locale,
            format,
            disabledDates,
            daysOfWeekDisabled,
            viewMode,
            allowInputToggle,
            getValue
        } = this.state;
        const options = {
            locale,
            format,
            disabledDates,
            daysOfWeekDisabled,
            viewMode,
            allowInputToggle
        };
        if (getValue) {
            jQuery(`#${id}`).datetimepicker(options).on('dp.change', this.handleGetValue);
        } else {
            jQuery(`#${id}`).datetimepicker(options);
        }
    }
    setRef = (ref) => {
        this.componentRef = ref;
    }
    handleGetValue = () => {
        return this.props.getValue(this.componentRef.value);
    }
    iconSet = (position) => {
        const {iconType, icon} = this.props;
        switch (true) {
            case position === icon:
                return (
                    <span className="input-group-addon">
                        <span className={'glyphicon glyphicon-' + iconType}></span>
                    </span>
                );
            default:
                return null;
        }
    }
    setBsStyleGroup = () => {
        const {bsStyle} = this.state;
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
    }
    handleBsStyle = () => {
        const {bsStyle, hasFeedback} = this.state;
        switch (bsStyle) {
            case 'success':
                return hasFeedback ? <span className="glyphicon form-control-feedback glyphicon-ok"/> : null;
            case 'warning':
                return hasFeedback ? <span className="glyphicon form-control-feedback glyphicon-warning-sign"/> : null;
            case 'error':
                return hasFeedback ? <span className="glyphicon form-control-feedback glyphicon-remove"/> : null;
            default:
                return hasFeedback ? <span className="glyphicon form-control-feedback"/> : null;
        }
    }
    render() {
        const {label, help, id, name, placeholder, disabled, required, hasFeedback} = this.state;
        const labelText = (label) ? <label className="control-label" htmlFor={id}>{label}</label> : null;
        const divFeedback = (hasFeedback) ? 'form-group has-feedback' : 'form-group';
        const divBsStyle = this.setBsStyleGroup();
        return (
            <div key={id} className={divFeedback + ' ' + divBsStyle}>
                {labelText}
                <div className="input-group" id={id}>
                    {this.iconSet('left')}
                    <input ref={this.setRef} className="form-control" type="text" name={name} required={required} disabled={disabled} placeholder={placeholder} />
                    {this.iconSet('right')}
                </div>
                {this.handleBsStyle()}
                <span className="help-block">
                    {help}
                </span>
            </div>
        );
    }
}

export default DateTimePicker;
