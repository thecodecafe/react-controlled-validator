import Rule from '../Rule'

export class In extends Rule
{
    list:Array<string|boolean|null>;
    constructor(list:string)
    {
        super();
        this.list = list.split(',');
        this.failed('The selected option is invalid.');
    }
    validationMessage(value:string|boolean|null)
    {
        return this.list.indexOf(value) === -1 ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'in';
    }
}

export default In;