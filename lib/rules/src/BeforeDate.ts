import Rule from "../Rule"

export class BeforeDate extends Rule
{
    date: Date;

    constructor(date: string|null)
    {
        super();
        this.date = !date ? null : new Date(date);
    }

    validationMessage(value: string)
    {   
        // do not validate if given date is null or undefined
        if(value === null || value === undefined)
            return false;
        // do not validate if the date is not set
        if(!this.date)
            return false;
        // do not validate if given date is invalid
        if(this.date.toString() === "Invalid Date")
            return false;
        // set error message
        this.failed(`:field must be before ${this.date.toString()}`);
        // init date from given value
        var now = new Date(value);
        // do not validate if now is not valid
        if(now.toString() == "Invalid Date")
            return false;
        // perform validation
        return  now.getTime() > this.date.getTime() ? this.getErrorMessage() : false;
    }

    toString()
    {
        return "before date";
    }
}

export default BeforeDate;