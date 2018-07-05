"use strict";
exports.__esModule = true;
var error;
var MainRule = (function () {
    function MainRule() {
    }
    MainRule.prototype.failed = function (message) {
        error = message;
        return this;
    };
    MainRule.prototype.getError = function () {
        return error;
    };
    MainRule.prototype.toString = function () {
        return 'Rule';
    };
    MainRule.prototype.toValue = function () {
        return 'Rule';
    };
    MainRule.prototype.valid = function (value) { };
    MainRule.prototype.toStringTag = function () {
        return 'Rule';
    };
    return MainRule;
}());
exports["default"] = MainRule;
//# sourceMappingURL=Rule.js.map