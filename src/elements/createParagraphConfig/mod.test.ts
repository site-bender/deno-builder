import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createParagraphConfig from "./mod.ts"

Deno.test("[createParagraphConfig] creates minimal configuration correctly", function() {
	const config = createParagraphConfig({
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
		type: "P",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createParagraphConfig] creates maximal configuration correctly", function() {
	const config = createParagraphConfig({
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
		type: "P",
	})
})
