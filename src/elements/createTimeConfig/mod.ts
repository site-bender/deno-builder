import { TypesOfElement } from "../../types.ts"
import type { Children, TimeAttributes, TimeConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createTimeConfig(
	attrs: TimeAttributes,
	children: Children,
): TimeConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.TIME,
	}
}
