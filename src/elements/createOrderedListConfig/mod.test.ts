import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createOrderedListConfig from "./mod.ts"

Deno.test("[createOrderedListConfig] creates minimal configuration correctly", function() {
	const config = createOrderedListConfig({
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
		type: "OL",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createOrderedListConfig] creates maximal configuration correctly", function() {
	const config = createOrderedListConfig({
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
		type: "OL",
	})
})
