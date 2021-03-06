"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Accepted_1 = require("./src/Accepted");
const AfterDate_1 = require("./src/AfterDate");
const BeforeDate_1 = require("./src/BeforeDate");
const Base64Image_1 = require("./src/Base64Image");
const In_1 = require("./src/In");
const IsAmericanExpress_1 = require("./src/IsAmericanExpress");
const IsBetween_1 = require("./src/IsBetween");
const IsDiscoverCard_1 = require("./src/IsDiscoverCard");
const IsEmail_1 = require("./src/IsEmail");
const IsMasterCard_1 = require("./src/IsMasterCard");
const IsNGMobile_1 = require("./src/IsNGMobile");
const IsNumeric_1 = require("./src/IsNumeric");
const IsPhone_1 = require("./src/IsPhone");
const IsRequired_1 = require("./src/IsRequired");
const IsRequiredWith_1 = require("./src/IsRequiredWith");
const IsUsername_1 = require("./src/IsUsername");
const IsVisa_1 = require("./src/IsVisa");
const Matches_1 = require("./src/Matches");
const Max_1 = require("./src/Max");
const MaxLength_1 = require("./src/MaxLength");
const Min_1 = require("./src/Min");
const MinLength_1 = require("./src/MinLength");
const DoesNotMatch_1 = require("./src/DoesNotMatch");
const IsUrl_1 = require("./src/IsUrl");
class ApplyRule {
    apply(data, value, rule, args) {
        var result = {};
        var RuleClass;
        switch (rule) {
            case 'required':
                RuleClass = new IsRequired_1.IsRequired;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'requiredWith':
                RuleClass = new IsRequiredWith_1.IsRequiredWith(data, args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'accepted':
                RuleClass = new Accepted_1.Accepted;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'afterDate':
                RuleClass = new AfterDate_1.AfterDate(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'beforeDate':
                RuleClass = new BeforeDate_1.BeforeDate(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'base64Image':
                RuleClass = new Base64Image_1.Base64Image(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'in':
                RuleClass = new In_1.In(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'americanExpress':
                RuleClass = new IsAmericanExpress_1.IsAmericanExpress;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'discoverCard':
                RuleClass = new IsDiscoverCard_1.IsDiscoverCard;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'masterCard':
                RuleClass = new IsMasterCard_1.IsMasterCard;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'visaCard':
                RuleClass = new IsVisa_1.IsVisa;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'email':
                RuleClass = new IsEmail_1.IsEmail;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'url':
                RuleClass = new IsUrl_1.IsUrl;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'ngMobile':
                RuleClass = new IsNGMobile_1.IsNGMobile;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'numeric':
                RuleClass = new IsNumeric_1.IsNumeric;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'phone':
                RuleClass = new IsPhone_1.IsPhone;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'username':
                RuleClass = new IsUsername_1.IsUsername;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'matches':
                RuleClass = new Matches_1.Matches(data, args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'doesNotMatch':
                RuleClass = new DoesNotMatch_1.DoesNotMatch(data, args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'max':
                RuleClass = new Max_1.Max(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'maxLength':
                RuleClass = new MaxLength_1.MaxLength(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'min':
                RuleClass = new Min_1.Min(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'minLength':
                RuleClass = new MinLength_1.MinLength(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
            case 'between':
                RuleClass = new IsBetween_1.IsBetween(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
                break;
        }
        return result;
    }
}
exports.ApplyRule = ApplyRule;
exports.default = ApplyRule;
