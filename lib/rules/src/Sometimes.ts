import Rule from '../Rule'

export class Sometimes extends Rule
{
    constructor()
    {
        super();
        this.failed('_');
    }

    valid(value:string)
    {   
        if(value == undefined || value == null) {
            return false;
        }
        return this.getError();
    }

    toString()
    {
        return 'sometimes';
    }
}

export default Sometimes;