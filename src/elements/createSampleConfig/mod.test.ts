import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createSampleConfig from "./mod.ts"

Deno.test("[createSampleConfig] creates minimal configuration correctly", function() {
	const config = createSampleConfig({
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
		type: "SAMP",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createSampleConfig] creates maximal configuration correctly", function() {
	const config = createSampleConfig({
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
		type: "SAMP",
	})
})
