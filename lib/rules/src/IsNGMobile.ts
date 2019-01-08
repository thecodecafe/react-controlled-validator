import Rule from '../Rule'

export class IsNGMobile extends Rule
{
    constructor()
    {
        super();
        this.failed(':field is not a Nigerian mobile phone number.');
    }

    valid(value:string)
    {
        var re = /^[0-9]{11}?$/im;
        return re.test(value) || this.getError();
    }

    toString()
    {
        return 'is NG mobile';
    }
}

export default IsNGMobile;