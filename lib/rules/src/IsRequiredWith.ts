import startCase = require('lodash/startCase');
import Rule from '../Rule'
import { DataInterface } from '../../utils/intefaces';

export class IsRequiredWith extends Rule
{
    data: DataInterface;
    parents: Array<string>;
    constructor(data:DataInterface, parents:string)
    {
        super();
        if(!data) throw new Error('Form not specified for required with.');
        this.data = data;
        this.parents = parents.split(',');
        this.failed(`:field is required with ${startCase(parents)}.`);
    }

    validationMessage(value:any)
    {
        for(var i = 0; i < this.parents.length; i++){
            var parent:string = this.parents[i];
            if(this.data[parent] === undefined || this.data[parent] === null)
            {
                return false;
            }
        }
        if(value === undefined || value === null) {
            return this.getErrorMessage();
        }
        value = value+'';
        return value.length < 1 ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'is required with';
    }
}

export default IsRequiredWith;