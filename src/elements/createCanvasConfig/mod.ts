import { TypesOfElement } from "../../types.ts"
import type { CanvasAttributes, CanvasConfig, Children } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createCanvasConfig(
	attrs: CanvasAttributes,
	children: Children,
): CanvasConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.CANVAS,
	}
}
