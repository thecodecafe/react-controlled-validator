"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsPhoneNational extends Rule_1.default {
    constructor() {
        super();
        this.failed(':field us not a national phone number.');
    }
    valid(value) {
        var re = /^[0]?[0-9]{6,12}$/im;
        return re.test(value) || this.getError();
    }
    toString() {
        return 'is phone national';
    }
}
exports.IsPhoneNational = IsPhoneNational;
exports.default = IsPhoneNational;
