import { TypesOfElement } from "../../types.ts"
import type { Children, DataAttributes, DataConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createDataConfig(
	attrs: DataAttributes,
	children: Children,
): DataConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.DATA,
	}
}
