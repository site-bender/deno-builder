import { TypesOfElement } from "../../types.ts"
import type { Children, ColumnAttributes, ColumnConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createColumnConfig(
	attrs: ColumnAttributes,
	children: Children,
): ColumnConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.COL,
	}
}
