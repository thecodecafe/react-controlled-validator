export interface FormInterface{
    [key:string]: string|number|boolean|void
};

export interface ReturnInterface {
    error:string|boolean;
    ruleName:string
};