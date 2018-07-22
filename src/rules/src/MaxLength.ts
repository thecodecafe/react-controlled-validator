import Rule from '../Rule'

export class MaxLength extends Rule
{
    maxLength:number;
    constructor(maxLength: string)
    {
        super();
        this.maxLength = parseInt(maxLength);
        this.failed(`Field cannot be greater than ${maxLength} in length.`);
    }

    valid(value: string)
    {
        return value.length <= this.maxLength || this.getError();
    }

    toString()
    {
        return 'MaxLength'.toLowerCase();
    }
}