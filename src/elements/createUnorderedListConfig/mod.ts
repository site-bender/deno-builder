import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	UnorderedListAttributes,
	UnorderedListConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createUnorderedListConfig(
	attrs: UnorderedListAttributes,
	children: Children,
): UnorderedListConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.UL,
	}
}
