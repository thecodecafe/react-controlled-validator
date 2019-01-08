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

    validationMessage(value: string|number)
    {
        if(typeof value === 'number'){
            return value < this.min || value > this.max ? this.getErrorMessage() : false;
        }
        if(typeof value === 'string'){
            return value.length < this.min || value.length > this.max ? this.getErrorMessage() : false;
        }
        return false;
    }

    toString()
    {
        return 'is between';
    }
}

export default IsBetween;