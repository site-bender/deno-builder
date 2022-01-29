import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createTimeConfig from "./mod.ts"

Deno.test("[createTimeConfig] creates minimal configuration correctly", function() {
	const config = createTimeConfig({
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
		type: "TIME",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createTimeConfig] creates maximal configuration correctly", function() {
	const config = createTimeConfig({
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
		type: "TIME",
	})
})
