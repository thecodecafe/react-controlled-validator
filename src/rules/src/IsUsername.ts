import Rule from '../Rule'

export class IsUsername extends Rule
{
    constructor()
    {
        super();
        this.failed(':field only accepts alphanumeric characters and dashes and underscore characters in between.');
    }

    valid(value:string)
    {
        var re = /^[A-Za-z0-9]+(?:[\_\-][A-Za-z0-9]+)*$/;
        return re.test(value) || this.getError();
    }

    toString()
    {
        return 'is username';
    }
}