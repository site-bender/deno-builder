import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createRubyTextConfig from "./mod.ts"

Deno.test("[createRubyTextConfig] creates minimal configuration correctly", function() {
	const config = createRubyTextConfig({
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
		type: "RT",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createRubyTextConfig] creates maximal configuration correctly", function() {
	const config = createRubyTextConfig({
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
		type: "RT",
	})
})
