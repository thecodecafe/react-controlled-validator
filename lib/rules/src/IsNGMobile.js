"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsNGMobile extends Rule_1.default {
    constructor() {
        super();
        this.failed(':field is not a Nigerian mobile phone number.');
    }
    validationMessage(value) {
        var re = /^[0-9]{11}?$/im;
        return !re.test(value) ? this.getErrorMessage() : false;
    }
    toString() {
        return 'is NG mobile';
    }
}
exports.IsNGMobile = IsNGMobile;
exports.default = IsNGMobile;
