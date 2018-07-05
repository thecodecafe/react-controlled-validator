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
var Max = (function (_super) {
    __extends(Max, _super);
    function Max(max) {
        var _this = _super.call(this) || this;
        _this.max = max;
        _this.failed("Field cannot be greater than " + max + " in value.");
        return _this;
    }
    Max.prototype.valid = function (value) {
        return value <= this.max || this.getError();
    };
    Max.prototype.toString = function () {
        return 'Max'.toLowerCase();
    };
    return Max;
}(Rule_1["default"]));
exports.Max = Max;
//# sourceMappingURL=Max.js.map