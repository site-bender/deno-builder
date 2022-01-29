import { TypesOfElement } from "../../types.ts"
import type { ButtonAttributes, ButtonConfig, Children } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createButtonConfig(
	attrs: ButtonAttributes,
	children: Children,
): ButtonConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.BUTTON,
	}
}
