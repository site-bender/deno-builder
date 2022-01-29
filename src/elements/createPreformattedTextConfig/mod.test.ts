import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createPreformattedTextConfig from "./mod.ts"

Deno.test("[createPreformattedTextConfig] creates minimal configuration correctly", function() {
	const config = createPreformattedTextConfig({
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
		type: "PRE",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createPreformattedTextConfig] creates maximal configuration correctly", function() {
	const config = createPreformattedTextConfig({
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
		type: "PRE",
	})
})
