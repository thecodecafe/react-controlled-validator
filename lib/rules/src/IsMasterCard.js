"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
const misc_1 = require("../../utils/misc");
class IsMasterCard extends Rule_1.default {
    constructor() {
        super();
        this.failed('That is not a mastercard.');
    }
    valid(value) {
        return misc_1.CardChecker(misc_1.CARD_TYPES.MASTERCARD, value) || this.getError();
    }
    toString() {
        return 'is master card';
    }
}
exports.IsMasterCard = IsMasterCard;
