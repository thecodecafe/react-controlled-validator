"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
const lodash_1 = require("lodash");
class IsRequiredWith extends Rule_1.default {
    constructor(form, parents) {
        super();
        if (!form)
            throw new Error('Form not specified for required with.');
        this.form = form;
        this.parents = parents.split(',');
        this.failed(`:field is required with ${lodash_1.startCase(parents)}.`);
    }
    valid(value) {
        for (var i = 0; i < this.parents.length; i++) {
            var parent = this.parents[i];
            if (this.form[parent] === undefined || this.form[parent] === null) {
                return this.getError();
            }
        }
        if (value === undefined || value === null) {
            return false;
        }
        value = value + '';
        return value.length > 0 || this.getError();
    }
    toString() {
        return 'is required with';
    }
}
exports.IsRequiredWith = IsRequiredWith;
//# sourceMappingURL=IsRequiredWith.js.map