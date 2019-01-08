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
        return value.length < this.minLength ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'min length';
    }
}

export default MinLength;