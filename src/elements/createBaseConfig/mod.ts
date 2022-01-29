import { TypesOfElement } from "../../types.ts"
import type { BaseAttributes, BaseConfig, Children } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createBaseConfig(
	attrs: BaseAttributes,
	children: Children,
): BaseConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.BASE,
	}
}
