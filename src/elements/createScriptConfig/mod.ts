import { TypesOfElement } from "../../types.ts"
import type { Children, ScriptAttributes, ScriptConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createScriptConfig(
	attrs: ScriptAttributes,
	children: Children,
): ScriptConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.SCRIPT,
	}
}
