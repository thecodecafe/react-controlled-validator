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
var IsNumeric = (function (_super) {
    __extends(IsNumeric, _super);
    function IsNumeric() {
        var _this = _super.call(this) || this;
        _this.failed('This field is required.');
        return _this;
    }
    IsNumeric.prototype.valid = function (value) {
        var re = /^[0-9\b]+$/im;
        return re.test(value) || this.getError();
    };
    IsNumeric.prototype.toString = function () {
        return 'IsNumeric'.toLowerCase();
    };
    return IsNumeric;
}(Rule_1["default"]));
exports.IsNumeric = IsNumeric;
//# sourceMappingURL=IsNumeric.js.map