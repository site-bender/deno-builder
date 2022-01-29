import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createBlockquoteConfig from "./mod.ts"

Deno.test("[createBlockquoteConfig] creates minimal configuration correctly", function() {
	const config = createBlockquoteConfig({
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
		type: "BLOCKQUOTE",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createBlockquoteConfig] creates maximal configuration correctly", function() {
	const config = createBlockquoteConfig({
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
		type: "BLOCKQUOTE",
	})
})
