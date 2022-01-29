import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createOutputConfig from "./mod.ts"

Deno.test("[createOutputConfig] creates minimal configuration correctly", function() {
	const config = createOutputConfig({
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
		type: "OUTPUT",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createOutputConfig] creates maximal configuration correctly", function() {
	const config = createOutputConfig({
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
		type: "OUTPUT",
	})
})
