import React from "react";
import { ApplyRule } from "../../lib/rules/ApplyRule";
const ApplyObj = new ApplyRule;

// Test in rule.
describe("In rule.", () => {
	// test for error message
	it("Should return an error message",  () => {
		expect(ApplyObj.apply({}, "5", "in", "1,4,6")).toEqual({
			error: ":field is not in the list.",
			ruleName: "in"
		});
	});

	// test for success
	it("Should not return an error message", () => {
		expect(ApplyObj.apply({}, "4", "in", "1,4,6")).toEqual({
			error: false,
			ruleName: "in"
		});
	});
});
