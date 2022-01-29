import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	RubyParentheticalAttributes,
	RubyParentheticalConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createRubyParentheticalConfig(
	attrs: RubyParentheticalAttributes,
	children: Children,
): RubyParentheticalConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.RP,
	}
}
