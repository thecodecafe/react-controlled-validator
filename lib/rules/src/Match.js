"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
const lodash_1 = require("lodash");
class Match extends Rule_1.default {
    constructor(form, first) {
        super();
        this.first = first;
        this.form = form;
        this.failed(`:field does not match ${lodash_1.startCase(first)}.`);
    }
    valid(value) {
        return value === this.form[this.first] || this.getError();
    }
    toString() {
        return 'match';
    }
}
exports.Match = Match;
//# sourceMappingURL=Match.js.map