import { TypesOfElement } from "../../types.ts"
import type { Children, IframeAttributes, IframeConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createIframeConfig(
	attrs: IframeAttributes,
	children: Children,
): IframeConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.IFRAME,
	}
}
