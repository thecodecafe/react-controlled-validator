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
        var re = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        return !re.test(value) ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'is url';
    }
}

export default IsUrl;