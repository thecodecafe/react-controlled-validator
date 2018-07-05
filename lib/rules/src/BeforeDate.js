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
var AfterDate = (function (_super) {
    __extends(AfterDate, _super);
    function AfterDate(date) {
        var _this = _super.call(this) || this;
        _this.date = new Date(date);
        _this.failed("Field must be before " + (_this.date.getFullYear() + '/' + (_this.date.getMonth() + 1) + _this.date.getDate()));
        return _this;
    }
    AfterDate.prototype.valid = function (value) {
        var now = new Date(value);
        return now.getTime() < this.date.getTime() || this.getError();
    };
    AfterDate.prototype.toString = function () {
        return 'AfterDate'.toLowerCase();
    };
    return AfterDate;
}(Rule_1["default"]));
exports.AfterDate = AfterDate;
//# sourceMappingURL=BeforeDate.js.map