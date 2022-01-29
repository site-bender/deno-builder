import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createStyleConfig from "./mod.ts"

Deno.test("[createStyleConfig] creates minimal configuration correctly", function() {
	const config = createStyleConfig({
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
		type: "STYLE",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createStyleConfig] creates maximal configuration correctly", function() {
	const config = createStyleConfig({
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
		type: "STYLE",
	})
})
