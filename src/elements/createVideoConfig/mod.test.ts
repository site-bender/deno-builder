import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createVideoConfig from "./mod.ts"

Deno.test("[createVideoConfig] creates minimal configuration correctly", function() {
	const config = createVideoConfig({
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
		type: "VIDEO",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createVideoConfig] creates maximal configuration correctly", function() {
	const config = createVideoConfig({
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
		type: "VIDEO",
	})
})
