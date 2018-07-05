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
var Match = (function (_super) {
    __extends(Match, _super);
    function Match(first) {
        var _this = _super.call(this) || this;
        _this.first = first;
        _this.failed("Field does not match " + first + ".");
        return _this;
    }
    Match.prototype.valid = function (value) {
        return value === this.first || this.getError();
    };
    Match.prototype.toString = function () {
        return 'Match'.toLowerCase();
    };
    return Match;
}(Rule_1["default"]));
exports.Match = Match;
//# sourceMappingURL=Match.js.map