import { TypesOfElement } from "../../types.ts"
import type { Children, StyleAttributes, StyleConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createStyleConfig(
	attrs: StyleAttributes,
	children: Children,
): StyleConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.STYLE,
	}
}
