"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Match extends Rule_1.default {
    constructor(first) {
        super();
        this.first = first;
        this.failed(`Field does not match ${first}.`);
    }
    valid(value) {
        return value === this.first || this.getError();
    }
    toString() {
        return 'Match'.toLowerCase();
    }
}
exports.Match = Match;
//# sourceMappingURL=Match.js.map