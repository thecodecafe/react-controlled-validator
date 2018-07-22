"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsNumeric extends Rule_1.default {
    constructor() {
        super();
        this.failed('This field is required.');
    }
    valid(value) {
        var re = /^[0-9\b]+$/im;
        return re.test(value) || this.getError();
    }
    toString() {
        return 'IsNumeric'.toLowerCase();
    }
}
exports.IsNumeric = IsNumeric;
//# sourceMappingURL=IsNumeric.js.map