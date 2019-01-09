import startCase = require('lodash/startCase');
import isEqual = require('lodash/isEqual');
import Rule from '../Rule'
import { DataInterface } from '../../utils/intefaces';

export class Matches extends Rule
{
    first:any;
    data: DataInterface;

    constructor(data:DataInterface, first: any)
    {
        super();
        this.first = first;
        this.data = data;
        this.failed(`:field does not match ${startCase(first)}.`);
    }

    validationMessage(value: string)
    {
        // do not validate if the data is not defined
        if(!this.data) return false;
        // do not validate if the referenced data is not available
        if(!this.first) return false;
        // preform validation
        return !isEqual(value, this.data[this.first]) ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'matches';
    }
}

export default Matches;