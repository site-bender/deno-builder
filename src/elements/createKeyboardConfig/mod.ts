import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	KeyboardAttributes,
	KeyboardConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createKeyboardConfig(
	attrs: KeyboardAttributes,
	children: Children,
): KeyboardConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.KBD,
	}
}
