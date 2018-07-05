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
var MaxLength = (function (_super) {
    __extends(MaxLength, _super);
    function MaxLength(maxLength) {
        var _this = _super.call(this) || this;
        _this.maxLength = maxLength;
        _this.failed("Field cannot be greater than " + maxLength + " in length.");
        return _this;
    }
    MaxLength.prototype.valid = function (value) {
        return value.length <= this.maxLength || this.getError();
    };
    MaxLength.prototype.toString = function () {
        return 'MaxLength'.toLowerCase();
    };
    return MaxLength;
}(Rule_1["default"]));
exports.MaxLength = MaxLength;
//# sourceMappingURL=MaxLength.js.map