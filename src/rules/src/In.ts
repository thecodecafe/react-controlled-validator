import Rule from '../Rule'

export class In extends Rule
{
    list:Array<number | string>;
    constructor(list:Array<number | string>)
    {
        super();
        this.list = list;
        this.failed('Value was not found in supplied list.');
    }
    valid(value: number | string)
    {
        return this.list.indexOf(value) || this.getError();
    }

    toString()
    {
        return 'IsIn'.toLowerCase();
    }
}