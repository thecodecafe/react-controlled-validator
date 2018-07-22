import Rule from '../Rule'

export class IsUrl extends Rule
{
    constructor()
    {
        super();
        this.failed(':field must be a valid url.');
    }

    valid(value:string)
    {
        var re = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        return re.test(value) || this.getError();
    }

    toString()
    {
        return 'is url';
    }
}