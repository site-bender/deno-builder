import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	FieldsetAttributes,
	FieldsetConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createFieldsetConfig(
	attrs: FieldsetAttributes,
	children: Children,
): FieldsetConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.FIELDSET,
	}
}
