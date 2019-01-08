"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsBetween extends Rule_1.default {
    constructor(min, max) {
        super();
        this.min = parseInt(min);
        this.max = parseInt(max);
        this.failed(`:field must be greater than or equal to ${min} and less than or equal to ${max}.`);
    }
    validationMessage(value) {
        if (typeof value === 'number') {
            return value < this.min || value > this.max ? this.getErrorMessage() : false;
        }
        if (typeof value === 'string') {
            return value.length < this.min || value.length > this.max ? this.getErrorMessage() : false;
        }
        return false;
    }
    toString() {
        return 'is between';
    }
}
exports.IsBetween = IsBetween;
exports.default = IsBetween;
