import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createFieldsetConfig from "./mod.ts"

Deno.test("[createFieldsetConfig] creates minimal configuration correctly", function() {
	const config = createFieldsetConfig({
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
		type: "FIELDSET",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createFieldsetConfig] creates maximal configuration correctly", function() {
	const config = createFieldsetConfig({
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
		type: "FIELDSET",
	})
})
