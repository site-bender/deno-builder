import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	TableFooterAttributes,
	TableFooterConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createTableFooterConfig(
	attrs: TableFooterAttributes,
	children: Children,
): TableFooterConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.TFOOT,
	}
}
