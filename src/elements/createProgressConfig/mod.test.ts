import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createProgressConfig from "./mod.ts"

Deno.test("[createProgressConfig] creates minimal configuration correctly", function() {
	const config = createProgressConfig({
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
		type: "PROGRESS",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createProgressConfig] creates maximal configuration correctly", function() {
	const config = createProgressConfig({
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
		type: "PROGRESS",
	})
})
