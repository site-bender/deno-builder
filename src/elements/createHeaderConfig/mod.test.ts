import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createHeaderConfig from "./mod.ts"

Deno.test("[createHeaderConfig] creates minimal configuration correctly", function() {
	const config = createHeaderConfig({
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
		type: "HEADER",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createHeaderConfig] creates maximal configuration correctly", function() {
	const config = createHeaderConfig({
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
		type: "HEADER",
	})
})
