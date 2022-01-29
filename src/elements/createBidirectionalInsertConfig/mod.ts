import { TypesOfElement } from "../../types.ts"
import type {
	BidirectionalInsertAttributes,
	BidirectionalInsertConfig,
	Children,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createBidirectionalInsertConfig(
	attrs: BidirectionalInsertAttributes,
	children: Children,
): BidirectionalInsertConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.BDI,
	}
}
