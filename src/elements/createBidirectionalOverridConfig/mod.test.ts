import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createBidirectionalOverridConfig from "./mod.ts"

Deno.test("[createBidirectionalOverridConfig] creates minimal configuration correctly", function() {
	const config = createBidirectionalOverridConfig({
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
		type: "BDO",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createBidirectionalOverridConfig] creates maximal configuration correctly", function() {
	const config = createBidirectionalOverridConfig({
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
		type: "BDO",
	})
})
