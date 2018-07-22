"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsRequiredWith extends Rule_1.default {
    constructor(form, parents) {
        super();
        if (!form)
            throw new Error('This field is required.');
        this.form = form;
        this.parents = parents.split(',');
    }
    valid(value) {
        for (var i = 0; i < this.parents.length; i++) {
            var parent = this.parents[i];
            if (this.form[parent] === undefined || this.form[parent] === null) {
                return true;
            }
        }
        if (value === undefined || value === null) {
            return false;
        }
        value = value + '';
        return value.length > 0 || this.getError();
    }
    toString() {
        return 'IsRequiredWith'.toLowerCase();
    }
}
exports.IsRequiredWith = IsRequiredWith;
//# sourceMappingURL=IsRequiredWith.js.map