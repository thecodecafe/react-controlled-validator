"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class BeforeDate extends Rule_1.default {
    constructor(date) {
        super();
        this.date = !date ? null : new Date(date);
    }
    validationMessage(value) {
        if (value === null || value === undefined)
            return false;
        if (!this.date)
            return false;
        if (this.date.toString() === "Invalid Date")
            return false;
        this.failed(`:field must be before ${this.date.toString()}`);
        var now = new Date(value);
        if (now.toString() == "Invalid Date")
            return false;
        return now.getTime() > this.date.getTime() ? this.getErrorMessage() : false;
    }
    toString() {
        return "before date";
    }
}
exports.BeforeDate = BeforeDate;
exports.default = BeforeDate;
