"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var Validator = (function (_super) {
    __extends(Validator, _super);
    function Validator(props) {
        var _this = _super.call(this, props) || this;
        _this.reset = _this.reset.bind(_this);
        _this.state = { touched: [] };
        return _this;
    }
    Validator.prototype.componentDidMount = function () {
        if (this.props.touched) {
            var touched = Object.keys(this.props.form);
            this.setState({ touched: touched });
        }
        this.fireOnChangeCallback();
    };
    Validator.prototype.componentDidUpdate = function (prevProps) {
        this.updateTouchedData(prevProps.form, this.props.form);
    };
    Validator.prototype.render = function () {
        return true;
    };
    Validator.prototype.fireOnChangeCallback = function () {
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
            var validation = this.getDataValidity(form[field], this.props.rules[field], messages[field]);
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
    };
    Validator.prototype.getDataValidity = function (value, rules, messages) {
        var valid = true, error = null, rule;
        if (rules && messages) {
            for (var i in rules) {
                if (!rules.hasOwnProperty(i)) {
                    continue;
                }
                rule = rules[i];
                if (!rule(value)) {
                    valid = false;
                    error = messages[i];
                    break;
                }
            }
        }
        return { error: error, valid: valid };
    };
    Validator.prototype.updateTouchedData = function (prevForm, newform) {
        var touched = this.state.touched.slice();
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
    };
    Validator.prototype.reset = function () {
        this.setState({ touched: [] });
    };
    return Validator;
}(React.Component));
exports["default"] = Validator;
//# sourceMappingURL=Validator.js.map