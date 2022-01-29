import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createDivConfig from "./mod.ts"

Deno.test("[createDivConfig] creates minimal configuration correctly", function() {
	const config = createDivConfig({
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
		type: "DIV",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createDivConfig] creates maximal configuration correctly", function() {
	const config = createDivConfig({
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
		type: "DIV",
	})
})
