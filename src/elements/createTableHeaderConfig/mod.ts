import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	TableHeaderAttributes,
	TableHeaderConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createTableHeaderConfig(
	attrs: TableHeaderAttributes,
	children: Children,
): TableHeaderConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.THEAD,
	}
}
