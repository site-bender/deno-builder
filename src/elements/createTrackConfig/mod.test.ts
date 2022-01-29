import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createTrackConfig from "./mod.ts"

Deno.test("[createTrackConfig] creates minimal configuration correctly", function() {
	const config = createTrackConfig({
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
		type: "TRACK",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createTrackConfig] creates maximal configuration correctly", function() {
	const config = createTrackConfig({
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
		type: "TRACK",
	})
})
