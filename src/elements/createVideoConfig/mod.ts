import { TypesOfElement } from "../../types.ts"
import type { Children, VideoAttributes, VideoConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createVideoConfig(
	attrs: VideoAttributes,
	children: Children,
): VideoConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.VIDEO,
	}
}
