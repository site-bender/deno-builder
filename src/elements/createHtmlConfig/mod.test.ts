import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createHtmlConfig from "./mod.ts"

Deno.test("[createHtmlConfig] creates minimal configuration correctly", function() {
	const config = createHtmlConfig({
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
		type: "HTML",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createHtmlConfig] creates maximal configuration correctly", function() {
	const config = createHtmlConfig({
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
		type: "HTML",
	})
})
