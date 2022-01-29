import { TypesOfElement } from "../../types.ts"
import type { Children, RuleAttributes, RuleConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createRuleConfig(
	attrs: RuleAttributes,
	children: Children,
): RuleConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.HR,
	}
}
