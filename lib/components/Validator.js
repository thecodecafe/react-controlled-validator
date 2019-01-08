"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const startCase = require("lodash/startCase");
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
            var touched = Object.keys(this.props.data);
            this.setState({ touched: touched });
        }
        this.fireOnChangeCallback();
    }
    componentDidUpdate(prevProps) {
        this.updateTouchedData(prevProps.data, this.props.data);
    }
    render() {
        return true;
    }
    fireOnChangeCallback() {
        var states;
        states = { valid: true, fields: {} };
        var data = this.props.data;
        var messages;
        messages = this.props.messages;
        var fields = Object.keys(data);
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (!data.hasOwnProperty(field)) {
                continue;
            }
            if (!this.props.rules[field] || !messages[field]) {
                continue;
            }
            var validation = this.getDataValidity(field, data[field], this.props.rules[field], messages[field]);
            states.fields[field] = {
                field: field,
                value: data[field],
                touched: this.props.touched.indexOf(field) != -1 ? true : false,
                error: validation.error,
            };
            if (!validation.error)
                states.valid = false;
        }
        if (this.props.onChange) {
            this.props.onChange(states);
        }
    }
    getDataValidity(field, value, rules, messages) {
        var error = null, rule, customMessage;
        if (rules && messages) {
            for (var i = 0; i < rules.length; i++) {
                rule = rules[i].split(':');
                var appliedRule = Rule.apply(this.props.data, value, rule[0], rule[1] || '');
                if (rule[0] == 'sometimes' && appliedRule.error == false) {
                    error = false;
                    break;
                }
                if (typeof appliedRule.error == 'string') {
                    customMessage = typeof messages[field + rule[0]] == 'string'
                        ? messages[field + rule[0]]
                        : appliedRule.error;
                }
                if (typeof customMessage == 'string') {
                    customMessage = customMessage.replace(':field', field);
                    customMessage = startCase(customMessage);
                }
                error = customMessage || false;
                break;
            }
        }
        return { error: error };
    }
    updateTouchedData(prevData, newData) {
        var touched = [...this.state.touched];
        var wasTouched = false;
        if (JSON.stringify(prevData) !== JSON.stringify(newData)) {
            wasTouched = true;
        }
        for (var field in prevData) {
            if (prevData[field] != newData[field] &&
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
exports.Validator = Validator;
exports.default = Validator;
