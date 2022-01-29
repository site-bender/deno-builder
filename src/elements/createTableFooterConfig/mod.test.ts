import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createTableFooterConfig from "./mod.ts"

Deno.test("[createTableFooterConfig] creates minimal configuration correctly", function() {
	const config = createTableFooterConfig({
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
		type: "TFOOT",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createTableFooterConfig] creates maximal configuration correctly", function() {
	const config = createTableFooterConfig({
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
		type: "TFOOT",
	})
})
