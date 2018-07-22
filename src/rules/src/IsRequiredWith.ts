import Rule from '../Rule'
import { FormInterface } from '../../utils/intefaces';

export class IsRequiredWith extends Rule
{
    form: FormInterface;
    parents: Array<string>;
    constructor(form:FormInterface, parents:string)
    {
        super();
        if(!form) throw new Error('This field is required.');
        this.form = form;
        this.parents = parents.split(',');
    }

    valid(value:string|boolean|null)
    {
        for(var i = 0; i < this.parents.length; i++){
            var parent:string = this.parents[i];
            if(this.form[parent] === undefined || this.form[parent] === null)
            {
                return true;
            }
        }
        if(value === undefined || value === null) {
            return false;
        }
        value = value+'';
        return value.length > 0 || this.getError();
    }

    toString()
    {
        return 'IsRequiredWith'.toLowerCase();
    }
}