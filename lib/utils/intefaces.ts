export interface DataInterface{
    [key:string]: string|number|boolean|void
};

export interface ReturnInterface {
    error?:string|boolean;
    ruleName?:string
};

export interface RulesInterface {
    [key:string]:  Array<string|'requiredWith'|'accepted'|'afterDate'|'beforeDate'|'base64Image'|'in'|'americanExpress'|'descoverCard'|'masterCard'|'visaCard'|'email'|'url'|'ngMobile'|'numeric'|'phone'|'phoneNational'|'username'|'match'|'notMatch'|'max'|'maxLength'|'min'|'minLength'|'between'|'sometimes'>
}

export interface Messages {
    [key:string]:  string
}

export interface Data {
    [key:string]:  any
}

export interface Props {
    touched?: Array<string>;
    data: Data;
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

export interface CARD_TYPES_INTERFACE { [key:string]: string }

export interface CARDS_RANGES_INTERFACE { [key:string]: Array<Array<number>> }