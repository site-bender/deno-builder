import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	OptionGroupAttributes,
	OptionGroupConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createOptionGroupConfig(
	attrs: OptionGroupAttributes,
	children: Children,
): OptionGroupConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.OPTGROUP,
	}
}
