import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	EmphasisAttributes,
	EmphasisConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createEmphasisConfig(
	attrs: EmphasisAttributes,
	children: Children,
): EmphasisConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.EM,
	}
}
