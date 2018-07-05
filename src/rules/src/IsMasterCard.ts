import Rule from '../Rule'
import { CardChecker } from '../../utils/misc';
import { CARD_TYPES } from '../../utils/constants';

export class IsMasterCard extends Rule
{
    constructor()
    {
        super();
        this.failed('Not a mastercard.');
    }
    valid(value: string)
    {
        return CardChecker(CARD_TYPES.MASTERCARD, value) || this.getError();
    }

    toString()
    {
        return 'IsMasterCard'.toLowerCase();
    }
}