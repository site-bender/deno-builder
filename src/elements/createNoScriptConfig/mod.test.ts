import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createNoScriptConfig from "./mod.ts"

Deno.test("[createNoScriptConfig] creates minimal configuration correctly", function() {
	const config = createNoScriptConfig({
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
		type: "NOSCRIPT",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createNoScriptConfig] creates maximal configuration correctly", function() {
	const config = createNoScriptConfig({
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
		type: "NOSCRIPT",
	})
})
