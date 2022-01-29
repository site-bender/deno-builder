import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createDefinitionConfig from "./mod.ts"

Deno.test("[createDefinitionConfig] creates minimal configuration correctly", function() {
	const config = createDefinitionConfig({
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
		type: "DFN",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createDefinitionConfig] creates maximal configuration correctly", function() {
	const config = createDefinitionConfig({
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
		type: "DFN",
	})
})
