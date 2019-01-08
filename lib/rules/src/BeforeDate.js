"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class BeforeDate extends Rule_1.default {
    constructor(date) {
        super();
        this.date = new Date(date);
        this.failed(`:field must be before ${this.date.getFullYear() + '/' + (this.date.getMonth() + 1) + this.date.getDate()}`);
    }
    validationMessage(value) {
        var now = new Date(value);
        return now.getTime() > this.date.getTime() ? this.getErrorMessage() : false;
    }
    toString() {
        return 'after date';
    }
}
exports.BeforeDate = BeforeDate;
exports.default = BeforeDate;
