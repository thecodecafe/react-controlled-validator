import React from "react";
import { ApplyRule } from "../../lib/rules/ApplyRule";
const ApplyObj = new ApplyRule;

// test is between rule
describe("Is between rule", () => {
	// test for error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			5, 
			"between", 
			"10,20"
		)).toEqual({
			error: ":field must be greater than or equal to 10 and less than or equal to 20.",
			ruleName: "is between"
		});
	});

	// test for no error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			10, 
			"between", 
			"10,20"
		)).toEqual({
			error: false,
			ruleName: "is between"
		});
	});

	// test for error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			"daniel", 
			"between", 
			"10,20"
		)).toEqual({
			error: ":field must be greater than or equal to 10 and less than or equal to 20.",
			ruleName: "is between"
		});
	});

	// test for no error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			"danielbarde", 
			"between", 
			null
		)).toEqual({
			error: false,
			ruleName: "is between"
		});
	});
});

// Test is numeric rule
describe("Is numeric rule", () => {
	// test for error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			"oieioer", 
			"numeric"
		)).toEqual({
			error: ":field must be numeric in value.",
			ruleName: "is numeric"
		});
	});

	// test for no error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			"10", 
			"numeric"
		)).toEqual({
			error: false,
			ruleName: "is numeric"
		});
	});

	// test for error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			null, 
			"numeric"
		)).toEqual({
			error: ":field must be numeric in value.",
			ruleName: "is numeric"
		});
	});

	// test for no error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			5000, 
			"numeric", 
			null
		)).toEqual({
			error: false,
			ruleName: "is numeric"
		});
	});

	// test for no error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			5000.00, 
			"numeric", 
			null
		)).toEqual({
			error: false,
			ruleName: "is numeric"
		});
	});
});