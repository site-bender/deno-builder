import { TypesOfElement } from "../../types.ts"
import type { AsideAttributes, AsideConfig, Children } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createAsideConfig(
	attrs: AsideAttributes,
	children: Children,
): AsideConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.ASIDE,
	}
}
