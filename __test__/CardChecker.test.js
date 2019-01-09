import { CARD_TYPES, CARDS_RANGES, CardChecker } from '../lib/utils/misc';

describe("Card types object", () => {
	// check for visa card
	it("Should have visa", () => {
		expect(CARD_TYPES.VISA).toEqual('visa');
	});
	// check for discover card
	it("Should have discover", () => {
		expect(CARD_TYPES.DISCOVER).toEqual('discover');
	});
	// check for master card
	it("Should have mastercard", () => {
		expect(CARD_TYPES.MASTERCARD).toEqual('mastercard');
	});
	// check for american express card
	it("Should have americanexpress", () => {
		expect(CARD_TYPES.AMERICAN_EXPRESS).toEqual('americanexpress');
	});
});

describe("Card ranges object", () => {
	// check for visa card range
	it("Should have visa card range", () => {
		expect(CARDS_RANGES.visa).toEqual([[4]]);
	});
	// check for american express card range
	it("Should have american express card range", () => {
		expect(CARDS_RANGES.americanexpress).toEqual([[34], [37]]);
	});
	// check for master card range
	it("Should have discover card range", () => {
		expect(CARDS_RANGES.discover).toEqual([[6011], [622126, 622925], [644, 649], [65]]);
	});
	// check for master card range
	it("Should have mastercard range", () => {
		expect(CARDS_RANGES.mastercard).toEqual([[50, 55]]);
	});
});

describe("Test card checker", () => {
	// test for false
	it("Should return false", () => {
		let cardCheck = CardChecker(CARD_TYPES.VISA, '83949349834983984');
		expect(cardCheck).toEqual(false);
	});

	// test for true
	it("Should return false", () => {
		let cardCheck = CardChecker(CARD_TYPES.VISA, '4111111111111111');
		expect(cardCheck).toEqual(true);
	});
});