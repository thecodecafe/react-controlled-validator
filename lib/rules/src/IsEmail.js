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
var IsEmail = (function (_super) {
    __extends(IsEmail, _super);
    function IsEmail() {
        var _this = _super.call(this) || this;
        _this.failed('Email address is invalid.');
        return _this;
    }
    IsEmail.prototype.valid = function (value) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value) || this.getError();
    };
    IsEmail.prototype.toString = function () {
        return 'IsEmail'.toLowerCase();
    };
    return IsEmail;
}(Rule_1["default"]));
exports.IsEmail = IsEmail;
//# sourceMappingURL=IsEmail.js.map