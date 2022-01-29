import { TypesOfElement } from "../../types.ts"
import type { Children, LabelAttributes, LabelConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createLabelConfig(
	attrs: LabelAttributes,
	children: Children,
): LabelConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.LABEL,
	}
}
