"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startCase = require("lodash/startCase");
const Rule_1 = require("../Rule");
class IsRequiredWith extends Rule_1.default {
    constructor(data, parents) {
        super();
        if (!data)
            throw new Error('Form not specified for required with.');
        this.data = data;
        this.parents = parents.split(',');
        this.failed(`:field is required with ${startCase(parents)}.`);
    }
    validationMessage(value) {
        for (var i = 0; i < this.parents.length; i++) {
            var parent = this.parents[i];
            if (this.data[parent] === undefined || this.data[parent] === null) {
                return false;
            }
        }
        if (value === undefined || value === null) {
            return this.getErrorMessage();
        }
        value = value + '';
        return value.length < 1 ? this.getErrorMessage() : false;
    }
    toString() {
        return 'is required with';
    }
}
exports.IsRequiredWith = IsRequiredWith;
exports.default = IsRequiredWith;
