import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	UnderlineAttributes,
	UnderlineConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createUnderlineConfig(
	attrs: UnderlineAttributes,
	children: Children,
): UnderlineConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.U,
	}
}
