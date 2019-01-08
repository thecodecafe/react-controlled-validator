import Rule from '../Rule'

export class Sometimes extends Rule
{
    constructor()
    {
        super();
        this.failed('_');
    }

    validationMessage(value:string)
    {   
        if(value == undefined || value == null) {
            return false;
        }
        return this.getErrorMessage();
    }

    toString()
    {
        return 'sometimes';
    }
}

export default Sometimes;