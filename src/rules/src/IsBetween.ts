import Rule from '../Rule'

export class IsBetween extends Rule
{
    min:number;
    max:number;

    constructor(min: any, max: any)
    {
        super();
        this.min = parseInt(min);
        this.max = parseInt(max);
        this.failed(`:field must be greater than or equal to ${min} and less than or equal to ${max}.`);
    }

    valid(value: string)
    {
        return value && (value.length >= this.min && value.length <= this.max ) || this.getError();
    }

    toString()
    {
        return 'is between';
    }
}