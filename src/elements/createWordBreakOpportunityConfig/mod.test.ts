import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createWordBreakOpportunityConfig from "./mod.ts"

Deno.test("[createWordBreakOpportunityConfig] creates minimal configuration correctly", function() {
	const config = createWordBreakOpportunityConfig({
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
		type: "WBR",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createWordBreakOpportunityConfig] creates maximal configuration correctly", function() {
	const config = createWordBreakOpportunityConfig({
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
		type: "WBR",
	})
})
