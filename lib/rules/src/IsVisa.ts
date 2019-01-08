import Rule from '../Rule'
import { CardChecker, CARD_TYPES } from '../../utils/misc';

export class IsVisa extends Rule
{
    constructor()
    {
        super();
        this.failed('That is not a visa card.');
    }
    validationMessage(value: string)
    {
        return !CardChecker(CARD_TYPES.VISA, value) ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'is visa';
    }
}

export default IsVisa;