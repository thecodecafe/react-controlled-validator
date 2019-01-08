import Rule from '../Rule'
import { CardChecker, CARD_TYPES } from '../../utils/misc';

export class IsAmericanExpress extends Rule
{
    constructor()
    {
        super();
        this.failed('That is not an american express card.');
    }
    valid(value: string)
    {
        return CardChecker(CARD_TYPES.AMERICAN_EXPRESS, value) || this.getError();
    }

    toString()
    {
        return 'is american express';
    }
}

export default IsAmericanExpress;