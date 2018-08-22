"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Sometimes extends Rule_1.default {
    constructor() {
        super();
        this.failed('_');
    }
    valid(value) {
        if (value == undefined || value == null) {
            return false;
        }
        return this.getError();
    }
    toString() {
        return 'sometimes';
    }
}
exports.Sometimes = Sometimes;
