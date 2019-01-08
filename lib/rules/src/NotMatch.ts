import startCase = require('lodash/startCase');
import Rule from '../Rule'
import { DataInterface } from '../../utils/intefaces';

export class NotMatch extends Rule
{
    first:any;
    data:DataInterface;

    constructor(data:DataInterface, first: any)
    {
        super();
        this.first = first;
        this.data = data;
        this.failed(`:field does not match ${startCase(first)}.`);
    }

    validationMessage(value: string)
    {
        return value === this.data[this.first] ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'not match';
    }
}

export default NotMatch;