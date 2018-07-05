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
var IsUsername = (function (_super) {
    __extends(IsUsername, _super);
    function IsUsername() {
        var _this = _super.call(this) || this;
        _this.failed('Username is invalid.');
        return _this;
    }
    IsUsername.prototype.valid = function (value) {
        var re = /^[A-Za-z0-9]+(?:[\_\-][A-Za-z0-9]+)*$/;
        return re.test(value) || this.getError();
    };
    IsUsername.prototype.toString = function () {
        return 'IsUsername'.toLowerCase();
    };
    return IsUsername;
}(Rule_1["default"]));
exports.IsUsername = IsUsername;
//# sourceMappingURL=IsUsername.js.map