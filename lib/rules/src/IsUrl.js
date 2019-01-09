"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsUrl extends Rule_1.default {
    constructor() {
        super();
        this.failed(':field must be a valid url.');
    }
    validationMessage(value) {
        var re = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
        return !re.test(value) ? this.getErrorMessage() : false;
    }
    toString() {
        return 'is url';
    }
}
exports.IsUrl = IsUrl;
exports.default = IsUrl;
