"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsPhone extends Rule_1.default {
    constructor() {
        super();
        this.failed('Phone is invalid.');
    }
    valid(value) {
        var re = /^[\+]?[(]?[0-9]{6,14}[)]?$/im;
        return re.test(value) || this.getError();
    }
    toString() {
        return 'IsPhone'.toLowerCase();
    }
}
exports.IsPhone = IsPhone;
//# sourceMappingURL=IsPhone.js.map