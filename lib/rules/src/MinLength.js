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
var MinLength = (function (_super) {
    __extends(MinLength, _super);
    function MinLength(minLength) {
        var _this = _super.call(this) || this;
        _this.minLength = minLength;
        _this.failed("Field cannot be less than " + minLength + " in length.");
        return _this;
    }
    MinLength.prototype.valid = function (value) {
        return value.length >= this.minLength || this.getError();
    };
    MinLength.prototype.toString = function () {
        return 'MinLength'.toLowerCase();
    };
    return MinLength;
}(Rule_1["default"]));
exports.MinLength = MinLength;
//# sourceMappingURL=MinLength.js.map