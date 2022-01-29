import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createDescriptionListConfig from "./mod.ts"

Deno.test("[createDescriptionListConfig] creates minimal configuration correctly", function() {
	const config = createDescriptionListConfig({
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
		type: "DL",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createDescriptionListConfig] creates maximal configuration correctly", function() {
	const config = createDescriptionListConfig({
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
		type: "DL",
	})
})
