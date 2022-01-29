import { TypesOfElement } from "../../types.ts"
import type { Children, TitleAttributes, TitleConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createTitleConfig(
	attrs: TitleAttributes,
	children: Children,
): TitleConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.TITLE,
	}
}
