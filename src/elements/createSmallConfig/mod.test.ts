import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createSmallConfig from "./mod.ts"

Deno.test("[createSmallConfig] creates minimal configuration correctly", function() {
	const config = createSmallConfig({
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
		type: "SMALL",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createSmallConfig] creates maximal configuration correctly", function() {
	const config = createSmallConfig({
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
		type: "SMALL",
	})
})
