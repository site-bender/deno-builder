import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	SuperscriptAttributes,
	SuperscriptConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createSuperscriptConfig(
	attrs: SuperscriptAttributes,
	children: Children,
): SuperscriptConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.SUP,
	}
}
