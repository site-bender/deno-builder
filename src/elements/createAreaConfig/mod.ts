import { TypesOfElement } from "../../types.ts"
import type { AreaAttributes, AreaConfig, Children } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createAreaConfig(
	attrs: AreaAttributes,
	children: Children,
): AreaConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.AREA,
	}
}
