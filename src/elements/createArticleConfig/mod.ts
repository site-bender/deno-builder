import { TypesOfElement } from "../../types.ts"
import type { ArticleAttributes, ArticleConfig, Children } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createArticleConfig(
	attrs: ArticleAttributes,
	children: Children,
): ArticleConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.ARTICLE,
	}
}
