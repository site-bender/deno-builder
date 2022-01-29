import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createMenuConfig from "./mod.ts"

Deno.test("[createMenuConfig] creates minimal configuration correctly", function() {
	const config = createMenuConfig({
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
		type: "MENU",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createMenuConfig] creates maximal configuration correctly", function() {
	const config = createMenuConfig({
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
		type: "MENU",
	})
})
