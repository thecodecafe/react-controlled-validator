"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsBetween extends Rule_1.default {
    constructor(range) {
        super();
        this.range = range;
    }
    validationMessage(value) {
        if (typeof this.range !== 'string')
            return false;
        let rangeArr = this.range.split(',');
        if (rangeArr.length !== 2)
            return false;
        let min = parseFloat(rangeArr[0]);
        let max = parseFloat(rangeArr[1]);
        this.failed(`:field must be greater than or equal to ${min} and less than or equal to ${max}.`);
        if (typeof value === 'number')
            return value < min || value > max ? this.getErrorMessage() : false;
        if (typeof value === 'string')
            return value.length < min || value.length > max ? this.getErrorMessage() : false;
        return false;
    }
    toString() {
        return 'is between';
    }
}
exports.IsBetween = IsBetween;
exports.default = IsBetween;
