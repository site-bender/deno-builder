import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	TableBodyAttributes,
	TableBodyConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createTableBodyConfig(
	attrs: TableBodyAttributes,
	children: Children,
): TableBodyConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.TBODY,
	}
}
