import Rule from '../Rule'

export class Accepted extends Rule
{
    constructor()
    {
        super();
        this.failed('Please accept :field.');
    }
    valid(value: boolean)
    {
        return value === true || this.getError();
    }

    toString()
    {
        return 'accepted';
    }
}