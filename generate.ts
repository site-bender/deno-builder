const elements = {
	A: "Anchor",
	ABBR: "Abbr",
	ADDRESS: "Address",
	AREA: "Area",
	ARTICLE: "Article",
	ASIDE: "Aside",
	AUDIO: "Audio",
	B: "Bold",
	BASE: "Base",
	BDI: "BidirectionalInsert",
	BDO: "BidirectionalOverrid",
	BLOCKQUOTE: "Blockquote",
	BODY: "Body",
	BR: "Break",
	BUTTON: "Button",
	CANVAS: "Canvas",
	CAPTION: "Caption",
	CITE: "Cite",
	CODE: "Code",
	COL: "Column",
	COLGROUP: "ColumnGroup",
	DATA: "Data",
	DATALIST: "Datalist",
	DD: "Description",
	DEL: "Deleted",
	DETAILS: "Details",
	DFN: "Definition",
	DIALOG: "Dialog",
	DIV: "Div",
	DL: "DescriptionList",
	DT: "DescribedTerm",
	EM: "Emphasis",
	EMBED: "Embed",
	FIELDSET: "Fieldset",
	FIGCAPTION: "FigureCaption",
	FIGURE: "Figure",
	FOOTER: "Footer",
	FORM: "Form",
	HEAD: "Head",
	HEADER: "Header",
	H1: "H1",
	HR: "Rule",
	HTML: "Html",
	I: "Italic",
	IFRAME: "Iframe",
	IMG: "Image",
	INPUT: "Input",
	INS: "Inserted",
	KBD: "Keyboard",
	LABEL: "Label",
	LEGEND: "Legend",
	LI: "ListItem",
	LINK: "Link",
	MAIN: "Main",
	MAP: "Map",
	MARK: "Mark",
	MENU: "Menu",
	META: "Metadata",
	METER: "Meter",
	NAV: "Navigation",
	NOSCRIPT: "NoScript",
	OBJECT: "Object",
	OL: "OrderedList",
	OPTGROUP: "OptionGroup",
	OPTION: "Option",
	OUTPUT: "Output",
	P: "Paragraph",
	PARAM: "Parameter",
	PICTURE: "Picture",
	PORTAL: "Portal",
	PRE: "PreformattedText",
	PROGRESS: "Progress",
	Q: "Quotation",
	RP: "RubyParenthetical",
	RT: "RubyText",
	RUBY: "Ruby",
	S: "Strikethrough",
	SAMP: "Sample",
	SCRIPT: "Script",
	SECTION: "Section",
	SELECT: "Select",
	SLOT: "Slot",
	SMALL: "Small",
	SOURCE: "Source",
	SPAN: "Span",
	STRONG: "StrongEmphasis",
	STYLE: "Style",
	SUB: "Subscript",
	SUMMARY: "Summary",
	SUP: "Superscript",
	TABLE: "Table",
	TBODY: "TableBody",
	TD: "TableCell",
	TEMPLATE: "Template",
	TEXTAREA: "Textarea",
	TFOOT: "TableFooter",
	TH: "TableHeadingCell",
	THEAD: "TableHeader",
	TIME: "Time",
	TITLE: "Title",
	TR: "TableRow",
	TRACK: "Track",
	U: "Underline",
	UL: "UnorderedList",
	VAR: "Variable",
	VIDEO: "Video",
	WBR: "WordBreakOpportunity",
}

// Deno.writeTextFileSync(
//   "./src/elements/types.ts",
//   `
// export enum TypesOfElement {
// ${Object.keys(elements).map((key) => `  ${key} = "${key}",`).join("\n")}
// }

// `,
//   {
//     append: true,
//   },
// );

Object.entries(elements).forEach(([name, value]) => {
	//   Deno.writeTextFileSync(
	//     "./src/elements/types.ts",
	//     `
	// export type ${value}Attributes = GlobalAttributes & {
	// 	replaceMe?: unknown
	// }

	// export type ${value}Config = {
	// 	attributes: ${value}Attributes
	// 	children?: Children
	// 	type: TypesOfElement.${name}
	// }

	// `,
	//     {
	//       append: true,
	//     },
	//   );

	//   Deno.mkdirSync(`./src/elements/create${value}Config`);

	// 	Deno.writeTextFileSync(
	// 		`./src/elements/create${value}Config/mod.ts`,
	// 		`import { TypesOfElement } from "../../types.ts"
	// import type { ${value}Attributes, ${value}Config, Children } from "../../types.ts"

	// // TODO(@chasm): Finish me
	// export default function create${value}Config(
	// 	attrs: ${value}Attributes,
	// 	children: Children,
	// ): ${value}Config {
	// 	const { class: className, data, id, title } = attrs;

	// 	return {
	// 		attributes: {
	// 			...(className ? { class: className } : {}),
	// 			...(data ? { data } : {}),
	// 			id,
	// 			...(title ? { title } : {}),
	// 		},
	// 		children,
	// 		type: TypesOfElement.${name},
	// 	};
	// }

	// `,
	// 	)

	// 	Deno.writeTextFileSync(
	// 		`./src/elements/create${value}Config/mod.test.ts`,
	// 		`import { assertEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts"
	// import create${value}Config from "./mod.ts"

	// Deno.test("[create${value}Config] creates minimal configuration correctly", function () {
	// 	const config = create${value}Config({
	// 		id: "id",
	// 	}, [{ content: "Ack" }])

	// 	assertEquals(config, {
	// 		attributes: {
	// 			id: "id",
	// 		},
	// 		children: [
	// 			{
	// 				content: "Ack",
	// 			}
	// 		],
	// 		type: "${name}",
	// 	});
	// });

	// // TODO(@chasm): Finish me
	// Deno.test("[create${value}Config] creates maximal configuration correctly", function () {
	// 	const config = create${value}Config({
	// 		class: "className",
	// 		data: {
	// 			color: "red",
	// 			berry: "cherry",
	// 		},
	// 		id: "id",
	// 		title: "Titular",
	// 	}, [{ content: "Bob's yer uncle." }])

	// 	assertEquals(config, {
	// 		attributes: {
	// 			class: "className",
	// 			data: {
	// 				color: "red",
	// 				berry: "cherry",
	// 			},
	// 			id: "id",
	// 			title: "Titular",
	// 		},
	// 		children: [
	// 			{
	// 				content: "Bob's yer uncle.",
	// 			}
	// 		],
	// 		type: "${name}",
	// 	});
	// });
	// `,
	// 	)
})
