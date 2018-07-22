"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsPhoneNational extends Rule_1.default {
    constructor() {
        super();
        this.failed('National phone number is invalid.');
    }
    valid(value) {
        var re = /^[0]?[0-9]{6,12}$/im;
        return re.test(value) || this.getError();
    }
    toString() {
        return 'IsPhoneNational'.toLowerCase();
    }
}
exports.IsPhoneNational = IsPhoneNational;
//# sourceMappingURL=IsPhoneNational.js.map