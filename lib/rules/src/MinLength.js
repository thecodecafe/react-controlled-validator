"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class MinLength extends Rule_1.default {
    constructor(minLength) {
        super();
        this.minLength = parseInt(minLength);
        this.failed(`Field cannot be less than ${minLength} in length.`);
    }
    valid(value) {
        return value.length >= this.minLength || this.getError();
    }
    toString() {
        return 'MinLength'.toLowerCase();
    }
}
exports.MinLength = MinLength;
//# sourceMappingURL=MinLength.js.map