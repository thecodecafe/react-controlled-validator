import Rule from '../Rule'

export class IsRequiredWith extends Rule
{
    parentValue: any;
    constructor(parentValue:any, parentName?:string)
    {
        super();
        if(!parentValue) throw new Error('Parent value is not specified.');
        if(parentName){ this.failed(`This field is required with ${parentName}.`); }
        else if(!parentName){ this.failed('This field requires another field.'); }
    }

    valid(value:string)
    {
        if(this.parentValue === undefined || this.parentValue === null)
        {
            return true;
        }
        if(value === undefined) return false;
        if(value === null) return false;
        value = value+'';
        return value.length > 0 || this.getError();
    }

    toString()
    {
        return 'IsRequiredWith'.toLowerCase();
    }
}