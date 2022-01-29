import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	WordBreakOpportunityAttributes,
	WordBreakOpportunityConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createWordBreakOpportunityConfig(
	attrs: WordBreakOpportunityAttributes,
	children: Children,
): WordBreakOpportunityConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.WBR,
	}
}
