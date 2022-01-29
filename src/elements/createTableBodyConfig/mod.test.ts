import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createTableBodyConfig from "./mod.ts"

Deno.test("[createTableBodyConfig] creates minimal configuration correctly", function() {
	const config = createTableBodyConfig({
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
		type: "TBODY",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createTableBodyConfig] creates maximal configuration correctly", function() {
	const config = createTableBodyConfig({
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
		type: "TBODY",
	})
})
