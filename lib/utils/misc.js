"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CARD_TYPES = {
    DISCOVER: 'discover',
    MASTERCARD: 'mastercard',
    VISA: 'visa',
    AMERICAN_EXPRESS: 'americanexpress'
};
exports.CARDS_RANGES = {
    discover: [[6011], [622126, 622925], [644, 649], [65]],
    mastercard: [[50, 55]],
    visa: [[4]],
    americanexpress: [[34], [37]]
};
exports.CardChecker = (card, value) => {
    if (exports.CARD_TYPES[card] == undefined) {
        return false;
    }
    var v2;
    var ranges = exports.CARDS_RANGES[card];
    for (var i = 0; i < ranges.length; i++) {
        var range = ranges[i];
        if (range.length == 1) {
            v2 = parseInt(value.substr(0, range[0].toString().length));
            if (v2 == range[0]) {
                return true;
            }
            continue;
        }
        if (range.length == 2) {
            v2 = parseInt(value.substr(0, range[1].toString().length));
            if (v2 >= range[0] && v2 <= range[1]) {
                return true;
            }
        }
    }
    return false;
};
