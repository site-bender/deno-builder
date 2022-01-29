import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createCaptionConfig from "./mod.ts"

Deno.test("[createCaptionConfig] creates minimal configuration correctly", function() {
	const config = createCaptionConfig({
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
		type: "CAPTION",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createCaptionConfig] creates maximal configuration correctly", function() {
	const config = createCaptionConfig({
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
		type: "CAPTION",
	})
})
