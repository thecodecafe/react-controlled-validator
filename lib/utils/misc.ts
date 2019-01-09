import { CARD_TYPES_INTERFACE, CARDS_RANGES_INTERFACE } from "./intefaces";

/**
 * Here are the types of cards supported by the checker
 */
export const CARD_TYPES:CARD_TYPES_INTERFACE = {
    DISCOVER: 'discover',
    MASTERCARD: 'mastercard',
    VISA: 'visa',
    AMERICAN_EXPRESS: 'americanexpress'
};

/**
 * This contains the ranges for the different card numbers
 * they are the numbers that each card type begins with.
 */
export const CARDS_RANGES:CARDS_RANGES_INTERFACE = {
    discover: [[6011], [622126, 622925], [644, 649], [65]],
    mastercard: [[50, 55]],
    visa: [[4]],
    americanexpress: [[34], [37]]
};

/**
 * Performs a check on the given card type and number
 * to see if card number corresponds with the given
 * card type.
 */
export const CardChecker:Function = (cardType:string, cardNumber:string) => {
    // fail if the specified card type is not supported
    if(!cardType || typeof CARDS_RANGES[cardType] === 'undefined')
        return false;

    // card starting numbers container
    let cardStartingNumbers:number;

    // get the ranges of the specified card type
    let ranges:Array<Array<number>> = CARDS_RANGES[cardType];

    // loop through the 
    for(let i = 0; i < ranges.length; i++){
        // get the range at the current loop position
        let range:Array<number> = ranges[i];
        // if not range an just a single number to compare to
        if(range.length === 1){
            // get the start number of the given card number(value arg)
            // based on the length of the range
            cardStartingNumbers = parseInt(cardNumber.substr(0, range[0].toString().length));
            // return true if the starting number matches the current range
            if(cardStartingNumbers === range[0])
                return true;
            // sckip to next iteration
            continue;
        }   
        // if lange contains two items, it means it's an actual range
        if(range.length === 2){
            // get the start number of the given card number(value arg)
            // based on the length of the starting range
            cardStartingNumbers = parseInt(cardNumber.substr(0, range[1].toString().length));
            // check if the starting number falls within the values of the current range
            // and return true
            if(cardStartingNumbers >= range[0] && cardStartingNumbers <= range[1])
                return true;
        }
    }
    // return false by default
    return false;
}