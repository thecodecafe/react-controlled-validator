"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startCase = require("lodash/startCase");
const Rule_1 = require("../Rule");
class NotMatch extends Rule_1.default {
    constructor(data, first) {
        super();
        this.first = first;
        this.data = data;
        this.failed(`:field must not match ${startCase(first)}.`);
    }
    validationMessage(value) {
        return value === this.data[this.first] ? this.getErrorMessage() : false;
    }
    toString() {
        return 'not match';
    }
}
exports.NotMatch = NotMatch;
exports.default = NotMatch;
