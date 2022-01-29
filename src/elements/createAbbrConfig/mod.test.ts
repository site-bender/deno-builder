import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createAbbrConfig from "./mod.ts"

Deno.test("[createAbbrConfig] creates minimal configuration correctly", function() {
	const config = createAbbrConfig({
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
		type: "ABBR",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createAbbrConfig] creates maximal configuration correctly", function() {
	const config = createAbbrConfig({
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
		type: "ABBR",
	})
})
