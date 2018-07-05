import { CARD_TYPES, CARDS_RANGES } from "./constants";

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