import Rule from '../Rule'

export class IsEmail extends Rule
{
    constructor()
    {
        super();
        this.failed(':field must be a valid email address.');
    }

    valid(value:string)
    {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value) || this.getError();
    }

    toString()
    {
        return 'is email';
    }
}