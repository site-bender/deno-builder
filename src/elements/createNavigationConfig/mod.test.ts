import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createNavigationConfig from "./mod.ts"

Deno.test("[createNavigationConfig] creates minimal configuration correctly", function() {
	const config = createNavigationConfig({
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
		type: "NAV",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createNavigationConfig] creates maximal configuration correctly", function() {
	const config = createNavigationConfig({
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
		type: "NAV",
	})
})
