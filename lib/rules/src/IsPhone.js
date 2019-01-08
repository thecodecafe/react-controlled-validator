"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsPhone extends Rule_1.default {
    constructor() {
        super();
        this.failed(':field is not a phone number.');
    }
    valid(value) {
        var re = /^[\+]?[(]?[0-9]{6,14}[)]?$/im;
        return re.test(value) || this.getError();
    }
    toString() {
        return 'is phone';
    }
}
exports.IsPhone = IsPhone;
exports.default = IsPhone;
