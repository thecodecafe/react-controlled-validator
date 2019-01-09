"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsPhone extends Rule_1.default {
    constructor() {
        super();
        this.failed(':field must be a phone number.');
    }
    validationMessage(value) {
        var re = /^[\+]?[(]?[0-9]{6,15}[)]?$/im;
        return !re.test(value) ? this.getErrorMessage() : false;
    }
    toString() {
        return 'is phone';
    }
}
exports.IsPhone = IsPhone;
exports.default = IsPhone;
