"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class In extends Rule_1.default {
    constructor(list) {
        super();
        this.list = list.split(',');
        this.failed(':field is not in the list.');
    }
    validationMessage(value) {
        return this.list.indexOf(value) === -1 ? this.getErrorMessage() : false;
    }
    toString() {
        return 'in';
    }
}
exports.In = In;
exports.default = In;
