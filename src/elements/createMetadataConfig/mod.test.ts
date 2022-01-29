import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createMetadataConfig from "./mod.ts"

Deno.test("[createMetadataConfig] creates minimal configuration correctly", function() {
	const config = createMetadataConfig({
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
		type: "META",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createMetadataConfig] creates maximal configuration correctly", function() {
	const config = createMetadataConfig({
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
		type: "META",
	})
})
