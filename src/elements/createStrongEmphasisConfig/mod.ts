import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	StrongEmphasisAttributes,
	StrongEmphasisConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createStrongEmphasisConfig(
	attrs: StrongEmphasisAttributes,
	children: Children,
): StrongEmphasisConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.STRONG,
	}
}
