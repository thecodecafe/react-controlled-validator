"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Base64Image extends Rule_1.default {
    constructor(formats) {
        super();
        this.formats = formats.replace(new RegExp(/^(\,)$/), '|');
        this.failed(`:field must be a base 64 image.`);
    }
    valid(value) {
        var regex = new RegExp('\"data:image\/(' + this.formats + ');base64,([^\"]*)\"', 'i');
        return regex.test(value) || this.getError();
    }
    toString() {
        return 'base64 image';
    }
}
exports.Base64Image = Base64Image;
exports.default = Base64Image;
