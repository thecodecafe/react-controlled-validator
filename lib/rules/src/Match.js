"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startCase = require("lodash/startCase");
const Rule_1 = require("../Rule");
class Match extends Rule_1.default {
    constructor(form, first) {
        super();
        this.first = first;
        this.form = form;
        this.failed(`:field does not match ${startCase(first)}.`);
    }
    valid(value) {
        return value === this.form[this.first] || this.getError();
    }
    toString() {
        return 'match';
    }
}
exports.Match = Match;
