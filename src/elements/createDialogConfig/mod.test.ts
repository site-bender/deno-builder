import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createDialogConfig from "./mod.ts"

Deno.test("[createDialogConfig] creates minimal configuration correctly", function() {
	const config = createDialogConfig({
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
		type: "DIALOG",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createDialogConfig] creates maximal configuration correctly", function() {
	const config = createDialogConfig({
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
		type: "DIALOG",
	})
})
