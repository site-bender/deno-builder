import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	TableRowAttributes,
	TableRowConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createTableRowConfig(
	attrs: TableRowAttributes,
	children: Children,
): TableRowConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.TR,
	}
}
