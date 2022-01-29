import { TypesOfElement } from "../../types.ts"
import type { Children, MainAttributes, MainConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createMainConfig(
	attrs: MainAttributes,
	children: Children,
): MainConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.MAIN,
	}
}
