"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Max extends Rule_1.default {
    constructor(max) {
        super();
        this.max = parseInt(max);
        this.failed(`:field cannot be greater than ${max} in value.`);
    }
    valid(value) {
        return parseInt(value) <= this.max || this.getError();
    }
    toString() {
        return 'max';
    }
}
exports.Max = Max;
