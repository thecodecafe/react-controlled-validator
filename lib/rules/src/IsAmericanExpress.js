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
var IsAmericanExpress = (function (_super) {
    __extends(IsAmericanExpress, _super);
    function IsAmericanExpress() {
        var _this = _super.call(this) || this;
        _this.failed('Not a american express.');
        return _this;
    }
    IsAmericanExpress.prototype.valid = function (value) {
        return misc_1.CardChecker(constants_1.CARD_TYPES.AMERICAN_EXPRESS, value) || this.getError();
    };
    IsAmericanExpress.prototype.toString = function () {
        return 'IsAmericanExpress'.toLowerCase();
    };
    return IsAmericanExpress;
}(Rule_1["default"]));
exports.IsAmericanExpress = IsAmericanExpress;
//# sourceMappingURL=IsAmericanExpress.js.map