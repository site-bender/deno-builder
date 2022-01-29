import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createBidirectionalInsertConfig from "./mod.ts"

Deno.test("[createBidirectionalInsertConfig] creates minimal configuration correctly", function() {
	const config = createBidirectionalInsertConfig({
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
		type: "BDI",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createBidirectionalInsertConfig] creates maximal configuration correctly", function() {
	const config = createBidirectionalInsertConfig({
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
		type: "BDI",
	})
})
