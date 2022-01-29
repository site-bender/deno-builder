import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	VariableAttributes,
	VariableConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createVariableConfig(
	attrs: VariableAttributes,
	children: Children,
): VariableConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.VAR,
	}
}
