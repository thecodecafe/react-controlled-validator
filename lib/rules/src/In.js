"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class In extends Rule_1.default {
    constructor(list) {
        super();
        this.list = list.split(',');
        this.failed('Value was not found in supplied list.');
    }
    valid(value) {
        return this.list.indexOf(value) != -1 || this.getError();
    }
    toString() {
        return 'IsIn'.toLowerCase();
    }
}
exports.In = In;
//# sourceMappingURL=In.js.map