import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	ParameterAttributes,
	ParameterConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createParameterConfig(
	attrs: ParameterAttributes,
	children: Children,
): ParameterConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.PARAM,
	}
}
