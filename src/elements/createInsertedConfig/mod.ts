import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	InsertedAttributes,
	InsertedConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createInsertedConfig(
	attrs: InsertedAttributes,
	children: Children,
): InsertedConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.INS,
	}
}
