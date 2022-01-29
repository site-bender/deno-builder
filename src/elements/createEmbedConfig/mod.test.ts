import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createEmbedConfig from "./mod.ts"

Deno.test("[createEmbedConfig] creates minimal configuration correctly", function() {
	const config = createEmbedConfig({
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
		type: "EMBED",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createEmbedConfig] creates maximal configuration correctly", function() {
	const config = createEmbedConfig({
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
		type: "EMBED",
	})
})
