import { TypesOfElement } from "../../types.ts"
import type { Children, HtmlAttributes, HtmlConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createHtmlConfig(
	attrs: HtmlAttributes,
	children: Children,
): HtmlConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.HTML,
	}
}
