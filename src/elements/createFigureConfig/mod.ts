import { TypesOfElement } from "../../types.ts"
import type { Children, FigureAttributes, FigureConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createFigureConfig(
	attrs: FigureAttributes,
	children: Children,
): FigureConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.FIGURE,
	}
}
