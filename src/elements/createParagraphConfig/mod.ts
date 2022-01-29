import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	ParagraphAttributes,
	ParagraphConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createParagraphConfig(
	attrs: ParagraphAttributes,
	children: Children,
): ParagraphConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.P,
	}
}
