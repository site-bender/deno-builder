import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	FigureCaptionAttributes,
	FigureCaptionConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createFigureCaptionConfig(
	attrs: FigureCaptionAttributes,
	children: Children,
): FigureCaptionConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.FIGCAPTION,
	}
}
