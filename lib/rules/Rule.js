"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorMessage;
class MainRule {
    failed(message) {
        errorMessage = message;
        return this;
    }
    getErrorMessage() {
        return errorMessage;
    }
    toString() {
        return 'Rule';
    }
    toValue() {
        return 'Rule';
    }
    validationMessage(value) {
        return false;
    }
    toStringTag() {
        return 'Rule';
    }
}
exports.MainRule = MainRule;
exports.default = MainRule;
