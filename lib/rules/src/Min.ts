import Rule from '../Rule'

export class Min extends Rule
{
    min:number;
    constructor(min: string)
    {
        super();
        this.min = parseInt(min);
        this.failed(`:field cannot be lesser than ${min} in value.`);
    }

    valid(value: number)
    {
        return value >= this.min || this.getError();
    }

    toString()
    {
        return 'min';
    }
}

export default Min;