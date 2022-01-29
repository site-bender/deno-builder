import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createKeyboardConfig from "./mod.ts"

Deno.test("[createKeyboardConfig] creates minimal configuration correctly", function() {
	const config = createKeyboardConfig({
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
		type: "KBD",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createKeyboardConfig] creates maximal configuration correctly", function() {
	const config = createKeyboardConfig({
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
		type: "KBD",
	})
})
