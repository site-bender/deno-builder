import { TypesOfElement } from "../../types.ts"
import type { BreakAttributes, BreakConfig, Children } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createBreakConfig(
	attrs: BreakAttributes,
	children: Children,
): BreakConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.BR,
	}
}
