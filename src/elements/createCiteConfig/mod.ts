import { TypesOfElement } from "../../types.ts"
import type { Children, CiteAttributes, CiteConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createCiteConfig(
	attrs: CiteAttributes,
	children: Children,
): CiteConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.CITE,
	}
}
