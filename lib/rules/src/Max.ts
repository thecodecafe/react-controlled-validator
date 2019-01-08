import Rule from '../Rule'

export class Max extends Rule
{
    max:number;
    constructor(max: any)
    {
        super();
        this.max = parseInt(max);
        this.failed(`:field cannot be greater than ${max} in value.`);
    }

    validationMessage(value: string)
    {
        return parseInt(value) > this.max ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'max';
    }
}

export default Max;