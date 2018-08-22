"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsUsername extends Rule_1.default {
    constructor() {
        super();
        this.failed(':field only accepts alphanumeric characters and dashes and underscore characters in between.');
    }
    valid(value) {
        var re = /^[A-Za-z0-9]+(?:[\_\-][A-Za-z0-9]+)*$/;
        return re.test(value) || this.getError();
    }
    toString() {
        return 'is username';
    }
}
exports.IsUsername = IsUsername;
