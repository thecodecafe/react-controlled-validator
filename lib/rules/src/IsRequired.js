"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsRequired extends Rule_1.default {
    constructor() {
        super();
        this.failed('This field is required.');
    }
    valid(value) {
        if (value == undefined || value == null) {
            return false;
        }
        value = value + '';
        return value.length > 0 || this.getError();
    }
    toString() {
        return 'IsRequired'.toLowerCase();
    }
}
exports.IsRequired = IsRequired;
//# sourceMappingURL=IsRequired.js.map