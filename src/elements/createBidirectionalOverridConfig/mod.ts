import { TypesOfElement } from "../../types.ts"
import type {
	BidirectionalOverridAttributes,
	BidirectionalOverridConfig,
	Children,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createBidirectionalOverridConfig(
	attrs: BidirectionalOverridAttributes,
	children: Children,
): BidirectionalOverridConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.BDO,
	}
}
