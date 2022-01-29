import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createBodyConfig from "./mod.ts"

Deno.test("[createBodyConfig] creates minimal configuration correctly", function() {
	const config = createBodyConfig({
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
		type: "BODY",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createBodyConfig] creates maximal configuration correctly", function() {
	const config = createBodyConfig({
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
		type: "BODY",
	})
})
