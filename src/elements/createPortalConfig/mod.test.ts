import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createPortalConfig from "./mod.ts"

Deno.test("[createPortalConfig] creates minimal configuration correctly", function() {
	const config = createPortalConfig({
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
		type: "PORTAL",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createPortalConfig] creates maximal configuration correctly", function() {
	const config = createPortalConfig({
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
		type: "PORTAL",
	})
})
