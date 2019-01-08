"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsRequired extends Rule_1.default {
    constructor() {
        super();
        this.failed(':field is required.');
    }
    validationMessage(value) {
        if (value == undefined || value == null) {
            return false;
        }
        value = value + '';
        return value.length < 1 ? this.getErrorMessage() : false;
    }
    toString() {
        return 'is required';
    }
}
exports.IsRequired = IsRequired;
exports.default = IsRequired;
