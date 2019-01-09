import Rule from '../Rule'

export class MaxLength extends Rule
{
    maxLength:number;
    constructor(maxLength: string)
    {
        super();
        this.maxLength = parseInt(maxLength);
        this.failed(`:field cannot be more than ${maxLength} characters long.`);
    }

    validationMessage(value: string)
    {
        // do not validate if max length is not a number
        if(typeof this.maxLength !== 'number') return false;
        // do not validate if valid is not a string
        if(typeof value !== 'string') return false;
        // validate the maximum length
        return value.length > this.maxLength ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'max length';
    }
}

export default MaxLength;