var error: string;

export default class MainRule
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

    valid(value: any){}

    toStringTag()
    {
        return 'Rule';
    }
}