"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startCase = require("lodash/startCase");
const isEqual = require("lodash/isEqual");
const Rule_1 = require("../Rule");
class Matches extends Rule_1.default {
    constructor(data, first) {
        super();
        this.first = first;
        this.data = data;
        this.failed(`:field does not match ${startCase(first)}.`);
    }
    validationMessage(value) {
        if (!this.data)
            return false;
        if (!this.first)
            return false;
        return !isEqual(value, this.data[this.first]) ? this.getErrorMessage() : false;
    }
    toString() {
        return 'matches';
    }
}
exports.Matches = Matches;
exports.default = Matches;
