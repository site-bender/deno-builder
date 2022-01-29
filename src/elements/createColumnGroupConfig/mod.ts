import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	ColumnGroupAttributes,
	ColumnGroupConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createColumnGroupConfig(
	attrs: ColumnGroupAttributes,
	children: Children,
): ColumnGroupConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.COLGROUP,
	}
}
