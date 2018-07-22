"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsEmail extends Rule_1.default {
    constructor() {
        super();
        this.failed('Email address is invalid.');
    }
    valid(value) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value) || this.getError();
    }
    toString() {
        return 'IsEmail'.toLowerCase();
    }
}
exports.IsEmail = IsEmail;
//# sourceMappingURL=IsEmail.js.map