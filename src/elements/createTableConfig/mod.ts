import { TypesOfElement } from "../../types.ts"
import type { Children, TableAttributes, TableConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createTableConfig(
	attrs: TableAttributes,
	children: Children,
): TableConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.TABLE,
	}
}
