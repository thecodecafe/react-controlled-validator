import Rule from '../Rule'

export class IsNGMobile extends Rule
{
    constructor()
    {
        super();
        this.failed('Not a Nigerian mobile phone number.');
    }

    valid(value:string)
    {
        var re = /^[0-9]{11}?$/im;
        return re.test(value) || this.getError();
    }

    toString()
    {
        return 'IsNGMobile'.toLowerCase();
    }
}