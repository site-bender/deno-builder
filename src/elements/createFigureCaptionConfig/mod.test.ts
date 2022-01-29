import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createFigureCaptionConfig from "./mod.ts"

Deno.test("[createFigureCaptionConfig] creates minimal configuration correctly", function() {
	const config = createFigureCaptionConfig({
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
		type: "FIGCAPTION",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createFigureCaptionConfig] creates maximal configuration correctly", function() {
	const config = createFigureCaptionConfig({
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
		type: "FIGCAPTION",
	})
})
