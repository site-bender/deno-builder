import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createFooterConfig from "./mod.ts"

Deno.test("[createFooterConfig] creates minimal configuration correctly", function() {
	const config = createFooterConfig({
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
		type: "FOOTER",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createFooterConfig] creates maximal configuration correctly", function() {
	const config = createFooterConfig({
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
		type: "FOOTER",
	})
})
