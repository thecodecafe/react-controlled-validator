import Rule from '../Rule'

export class IsPhone extends Rule
{
    constructor()
    {
        super();
        this.failed(':field must be a phone number.');
    }

    validationMessage(value:string)
    {
        var re = /^[\+]?[(]?[0-9]{6,15}[)]?$/im;
        return !re.test(value) ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'is phone';
    }
}

export default IsPhone;