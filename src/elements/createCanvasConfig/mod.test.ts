import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createCanvasConfig from "./mod.ts"

Deno.test("[createCanvasConfig] creates minimal configuration correctly", function() {
	const config = createCanvasConfig({
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
		type: "CANVAS",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createCanvasConfig] creates maximal configuration correctly", function() {
	const config = createCanvasConfig({
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
		type: "CANVAS",
	})
})
