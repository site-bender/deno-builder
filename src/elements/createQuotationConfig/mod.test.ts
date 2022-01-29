import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createQuotationConfig from "./mod.ts"

Deno.test("[createQuotationConfig] creates minimal configuration correctly", function() {
	const config = createQuotationConfig({
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
		type: "Q",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createQuotationConfig] creates maximal configuration correctly", function() {
	const config = createQuotationConfig({
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
		type: "Q",
	})
})
