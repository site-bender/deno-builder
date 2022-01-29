export type DataAttrs = Record<string, string>

export type GlobalAttributes = {
	// accesskey: string ? do not use?
	autocapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters"
	autofocus?: boolean
	class?: string
	contenteditable?: "true" | "false" | ""
	data?: DataAttrs
	dir?: "ltr" | "rtl" | "auto"
	draggable?: boolean
	enterkeyhint?: string
	hidden?: boolean
	id: string
	inputmode?: string // find out values
	is?: string // find out values
	itemid?: string
	itemprop?: string
	itemref?: string
	itemscope?: boolean
	itemtype?: string
	lang?: string // get all lang values
	nonce?: string
	part?: string
	slot?: string
	spellcheck?: boolean
	style?: string
	tabindex?: number | `${number}`
	title?: string
	translate?: "yes" | "no" | ""
} & EventHandlerAttributes

export type EventHandler = (event: Event) => void

export type EventHandlerAttributes = {
	onabort?: EventHandler
	onautocomplete?: EventHandler
	onautocompleteerror?: EventHandler
	onblur?: EventHandler
	oncancel?: EventHandler
	oncanplay?: EventHandler
	oncanplaythrough?: EventHandler
	onchange?: EventHandler
	onclick?: EventHandler
	onclose?: EventHandler
	oncontextmenu?: EventHandler
	oncuechange?: EventHandler
	ondblclick?: EventHandler
	ondrag?: EventHandler
	ondragend?: EventHandler
	ondragenter?: EventHandler
	ondragleave?: EventHandler
	ondragover?: EventHandler
	ondragstart?: EventHandler
	ondrop?: EventHandler
	ondurationchange?: EventHandler
	onemptied?: EventHandler
	onended?: EventHandler
	onerror?: EventHandler
	onfocus?: EventHandler
	oninput?: EventHandler
	oninvalid?: EventHandler
	onkeydown?: EventHandler
	onkeypress?: EventHandler
	onkeyup?: EventHandler
	onload?: EventHandler
	onloadeddata?: EventHandler
	onloadedmetadata?: EventHandler
	onloadstart?: EventHandler
	onmousedown?: EventHandler
	onmouseenter?: EventHandler
	onmouseleave?: EventHandler
	onmousemove?: EventHandler
	onmouseout?: EventHandler
	onmouseover?: EventHandler
	onmouseup?: EventHandler
	onmousewheel?: EventHandler
	onpause?: EventHandler
	onplay?: EventHandler
	onplaying?: EventHandler
	onprogress?: EventHandler
	onratechange?: EventHandler
	onreset?: EventHandler
	onresize?: EventHandler
	onscroll?: EventHandler
	onseeked?: EventHandler
	onseeking?: EventHandler
	onselect?: EventHandler
	onshow?: EventHandler
	onsort?: EventHandler
	onstalled?: EventHandler
	onsubmit?: EventHandler
	onsuspend?: EventHandler
	ontimeupdate?: EventHandler
	ontoggle?: EventHandler
	onvolumechange?: EventHandler
	onwaiting?: EventHandler
}

export type TNodeConfig = {
	content: string
}

export type Children = Array<TNodeConfig>

export enum TypesOfElement {
	A = "A",
	ABBR = "ABBR",
	ADDRESS = "ADDRESS",
	AREA = "AREA",
	ARTICLE = "ARTICLE",
	ASIDE = "ASIDE",
	AUDIO = "AUDIO",
	B = "B",
	BASE = "BASE",
	BDI = "BDI",
	BDO = "BDO",
	BLOCKQUOTE = "BLOCKQUOTE",
	BODY = "BODY",
	BR = "BR",
	BUTTON = "BUTTON",
	CANVAS = "CANVAS",
	CAPTION = "CAPTION",
	CITE = "CITE",
	CODE = "CODE",
	COL = "COL",
	COLGROUP = "COLGROUP",
	DATA = "DATA",
	DATALIST = "DATALIST",
	DD = "DD",
	DEL = "DEL",
	DETAILS = "DETAILS",
	DFN = "DFN",
	DIALOG = "DIALOG",
	DIV = "DIV",
	DL = "DL",
	DT = "DT",
	EM = "EM",
	EMBED = "EMBED",
	FIELDSET = "FIELDSET",
	FIGCAPTION = "FIGCAPTION",
	FIGURE = "FIGURE",
	FOOTER = "FOOTER",
	FORM = "FORM",
	HEAD = "HEAD",
	HEADER = "HEADER",
	H1 = "H1",
	HR = "HR",
	HTML = "HTML",
	I = "I",
	IFRAME = "IFRAME",
	IMG = "IMG",
	INPUT = "INPUT",
	INS = "INS",
	KBD = "KBD",
	LABEL = "LABEL",
	LEGEND = "LEGEND",
	LI = "LI",
	LINK = "LINK",
	MAIN = "MAIN",
	MAP = "MAP",
	MARK = "MARK",
	MENU = "MENU",
	META = "META",
	METER = "METER",
	NAV = "NAV",
	NOSCRIPT = "NOSCRIPT",
	OBJECT = "OBJECT",
	OL = "OL",
	OPTGROUP = "OPTGROUP",
	OPTION = "OPTION",
	OUTPUT = "OUTPUT",
	P = "P",
	PARAM = "PARAM",
	PICTURE = "PICTURE",
	PORTAL = "PORTAL",
	PRE = "PRE",
	PROGRESS = "PROGRESS",
	Q = "Q",
	RP = "RP",
	RT = "RT",
	RUBY = "RUBY",
	S = "S",
	SAMP = "SAMP",
	SCRIPT = "SCRIPT",
	SECTION = "SECTION",
	SELECT = "SELECT",
	SLOT = "SLOT",
	SMALL = "SMALL",
	SOURCE = "SOURCE",
	SPAN = "SPAN",
	STRONG = "STRONG",
	STYLE = "STYLE",
	SUB = "SUB",
	SUMMARY = "SUMMARY",
	SUP = "SUP",
	TABLE = "TABLE",
	TBODY = "TBODY",
	TD = "TD",
	TEMPLATE = "TEMPLATE",
	TEXTAREA = "TEXTAREA",
	TFOOT = "TFOOT",
	TH = "TH",
	THEAD = "THEAD",
	TIME = "TIME",
	TITLE = "TITLE",
	TR = "TR",
	TRACK = "TRACK",
	U = "U",
	UL = "UL",
	VAR = "VAR",
	VIDEO = "VIDEO",
	WBR = "WBR",
}

export type AnchorAttributes = GlobalAttributes & {
	download?: string
	href?: string
	hreflang?: string // make list of langs
	ping?: string
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url"
	rel?:
		| "alternate"
		| "author"
		| "bookmark"
		| "external"
		| "help"
		| "license"
		| "next"
		| "nofollow"
		| "noopener"
		| "noreferrer"
		| "prev"
		| "search"
		| "tag"
	role?:
		| "button"
		| "checkbox"
		| "menuitem"
		| "menuitemcheckbox"
		| "menuitemradio"
		| "option"
		| "radio"
		| "switch"
		| "tab"
		| "treeitem"
	target?: "_self" | "_blank" | "_parent" | "_top"
	type?: string // get media types
} & GlobalAttributes

export type AnchorConfig = {
	attributes: AnchorAttributes
	children?: Children
	type: TypesOfElement.A
}

export type AbbrAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type AbbrConfig = {
	attributes: AbbrAttributes
	children?: Children
	type: TypesOfElement.ABBR
}

export type AddressAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type AddressConfig = {
	attributes: AddressAttributes
	children?: Children
	type: TypesOfElement.ADDRESS
}

export type AreaAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type AreaConfig = {
	attributes: AreaAttributes
	children?: Children
	type: TypesOfElement.AREA
}

export type ArticleAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type ArticleConfig = {
	attributes: ArticleAttributes
	children?: Children
	type: TypesOfElement.ARTICLE
}

export type AsideAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type AsideConfig = {
	attributes: AsideAttributes
	children?: Children
	type: TypesOfElement.ASIDE
}

export type AudioAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type AudioConfig = {
	attributes: AudioAttributes
	children?: Children
	type: TypesOfElement.AUDIO
}

export type BoldAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type BoldConfig = {
	attributes: BoldAttributes
	children?: Children
	type: TypesOfElement.B
}

export type BaseAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type BaseConfig = {
	attributes: BaseAttributes
	children?: Children
	type: TypesOfElement.BASE
}

export type BidirectionalInsertAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type BidirectionalInsertConfig = {
	attributes: BidirectionalInsertAttributes
	children?: Children
	type: TypesOfElement.BDI
}

export type BidirectionalOverridAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type BidirectionalOverridConfig = {
	attributes: BidirectionalOverridAttributes
	children?: Children
	type: TypesOfElement.BDO
}

export type BlockquoteAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type BlockquoteConfig = {
	attributes: BlockquoteAttributes
	children?: Children
	type: TypesOfElement.BLOCKQUOTE
}

export type BodyAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type BodyConfig = {
	attributes: BodyAttributes
	children?: Children
	type: TypesOfElement.BODY
}

export type BreakAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type BreakConfig = {
	attributes: BreakAttributes
	children?: Children
	type: TypesOfElement.BR
}

export type ButtonAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type ButtonConfig = {
	attributes: ButtonAttributes
	children?: Children
	type: TypesOfElement.BUTTON
}

export type CanvasAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type CanvasConfig = {
	attributes: CanvasAttributes
	children?: Children
	type: TypesOfElement.CANVAS
}

export type CaptionAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type CaptionConfig = {
	attributes: CaptionAttributes
	children?: Children
	type: TypesOfElement.CAPTION
}

export type CiteAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type CiteConfig = {
	attributes: CiteAttributes
	children?: Children
	type: TypesOfElement.CITE
}

export type CodeAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type CodeConfig = {
	attributes: CodeAttributes
	children?: Children
	type: TypesOfElement.CODE
}

export type ColumnAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type ColumnConfig = {
	attributes: ColumnAttributes
	children?: Children
	type: TypesOfElement.COL
}

export type ColumnGroupAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type ColumnGroupConfig = {
	attributes: ColumnGroupAttributes
	children?: Children
	type: TypesOfElement.COLGROUP
}

export type DataAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type DataConfig = {
	attributes: DataAttributes
	children?: Children
	type: TypesOfElement.DATA
}

export type DatalistAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type DatalistConfig = {
	attributes: DatalistAttributes
	children?: Children
	type: TypesOfElement.DATALIST
}

export type DescriptionAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type DescriptionConfig = {
	attributes: DescriptionAttributes
	children?: Children
	type: TypesOfElement.DD
}

export type DeletedAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type DeletedConfig = {
	attributes: DeletedAttributes
	children?: Children
	type: TypesOfElement.DEL
}

export type DetailsAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type DetailsConfig = {
	attributes: DetailsAttributes
	children?: Children
	type: TypesOfElement.DETAILS
}

export type DefinitionAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type DefinitionConfig = {
	attributes: DefinitionAttributes
	children?: Children
	type: TypesOfElement.DFN
}

export type DialogAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type DialogConfig = {
	attributes: DialogAttributes
	children?: Children
	type: TypesOfElement.DIALOG
}

export type DivAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type DivConfig = {
	attributes: DivAttributes
	children?: Children
	type: TypesOfElement.DIV
}

export type DescriptionListAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type DescriptionListConfig = {
	attributes: DescriptionListAttributes
	children?: Children
	type: TypesOfElement.DL
}

export type DescribedTermAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type DescribedTermConfig = {
	attributes: DescribedTermAttributes
	children?: Children
	type: TypesOfElement.DT
}

export type EmphasisAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type EmphasisConfig = {
	attributes: EmphasisAttributes
	children?: Children
	type: TypesOfElement.EM
}

export type EmbedAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type EmbedConfig = {
	attributes: EmbedAttributes
	children?: Children
	type: TypesOfElement.EMBED
}

export type FieldsetAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type FieldsetConfig = {
	attributes: FieldsetAttributes
	children?: Children
	type: TypesOfElement.FIELDSET
}

export type FigureCaptionAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type FigureCaptionConfig = {
	attributes: FigureCaptionAttributes
	children?: Children
	type: TypesOfElement.FIGCAPTION
}

export type FigureAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type FigureConfig = {
	attributes: FigureAttributes
	children?: Children
	type: TypesOfElement.FIGURE
}

export type FooterAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type FooterConfig = {
	attributes: FooterAttributes
	children?: Children
	type: TypesOfElement.FOOTER
}

export type FormAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type FormConfig = {
	attributes: FormAttributes
	children?: Children
	type: TypesOfElement.FORM
}

export type HeadAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type HeadConfig = {
	attributes: HeadAttributes
	children?: Children
	type: TypesOfElement.HEAD
}

export type HeaderAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type HeaderConfig = {
	attributes: HeaderAttributes
	children?: Children
	type: TypesOfElement.HEADER
}

export type H1Attributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type H1Config = {
	attributes: H1Attributes
	children?: Children
	type: TypesOfElement.H1
}

export type RuleAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type RuleConfig = {
	attributes: RuleAttributes
	children?: Children
	type: TypesOfElement.HR
}

export type HtmlAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type HtmlConfig = {
	attributes: HtmlAttributes
	children?: Children
	type: TypesOfElement.HTML
}

export type ItalicAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type ItalicConfig = {
	attributes: ItalicAttributes
	children?: Children
	type: TypesOfElement.I
}

export type IframeAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type IframeConfig = {
	attributes: IframeAttributes
	children?: Children
	type: TypesOfElement.IFRAME
}

export type ImageAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type ImageConfig = {
	attributes: ImageAttributes
	children?: Children
	type: TypesOfElement.IMG
}

export type InputAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type InputConfig = {
	attributes: InputAttributes
	children?: Children
	type: TypesOfElement.INPUT
}

export type InsertedAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type InsertedConfig = {
	attributes: InsertedAttributes
	children?: Children
	type: TypesOfElement.INS
}

export type KeyboardAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type KeyboardConfig = {
	attributes: KeyboardAttributes
	children?: Children
	type: TypesOfElement.KBD
}

export type LabelAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type LabelConfig = {
	attributes: LabelAttributes
	children?: Children
	type: TypesOfElement.LABEL
}

export type LegendAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type LegendConfig = {
	attributes: LegendAttributes
	children?: Children
	type: TypesOfElement.LEGEND
}

export type ListItemAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type ListItemConfig = {
	attributes: ListItemAttributes
	children?: Children
	type: TypesOfElement.LI
}

export type LinkAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type LinkConfig = {
	attributes: LinkAttributes
	children?: Children
	type: TypesOfElement.LINK
}

export type MainAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type MainConfig = {
	attributes: MainAttributes
	children?: Children
	type: TypesOfElement.MAIN
}

export type MapAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type MapConfig = {
	attributes: MapAttributes
	children?: Children
	type: TypesOfElement.MAP
}

export type MarkAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type MarkConfig = {
	attributes: MarkAttributes
	children?: Children
	type: TypesOfElement.MARK
}

export type MenuAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type MenuConfig = {
	attributes: MenuAttributes
	children?: Children
	type: TypesOfElement.MENU
}

export type MetadataAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type MetadataConfig = {
	attributes: MetadataAttributes
	children?: Children
	type: TypesOfElement.META
}

export type MeterAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type MeterConfig = {
	attributes: MeterAttributes
	children?: Children
	type: TypesOfElement.METER
}

export type NavigationAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type NavigationConfig = {
	attributes: NavigationAttributes
	children?: Children
	type: TypesOfElement.NAV
}

export type NoScriptAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type NoScriptConfig = {
	attributes: NoScriptAttributes
	children?: Children
	type: TypesOfElement.NOSCRIPT
}

export type ObjectAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type ObjectConfig = {
	attributes: ObjectAttributes
	children?: Children
	type: TypesOfElement.OBJECT
}

export type OrderedListAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type OrderedListConfig = {
	attributes: OrderedListAttributes
	children?: Children
	type: TypesOfElement.OL
}

export type OptionGroupAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type OptionGroupConfig = {
	attributes: OptionGroupAttributes
	children?: Children
	type: TypesOfElement.OPTGROUP
}

export type OptionAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type OptionConfig = {
	attributes: OptionAttributes
	children?: Children
	type: TypesOfElement.OPTION
}

export type OutputAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type OutputConfig = {
	attributes: OutputAttributes
	children?: Children
	type: TypesOfElement.OUTPUT
}

export type ParagraphAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type ParagraphConfig = {
	attributes: ParagraphAttributes
	children?: Children
	type: TypesOfElement.P
}

export type ParameterAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type ParameterConfig = {
	attributes: ParameterAttributes
	children?: Children
	type: TypesOfElement.PARAM
}

export type PictureAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type PictureConfig = {
	attributes: PictureAttributes
	children?: Children
	type: TypesOfElement.PICTURE
}

export type PortalAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type PortalConfig = {
	attributes: PortalAttributes
	children?: Children
	type: TypesOfElement.PORTAL
}

export type PreformattedTextAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type PreformattedTextConfig = {
	attributes: PreformattedTextAttributes
	children?: Children
	type: TypesOfElement.PRE
}

export type ProgressAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type ProgressConfig = {
	attributes: ProgressAttributes
	children?: Children
	type: TypesOfElement.PROGRESS
}

export type QuotationAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type QuotationConfig = {
	attributes: QuotationAttributes
	children?: Children
	type: TypesOfElement.Q
}

export type RubyParentheticalAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type RubyParentheticalConfig = {
	attributes: RubyParentheticalAttributes
	children?: Children
	type: TypesOfElement.RP
}

export type RubyTextAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type RubyTextConfig = {
	attributes: RubyTextAttributes
	children?: Children
	type: TypesOfElement.RT
}

export type RubyAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type RubyConfig = {
	attributes: RubyAttributes
	children?: Children
	type: TypesOfElement.RUBY
}

export type StrikethroughAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type StrikethroughConfig = {
	attributes: StrikethroughAttributes
	children?: Children
	type: TypesOfElement.S
}

export type SampleAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type SampleConfig = {
	attributes: SampleAttributes
	children?: Children
	type: TypesOfElement.SAMP
}

export type ScriptAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type ScriptConfig = {
	attributes: ScriptAttributes
	children?: Children
	type: TypesOfElement.SCRIPT
}

export type SectionAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type SectionConfig = {
	attributes: SectionAttributes
	children?: Children
	type: TypesOfElement.SECTION
}

export type SelectAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type SelectConfig = {
	attributes: SelectAttributes
	children?: Children
	type: TypesOfElement.SELECT
}

export type SlotAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type SlotConfig = {
	attributes: SlotAttributes
	children?: Children
	type: TypesOfElement.SLOT
}

export type SmallAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type SmallConfig = {
	attributes: SmallAttributes
	children?: Children
	type: TypesOfElement.SMALL
}

export type SourceAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type SourceConfig = {
	attributes: SourceAttributes
	children?: Children
	type: TypesOfElement.SOURCE
}

export type SpanAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type SpanConfig = {
	attributes: SpanAttributes
	children?: Children
	type: TypesOfElement.SPAN
}

export type StrongEmphasisAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type StrongEmphasisConfig = {
	attributes: StrongEmphasisAttributes
	children?: Children
	type: TypesOfElement.STRONG
}

export type StyleAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type StyleConfig = {
	attributes: StyleAttributes
	children?: Children
	type: TypesOfElement.STYLE
}

export type SubscriptAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type SubscriptConfig = {
	attributes: SubscriptAttributes
	children?: Children
	type: TypesOfElement.SUB
}

export type SummaryAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type SummaryConfig = {
	attributes: SummaryAttributes
	children?: Children
	type: TypesOfElement.SUMMARY
}

export type SuperscriptAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type SuperscriptConfig = {
	attributes: SuperscriptAttributes
	children?: Children
	type: TypesOfElement.SUP
}

export type TableAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type TableConfig = {
	attributes: TableAttributes
	children?: Children
	type: TypesOfElement.TABLE
}

export type TableBodyAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type TableBodyConfig = {
	attributes: TableBodyAttributes
	children?: Children
	type: TypesOfElement.TBODY
}

export type TableCellAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type TableCellConfig = {
	attributes: TableCellAttributes
	children?: Children
	type: TypesOfElement.TD
}

export type TemplateAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type TemplateConfig = {
	attributes: TemplateAttributes
	children?: Children
	type: TypesOfElement.TEMPLATE
}

export type TextareaAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type TextareaConfig = {
	attributes: TextareaAttributes
	children?: Children
	type: TypesOfElement.TEXTAREA
}

export type TableFooterAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type TableFooterConfig = {
	attributes: TableFooterAttributes
	children?: Children
	type: TypesOfElement.TFOOT
}

export type TableHeadingCellAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type TableHeadingCellConfig = {
	attributes: TableHeadingCellAttributes
	children?: Children
	type: TypesOfElement.TH
}

export type TableHeaderAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type TableHeaderConfig = {
	attributes: TableHeaderAttributes
	children?: Children
	type: TypesOfElement.THEAD
}

export type TimeAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type TimeConfig = {
	attributes: TimeAttributes
	children?: Children
	type: TypesOfElement.TIME
}

export type TitleAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type TitleConfig = {
	attributes: TitleAttributes
	children?: Children
	type: TypesOfElement.TITLE
}

export type TableRowAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type TableRowConfig = {
	attributes: TableRowAttributes
	children?: Children
	type: TypesOfElement.TR
}

export type TrackAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type TrackConfig = {
	attributes: TrackAttributes
	children?: Children
	type: TypesOfElement.TRACK
}

export type UnderlineAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type UnderlineConfig = {
	attributes: UnderlineAttributes
	children?: Children
	type: TypesOfElement.U
}

export type UnorderedListAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type UnorderedListConfig = {
	attributes: UnorderedListAttributes
	children?: Children
	type: TypesOfElement.UL
}

export type VariableAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type VariableConfig = {
	attributes: VariableAttributes
	children?: Children
	type: TypesOfElement.VAR
}

export type VideoAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type VideoConfig = {
	attributes: VideoAttributes
	children?: Children
	type: TypesOfElement.VIDEO
}

export type WordBreakOpportunityAttributes = GlobalAttributes & {
	replaceMe?: unknown
}

export type WordBreakOpportunityConfig = {
	attributes: WordBreakOpportunityAttributes
	children?: Children
	type: TypesOfElement.WBR
}
