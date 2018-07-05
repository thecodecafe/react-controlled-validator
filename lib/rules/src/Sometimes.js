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
var Sometimes = (function (_super) {
    __extends(Sometimes, _super);
    function Sometimes(rule) {
        var _this = _super.call(this) || this;
        _this.rule = rule;
        return _this;
    }
    Sometimes.prototype.valid = function (value) {
        if (value !== undefined && value !== null) {
            return this.rule(value);
        }
        return true;
    };
    Sometimes.prototype.toString = function () {
        return 'Sometimes'.toLowerCase();
    };
    return Sometimes;
}(Rule_1["default"]));
exports.Sometimes = Sometimes;
//# sourceMappingURL=Sometimes.js.map