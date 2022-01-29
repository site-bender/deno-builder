import { TypesOfElement } from "../../types.ts"
import type { Children, LinkAttributes, LinkConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createLinkConfig(
	attrs: LinkAttributes,
	children: Children,
): LinkConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.LINK,
	}
}
