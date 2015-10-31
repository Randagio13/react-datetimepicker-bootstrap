import React from 'react';
import jQuery from 'jquery';
import DateComponent from '../../../decorators/component/dateComponent';

@DateComponent
export default class InputDate extends React.Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        type: React.PropTypes.oneOf([
            'date'
        ]).isRequired,
        hasError: React.PropTypes.bool,
        bsStyle: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.object
        ])
    }
    state = {...this.props};
    componentDidMount() {
        const idDatePicker = this.state.id;
        const datePickerOptions = this.state.options;
        jQuery(`#${idDatePicker}`).datetimepicker(datePickerOptions).on('dp.change', this.handleValidation);
    }
    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }
    render() {
        let {bsStyle, addonBefore, addonAfter, hasFeedback, label, ...propsComp} = this.state;
        let divClassName = (hasFeedback) ? 'form-group has-feedback' : 'form-group';
        switch (bsStyle) {
            case 'success':
                divClassName = divClassName.concat(' has-success');
                bsStyle = hasFeedback ? <span className="glyphicon form-control-feedback glyphicon-ok"/> : null;
                break;
            case 'warning':
                divClassName = divClassName.concat(' has-warning');
                bsStyle = hasFeedback ? <span className="glyphicon form-control-feedback glyphicon-warning-sign"/> : null;
                break;
            case 'error':
                divClassName = divClassName.concat(' has-error');
                bsStyle = hasFeedback ? <span className="glyphicon form-control-feedback glyphicon-remove"/> : null;
                break;
            default:
                bsStyle = hasFeedback ? <span className="glyphicon form-control-feedback"/> : null;
        }
        const labelText = (label) ? <label className="control-label" htmlFor={propsComp.id}>{propsComp.label}</label> : null;
        return (
            <div className={divClassName}>
                {labelText}
                <div className="input-group" id={propsComp.id}>
                    {addonBefore}
                    <input ref={propsComp.id} className="form-control" type="text" name={propsComp.name} required={propsComp.required} disabled={propsComp.disabled} placeholder={propsComp.placeholder} />
                    {addonAfter}
                </div>
                {bsStyle}
                <span className="help-block">
                    {propsComp.help}
                </span>
            </div>
        );
    }
}
