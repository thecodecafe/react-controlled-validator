"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
const misc_1 = require("../../utils/misc");
class IsVisa extends Rule_1.default {
    constructor() {
        super();
        this.failed('That is not a visa card.');
    }
    valid(value) {
        return misc_1.CardChecker(misc_1.CARD_TYPES.VISA, value) || this.getError();
    }
    toString() {
        return 'is visa';
    }
}
exports.IsVisa = IsVisa;
