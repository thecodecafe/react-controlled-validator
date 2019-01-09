import Rule from '../Rule'

export class Min extends Rule
{
    min:number;
    constructor(min: number)
    {
        super();
        this.min = min;
        this.failed(`:field cannot be less than ${min} in value.`);
    }

    validionMessage(value: number|string)
    {
        // do not validate if minimum size is not a number
        if(typeof this.min !== 'number') return false;

        // check if value contains only numbers if not of type number
        if(typeof value !== 'number'){
            // numeric value reg ex
            const rx = /^[0-9\b]+\.?([0-9\b]+)?$/im;
            // do not validate if value is not numeric
            if(!rx.test(value)) return false;
        }

        // change value to float if not a number
        if(typeof value !== 'number') value = parseFloat(value);

        // perform validation
        return (value < this.min) ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'min';
    }
}

export default Min;