import { TypesOfElement } from "../../types.ts"
import type { Children, SummaryAttributes, SummaryConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createSummaryConfig(
	attrs: SummaryAttributes,
	children: Children,
): SummaryConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.SUMMARY,
	}
}
