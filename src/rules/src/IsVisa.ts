import Rule from '../Rule'
import { CardChecker } from '../../utils/misc';
import { CARD_TYPES } from '../../utils/constants';

export class IsVisa extends Rule
{
    constructor()
    {
        super();
        this.failed('Not a visa.');
    }
    valid(value: string)
    {
        return CardChecker(CARD_TYPES.VISA, value) || this.getError();
    }

    toString()
    {
        return 'IsVisa'.toLowerCase();
    }
}