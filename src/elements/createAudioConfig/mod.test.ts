import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createAudioConfig from "./mod.ts"

Deno.test("[createAudioConfig] creates minimal configuration correctly", function() {
	const config = createAudioConfig({
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
		type: "AUDIO",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createAudioConfig] creates maximal configuration correctly", function() {
	const config = createAudioConfig({
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
		type: "AUDIO",
	})
})
