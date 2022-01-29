import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createParameterConfig from "./mod.ts"

Deno.test("[createParameterConfig] creates minimal configuration correctly", function() {
	const config = createParameterConfig({
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
		type: "PARAM",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createParameterConfig] creates maximal configuration correctly", function() {
	const config = createParameterConfig({
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
		type: "PARAM",
	})
})
