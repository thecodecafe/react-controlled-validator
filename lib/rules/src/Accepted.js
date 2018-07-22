"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Accepted extends Rule_1.default {
    constructor() {
        super();
        this.failed('Not accepted.');
    }
    valid(value) {
        return value === true || this.getError();
    }
    toString() {
        return 'Accepted'.toLowerCase();
    }
}
exports.Accepted = Accepted;
//# sourceMappingURL=Accepted.js.map