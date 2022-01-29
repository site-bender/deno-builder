import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createFormConfig from "./mod.ts"

Deno.test("[createFormConfig] creates minimal configuration correctly", function() {
	const config = createFormConfig({
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
		type: "FORM",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createFormConfig] creates maximal configuration correctly", function() {
	const config = createFormConfig({
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
		type: "FORM",
	})
})
