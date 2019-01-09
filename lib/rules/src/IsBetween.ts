import Rule from '../Rule'

export class IsBetween extends Rule
{
    range:string;

    constructor(range:string)
    {
        super();
        this.range = range;
    }

    validationMessage(value: string|number)
    {
        // do not validate if range is not a string
        if(typeof this.range !== 'string') 
            return false;

        // convert passed range to an array of ranges
        let rangeArr:Array<string> = this.range.split(',');

        // do not validate if range is not exactly 2 numbers
        if(rangeArr.length !== 2)
            return false;

        // set min and mas range
        let min:number = parseFloat(rangeArr[0]);
        let max:number = parseFloat(rangeArr[1]);

        // set failed message
        this.failed(`:field must be greater than or equal to ${min} and less than or equal to ${max}.`);

        // if value is number compare range to value
        if(typeof value === 'number')
            return value < min || value > max ? this.getErrorMessage() : false;
        
        // if value is a string compare to value length
        if(typeof value === 'string')
            return value.length < min || value.length > max ? this.getErrorMessage() : false;

        // return false by default
        return false;
    }

    toString()
    {
        return 'is between';
    }
}

export default IsBetween;