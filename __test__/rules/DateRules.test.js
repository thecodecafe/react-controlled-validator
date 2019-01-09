import React from "react";
import { ApplyRule } from "../../lib/rules/ApplyRule";
const ApplyObj = new ApplyRule;

// Test before date rule.
describe("Before date rule.", () => {
	// test for error message
	it("Should return an error message",  () => {
		let date = new Date("03/06/2019");
		expect(ApplyObj.apply({}, "04/06/2019", "beforeDate", date.toString())).toEqual({
			error: `:field must be before ${date.toString()}`,
			ruleName: "before date"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		let date = new Date("03/06/2019");
		expect(ApplyObj.apply({}, "02/06/2019", "beforeDate", date.toString())).toEqual({
			error: false,
			ruleName: "before date"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "02/06/2019", "beforeDate", null)).toEqual({
			error: false,
			ruleName: "before date"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		let date = new Date("03/06/2019");
		expect(ApplyObj.apply({}, null, "beforeDate", date.toString())).toEqual({
			error: false,
			ruleName: "before date"
		});
	});
});

// Test after date rule.
describe("After date rule.", () => {
	// test for error message
	it("Should return an error message",  () => {
		let date = new Date("04/06/2019");
		expect(ApplyObj.apply({}, "03/06/2019", "afterDate", date.toString())).toEqual({
			error: `:field must be after ${date.toString()}`,
			ruleName: "after date"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		let date = new Date("02/06/2019");
		expect(ApplyObj.apply({}, "03/06/2019", "afterDate", date.toString())).toEqual({
			error: false,
			ruleName: "after date"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "03/06/2019", "afterDate", null)).toEqual({
			error: false,
			ruleName: "after date"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		let date = new Date("02/06/2019");
		expect(ApplyObj.apply({}, null, "afterDate", date.toString())).toEqual({
			error: false,
			ruleName: "after date"
		});
	});
});
