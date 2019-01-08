var error: string;

export class MainRule
{
    name?:string;

    failed(message:string)
    {
        error = message;
        return this;
    }

    getError()
    {
        return error;
    }
    
    toString()
    {
        return 'Rule';
    }
    
    toValue()
    {
        return 'Rule';
    }

    valid(value: string|boolean|null|number):string|boolean{
        return true;
    }

    toStringTag()
    {
        return 'Rule';
    }
}

export default MainRule;