"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const Rule_1 = require("../Rule");
class NotMatch extends Rule_1.default {
    constructor(form, first) {
        super();
        this.first = first;
        this.form = form;
        this.failed(`:field does not match ${lodash_1.startCase(first)}.`);
    }
    valid(value) {
        return value !== this.form[this.first] || this.getError();
    }
    toString() {
        return 'not match';
    }
}
exports.NotMatch = NotMatch;
//# sourceMappingURL=NotMatch.js.map