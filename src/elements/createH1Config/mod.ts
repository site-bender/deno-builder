import { TypesOfElement } from "../../types.ts"
import type { Children, H1Attributes, H1Config } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createH1Config(
	attrs: H1Attributes,
	children: Children,
): H1Config {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.H1,
	}
}
