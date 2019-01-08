import Rule from '../Rule'
import { CardChecker, CARD_TYPES } from '../../utils/misc';

export class IsDiscoverCard extends Rule
{
    constructor()
    {
        super();
        this.failed('That is not a discover card.');
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