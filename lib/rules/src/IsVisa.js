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
var IsVisa = (function (_super) {
    __extends(IsVisa, _super);
    function IsVisa() {
        var _this = _super.call(this) || this;
        _this.failed('Not a visa.');
        return _this;
    }
    IsVisa.prototype.valid = function (value) {
        return misc_1.CardChecker(constants_1.CARD_TYPES.VISA, value) || this.getError();
    };
    IsVisa.prototype.toString = function () {
        return 'IsVisa'.toLowerCase();
    };
    return IsVisa;
}(Rule_1["default"]));
exports.IsVisa = IsVisa;
//# sourceMappingURL=IsVisa.js.map