"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const lodash_1 = require("lodash");
const ApplyRule_1 = require("../rules/ApplyRule");
const Rule = new ApplyRule_1.ApplyRule;
class Validator extends React.Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
        this.state = { touched: [] };
    }
    componentDidMount() {
        if (this.props.touched) {
            var touched = Object.keys(this.props.form);
            this.setState({ touched: touched });
        }
        this.fireOnChangeCallback();
    }
    componentDidUpdate(prevProps) {
        this.updateTouchedData(prevProps.form, this.props.form);
    }
    render() {
        return true;
    }
    fireOnChangeCallback() {
        var states;
        states = { valid: true, fields: {} };
        var form = this.props.form;
        var messages;
        messages = this.props.messages;
        var fields = Object.keys(form);
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (!form.hasOwnProperty(field)) {
                continue;
            }
            if (!this.props.rules[field] || !messages[field]) {
                continue;
            }
            var validation = this.getDataValidity(field, form[field], this.props.rules[field], messages[field]);
            states.fields[field] = {
                field: field,
                value: form[field],
                touched: this.props.touched.indexOf(field) != -1 ? true : false,
                error: validation.error,
                valid: validation.valid
            };
            if (!validation.valid) {
                states.valid = false;
            }
        }
        if (this.props.onChange) {
            this.props.onChange(states);
        }
    }
    getDataValidity(field, value, rules, messages) {
        var valid = true, error = null, rule, customMessage;
        if (rules && messages) {
            for (var i = 0; i < rules.length; i++) {
                rule = rules[i].split(':');
                var appliedRule = Rule.apply(this.props.form, value, rule[0], rule[1] || '');
                customMessage = typeof messages[field + rule[0]] == 'string'
                    ? messages[field + rule[0]]
                    : typeof appliedRule.error == 'string'
                        ? appliedRule.error : false;
                if (typeof customMessage == 'string') {
                    customMessage = customMessage.replace(':field', field);
                    customMessage = lodash_1.startCase(customMessage);
                }
                valid = appliedRule.error ? false : true;
                error = customMessage;
                break;
            }
        }
        return { error: error, valid: valid };
    }
    updateTouchedData(prevForm, newform) {
        var touched = [...this.state.touched];
        var wasTouched = false;
        if (JSON.stringify(prevForm) !== JSON.stringify(newform)) {
            wasTouched = true;
        }
        for (var field in prevForm) {
            if (prevForm[field] != newform[field] &&
                (this.props.rules[field] && this.props.messages[field])) {
                touched.push(field);
                wasTouched = true;
            }
        }
        if (wasTouched) {
            this.setState({ touched: touched });
            this.fireOnChangeCallback();
        }
    }
    reset() {
        this.setState({ touched: [] });
    }
}
exports.default = Validator;
//# sourceMappingURL=Validator.js.map