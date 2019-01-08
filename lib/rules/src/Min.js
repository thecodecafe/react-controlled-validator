"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Min extends Rule_1.default {
    constructor(min) {
        super();
        this.min = parseInt(min);
        this.failed(`:field cannot be lesser than ${min} in value.`);
    }
    validionMessage(value) {
        return value < this.min ? this.getErrorMessage() : false;
    }
    toString() {
        return 'min';
    }
}
exports.Min = Min;
exports.default = Min;
