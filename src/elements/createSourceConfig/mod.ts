import { TypesOfElement } from "../../types.ts"
import type { Children, SourceAttributes, SourceConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createSourceConfig(
	attrs: SourceAttributes,
	children: Children,
): SourceConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.SOURCE,
	}
}
