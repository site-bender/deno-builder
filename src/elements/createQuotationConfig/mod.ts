import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	QuotationAttributes,
	QuotationConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createQuotationConfig(
	attrs: QuotationAttributes,
	children: Children,
): QuotationConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.Q,
	}
}
