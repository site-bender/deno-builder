import { TypesOfElement } from "../../types.ts"
import type { AddressAttributes, AddressConfig, Children } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createAddressConfig(
	attrs: AddressAttributes,
	children: Children,
): AddressConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.ADDRESS,
	}
}
