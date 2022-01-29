import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createDescriptionConfig from "./mod.ts"

Deno.test("[createDescriptionConfig] creates minimal configuration correctly", function() {
	const config = createDescriptionConfig({
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
		type: "DD",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createDescriptionConfig] creates maximal configuration correctly", function() {
	const config = createDescriptionConfig({
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
		type: "DD",
	})
})
