import { TypesOfElement } from "../../types.ts"
import type { Children, DialogAttributes, DialogConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createDialogConfig(
	attrs: DialogAttributes,
	children: Children,
): DialogConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.DIALOG,
	}
}
