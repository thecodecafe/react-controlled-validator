import Rule from '../Rule'

export class IsNumeric extends Rule
{
    constructor()
    {
        super();
        this.failed(':field must be numeric in value.');
    }

    validationMessage(value:string)
    {
        let re = /^[0-9\b]+\.?([0-9\b]+)?$/im;
        return !re.test(value) ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'is numeric';
    }
}

export default IsNumeric;