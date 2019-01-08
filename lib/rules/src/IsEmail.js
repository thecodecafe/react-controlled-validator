"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsEmail extends Rule_1.default {
    constructor() {
        super();
        this.failed(':field must be a valid email address.');
    }
    validationMessage(value) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(value) ? this.getErrorMessage() : false;
    }
    toString() {
        return 'is email';
    }
}
exports.IsEmail = IsEmail;
exports.default = IsEmail;
