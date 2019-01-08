"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Accepted extends Rule_1.default {
    constructor() {
        super();
        this.failed('Please accept :field.');
    }
    validationMessage(value) {
        return value !== true ? this.getErrorMessage() : false;
    }
    toString() {
        return 'accepted';
    }
}
exports.Accepted = Accepted;
exports.default = Accepted;
