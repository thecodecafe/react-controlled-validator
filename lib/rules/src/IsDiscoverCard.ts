import Rule from '../Rule'
import { CardChecker, CARD_TYPES } from '../../utils/misc';

export class IsDiscoverCard extends Rule
{
    constructor()
    {
        super();
        this.failed('That is not a discover card.');
    }
    valid(value: string)
    {
        return CardChecker(CARD_TYPES.DISCOVER, value) || this.getError();
    }

    toString()
    {
        return 'is discover card';
    }
}

export default IsDiscoverCard;