import Rule from '../Rule'

export class IsRequired extends Rule
{
    constructor()
    {
        super();
        this.failed(':field is required.');
    }

    validationMessage(value:string|boolean|null)
    {
        if(value == undefined || value == null) {
            return false;
        }
        value = value+'';
        return value.length < 1 ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'is required';
    }
}

export default IsRequired;