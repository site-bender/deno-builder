import { TypesOfElement } from "../../types.ts"
import type { BoldAttributes, BoldConfig, Children } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createBoldConfig(
	attrs: BoldAttributes,
	children: Children,
): BoldConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.B,
	}
}
