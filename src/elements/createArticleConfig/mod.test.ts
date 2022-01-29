import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createArticleConfig from "./mod.ts"

Deno.test("[createArticleConfig] creates minimal configuration correctly", function() {
	const config = createArticleConfig({
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
		type: "ARTICLE",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createArticleConfig] creates maximal configuration correctly", function() {
	const config = createArticleConfig({
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
		type: "ARTICLE",
	})
})
