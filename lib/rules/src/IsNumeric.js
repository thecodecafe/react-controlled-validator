"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsNumeric extends Rule_1.default {
    constructor() {
        super();
        this.failed(':field must be numeric in value.');
    }
    validationMessage(value) {
        let re = /^[0-9\b]+\.?([0-9\b]+)?$/im;
        return !re.test(value) ? this.getErrorMessage() : false;
    }
    toString() {
        return 'is numeric';
    }
}
exports.IsNumeric = IsNumeric;
exports.default = IsNumeric;
