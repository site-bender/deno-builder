import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createHeadConfig from "./mod.ts"

Deno.test("[createHeadConfig] creates minimal configuration correctly", function() {
	const config = createHeadConfig({
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
		type: "HEAD",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createHeadConfig] creates maximal configuration correctly", function() {
	const config = createHeadConfig({
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
		type: "HEAD",
	})
})
