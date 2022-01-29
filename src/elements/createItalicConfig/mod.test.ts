import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createItalicConfig from "./mod.ts"

Deno.test("[createItalicConfig] creates minimal configuration correctly", function() {
	const config = createItalicConfig({
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
		type: "I",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createItalicConfig] creates maximal configuration correctly", function() {
	const config = createItalicConfig({
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
		type: "I",
	})
})
