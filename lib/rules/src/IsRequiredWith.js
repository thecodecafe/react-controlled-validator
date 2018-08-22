"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startCase = require("lodash/startCase");
const Rule_1 = require("../Rule");
class IsRequiredWith extends Rule_1.default {
    constructor(form, parents) {
        super();
        if (!form)
            throw new Error('Form not specified for required with.');
        this.form = form;
        this.parents = parents.split(',');
        this.failed(`:field is required with ${startCase(parents)}.`);
    }
    valid(value) {
        for (var i = 0; i < this.parents.length; i++) {
            var parent = this.parents[i];
            if (this.form[parent] === undefined || this.form[parent] === null) {
                return true;
            }
        }
        if (value === undefined || value === null) {
            return this.getError();
        }
        value = value + '';
        return value.length > 0 || this.getError();
    }
    toString() {
        return 'is required with';
    }
}
exports.IsRequiredWith = IsRequiredWith;
