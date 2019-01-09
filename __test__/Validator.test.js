import React from "react";
import renderer from "react-test-renderer";
import { Validator } from "../lib/components/Validator";


describe("Validator works for basic usage.", () => {
	// validation date
	let validationData = {
		"first_name": "",
		"last_name": "",
	};

	// validation rules
	let validationRules = {
		"first_name": ["required"],
		"last_name": ["required"],	
	};

	// validation messages
	let validationMessages = {
		"first_name.required": "Please enter your first name",
		"last_name": "Please enter your last name.",	
	};

	// Create render component
	const component = renderer.create(
		<Validator
			data={validationData}
			rules={validationRules}
			messages={validationMessages}
			onChange={() => {}}
		/>
	);

	// test for the render
	it("Should not render anything.", () => {
		// take snapshot
		let tree = component.toJSON();
		expect(tree).toBeNull();
	});
});