"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Max extends Rule_1.default {
    constructor(max) {
        super();
        this.max = parseInt(max);
        this.failed(`:field cannot be greater than ${max} in value.`);
    }
    validationMessage(value) {
        return parseInt(value) > this.max ? this.getErrorMessage() : false;
    }
    toString() {
        return 'max';
    }
}
exports.Max = Max;
exports.default = Max;
