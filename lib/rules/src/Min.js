"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Min extends Rule_1.default {
    constructor(min) {
        super();
        this.min = min;
        this.failed(`:field cannot be less than ${min} in value.`);
    }
    validionMessage(value) {
        if (typeof this.min !== 'number')
            return false;
        if (typeof value !== 'number') {
            const rx = /^[0-9\b]+\.?([0-9\b]+)?$/im;
            if (!rx.test(value))
                return false;
        }
        if (typeof value !== 'number')
            value = parseFloat(value);
        return (value < this.min) ? this.getErrorMessage() : false;
    }
    toString() {
        return 'min';
    }
}
exports.Min = Min;
exports.default = Min;
