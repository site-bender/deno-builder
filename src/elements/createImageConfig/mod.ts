import { TypesOfElement } from "../../types.ts"
import type { Children, ImageAttributes, ImageConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createImageConfig(
	attrs: ImageAttributes,
	children: Children,
): ImageConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.IMG,
	}
}
