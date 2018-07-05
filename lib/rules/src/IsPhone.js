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
var IsPhone = (function (_super) {
    __extends(IsPhone, _super);
    function IsPhone() {
        var _this = _super.call(this) || this;
        _this.failed('Phone is invalid.');
        return _this;
    }
    IsPhone.prototype.valid = function (value) {
        var re = /^[\+]?[(]?[0-9]{6,14}[)]?$/im;
        return re.test(value) || this.getError();
    };
    IsPhone.prototype.toString = function () {
        return 'IsPhone'.toLowerCase();
    };
    return IsPhone;
}(Rule_1["default"]));
exports.IsPhone = IsPhone;
//# sourceMappingURL=IsPhone.js.map