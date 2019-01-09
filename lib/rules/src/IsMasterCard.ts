import Rule from '../Rule'
import { CardChecker, CARD_TYPES } from '../../utils/misc';

export class IsMasterCard extends Rule
{
    constructor()
    {
        super();
        this.failed(':field must be a master card number.');
    }
    validationMessage(value: string)
    {
        return !CardChecker(CARD_TYPES.MASTERCARD, value) ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'is master card';
    }
}

export default IsMasterCard;