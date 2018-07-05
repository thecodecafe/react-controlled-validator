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
var IsRequiredWith = (function (_super) {
    __extends(IsRequiredWith, _super);
    function IsRequiredWith(parentValue, parentName) {
        var _this = _super.call(this) || this;
        if (!parentValue)
            throw new Error('Parent value is not specified.');
        if (parentName) {
            _this.failed("This field is required with " + parentName + ".");
        }
        else if (!parentName) {
            _this.failed('This field requires another field.');
        }
        return _this;
    }
    IsRequiredWith.prototype.valid = function (value) {
        if (this.parentValue === undefined || this.parentValue === null) {
            return true;
        }
        if (value === undefined)
            return false;
        if (value === null)
            return false;
        value = value + '';
        return value.length > 0 || this.getError();
    };
    IsRequiredWith.prototype.toString = function () {
        return 'IsRequiredWith'.toLowerCase();
    };
    return IsRequiredWith;
}(Rule_1["default"]));
exports.IsRequiredWith = IsRequiredWith;
//# sourceMappingURL=IsRequiredWith.js.map