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
var IsBetween = (function (_super) {
    __extends(IsBetween, _super);
    function IsBetween(min, max) {
        var _this = _super.call(this) || this;
        _this.min = min;
        _this.max = max;
        _this.failed("Field must be greater than or equal to " + min + " and less than or equal to " + max + ".");
        return _this;
    }
    IsBetween.prototype.valid = function (value) {
        return value && (value.length >= this.min && value.length <= this.max) || this.getError();
    };
    IsBetween.prototype.toString = function () {
        return 'IsBetween'.toLowerCase();
    };
    return IsBetween;
}(Rule_1["default"]));
exports.IsBetween = IsBetween;
//# sourceMappingURL=IsBetween.js.map