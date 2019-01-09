import { CARDS_TYPES } from "../../lib/utils/misc";
import { ApplyRule } from "../../lib/rules/ApplyRule";
const ApplyObj = new ApplyRule;

// Test for visa card rule
describe("Visa card Rule", () => {
	// test for error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			null, 
			"3566002020360505", 
			"visaCard"
		)).toEqual({
			"error": ":field must be a visa card number.",
			"ruleName": "is visa card"
		});
	});

	// test for no error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			null, 
			"4111111111111111", 
			"visaCard"
		)).toEqual({
			"error": false,
			"ruleName": "is visa card"
		});
	});
});

// Test for master card rule
describe("Master Card Rule", () => {
	// test for error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			null, 
			"3566002020360505", 
			"masterCard"
		)).toEqual({
			"error": ":field must be a master card number.",
			"ruleName": "is master card"
		});
	});

	// test for no error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			null, 
			"5555555555554444", 
			"masterCard"
		)).toEqual({
			"error": false,
			"ruleName": "is master card"
		});
	});
});

// Test for discover card rule
describe("Discover Card Rule", () => {
	// test for error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			null, 
			"3566002020360505", 
			"discoverCard"
		)).toEqual({
			"error": ":field must be a discover card number.",
			"ruleName": "is discover card"
		});
	});

	// test for no error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			null, 
			"6011000990139424", 
			"discoverCard"
		)).toEqual({
			"error": false,
			"ruleName": "is discover card"
		});
	});
});

// Test for american express card rule
describe("Master Card Rule", () => {
	// test for error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			null, 
			"3566002020360505", 
			"americanExpress"
		)).toEqual({
			"error": ":field must be a american express card number.",
			"ruleName": "is american express"
		});
	});

	// test for no error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			null, 
			"371449635398431", 
			"americanExpress"
		)).toEqual({
			"error": false,
			"ruleName": "is american express"
		});
	});
});