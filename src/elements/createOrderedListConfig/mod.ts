import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	OrderedListAttributes,
	OrderedListConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createOrderedListConfig(
	attrs: OrderedListAttributes,
	children: Children,
): OrderedListConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.OL,
	}
}
