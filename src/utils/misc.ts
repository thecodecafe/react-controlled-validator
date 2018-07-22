import { CARD_TYPES_INTERFACE, CARDS_RANGES_INTERFACE } from "./intefaces";

export const CARD_TYPES:CARD_TYPES_INTERFACE = {
    DISCOVER: 'discover',
    MASTERCARD: 'mastercard',
    VISA: 'visa',
    AMERICAN_EXPRESS: 'americanexpress'
};

export const CARDS_RANGES:CARDS_RANGES_INTERFACE = {
    discover: [[6011], [622126, 622925], [644, 649], [65]],
    mastercard: [[50, 55]],
    visa: [[4]],
    americanexpress: [[34], [37]]
};

export const CardChecker:Function = (card:string, value:string) => {
    if(CARD_TYPES[card] == undefined)
    {
        return false;
    }

    var v2:number;
    var ranges:Array<Array<number>> = CARDS_RANGES[card];

    // 
    for(var i = 0; i < ranges.length; i++){
        var range:Array<number> = ranges[i];
        if(range.length == 1){
            v2 = parseInt(value.substr(0, range[0].toString().length));
            if(v2 == range[0])
            {
                return true;
            }

            continue;
        }   
        if(range.length == 2){
            v2 = parseInt(value.substr(0, range[1].toString().length));
            if(v2 >= range[0] && v2 <= range[1]){
                return true;
            }
        }
    }
    
    return false;
}