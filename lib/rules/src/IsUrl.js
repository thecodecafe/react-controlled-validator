"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class IsUrl extends Rule_1.default {
    constructor() {
        super();
        this.failed('Please enter a url.');
    }
    valid(value) {
        var re = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        return re.test(value) || this.getError();
    }
    toString() {
        return 'IsUrl'.toLowerCase();
    }
}
exports.IsUrl = IsUrl;
//# sourceMappingURL=IsUrl.js.map