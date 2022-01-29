import { TypesOfElement } from "../../types.ts"
import type { Children, HeadAttributes, HeadConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createHeadConfig(
	attrs: HeadAttributes,
	children: Children,
): HeadConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.HEAD,
	}
}
