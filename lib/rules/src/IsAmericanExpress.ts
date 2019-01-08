import Rule from '../Rule'
import { CardChecker, CARD_TYPES } from '../../utils/misc';

export class IsAmericanExpress extends Rule
{
    constructor()
    {
        super();
        this.failed('That is not an american express card.');
    }
    validationMessage(value: string)
    {
        return !CardChecker(CARD_TYPES.AMERICAN_EXPRESS, value) ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'is american express';
    }
}

export default IsAmericanExpress;