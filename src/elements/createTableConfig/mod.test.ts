import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createTableConfig from "./mod.ts"

Deno.test("[createTableConfig] creates minimal configuration correctly", function() {
	const config = createTableConfig({
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
		type: "TABLE",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createTableConfig] creates maximal configuration correctly", function() {
	const config = createTableConfig({
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
		type: "TABLE",
	})
})
