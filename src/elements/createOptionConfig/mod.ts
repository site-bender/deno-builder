import { TypesOfElement } from "../../types.ts"
import type { Children, OptionAttributes, OptionConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createOptionConfig(
	attrs: OptionAttributes,
	children: Children,
): OptionConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.OPTION,
	}
}
