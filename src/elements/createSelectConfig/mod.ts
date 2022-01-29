import { TypesOfElement } from "../../types.ts"
import type { Children, SelectAttributes, SelectConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createSelectConfig(
	attrs: SelectAttributes,
	children: Children,
): SelectConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.SELECT,
	}
}
