import { TypesOfElement } from "../../types.ts"
import type { Children, MapAttributes, MapConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createMapConfig(
	attrs: MapAttributes,
	children: Children,
): MapConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.MAP,
	}
}
