import Rule from '../Rule'

export class Match extends Rule
{
    first:any;

    constructor(first: any)
    {
        super();
        this.first = first;
        this.failed(`Field does not match ${first}.`);
    }

    valid(value: string)
    {
        return value === this.first || this.getError();
    }

    toString()
    {
        return 'Match'.toLowerCase();
    }
}