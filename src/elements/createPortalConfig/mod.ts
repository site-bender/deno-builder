import { TypesOfElement } from "../../types.ts"
import type { Children, PortalAttributes, PortalConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createPortalConfig(
	attrs: PortalAttributes,
	children: Children,
): PortalConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.PORTAL,
	}
}
