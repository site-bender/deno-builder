import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createSpanConfig from "./mod.ts"

Deno.test("[createSpanConfig] creates minimal configuration correctly", function() {
	const config = createSpanConfig({
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
		type: "SPAN",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createSpanConfig] creates maximal configuration correctly", function() {
	const config = createSpanConfig({
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
		type: "SPAN",
	})
})
