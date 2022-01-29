import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createMainConfig from "./mod.ts"

Deno.test("[createMainConfig] creates minimal configuration correctly", function() {
	const config = createMainConfig({
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
		type: "MAIN",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createMainConfig] creates maximal configuration correctly", function() {
	const config = createMainConfig({
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
		type: "MAIN",
	})
})
