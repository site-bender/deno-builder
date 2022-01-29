import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createDataConfig from "./mod.ts"

Deno.test("[createDataConfig] creates minimal configuration correctly", function() {
	const config = createDataConfig({
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
		type: "DATA",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createDataConfig] creates maximal configuration correctly", function() {
	const config = createDataConfig({
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
		type: "DATA",
	})
})
