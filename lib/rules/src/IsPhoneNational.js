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
var IsPhoneNational = (function (_super) {
    __extends(IsPhoneNational, _super);
    function IsPhoneNational() {
        var _this = _super.call(this) || this;
        _this.failed('National phone number is invalid.');
        return _this;
    }
    IsPhoneNational.prototype.valid = function (value) {
        var re = /^[0]?[0-9]{6,12}$/im;
        return re.test(value) || this.getError();
    };
    IsPhoneNational.prototype.toString = function () {
        return 'IsPhoneNational'.toLowerCase();
    };
    return IsPhoneNational;
}(Rule_1["default"]));
exports.IsPhoneNational = IsPhoneNational;
//# sourceMappingURL=IsPhoneNational.js.map