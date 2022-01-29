import { TypesOfElement } from "../../types.ts"
import type { Children, FooterAttributes, FooterConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createFooterConfig(
	attrs: FooterAttributes,
	children: Children,
): FooterConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.FOOTER,
	}
}
