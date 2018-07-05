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
var Accepted = (function (_super) {
    __extends(Accepted, _super);
    function Accepted() {
        var _this = _super.call(this) || this;
        _this.failed('Not accepted.');
        return _this;
    }
    Accepted.prototype.valid = function (value) {
        return value === true || this.getError();
    };
    Accepted.prototype.toString = function () {
        return 'Accepted'.toLowerCase();
    };
    return Accepted;
}(Rule_1["default"]));
exports.Accepted = Accepted;
//# sourceMappingURL=Accepted.js.map