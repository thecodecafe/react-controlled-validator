import Rule from '../Rule'

export class Accepted extends Rule
{
    constructor()
    {
        super();
        this.failed('Please accept :field.');
    }
    validationMessage(value: boolean)
    {
        return value !== true ? this.getErrorMessage() : false;
    }
    toString()
    {
        return 'accepted';
    }
}

export default Accepted;