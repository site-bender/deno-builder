import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createAddressConfig from "./mod.ts"

Deno.test("[createAddressConfig] creates minimal configuration correctly", function() {
	const config = createAddressConfig({
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
		type: "ADDRESS",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createAddressConfig] creates maximal configuration correctly", function() {
	const config = createAddressConfig({
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
		type: "ADDRESS",
	})
})
