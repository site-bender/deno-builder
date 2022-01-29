import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createLabelConfig from "./mod.ts"

Deno.test("[createLabelConfig] creates minimal configuration correctly", function() {
	const config = createLabelConfig({
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
		type: "LABEL",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createLabelConfig] creates maximal configuration correctly", function() {
	const config = createLabelConfig({
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
		type: "LABEL",
	})
})
