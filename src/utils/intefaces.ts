export interface FormInterface{
    [key:string]: string|number|boolean|void
};

export interface ReturnInterface {
    error:string|boolean;
    ruleName:string
};

export interface RulesInterface {
    [key:string]:  Array<string>
}

export interface Messages {
    [key:string]:  string
}

export interface Form {
    [key:string]:  any
}

export interface Props {
    touched: Array<string>;
    form: Form;
    rules: RulesInterface;
    messages: Messages;
    onChange: Function;
}

export interface States {
    touched: Array<string>
}

export interface ValidationState {
    valid: boolean,
    fields: ValidationStateFields
}

export interface ValidationStateFields {
    [key:string]: any
}