import Rule from '../Rule'

export class IsUrl extends Rule
{
    constructor()
    {
        super();
        this.failed(':field must be a valid url.');
    }

    validationMessage(value:string)
    {
        var re = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
        return !re.test(value) ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'is url';
    }
}

export default IsUrl;