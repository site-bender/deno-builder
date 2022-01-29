import { TypesOfElement } from "../../types.ts"
import type { Children, SampleAttributes, SampleConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createSampleConfig(
	attrs: SampleAttributes,
	children: Children,
): SampleConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.SAMP,
	}
}
