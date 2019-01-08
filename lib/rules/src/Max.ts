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

    valid(value: string)
    {
        return parseInt(value) <= this.max || this.getError();
    }

    toString()
    {
        return 'max';
    }
}

export default Max;