import { TypesOfElement } from "../../types.ts"
import type { Children, RubyAttributes, RubyConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createRubyConfig(
	attrs: RubyAttributes,
	children: Children,
): RubyConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.RUBY,
	}
}
