import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	NoScriptAttributes,
	NoScriptConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createNoScriptConfig(
	attrs: NoScriptAttributes,
	children: Children,
): NoScriptConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.NOSCRIPT,
	}
}
