import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createRuleConfig from "./mod.ts"

Deno.test("[createRuleConfig] creates minimal configuration correctly", function() {
	const config = createRuleConfig({
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
		type: "HR",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createRuleConfig] creates maximal configuration correctly", function() {
	const config = createRuleConfig({
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
		type: "HR",
	})
})
