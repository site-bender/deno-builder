import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createSubscriptConfig from "./mod.ts"

Deno.test("[createSubscriptConfig] creates minimal configuration correctly", function() {
	const config = createSubscriptConfig({
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
		type: "SUB",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createSubscriptConfig] creates maximal configuration correctly", function() {
	const config = createSubscriptConfig({
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
		type: "SUB",
	})
})
