import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createUnderlineConfig from "./mod.ts"

Deno.test("[createUnderlineConfig] creates minimal configuration correctly", function() {
	const config = createUnderlineConfig({
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
		type: "U",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createUnderlineConfig] creates maximal configuration correctly", function() {
	const config = createUnderlineConfig({
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
		type: "U",
	})
})
