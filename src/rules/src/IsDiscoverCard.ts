import Rule from '../Rule'
import { CardChecker } from '../../utils/misc';
import { CARD_TYPES } from '../../utils/constants';

export class IsDiscoverCard extends Rule
{
    constructor()
    {
        super();
        this.failed('Not a discover card.');
    }
    valid(value: string)
    {
        return CardChecker(CARD_TYPES.DISCOVER, value) || this.getError();
    }

    toString()
    {
        return 'IsDiscoverCard'.toLowerCase();
    }
}