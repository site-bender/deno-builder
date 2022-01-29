import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	ListItemAttributes,
	ListItemConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createListItemConfig(
	attrs: ListItemAttributes,
	children: Children,
): ListItemConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.LI,
	}
}
