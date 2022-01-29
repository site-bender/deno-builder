import { TypesOfElement } from "../../types.ts"
import type { AbbrAttributes, AbbrConfig, Children } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createAbbrConfig(
	attrs: AbbrAttributes,
	children: Children,
): AbbrConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.ABBR,
	}
}
