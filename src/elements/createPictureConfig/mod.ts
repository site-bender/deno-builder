import { TypesOfElement } from "../../types.ts"
import type { Children, PictureAttributes, PictureConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createPictureConfig(
	attrs: PictureAttributes,
	children: Children,
): PictureConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.PICTURE,
	}
}
