var errorMessage: string;

export class MainRule
{
    name?:string;

    failed(message:string)
    {
        errorMessage = message;
        return this;
    }

    getErrorMessage()
    {
        return errorMessage;
    }
    
    toString()
    {
        return 'Rule';
    }
    
    toValue()
    {
        return 'Rule';
    }

    validationMessage(value: string|boolean|null|number):string|boolean{
        return false;
    }

    toStringTag()
    {
        return 'Rule';
    }
}

export default MainRule;