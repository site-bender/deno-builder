import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createTextareaConfig from "./mod.ts"

Deno.test("[createTextareaConfig] creates minimal configuration correctly", function() {
	const config = createTextareaConfig({
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
		type: "TEXTAREA",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createTextareaConfig] creates maximal configuration correctly", function() {
	const config = createTextareaConfig({
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
		type: "TEXTAREA",
	})
})
