import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createButtonConfig from "./mod.ts"

Deno.test("[createButtonConfig] creates minimal configuration correctly", function() {
	const config = createButtonConfig({
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
		type: "BUTTON",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createButtonConfig] creates maximal configuration correctly", function() {
	const config = createButtonConfig({
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
		type: "BUTTON",
	})
})
