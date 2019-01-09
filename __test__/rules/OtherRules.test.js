import React from "react";
import { ApplyRule } from "../../lib/rules/ApplyRule";
import { base64Img } from "../../__mock__/base64Image"
const ApplyObj = new ApplyRule;

// Test does not match rule
describe("Does not match rule", () => {
	// test for error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			"Jon", 
			"doesNotMatch", 
			"first_name"
		)).toEqual({
			error: ":field must not match First Name.",
			ruleName: "does not match"
		});
	});

	// test for no error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			"Doe", 
			"doesNotMatch", 
			"first_name"
		)).toEqual({
			error: false,
			ruleName: "does not match"
		});
	});

	// test for no error message
	it("Should not return an error message if referenced data isn't there", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			"Doe", 
			"doesNotMatch", 
			null
		)).toEqual({
			error: false,
			ruleName: "does not match"
		});
	});
});

// Test matches rule
describe("Does not match rule", () => {
	// test for error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			"Doe", 
			"matches", 
			"first_name"
		)).toEqual({
			error: ":field does not match First Name.",
			ruleName: "matches"
		});
	});

	// test for no error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			"Jon", 
			"matches", 
			"first_name"
		)).toEqual({
			error: false,
			ruleName: "matches"
		});
	});

	// test for no error message
	it("Should not return an error message if referenced data isn't there", () => {
		expect(ApplyObj.apply(
			{first_name: "Jon"}, 
			"Jon", 
			"matches", 
			null
		)).toEqual({
			error: false,
			ruleName: "matches"
		});
	});
});

// Test accepted rule
describe("Accepted rule", () => {
	// test for error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			null,
			false, 
			"accepted"
		)).toEqual({
			error: "Please accept :field.",
			ruleName: "accepted"
		});
	});

	// test for error message
	it("Should return an error", () => {
		expect(ApplyObj.apply(
			null, 
			"Jon", 
			"accepted"
		)).toEqual({
			error: "Please accept :field.",
			ruleName: "accepted"
		});
	});

	// test for error message
	it("Should return an error", () => {
		expect(ApplyObj.apply(
			null, 
			null, 
			"accepted"
		)).toEqual({
			error: "Please accept :field.",
			ruleName: "accepted"
		});
	});

	// test for error message
	it("Should return an error", () => {
		expect(ApplyObj.apply(
			null, 
			undefined, 
			"accepted"
		)).toEqual({
			error: "Please accept :field.",
			ruleName: "accepted"
		});
	});

	// test for no error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			null,
			true, 
			"accepted"
		)).toEqual({
			error: false,
			ruleName: "accepted"
		});
	});
});


// Test base64 image rule
describe("Base64 Image rule", () => {
	// test for error message
	it("Should return an error message", () => {
		expect(ApplyObj.apply(
			null,
			"39034j0934", 
			"base64Image",
			"png,jpg,jpeg"
		)).toEqual({
			error: ":field must be a base 64 image.",
			ruleName: "base64 image"
		});
	});

	// test for no error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			null,
			base64Img, 
			"base64Image",
			"png,jpg,jpeg"
		)).toEqual({
			error: false,
			ruleName: "base64 image"
		});
	});

	// test for no error message
	it("Should not return an error message", () => {
		expect(ApplyObj.apply(
			null,
			base64Img, 
			"base64Image"
		)).toEqual({
			error: false,
			ruleName: "base64 image"
		});
	});
});