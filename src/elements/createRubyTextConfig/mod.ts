import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	RubyTextAttributes,
	RubyTextConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createRubyTextConfig(
	attrs: RubyTextAttributes,
	children: Children,
): RubyTextConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.RT,
	}
}
