import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createSourceConfig from "./mod.ts"

Deno.test("[createSourceConfig] creates minimal configuration correctly", function() {
	const config = createSourceConfig({
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
		type: "SOURCE",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createSourceConfig] creates maximal configuration correctly", function() {
	const config = createSourceConfig({
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
		type: "SOURCE",
	})
})
