import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createAnchorConfig from "./mod.ts"

Deno.test("[createAnchorConfig] creates minimal configuration correctly", function() {
	const config = createAnchorConfig({
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
		type: "A",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createAnchorConfig] creates maximal configuration correctly", function() {
	const config = createAnchorConfig({
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
		type: "A",
	})
})
