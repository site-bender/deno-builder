import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createTableRowConfig from "./mod.ts"

Deno.test("[createTableRowConfig] creates minimal configuration correctly", function() {
	const config = createTableRowConfig({
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
		type: "TR",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createTableRowConfig] creates maximal configuration correctly", function() {
	const config = createTableRowConfig({
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
		type: "TR",
	})
})
