"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class NotMatch extends Rule_1.default {
    constructor(first) {
        super();
        this.first = first;
        this.failed(`Field does not match ${first}.`);
    }
    valid(value) {
        return value !== this.first || this.getError();
    }
    toString() {
        return 'NotMatch'.toLowerCase();
    }
}
exports.NotMatch = NotMatch;
//# sourceMappingURL=NotMatch.js.map