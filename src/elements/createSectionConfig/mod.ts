import { TypesOfElement } from "../../types.ts"
import type { Children, SectionAttributes, SectionConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createSectionConfig(
	attrs: SectionAttributes,
	children: Children,
): SectionConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.SECTION,
	}
}
