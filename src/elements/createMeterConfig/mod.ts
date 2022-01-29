import { TypesOfElement } from "../../types.ts"
import type { Children, MeterAttributes, MeterConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createMeterConfig(
	attrs: MeterAttributes,
	children: Children,
): MeterConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.METER,
	}
}
