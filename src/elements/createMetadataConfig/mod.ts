import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	MetadataAttributes,
	MetadataConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createMetadataConfig(
	attrs: MetadataAttributes,
	children: Children,
): MetadataConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.META,
	}
}
