interface CARD_TYPES_INTERFACE { [key:string]: string }
interface CARDS_RANGES_INTERFACE { [key:string]: Array<Array<number>> }

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