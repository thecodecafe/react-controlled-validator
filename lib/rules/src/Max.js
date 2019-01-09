"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Max extends Rule_1.default {
    constructor(max) {
        super();
        this.max = max;
        this.failed(`:field cannot be more than ${max} in value.`);
    }
    validionMessage(value) {
        if (typeof this.max !== "number")
            return false;
        if (typeof value !== "number") {
            let rx = /^[0-9\b]+\.?([0-9\b]+)?$/im;
            if (!rx.test(value))
                return false;
        }
        if (typeof value !== "number")
            value = parseFloat(value);
        return value > this.max ? this.getErrorMessage() : false;
    }
    toString() {
        return "max";
    }
}
exports.Max = Max;
exports.default = Max;
