import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createInsertedConfig from "./mod.ts"

Deno.test("[createInsertedConfig] creates minimal configuration correctly", function() {
	const config = createInsertedConfig({
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
		type: "INS",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createInsertedConfig] creates maximal configuration correctly", function() {
	const config = createInsertedConfig({
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
		type: "INS",
	})
})
