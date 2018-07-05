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
var IsDiscoverCard = (function (_super) {
    __extends(IsDiscoverCard, _super);
    function IsDiscoverCard() {
        var _this = _super.call(this) || this;
        _this.failed('Not a discover card.');
        return _this;
    }
    IsDiscoverCard.prototype.valid = function (value) {
        return misc_1.CardChecker(constants_1.CARD_TYPES.DISCOVER, value) || this.getError();
    };
    IsDiscoverCard.prototype.toString = function () {
        return 'IsDiscoverCard'.toLowerCase();
    };
    return IsDiscoverCard;
}(Rule_1["default"]));
exports.IsDiscoverCard = IsDiscoverCard;
//# sourceMappingURL=IsDiscoverCard.js.map