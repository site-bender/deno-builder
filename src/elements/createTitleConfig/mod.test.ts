import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createTitleConfig from "./mod.ts"

Deno.test("[createTitleConfig] creates minimal configuration correctly", function() {
	const config = createTitleConfig({
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
		type: "TITLE",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createTitleConfig] creates maximal configuration correctly", function() {
	const config = createTitleConfig({
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
		type: "TITLE",
	})
})
