import Rule from '../Rule'
import { CardChecker, CARD_TYPES } from '../../utils/misc';

export class IsDiscoverCard extends Rule
{
    constructor()
    {
        super();
        this.failed(':field must be a discover card number.');
    }
    validationMessage(value: string)
    {
        return !CardChecker(CARD_TYPES.DISCOVER, value) ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'is discover card';
    }
}

export default IsDiscoverCard;