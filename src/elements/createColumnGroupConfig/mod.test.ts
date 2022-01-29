import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createColumnGroupConfig from "./mod.ts"

Deno.test("[createColumnGroupConfig] creates minimal configuration correctly", function() {
	const config = createColumnGroupConfig({
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
		type: "COLGROUP",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createColumnGroupConfig] creates maximal configuration correctly", function() {
	const config = createColumnGroupConfig({
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
		type: "COLGROUP",
	})
})
