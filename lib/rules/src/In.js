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
var In = (function (_super) {
    __extends(In, _super);
    function In(list) {
        var _this = _super.call(this) || this;
        _this.list = list;
        _this.failed('Value was not found in supplied list.');
        return _this;
    }
    In.prototype.valid = function (value) {
        return this.list.indexOf(value) || this.getError();
    };
    In.prototype.toString = function () {
        return 'IsIn'.toLowerCase();
    };
    return In;
}(Rule_1["default"]));
exports.In = In;
//# sourceMappingURL=In.js.map