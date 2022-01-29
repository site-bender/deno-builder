import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createScriptConfig from "./mod.ts"

Deno.test("[createScriptConfig] creates minimal configuration correctly", function() {
	const config = createScriptConfig({
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
		type: "SCRIPT",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createScriptConfig] creates maximal configuration correctly", function() {
	const config = createScriptConfig({
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
		type: "SCRIPT",
	})
})
