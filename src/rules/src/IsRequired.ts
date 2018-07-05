import Rule from '../Rule'

export class IsRequired extends Rule
{
    constructor()
    {
        super();
        this.failed('This field is required.');
    }

    valid(value:string)
    {
        if(value == undefined) return false;
        if(value == null) return false;
        value = value+'';
        return value.length > 0 || this.getError();
    }

    toString()
    {
        return 'IsRequired'.toLowerCase();
    }
}