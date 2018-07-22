import Rule from '../Rule'

export class Sometimes extends Rule
{
    constructor()
    {
        super();
        this.failed('This field is required.');
    }

    valid(value:string)
    {
        if( value === undefined)
        {
            return true;
        }
        
        if(value == undefined || value == null) {
            return false;
        }
        value = value+'';
        return value.length > 0 || this.getError();
    }

    toString()
    {
        return 'Sometimes'.toLowerCase();
    }
}