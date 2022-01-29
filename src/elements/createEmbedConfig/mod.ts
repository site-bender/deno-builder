import { TypesOfElement } from "../../types.ts"
import type { Children, EmbedAttributes, EmbedConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createEmbedConfig(
	attrs: EmbedAttributes,
	children: Children,
): EmbedConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.EMBED,
	}
}
