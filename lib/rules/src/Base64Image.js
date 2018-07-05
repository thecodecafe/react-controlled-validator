"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Rule_1 = require("../Rule");
var Base64Image = (function (_super) {
    __extends(Base64Image, _super);
    function Base64Image(formats) {
        var _this = _super.call(this) || this;
        _this.formats = formats;
        _this.failed("Field must be a base 64 image.");
        return _this;
    }
    Base64Image.prototype.valid = function (value) {
        var regex = new RegExp('\"data:image\/(' + this.formats + ');base64,([^\"]*)\"', 'i');
        return regex.test(value) || this.getError();
    };
    Base64Image.prototype.toString = function () {
        return 'Base64Image'.toLowerCase();
    };
    return Base64Image;
}(Rule_1["default"]));
exports.Base64Image = Base64Image;
//# sourceMappingURL=Base64Image.js.map