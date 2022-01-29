import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	TableHeadingCellAttributes,
	TableHeadingCellConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createTableHeadingCellConfig(
	attrs: TableHeadingCellAttributes,
	children: Children,
): TableHeadingCellConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.TH,
	}
}
