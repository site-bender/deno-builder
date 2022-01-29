import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createColumnConfig from "./mod.ts"

Deno.test("[createColumnConfig] creates minimal configuration correctly", function() {
	const config = createColumnConfig({
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
		type: "COL",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createColumnConfig] creates maximal configuration correctly", function() {
	const config = createColumnConfig({
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
		type: "COL",
	})
})
