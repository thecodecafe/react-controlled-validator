import Rule from '../Rule'
import { FormInterface } from '../../utils/intefaces';
import { startCase } from 'lodash';

export class Match extends Rule
{
    first:any;
    form: FormInterface;

    constructor(form:FormInterface, first: any)
    {
        super();
        this.first = first;
        this.form = form;
        this.failed(`:field does not match ${startCase(first)}.`);
    }

    valid(value: string)
    {
        return value === this.form[this.first] || this.getError();
    }

    toString()
    {
        return 'match';
    }
}