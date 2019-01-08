import Rule from '../Rule'
import { CardChecker, CARD_TYPES } from '../../utils/misc';

export class IsVisa extends Rule
{
    constructor()
    {
        super();
        this.failed('That is not a visa card.');
    }
    valid(value: string)
    {
        return CardChecker(CARD_TYPES.VISA, value) || this.getError();
    }

    toString()
    {
        return 'is visa';
    }
}

export default IsVisa;