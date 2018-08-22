"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error;
class MainRule {
    failed(message) {
        error = message;
        return this;
    }
    getError() {
        return error;
    }
    toString() {
        return 'Rule';
    }
    toValue() {
        return 'Rule';
    }
    valid(value) {
        return true;
    }
    toStringTag() {
        return 'Rule';
    }
}
exports.default = MainRule;
