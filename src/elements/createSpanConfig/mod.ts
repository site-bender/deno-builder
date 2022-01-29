import { TypesOfElement } from "../../types.ts"
import type { Children, SpanAttributes, SpanConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createSpanConfig(
	attrs: SpanAttributes,
	children: Children,
): SpanConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.SPAN,
	}
}
