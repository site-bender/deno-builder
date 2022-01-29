import { TypesOfElement } from "../../types.ts"
import type { CaptionAttributes, CaptionConfig, Children } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createCaptionConfig(
	attrs: CaptionAttributes,
	children: Children,
): CaptionConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.CAPTION,
	}
}
