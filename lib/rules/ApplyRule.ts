import { Accepted } from './src/Accepted';
import { AfterDate } from './src/AfterDate';
import { BeforeDate } from './src/BeforeDate';
import { Base64Image } from './src/Base64Image';
import { In } from './src/In';
import { IsAmericanExpress } from './src/IsAmericanExpress';
import { IsBetween } from './src/IsBetween';
import { IsDiscoverCard } from './src/IsDiscoverCard';
import { IsEmail } from './src/IsEmail';
import { IsMasterCard } from './src/IsMasterCard';
import { IsNGMobile } from './src/IsNGMobile';
import { IsNumeric } from './src/IsNumeric';
import { IsPhone } from './src/IsPhone';
import { IsRequired } from './src/IsRequired';
import { IsRequiredWith } from './src/IsRequiredWith';
import { IsUsername } from './src/IsUsername';
import { IsVisa } from './src/IsVisa';
import { Matches } from './src/Matches';
import { Max } from './src/Max';
import { MaxLength } from './src/MaxLength';
import { Min } from './src/Min';
import { MinLength } from './src/MinLength';
import { DoesNotMatch } from './src/DoesNotMatch';
import { IsUrl } from './src/IsUrl';
import { DataInterface, ReturnInterface } from '../utils/intefaces';
import MainRule from './Rule';

export class ApplyRule{
    apply(
        data:DataInterface,
        value:string|boolean|null,
        rule:string,
        args:any
    ){
        var result:ReturnInterface = {};
        var RuleClass:MainRule;
        switch(rule)
        {
            case 'required':
                RuleClass = new IsRequired;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'requiredWith':
                RuleClass = new IsRequiredWith(data, args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'accepted':
                RuleClass = new Accepted;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'afterDate':
                RuleClass = new AfterDate(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'beforeDate':
                RuleClass = new BeforeDate(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'base64Image':
                RuleClass = new Base64Image(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'in':
                RuleClass = new In(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'americanExpress':
                RuleClass = new IsAmericanExpress;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'discoverCard':
                RuleClass = new IsDiscoverCard;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'masterCard':
                RuleClass = new IsMasterCard;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'visaCard':
                RuleClass = new IsVisa;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'email':
                RuleClass = new IsEmail;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'url':
                RuleClass = new IsUrl;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'ngMobile':
                RuleClass = new IsNGMobile;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'numeric':
                RuleClass = new IsNumeric;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'phone':
                RuleClass = new IsPhone;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'username':
                RuleClass = new IsUsername;
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'matches':
                RuleClass = new Matches(data, args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'doesNotMatch':
                RuleClass = new DoesNotMatch(data, args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'max':
                RuleClass = new Max(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'maxLength':
                RuleClass = new MaxLength(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'min':
                RuleClass = new Min(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'minLength':
                RuleClass = new MinLength(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
            case 'between':
                RuleClass = new IsBetween(args);
                result['error'] = RuleClass.validationMessage(value);
                result['ruleName'] = RuleClass.toString();
            break;
        }

        return result;
    }
}

export default ApplyRule;