import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createAreaConfig from "./mod.ts"

Deno.test("[createAreaConfig] creates minimal configuration correctly", function() {
	const config = createAreaConfig({
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
		type: "AREA",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createAreaConfig] creates maximal configuration correctly", function() {
	const config = createAreaConfig({
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
		type: "AREA",
	})
})
