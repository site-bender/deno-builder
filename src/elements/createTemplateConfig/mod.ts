import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	TemplateAttributes,
	TemplateConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createTemplateConfig(
	attrs: TemplateAttributes,
	children: Children,
): TemplateConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.TEMPLATE,
	}
}
