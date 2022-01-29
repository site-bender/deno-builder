import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createRubyParentheticalConfig from "./mod.ts"

Deno.test("[createRubyParentheticalConfig] creates minimal configuration correctly", function() {
	const config = createRubyParentheticalConfig({
		id: "id",
	}, [{ content: "Ack" }])

	assertEquals(config, {
		attributes: {
			id: "id",
		},
		children: [
			{
				content: "Ack",
			},
		],
		type: "RP",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createRubyParentheticalConfig] creates maximal configuration correctly", function() {
	const config = createRubyParentheticalConfig({
		class: "className",
		data: {
			color: "red",
			berry: "cherry",
		},
		id: "id",
		title: "Titular",
	}, [{ content: "Bob's yer uncle." }])

	assertEquals(config, {
		attributes: {
			class: "className",
			data: {
				color: "red",
				berry: "cherry",
			},
			id: "id",
			title: "Titular",
		},
		children: [
			{
				content: "Bob's yer uncle.",
			},
		],
		type: "RP",
	})
})
