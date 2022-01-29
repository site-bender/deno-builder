import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createOptionGroupConfig from "./mod.ts"

Deno.test("[createOptionGroupConfig] creates minimal configuration correctly", function() {
	const config = createOptionGroupConfig({
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
		type: "OPTGROUP",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createOptionGroupConfig] creates maximal configuration correctly", function() {
	const config = createOptionGroupConfig({
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
		type: "OPTGROUP",
	})
})
