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
var IsRequired = (function (_super) {
    __extends(IsRequired, _super);
    function IsRequired() {
        var _this = _super.call(this) || this;
        _this.failed('This field is required.');
        return _this;
    }
    IsRequired.prototype.valid = function (value) {
        if (value == undefined)
            return false;
        if (value == null)
            return false;
        value = value + '';
        return value.length > 0 || this.getError();
    };
    IsRequired.prototype.toString = function () {
        return 'IsRequired'.toLowerCase();
    };
    return IsRequired;
}(Rule_1["default"]));
exports.IsRequired = IsRequired;
//# sourceMappingURL=IsRequired.js.map