import { TypesOfElement } from "../../types.ts"
import type { Children, TrackAttributes, TrackConfig } from "../../types.ts"

// TODO(@chasm): Finish me
export default function createTrackConfig(
	attrs: TrackAttributes,
	children: Children,
): TrackConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.TRACK,
	}
}
