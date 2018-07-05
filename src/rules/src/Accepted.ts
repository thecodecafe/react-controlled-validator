import Rule from '../Rule'

export class Accepted extends Rule
{
    constructor()
    {
        super();
        this.failed('Not accepted.');
    }
    valid(value: boolean)
    {
        return value === true || this.getError();
    }

    toString()
    {
        return 'Accepted'.toLowerCase();
    }
}