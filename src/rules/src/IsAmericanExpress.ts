import Rule from '../Rule'
import { CardChecker, CARD_TYPES } from '../../utils/misc';

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