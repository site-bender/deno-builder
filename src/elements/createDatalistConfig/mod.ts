import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	DatalistAttributes,
	DatalistConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createDatalistConfig(
	attrs: DatalistAttributes,
	children: Children,
): DatalistConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.DATALIST,
	}
}
