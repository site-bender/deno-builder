import { TypesOfElement } from "../../types.ts"
import type {
	Children,
	StrikethroughAttributes,
	StrikethroughConfig,
} from "../../types.ts"

// TODO(@chasm): Finish me
export default function createStrikethroughConfig(
	attrs: StrikethroughAttributes,
	children: Children,
): StrikethroughConfig {
	const { class: className, data, id, title } = attrs

	return {
		attributes: {
			...(className ? { class: className } : {}),
			...(data ? { data } : {}),
			id,
			...(title ? { title } : {}),
		},
		children,
		type: TypesOfElement.S,
	}
}
