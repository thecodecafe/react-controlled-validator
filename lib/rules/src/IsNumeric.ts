import Rule from '../Rule'

export class IsNumeric extends Rule
{
    constructor()
    {
        super();
        this.failed(':field must be numeric in value.');
    }

    valid(value:string)
    {
        var re = /^[0-9\b]+$/im;
        return re.test(value) || this.getError();
    }

    toString()
    {
        return 'is numeric';
    }
}

export default IsNumeric;