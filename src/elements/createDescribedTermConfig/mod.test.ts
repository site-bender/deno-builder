import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createDescribedTermConfig from "./mod.ts"

Deno.test("[createDescribedTermConfig] creates minimal configuration correctly", function() {
	const config = createDescribedTermConfig({
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
		type: "DT",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createDescribedTermConfig] creates maximal configuration correctly", function() {
	const config = createDescribedTermConfig({
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
		type: "DT",
	})
})
