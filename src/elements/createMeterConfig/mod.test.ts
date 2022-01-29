import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createMeterConfig from "./mod.ts"

Deno.test("[createMeterConfig] creates minimal configuration correctly", function() {
	const config = createMeterConfig({
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
		type: "METER",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createMeterConfig] creates maximal configuration correctly", function() {
	const config = createMeterConfig({
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
		type: "METER",
	})
})
