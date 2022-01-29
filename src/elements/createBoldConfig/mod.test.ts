import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createBoldConfig from "./mod.ts"

Deno.test("[createBoldConfig] creates minimal configuration correctly", function() {
	const config = createBoldConfig({
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
		type: "B",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createBoldConfig] creates maximal configuration correctly", function() {
	const config = createBoldConfig({
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
		type: "B",
	})
})
