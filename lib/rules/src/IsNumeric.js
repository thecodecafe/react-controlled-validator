"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsNumeric extends Rule_1.default {
    constructor() {
        super();
        this.failed(':field must be numeric in value.');
    }
    valid(value) {
        var re = /^[0-9\b]+$/im;
        return re.test(value) || this.getError();
    }
    toString() {
        return 'is numeric';
    }
}
exports.IsNumeric = IsNumeric;
exports.default = IsNumeric;
