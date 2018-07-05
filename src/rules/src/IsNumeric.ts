import Rule from '../Rule'

export class IsNumeric extends Rule
{
    constructor()
    {
        super();
        this.failed('This field is required.');
    }

    valid(value:string)
    {
        var re = /^[0-9\b]+$/im;
        return re.test(value)|| this.getError();
    }

    toString()
    {
        return 'IsNumeric'.toLowerCase();
    }
}