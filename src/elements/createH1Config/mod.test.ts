import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createH1Config from "./mod.ts"

Deno.test("[createH1Config] creates minimal configuration correctly", function() {
	const config = createH1Config({
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
		type: "H1",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createH1Config] creates maximal configuration correctly", function() {
	const config = createH1Config({
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
		type: "H1",
	})
})
