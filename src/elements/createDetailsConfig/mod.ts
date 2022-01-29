import { TypesOfElement } from "../../types.ts"
import type { Children, DetailsAttributes, DetailsConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createDetailsConfig(
	attrs: DetailsAttributes,
	children: Children,
): DetailsConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.DETAILS,
	}
}
