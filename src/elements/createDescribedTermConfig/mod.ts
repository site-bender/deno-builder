import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	DescribedTermAttributes,
	DescribedTermConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createDescribedTermConfig(
	attrs: DescribedTermAttributes,
	children: Children,
): DescribedTermConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.DT,
	}
}
