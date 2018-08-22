"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
const misc_1 = require("../../utils/misc");
class IsAmericanExpress extends Rule_1.default {
    constructor() {
        super();
        this.failed('That is not an american express card.');
    }
    valid(value) {
        return misc_1.CardChecker(misc_1.CARD_TYPES.AMERICAN_EXPRESS, value) || this.getError();
    }
    toString() {
        return 'is american express';
    }
}
exports.IsAmericanExpress = IsAmericanExpress;
