// import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css';
import 'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js';
import React from 'react';
import jQuery from 'jquery';
import Perf from 'react-addons-perf';
window.Perf = Perf;
Perf.start();

class DateTimePicker extends React.Component {
    constructor(props) {
        super(props);
    }
    state = this.props;
    componentDidMount() {
        const {id} = this.state;
        // const datePickerOptions = this.state.options;
        // jQuery(`#${id}`).datetimepicker(datePickerOptions).on('dp.change', this.handleValidation);
        jQuery(`#${id}`).datetimepicker();
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.placeholder !== this.state.placeholder;
    }
    handleClick = () => {
        this.setState({
            placeholder: 'Ciao'
        });
    }
    handleBsStyle = () => {
        // let divClassName = (hasFeedback) ? 'form-group has-feedback' : 'form-group';
        // switch (bsStyle) {
        //     case 'success':
        //         divClassName = divClassName.concat(' has-success');
        //         bsStyle = hasFeedback ? <span className="glyphicon form-control-feedback glyphicon-ok"/> : null;
        //         break;
        //     case 'warning':
        //         divClassName = divClassName.concat(' has-warning');
        //         bsStyle = hasFeedback ? <span className="glyphicon form-control-feedback glyphicon-warning-sign"/> : null;
        //         break;
        //     case 'error':
        //         divClassName = divClassName.concat(' has-error');
        //         bsStyle = hasFeedback ? <span className="glyphicon form-control-feedback glyphicon-remove"/> : null;
        //         break;
        //     default:
        //         bsStyle = hasFeedback ? <span className="glyphicon form-control-feedback"/> : null;
        // }
        return '';
    }
    render() {
        Perf.printInclusive(
            Perf.getLastMeasurements()
        );
        const {label, help, id, name, placeholder, disabled, required} = this.state;
        const labelText = (label) ? <label className="control-label" htmlFor={id}>{label}</label> : null;
        const divClassName = this.handleBsStyle();
        return (
            <div className={divClassName}>
                {labelText}
                <div className="input-group" id={id}>
                    {
                        // TODO: addonBefore Icon
                    }
                    <input ref={id} className="form-control" type="text" name={name} required={required} disabled={disabled} placeholder={placeholder} onClick={this.handleClick} />
                    {
                        // TODO: addonAfter Icon
                    }
                </div>
                {
                    // TODO: bsStyle
                }
                <span className="help-block">
                    {help}
                </span>
            </div>
        );
    }
}

export default DateTimePicker;
