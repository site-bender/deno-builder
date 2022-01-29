import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	DescriptionListAttributes,
	DescriptionListConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createDescriptionListConfig(
	attrs: DescriptionListAttributes,
	children: Children,
): DescriptionListConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.DL,
	}
}
