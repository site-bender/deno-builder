import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createSlotConfig from "./mod.ts"

Deno.test("[createSlotConfig] creates minimal configuration correctly", function() {
	const config = createSlotConfig({
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
		type: "SLOT",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createSlotConfig] creates maximal configuration correctly", function() {
	const config = createSlotConfig({
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
		type: "SLOT",
	})
})
