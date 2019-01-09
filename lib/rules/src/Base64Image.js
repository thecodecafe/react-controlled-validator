"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Base64Image extends Rule_1.default {
    constructor(formats) {
        super();
        this.formats = formats;
        this.failed(`:field must be a base 64 image.`);
    }
    validationMessage(value) {
        if (typeof this.formats !== "string")
            return false;
        this.formats = this.formats.split(',').join('|');
        var rx = new RegExp('data:image\/(' + this.formats + ');base64,([^\"]*)', 'i');
        return !rx.test(value) ? this.getErrorMessage() : false;
    }
    toString() {
        return 'base64 image';
    }
}
exports.Base64Image = Base64Image;
exports.default = Base64Image;
