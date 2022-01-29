import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createAsideConfig from "./mod.ts"

Deno.test("[createAsideConfig] creates minimal configuration correctly", function() {
	const config = createAsideConfig({
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
		type: "ASIDE",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createAsideConfig] creates maximal configuration correctly", function() {
	const config = createAsideConfig({
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
		type: "ASIDE",
	})
})
