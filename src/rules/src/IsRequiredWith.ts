import startCase = require('lodash/startCase');
import Rule from '../Rule'
import { FormInterface } from '../../utils/intefaces';

export class IsRequiredWith extends Rule
{
    form: FormInterface;
    parents: Array<string>;
    constructor(form:FormInterface, parents:string)
    {
        super();
        if(!form) throw new Error('Form not specified for required with.');
        this.form = form;
        this.parents = parents.split(',');
        this.failed(`:field is required with ${startCase(parents)}.`);
    }

    valid(value:any)
    {
        for(var i = 0; i < this.parents.length; i++){
            var parent:string = this.parents[i];
            if(this.form[parent] === undefined || this.form[parent] === null)
            {
                return this.getError();
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
        return 'is required with';
    }
}