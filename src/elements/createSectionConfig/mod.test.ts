import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createSectionConfig from "./mod.ts"

Deno.test("[createSectionConfig] creates minimal configuration correctly", function() {
	const config = createSectionConfig({
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
		type: "SECTION",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createSectionConfig] creates maximal configuration correctly", function() {
	const config = createSectionConfig({
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
		type: "SECTION",
	})
})
