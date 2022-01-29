import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createSuperscriptConfig from "./mod.ts"

Deno.test("[createSuperscriptConfig] creates minimal configuration correctly", function() {
	const config = createSuperscriptConfig({
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
		type: "SUP",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createSuperscriptConfig] creates maximal configuration correctly", function() {
	const config = createSuperscriptConfig({
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
		type: "SUP",
	})
})
