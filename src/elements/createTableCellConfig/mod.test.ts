import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createTableCellConfig from "./mod.ts"

Deno.test("[createTableCellConfig] creates minimal configuration correctly", function() {
	const config = createTableCellConfig({
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
		type: "TD",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createTableCellConfig] creates maximal configuration correctly", function() {
	const config = createTableCellConfig({
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
		type: "TD",
	})
})
