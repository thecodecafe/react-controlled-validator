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
var NotMatch = (function (_super) {
    __extends(NotMatch, _super);
    function NotMatch(first) {
        var _this = _super.call(this) || this;
        _this.first = first;
        _this.failed("Field does not match " + first + ".");
        return _this;
    }
    NotMatch.prototype.valid = function (value) {
        return value !== this.first || this.getError();
    };
    NotMatch.prototype.toString = function () {
        return 'NotMatch'.toLowerCase();
    };
    return NotMatch;
}(Rule_1["default"]));
exports.NotMatch = NotMatch;
//# sourceMappingURL=NotMatch.js.map