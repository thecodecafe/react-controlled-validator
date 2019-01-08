import Rule from '../Rule'

export class MaxLength extends Rule
{
    maxLength:number;
    constructor(maxLength: string)
    {
        super();
        this.maxLength = parseInt(maxLength);
        this.failed(`:field cannot be greater than ${maxLength} in length.`);
    }

    validationMessage(value: string)
    {
        return value.length > this.maxLength ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'max length';
    }
}

export default MaxLength;