import { TypesOfElement } from "../../types.ts"
import type { Children, ObjectAttributes, ObjectConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createObjectConfig(
	attrs: ObjectAttributes,
	children: Children,
): ObjectConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.OBJECT,
	}
}
