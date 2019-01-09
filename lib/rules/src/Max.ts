import Rule from "../Rule"

export class Max extends Rule
{
    max:number;
    constructor(max: number)
    {
        super();
        this.max = max;
        this.failed(`:field cannot be more than ${max} in value.`);
    }

    validionMessage(value: number|string)
    {
        // do not validate if maximum size is not a number
        if(typeof this.max !== "number") return false;

        // check if number contains only numbers if not of type number
        if(typeof value !== "number"){
            // numeric value reg ex
            let rx = /^[0-9\b]+\.?([0-9\b]+)?$/im;
            // do not validate if value is not numeric
            if(!rx.test(value)) return false;
        }

        // change value to float if not a number
        if(typeof value !== "number") value = parseFloat(value);

        // perform validation
        return value > this.max ? this.getErrorMessage() : false;
    }

    toString()
    {
        return "max";
    }
}

export default Max;