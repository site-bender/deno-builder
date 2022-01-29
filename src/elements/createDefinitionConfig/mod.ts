import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	DefinitionAttributes,
	DefinitionConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createDefinitionConfig(
	attrs: DefinitionAttributes,
	children: Children,
): DefinitionConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.DFN,
	}
}
