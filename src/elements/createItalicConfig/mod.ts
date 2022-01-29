import { TypesOfElement } from "../../types.ts"
import type { Children, ItalicAttributes, ItalicConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createItalicConfig(
	attrs: ItalicAttributes,
	children: Children,
): ItalicConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.I,
	}
}
