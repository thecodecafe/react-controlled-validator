import Rule from '../Rule'

export class Sometimes extends Rule
{
    rule: Function;
    constructor(rule:Function)
    {
        super();
        this.rule = rule;
    }

    valid(value:string)
    {
        if( value !== undefined && value !== null)
        {
            return this.rule(value);
        }
        return true;
    }

    toString()
    {
        return 'Sometimes'.toLowerCase();
    }
}