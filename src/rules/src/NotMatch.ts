import Rule from '../Rule'

export class NotMatch extends Rule
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
        return value !== this.first || this.getError();
    }

    toString()
    {
        return 'NotMatch'.toLowerCase();
    }
}