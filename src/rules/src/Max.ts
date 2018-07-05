import Rule from '../Rule'

export class Max extends Rule
{
    max:number;
    constructor(max: number)
    {
        super();
        this.max = max;
        this.failed(`Field cannot be greater than ${max} in value.`);
    }

    valid(value: number)
    {
        return value <= this.max || this.getError();
    }

    toString()
    {
        return 'Max'.toLowerCase();
    }
}