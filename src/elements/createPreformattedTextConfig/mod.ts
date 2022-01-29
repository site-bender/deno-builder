import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	PreformattedTextAttributes,
	PreformattedTextConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createPreformattedTextConfig(
	attrs: PreformattedTextAttributes,
	children: Children,
): PreformattedTextConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.PRE,
	}
}
