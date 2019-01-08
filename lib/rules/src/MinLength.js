"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class MinLength extends Rule_1.default {
    constructor(minLength) {
        super();
        this.minLength = parseInt(minLength);
        this.failed(`:field cannot be less than ${minLength} in length.`);
    }
    validationMessage(value) {
        return value.length < this.minLength ? this.getErrorMessage() : false;
    }
    toString() {
        return 'min length';
    }
}
exports.MinLength = MinLength;
exports.default = MinLength;
