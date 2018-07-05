import Rule from '../Rule'

export class AfterDate extends Rule
{
    date: Date;

    constructor(date: string)
    {
        super();
        this.date = new Date(date);
        this.failed(`Field must be before ${this.date.getFullYear()+'/'+(this.date.getMonth() + 1)+this.date.getDate()}`);
    }

    valid(value: string)
    {
        var now = new Date(value);
        return  now.getTime() < this.date.getTime() || this.getError();
    }

    toString()
    {
        return 'AfterDate'.toLowerCase();
    }
}
