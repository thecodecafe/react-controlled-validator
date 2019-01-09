"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
const misc_1 = require("../../utils/misc");
class IsAmericanExpress extends Rule_1.default {
    constructor() {
        super();
        this.failed(':field must be a american express card number.');
    }
    validationMessage(value) {
        return !misc_1.CardChecker(misc_1.CARD_TYPES.AMERICAN_EXPRESS, value) ? this.getErrorMessage() : false;
    }
    toString() {
        return 'is american express';
    }
}
exports.IsAmericanExpress = IsAmericanExpress;
exports.default = IsAmericanExpress;
