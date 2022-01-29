import { TypesOfElement } from "../../types.ts"
import type { Children, LegendAttributes, LegendConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createLegendConfig(
	attrs: LegendAttributes,
	children: Children,
): LegendConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.LEGEND,
	}
}
