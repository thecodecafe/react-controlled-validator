"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
exports.CardChecker = function (card, value) {
    if (constants_1.CARD_TYPES[card] == undefined) {
        return false;
    }
    var v2;
    var ranges = constants_1.CARDS_RANGES[card];
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
//# sourceMappingURL=misc.js.map