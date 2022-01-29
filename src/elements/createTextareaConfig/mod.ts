import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	TextareaAttributes,
	TextareaConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createTextareaConfig(
	attrs: TextareaAttributes,
	children: Children,
): TextareaConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.TEXTAREA,
	}
}
