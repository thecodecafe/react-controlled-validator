import Rule from '../Rule'

export class IsPhone extends Rule
{
    constructor()
    {
        super();
        this.failed(':field is not a phone number.');
    }

    validationMessage(value:string)
    {
        var re = /^[\+]?[(]?[0-9]{6,14}[)]?$/im;
        return !re.test(value) ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'is phone';
    }
}

export default IsPhone;