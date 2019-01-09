import Rule from '../Rule'

export class IsNGMobile extends Rule
{
    constructor()
    {
        super();
        this.failed(':field is must be a Nigerian mobile phone number.');
    }

    validationMessage(value:string)
    {
        var re = /^[0-9]{11}?$/im;
        return !re.test(value) ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'is NG mobile';
    }
}

export default IsNGMobile;