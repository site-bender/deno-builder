import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createRubyConfig from "./mod.ts"

Deno.test("[createRubyConfig] creates minimal configuration correctly", function() {
	const config = createRubyConfig({
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
		type: "RUBY",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createRubyConfig] creates maximal configuration correctly", function() {
	const config = createRubyConfig({
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
		type: "RUBY",
	})
})
