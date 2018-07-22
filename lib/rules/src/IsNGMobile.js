"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsNGMobile extends Rule_1.default {
    constructor() {
        super();
        this.failed('Not a Nigerian mobile phone number.');
    }
    valid(value) {
        var re = /^[0-9]{11}?$/im;
        return re.test(value) || this.getError();
    }
    toString() {
        return 'IsNGMobile'.toLowerCase();
    }
}
exports.IsNGMobile = IsNGMobile;
//# sourceMappingURL=IsNGMobile.js.map