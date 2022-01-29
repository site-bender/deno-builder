import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import createStrikethroughConfig from "./mod.ts"

Deno.test("[createStrikethroughConfig] creates minimal configuration correctly", function() {
	const config = createStrikethroughConfig({
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
		type: "S",
	})
})

// TODO(@chasm): Finish me
Deno.test("[createStrikethroughConfig] creates maximal configuration correctly", function() {
	const config = createStrikethroughConfig({
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
		type: "S",
	})
})
