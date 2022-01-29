import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	TableCellAttributes,
	TableCellConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createTableCellConfig(
	attrs: TableCellAttributes,
	children: Children,
): TableCellConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.TD,
	}
}
