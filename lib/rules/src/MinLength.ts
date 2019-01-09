import Rule from '../Rule'

export class MinLength extends Rule
{
    minLength:number;
    constructor(minLength: string)
    {
        super();
        this.minLength = parseInt(minLength);
        this.failed(`:field cannot be less than ${minLength} in length.`);
    }

    validationMessage(value: string)
    {
        // do not validate if min length is not a number
        if(typeof this.minLength !== 'number') return false;
        // do not validate if valid is not a string
        if(typeof value !== 'string') return false;
        // validate the minimum length
        return value.length < this.minLength ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'min length';
    }
}

export default MinLength;