import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createSummaryConfig from "./mod.ts"

Deno.test("[createSummaryConfig] creates minimal configuration correctly", function() {
	const config = createSummaryConfig({
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
		type: "SUMMARY",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createSummaryConfig] creates maximal configuration correctly", function() {
	const config = createSummaryConfig({
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
		type: "SUMMARY",
	})
})
