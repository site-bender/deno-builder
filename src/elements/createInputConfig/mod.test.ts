import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createInputConfig from "./mod.ts"

Deno.test("[createInputConfig] creates minimal configuration correctly", function() {
	const config = createInputConfig({
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
		type: "INPUT",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createInputConfig] creates maximal configuration correctly", function() {
	const config = createInputConfig({
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
		type: "INPUT",
	})
})
