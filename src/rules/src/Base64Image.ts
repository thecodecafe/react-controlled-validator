import Rule from '../Rule'

export class Base64Image extends Rule
{
    formats: string;

    constructor(formats: string)
    {
        super();
        this.formats = formats.replace(new RegExp(/^(\,)$/), '|');
        this.failed(`:field must be a base 64 image.`);
    }

    valid(value: string)
    {
        var regex = new RegExp('\"data:image\/('+this.formats+');base64,([^\"]*)\"', 'i');
        return regex.test(value) || this.getError();
    }

    toString()
    {
        return 'base64 image';
    }
}