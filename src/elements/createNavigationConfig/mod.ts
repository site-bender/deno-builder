import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	NavigationAttributes,
	NavigationConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createNavigationConfig(
	attrs: NavigationAttributes,
	children: Children,
): NavigationConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.NAV,
	}
}
