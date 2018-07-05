"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Rule_1 = require("../Rule");
var misc_1 = require("../../utils/misc");
var constants_1 = require("../../utils/constants");
var IsMasterCard = (function (_super) {
    __extends(IsMasterCard, _super);
    function IsMasterCard() {
        var _this = _super.call(this) || this;
        _this.failed('Not a mastercard.');
        return _this;
    }
    IsMasterCard.prototype.valid = function (value) {
        return misc_1.CardChecker(constants_1.CARD_TYPES.MASTERCARD, value) || this.getError();
    };
    IsMasterCard.prototype.toString = function () {
        return 'IsMasterCard'.toLowerCase();
    };
    return IsMasterCard;
}(Rule_1["default"]));
exports.IsMasterCard = IsMasterCard;
//# sourceMappingURL=IsMasterCard.js.map