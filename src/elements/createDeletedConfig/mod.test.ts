import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createDeletedConfig from "./mod.ts"

Deno.test("[createDeletedConfig] creates minimal configuration correctly", function() {
	const config = createDeletedConfig({
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
		type: "DEL",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createDeletedConfig] creates maximal configuration correctly", function() {
	const config = createDeletedConfig({
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
		type: "DEL",
	})
})
