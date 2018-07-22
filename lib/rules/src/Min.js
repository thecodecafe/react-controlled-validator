"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Min extends Rule_1.default {
    constructor(min) {
        super();
        this.min = parseInt(min);
        this.failed(`Field cannot be lesser than ${min} in value.`);
    }
    valid(value) {
        return value >= this.min || this.getError();
    }
    toString() {
        return 'Min'.toLowerCase();
    }
}
exports.Min = Min;
//# sourceMappingURL=Min.js.map