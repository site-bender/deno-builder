import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createTableHeadingCellConfig from "./mod.ts"

Deno.test("[createTableHeadingCellConfig] creates minimal configuration correctly", function() {
	const config = createTableHeadingCellConfig({
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
		type: "TH",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createTableHeadingCellConfig] creates maximal configuration correctly", function() {
	const config = createTableHeadingCellConfig({
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
		type: "TH",
	})
})
