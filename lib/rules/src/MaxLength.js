"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class MaxLength extends Rule_1.default {
    constructor(maxLength) {
        super();
        this.maxLength = parseInt(maxLength);
        this.failed(`Field cannot be greater than ${maxLength} in length.`);
    }
    valid(value) {
        return value.length <= this.maxLength || this.getError();
    }
    toString() {
        return 'MaxLength'.toLowerCase();
    }
}
exports.MaxLength = MaxLength;
//# sourceMappingURL=MaxLength.js.map