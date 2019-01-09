import Rule from '../Rule'
import { CardChecker, CARD_TYPES } from '../../utils/misc';

export class IsVisa extends Rule
{
    constructor()
    {
        super();
        this.failed(':field must be a visa card number.');
    }
    validationMessage(value: string)
    {
        return !CardChecker(CARD_TYPES.VISA, value) ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'is visa card';
    }
}

export default IsVisa;