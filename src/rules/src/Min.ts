import Rule from '../Rule'

export class Min extends Rule
{
    min:number;
    constructor(min: number)
    {
        super();
        this.min = min;
        this.failed(`Field cannot be lesser than ${min} in value.`);
    }

    valid(value: number)
    {
        return value >= this.min || this.getError();
    }

    toString()
    {
        return 'Min'.toLowerCase();
    }
}