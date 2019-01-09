import React from "react";
import { ApplyRule } from "../../lib/rules/ApplyRule";
const ApplyObj = new ApplyRule;

// Test required rule.
describe("Is required rule.", () => {
	// test for error message
	it("Should return an error message",  () => {
		expect(ApplyObj.apply({}, "", "required")).toEqual({
			error: ":field is required.",
			ruleName: "is required"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "Jon", "required")).toEqual({
			error: false,
			ruleName: "is required"
		});
	});
});

// Test required with rule.
describe("Is required with rule", () => {
	// test for error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			{ first_name: "Jon" }, 
			"", 
			"requiredWith", 
			"first_name"
		)).toEqual({
			error: ":field is required with First Name.",
			ruleName: "is required with"
		});
	});

	// test for o error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			{ first_name: "Jon" }, 
			"Doe",
			"requiredWith", 
			"first_name"
		)).toEqual({
			error: false,
			ruleName: "is required with"
		});
	});

	// test for no error message
	it("Should not return an error message when missing requirement", () => {
		expect(ApplyObj.apply(
			{}, 
			"",
			"requiredWith", 
			"first_name"
		)).toEqual({
			error: false,
			ruleName: "is required with"
		});
	});

});

// Test username rule.
describe("Is username rule.", () => {
	// test for error message
	it("Should return an error message",  () => {
		expect(ApplyObj.apply({}, "$@#$#49 ss", "username")).toEqual({
			error: ":field only accepts alphanumeric characters, and dashes and underscore characters in between.",
			ruleName: "is username"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "mr_barde", "username")).toEqual({
			error: false,
			ruleName: "is username"
		});
	});
});

// Test url rule.
describe("Is url rule.", () => {
	// test for error message
	it("Should return an error message",  () => {
		expect(ApplyObj.apply({}, "$@#$#49 ss", "url")).toEqual({
			error: ":field must be a valid url.",
			ruleName: "is url"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "http://github.com", "url")).toEqual({
			error: false,
			ruleName: "is url"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "http://github.com?foo=bar", "url")).toEqual({
			error: false,
			ruleName: "is url"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "http://github.com?foo=bar&baz=foo", "url")).toEqual({
			error: false,
			ruleName: "is url"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "http://github.com#home", "url")).toEqual({
			error: false,
			ruleName: "is url"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "http://github.com#home?foo=bar&baz=foo-bar", "url")).toEqual({
			error: false,
			ruleName: "is url"
		});
	});
});

// Test phone rule.
describe("Is phone rule.", () => {
	// test for error message
	it("Should return an error message",  () => {
		expect(ApplyObj.apply({}, "3434", "phone")).toEqual({
			error: ":field must be a phone number.",
			ruleName: "is phone"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "+2348089719999", "phone")).toEqual({
			error: false,
			ruleName: "is phone"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "2348089719999", "phone")).toEqual({
			error: false,
			ruleName: "is phone"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "08089719999", "phone")).toEqual({
			error: false,
			ruleName: "is phone"
		});
	});
});


// Test ng mobile rule.
describe("Is ng mobile rule.", () => {
	// test for error message
	it("Should return an error message",  () => {
		expect(ApplyObj.apply({}, "454545454", "ngMobile")).toEqual({
			error: ":field is must be a Nigerian mobile phone number.",
			ruleName: "is NG mobile"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "08089719999", "ngMobile")).toEqual({
			error: false,
			ruleName: "is NG mobile"
		});
	});
});


// Test ng mobile rule.
describe("Is ng mobile rule.", () => {
	// test for error message
	it("Should return an error message",  () => {
		expect(ApplyObj.apply({}, "jondoe@gmail", "email")).toEqual({
			error: ":field must be an email address.",
			ruleName: "is email"
		});
	});
	// test for error message
	it("Should return an error message",  () => {
		expect(ApplyObj.apply({}, "jondoe", "email")).toEqual({
			error: ":field must be an email address.",
			ruleName: "is email"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "jondo@gmail.com", "email")).toEqual({
			error: false,
			ruleName: "is email"
		});
	});
});

// Test masimum length rule
describe("Maximum length rule", () => {
	// test for error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			null, 
			"Jon", 
			"maxLength", 
			2
		)).toEqual({
			error: ":field cannot be more than 2 characters long.",
			ruleName: "max length"
		});
	});

	// test for no error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			null, 
			"Jon", 
			"maxLength", 
			10
		)).toEqual({
			error: false,
			ruleName: "max length"
		});
	});

	// test for no error message
	it("Should not return an error message if value type is incorrect", () => {
		expect(ApplyObj.apply(
			null, 
			3000, 
			"maxLength", 
			null
		)).toEqual({
			error: false,
			ruleName: "max length"
		});
	});
});

// Test minimum length rule
describe("Minimum length rule", () => {
	// test for error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			null, 
			"Jon", 
			"minLength", 
			10
		)).toEqual({
			error: ":field cannot be less than 10 in length.",
			ruleName: "min length"
		});
	});

	// test for no error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			null, 
			"Jon", 
			"minLength", 
			2
		)).toEqual({
			error: false,
			ruleName: "min length"
		});
	});

	// test for no error message
	it("Should not return an error message if value type is incorrect", () => {
		expect(ApplyObj.apply(
			null, 
			3000, 
			"minLength", 
			null
		)).toEqual({
			error: false,
			ruleName: "min length"
		});
	});
});
