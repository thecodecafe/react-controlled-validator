"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class MaxLength extends Rule_1.default {
    constructor(maxLength) {
        super();
        this.maxLength = parseInt(maxLength);
        this.failed(`:field cannot be more than ${maxLength} characters long.`);
    }
    validationMessage(value) {
        if (typeof this.maxLength !== 'number')
            return false;
        if (typeof value !== 'string')
            return false;
        return value.length > this.maxLength ? this.getErrorMessage() : false;
    }
    toString() {
        return 'max length';
    }
}
exports.MaxLength = MaxLength;
exports.default = MaxLength;
