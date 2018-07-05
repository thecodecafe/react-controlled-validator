import Rule from '../Rule'

export class IsBetween extends Rule
{
    min:number;
    max:number;

    constructor(min: number, max: number)
    {
        super();
        this.min = min;
        this.max = max;
        this.failed(`Field must be greater than or equal to ${min} and less than or equal to ${max}.`);
    }

    valid(value: string)
    {
        return value && (value.length >= this.min && value.length <= this.max ) || this.getError();
    }

    toString()
    {
        return 'IsBetween'.toLowerCase();
    }
}