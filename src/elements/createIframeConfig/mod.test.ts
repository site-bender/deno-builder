import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createIframeConfig from "./mod.ts"

Deno.test("[createIframeConfig] creates minimal configuration correctly", function() {
	const config = createIframeConfig({
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
		type: "IFRAME",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createIframeConfig] creates maximal configuration correctly", function() {
	const config = createIframeConfig({
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
		type: "IFRAME",
	})
})
