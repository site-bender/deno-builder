import { TypesOfElement } from "../../types.ts"
import type { Children, DivAttributes, DivConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createDivConfig(
	attrs: DivAttributes,
	children: Children,
): DivConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.DIV,
	}
}
