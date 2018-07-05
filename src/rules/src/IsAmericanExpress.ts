import Rule from '../Rule'
import { CardChecker } from '../../utils/misc';
import { CARD_TYPES } from '../../utils/constants';

export class IsAmericanExpress extends Rule
{
    constructor()
    {
        super();
        this.failed('Not a american express.');
    }
    valid(value: string)
    {
        return CardChecker(CARD_TYPES.AMERICAN_EXPRESS, value) || this.getError();
    }

    toString()
    {
        return 'IsAmericanExpress'.toLowerCase();
    }
}