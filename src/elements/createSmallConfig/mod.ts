import { TypesOfElement } from "../../types.ts"
import type { Children, SmallAttributes, SmallConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createSmallConfig(
	attrs: SmallAttributes,
	children: Children,
): SmallConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.SMALL,
	}
}
