import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import assign from 'react/lib/Object.assign';
import 'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js';
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css';
import Validator from '../validators/dateValidator';

export default (ComposedComponent) => {
    @Validator class DateComponent extends ComposedComponent {
        constructor(props) {
            super(props);
        }
        static propTypes = {
            id: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            label: React.PropTypes.string,
            placeholder: React.PropTypes.string,
            help: React.PropTypes.string,
            addonBefore: React.PropTypes.string,
            addonAfter: React.PropTypes.string,
            disabled: React.PropTypes.bool.isRequired,
            required: React.PropTypes.bool.isRequired,
            hasFeedback: React.PropTypes.bool,
            validateForCard: React.PropTypes.bool,
            hasError: React.PropTypes.bool,
            checkError: React.PropTypes.func,
            type: React.PropTypes.oneOf([
                'date'
            ]).isRequired,
            bsStyle: React.PropTypes.oneOf(['success', 'warning', 'error']),
            options: React.PropTypes.shape({
                format: React.PropTypes.string,
                disabledTimeIntervals: React.PropTypes.bool,
                allowInputToggle: React.PropTypes.bool
            }),
            divClassName: React.PropTypes.string
        }
        state = {...this.props}
        componentWillMount() {
            const icon = this.handleIcon();
            assign(icon);
            this.setState(icon);
        }
        shouldComponentUpdate(nextProps, nextState) {
            switch (true) {
                case nextState.bsStyle !== this.state.bsStyle:
                case nextState.hasError !== this.state.hasError:
                    return true;
                default:
                    return false;
            }
        }
        componentWillUpdate(nextProps, nextState) {
            const icon = this.handleIcon();
            this.handleCheckError(nextState.name, nextState.hasError);
            assign(nextState, icon);
            this.setState(nextState);
        }
        handleCheckError = (name, status) => {
            this.props.checkError(name, status);
        }
        handleIcon = () => {
            let {addonBefore, addonAfter} = this.state;
            if (typeof addonBefore !== 'undefined' && typeof addonBefore !== 'object') {
                if (typeof addonBefore === 'string' && addonBefore.search(`glyphicon-`) !== -1) {
                    let iconBefore = addonBefore.replace('glyphicon-', '');
                    addonBefore = (
                        <span className="input-group-addon" aria-hidden="true">
                            <Glyphicon glyph={iconBefore}/>
                        </span>
                    );
                } else {
                    addonBefore = (addonBefore) ? addonBefore : null;
                }
            }
            if (typeof addonAfter !== 'undefined' && typeof addonAfter !== 'object') {
                if (addonAfter.search('glyphicon-') !== -1) {
                    let iconAfter = addonAfter.replace('glyphicon-', '');
                    addonAfter = (
                        <span className="input-group-addon" aria-hidden="true">
                            <Glyphicon glyph={iconAfter}/>
                        </span>
                    );
                } else {
                    addonAfter = (addonAfter) ? addonAfter : null;
                }
            }
            return {addonBefore, addonAfter};
        }
        handleValidation = (e) => {
            const {validateForCard, options} = this.state;
            const date = e.date;
            const objValidation = this.onValidation(date, options.format, validateForCard);
            this.setState(objValidation);
        }
        render() {
            const {id, ...propsComp} = this.state;
            return (
                <ComposedComponent refs={id} onBlur={this.handleValidation} onChange={this.handleValidation} {...this.props} {...this.state}/>
            );
        }
    }
    return DateComponent;
};
