import Rule from '../Rule'

export class MinLength extends Rule
{
    minLength:number;
    constructor(minLength: number)
    {
        super();
        this.minLength = minLength;
        this.failed(`Field cannot be less than ${minLength} in length.`);
    }

    valid(value: string)
    {
        return value.length >= this.minLength || this.getError();
    }

    toString()
    {
        return 'MinLength'.toLowerCase();
    }
}