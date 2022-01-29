import { TypesOfElement } from "../../types.ts"
import type { Children, DeletedAttributes, DeletedConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createDeletedConfig(
	attrs: DeletedAttributes,
	children: Children,
): DeletedConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.DEL,
	}
}
