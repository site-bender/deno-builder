import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createEmphasisConfig from "./mod.ts"

Deno.test("[createEmphasisConfig] creates minimal configuration correctly", function() {
	const config = createEmphasisConfig({
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
		type: "EM",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createEmphasisConfig] creates maximal configuration correctly", function() {
	const config = createEmphasisConfig({
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
		type: "EM",
	})
})
