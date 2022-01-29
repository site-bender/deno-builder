import { TypesOfElement } from "../../types.ts"
import type { Children, MenuAttributes, MenuConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createMenuConfig(
	attrs: MenuAttributes,
	children: Children,
): MenuConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.MENU,
	}
}
