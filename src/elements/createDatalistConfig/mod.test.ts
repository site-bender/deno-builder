import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createDatalistConfig from "./mod.ts"

Deno.test("[createDatalistConfig] creates minimal configuration correctly", function() {
	const config = createDatalistConfig({
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
		type: "DATALIST",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createDatalistConfig] creates maximal configuration correctly", function() {
	const config = createDatalistConfig({
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
		type: "DATALIST",
	})
})
