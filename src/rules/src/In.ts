import Rule from '../Rule'

export class In extends Rule
{
    list:Array<string|boolean|null>;
    constructor(list:string)
    {
        super();
        this.list = list.split(',');
        this.failed('Value was not found in supplied list.');
    }
    valid(value:string|boolean|null)
    {
        return this.list.indexOf(value) != -1 || this.getError();
    }

    toString()
    {
        return 'IsIn'.toLowerCase();
    }
}