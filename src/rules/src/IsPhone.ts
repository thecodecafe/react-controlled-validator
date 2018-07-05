import Rule from '../Rule'

export class IsPhone extends Rule
{
    constructor()
    {
        super();
        this.failed('Phone is invalid.');
    }

    valid(value:string)
    {
        var re = /^[\+]?[(]?[0-9]{6,14}[)]?$/im;
        return re.test(value) || this.getError();
    }

    toString()
    {
        return 'IsPhone'.toLowerCase();
    }
}