import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	ProgressAttributes,
	ProgressConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createProgressConfig(
	attrs: ProgressAttributes,
	children: Children,
): ProgressConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.PROGRESS,
	}
}
