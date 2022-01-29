import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createStrongEmphasisConfig from "./mod.ts"

Deno.test("[createStrongEmphasisConfig] creates minimal configuration correctly", function() {
	const config = createStrongEmphasisConfig({
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
		type: "STRONG",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createStrongEmphasisConfig] creates maximal configuration correctly", function() {
	const config = createStrongEmphasisConfig({
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
		type: "STRONG",
	})
})
