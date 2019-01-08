import Rule from '../Rule'

export class IsPhoneNational extends Rule
{
    constructor()
    {
        super();
        this.failed(':field us not a national phone number.');
    }

    valid(value:string)
    {
        var re = /^[0]?[0-9]{6,12}$/im;
        return re.test(value) || this.getError();
    }

    toString()
    {
        return 'is phone national';
    }
}

export default IsPhoneNational;