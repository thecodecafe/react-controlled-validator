import Rule from '../Rule'

export class Base64Image extends Rule
{
    formats: string;

    constructor(formats: string)
    {
        super();
        this.formats = formats;
        this.failed(`:field must be a base 64 image.`);
    }

    validationMessage(value: string)
    {
        // do not validate if formats aren't set
        if(typeof this.formats !== "string")
            return false;
        // replace commas with pips in formats
        this.formats = this.formats.split(',').join('|');
        // create regex
        var rx = new RegExp('data:image\/('+this.formats+');base64,([^\"]*)', 'i');
        // perform validation
        return !rx.test(value) ? this.getErrorMessage() : false;
    }

    toString()
    {
        return 'base64 image';
    }
}

export default Base64Image;