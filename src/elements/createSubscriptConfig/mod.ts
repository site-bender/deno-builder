import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	SubscriptAttributes,
	SubscriptConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createSubscriptConfig(
	attrs: SubscriptAttributes,
	children: Children,
): SubscriptConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.SUB,
	}
}
