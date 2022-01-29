import { TypesOfElement } from "../../types.ts"
import type { Children, SlotAttributes, SlotConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createSlotConfig(
	attrs: SlotAttributes,
	children: Children,
): SlotConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.SLOT,
	}
}
