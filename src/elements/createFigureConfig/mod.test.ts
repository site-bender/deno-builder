import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createFigureConfig from "./mod.ts"

Deno.test("[createFigureConfig] creates minimal configuration correctly", function() {
	const config = createFigureConfig({
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
		type: "FIGURE",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createFigureConfig] creates maximal configuration correctly", function() {
	const config = createFigureConfig({
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
		type: "FIGURE",
	})
})
