import Rule from '../Rule'

export class Max extends Rule
{
    max:number;
    constructor(max: any)
    {
        super();
        this.max = parseInt(max);
        this.failed(`Field cannot be greater than ${max} in value.`);
    }

    valid(value: string)
    {
        return parseInt(value) <= this.max || this.getError();
    }

    toString()
    {
        return 'Max'.toLowerCase();
    }
}