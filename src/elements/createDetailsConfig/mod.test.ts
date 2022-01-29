import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createDetailsConfig from "./mod.ts"

Deno.test("[createDetailsConfig] creates minimal configuration correctly", function() {
	const config = createDetailsConfig({
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
		type: "DETAILS",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createDetailsConfig] creates maximal configuration correctly", function() {
	const config = createDetailsConfig({
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
		type: "DETAILS",
	})
})
