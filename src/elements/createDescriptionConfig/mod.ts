import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	DescriptionAttributes,
	DescriptionConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createDescriptionConfig(
	attrs: DescriptionAttributes,
	children: Children,
): DescriptionConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.DD,
	}
}
