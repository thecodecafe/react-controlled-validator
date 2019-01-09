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
exports.CardChecker = (cardType, cardNumber) => {
    if (!cardType || typeof exports.CARDS_RANGES[cardType] === 'undefined')
        return false;
    let cardStartingNumbers;
    let ranges = exports.CARDS_RANGES[cardType];
    for (let i = 0; i < ranges.length; i++) {
        let range = ranges[i];
        if (range.length === 1) {
            cardStartingNumbers = parseInt(cardNumber.substr(0, range[0].toString().length));
            if (cardStartingNumbers === range[0])
                return true;
            continue;
        }
        if (range.length === 2) {
            cardStartingNumbers = parseInt(cardNumber.substr(0, range[1].toString().length));
            if (cardStartingNumbers >= range[0] && cardStartingNumbers <= range[1])
                return true;
        }
    }
    return false;
};
