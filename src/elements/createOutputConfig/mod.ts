import { TypesOfElement } from "../../types.ts"
import type { Children, OutputAttributes, OutputConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createOutputConfig(
	attrs: OutputAttributes,
	children: Children,
): OutputConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.OUTPUT,
	}
}
