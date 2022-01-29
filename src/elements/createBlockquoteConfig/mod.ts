import { TypesOfElement } from "../../types.ts"
import type {
	BlockquoteAttributes,
	BlockquoteConfig,
	Children,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createBlockquoteConfig(
	attrs: BlockquoteAttributes,
	children: Children,
): BlockquoteConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.BLOCKQUOTE,
	}
}
