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
var IsNGMobile = (function (_super) {
    __extends(IsNGMobile, _super);
    function IsNGMobile() {
        var _this = _super.call(this) || this;
        _this.failed('Not a Nigerian mobile phone number.');
        return _this;
    }
    IsNGMobile.prototype.valid = function (value) {
        var re = /^[0-9]{11}?$/im;
        return re.test(value) || this.getError();
    };
    IsNGMobile.prototype.toString = function () {
        return 'IsNGMobile'.toLowerCase();
    };
    return IsNGMobile;
}(Rule_1["default"]));
exports.IsNGMobile = IsNGMobile;
//# sourceMappingURL=IsNGMobile.js.map