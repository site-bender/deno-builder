import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createBreakConfig from "./mod.ts"

Deno.test("[createBreakConfig] creates minimal configuration correctly", function() {
	const config = createBreakConfig({
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
		type: "BR",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createBreakConfig] creates maximal configuration correctly", function() {
	const config = createBreakConfig({
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
		type: "BR",
	})
})
