"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[7659],{5417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=n(5893),i=n(1151);const r={},a="Stacked Bar Chart",o={id:"Charting-Concepts/StackedBarChart",title:"Stacked Bar Chart",description:"A stacked bar chart is a type of data visualization that represents data using rectangular bars with lengths proportional to the values they represent. In a stacked bar chart, each bar is divided into segments, and the segments represent different categories or components. The segments are stacked next to each other to show the total value of each bar.",source:"@site/../../docs/Charting-Concepts/StackedBarChart.md",sourceDirName:"Charting-Concepts",slug:"/Charting-Concepts/StackedBarChart",permalink:"/fluentui-charting-contrib/docs/Charting-Concepts/StackedBarChart",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sparkline Chart",permalink:"/fluentui-charting-contrib/docs/Charting-Concepts/SparklineChart"},next:{title:"Vertical Bar Chart",permalink:"/fluentui-charting-contrib/docs/Charting-Concepts/VerticalBarChart"}},l={},h=[{value:"Use cases",id:"use-cases",level:2},{value:"Dev Design details",id:"dev-design-details",level:2},{value:"Mathematical/Geometrical concepts",id:"mathematicalgeometrical-concepts",level:2},{value:"Performance",id:"performance",level:2},{value:"Accessibility",id:"accessibility",level:2},{value:"Testing",id:"testing",level:2},{value:"Variants",id:"variants",level:2},{value:"Theming",id:"theming",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Error scenarios",id:"error-scenarios",level:2},{value:"Localization aspects",id:"localization-aspects",level:2},{value:"Some notable PRs and their brief description",id:"some-notable-prs-and-their-brief-description",level:2},{value:"Future improvements",id:"future-improvements",level:2},{value:"Rendering details",id:"rendering-details",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"Design figma",id:"design-figma",level:2},{value:"Learnings",id:"learnings",level:2},{value:"Extensions",id:"extensions",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"stacked-bar-chart",children:"Stacked Bar Chart"}),"\n",(0,s.jsx)(t.p,{children:"A stacked bar chart is a type of data visualization that represents data using rectangular bars with lengths proportional to the values they represent. In a stacked bar chart, each bar is divided into segments, and the segments represent different categories or components. The segments are stacked next to each other to show the total value of each bar."}),"\n",(0,s.jsx)(t.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,s.jsx)(t.p,{children:"Here are some common use cases for stacked bar charts:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Tracking Trends Over Time: Show changes in category proportions over time, allowing you to analyze how the distribution of data points evolves."}),"\n",(0,s.jsx)(t.li,{children:"Highlighting Part-to-Whole Relationships: Emphasize the contribution of individual categories to the whole, helping viewers understand the significance of each component."}),"\n",(0,s.jsx)(t.li,{children:"Visualizing Survey Data: Present the distribution of responses in a survey across various answer choices for different questions, providing insights into the survey's results."}),"\n",(0,s.jsx)(t.li,{children:"Resource Allocation: Show how resources, such as budget or time, are allocated among various tasks, projects, or departments within an organization."}),"\n",(0,s.jsx)(t.li,{children:"Market Share Analysis: Illustrate the market share of different companies or products within a specific industry, helping in competitive analysis."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"dev-design-details",children:"Dev Design details"}),"\n",(0,s.jsx)(t.p,{children:"The stacked bar chart comprises the following components and subcomponents:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"StackedBarChart"}),": This is the main component responsible for rendering and managing subcomponents, such as bar titles, bars, bar labels, benchmark and triangle indicators, and other components. It handles user interactions and provides the overall functionality of the chart."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"FocusZone"}),": This component facilitates focus navigation within the chart. It allows users to navigate between focusable subcomponents, such as bars and bar segments, using the tab and arrow keys."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"FocusableTooltipText"}),": This component is used to render a bar title with a tooltip. It monitors the size of the container to detect if the text content overflows. If it does, it truncates the text with ellipsis and enables users to view the tooltip with complete content by focusing or hovering over the element."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Legends"}),": Legends are a unique list of strings that identify each bar segment in the chart. The Legends component renders a button for each legend, enabling users to highlight the corresponding segment by hovering over or selecting the legend."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Callout"}),": This component functions as an anchored tip, offering additional information about the bar segment that is currently hovered over or focused without blocking the user."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"ChartHoverCard"}),": This component acts as the body of the callout, presenting relevant details in a well-organized manner."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Benchmark & Target indicators"}),": Currently, these indicators are only supported by the stacked bar chart and not the multi-stacked bar chart. They act as visual reference points, making it easier for users to compare bar values to the benchmark/target value."]}),"\n",(0,s.jsx)(t.h2,{id:"mathematicalgeometrical-concepts",children:"Mathematical/Geometrical concepts"}),"\n",(0,s.jsx)(t.p,{children:"All calculations are performed in percentages to ensure the responsiveness of the chart."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"First, the spacing between bar segments is determined as a percentage of the chart's width when the component mounts."}),"\n",(0,s.jsx)(t.li,{children:"The total width required for all the gaps between segments is calculated by multiplying the number of gaps (which is one less than the number of segments) by the width of a single gap, as calculated previously."}),"\n",(0,s.jsx)(t.li,{children:"The sum of widths for each segment is computed, ensuring that even segments with very small values remain visible and accessible to users. This sum is always equal to or greater than 100. In the absolute-scale variant of the multi-stacked bar chart, the width percentage of each segment is calculated against the total value of the longest bar."}),"\n",(0,s.jsx)(t.li,{children:"The total width required for rendering all the segments without any gaps is derived by subtracting the total width of all the gaps from 100. A scale factor is then obtained by dividing the real length (the total width of all segments without gaps) by the scale length (the sum of segment widths). This scale factor is used to calculate the precise width of each segment."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"performance",children:"Performance"}),"\n",(0,s.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,s.jsx)(t.p,{children:"The following subcomponents are accessible using a screen reader:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Chart title <div>"}),": It is already accessible to screen readers."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Chart data <div>"}),": It is already accessible to screen readers. Users can provide a custom accessible name or description for it using the chartDataAccessibilityData prop."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Chart <svg>"}),": The following attributes provide an accessible label for the bar."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"aria-label"})," = the bar title, which is referred to as chartTitle in the component"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Bar segment <g>"}),": The following attributes provide an accessible description for the bar segment."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"role"}),' = "img"']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"aria-label"}),' = "{legend}, {segmentValue}."']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Users can customize this description using the xAxisCalloutData, yAxisCalloutData and callOutAccessibilityData props."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Bar label <text>"}),": The bar labels are limited to the absolute-scale variant of the multi-stacked bar chart. It is already accessible to screen readers, but the content doesn\u2019t convey complete information. The following attributes specify a different accessible name for the bar label."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"role"}),' = "img"']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"aria-label"}),' = "Total: {barTotalValue}"']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Test coverage report",src:n(1968).Z+"",width:"3679",height:"1505"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/fluentui-charting-contrib/docs/Test%20Plans/StackedBarChart/ComponentTests",children:"StackedBarChart test plan"})}),"\n",(0,s.jsx)(t.h2,{id:"variants",children:"Variants"}),"\n",(0,s.jsx)(t.p,{children:"Here are the props available for customizing the stacked bar chart:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"data"}),": Use this prop to provide a series of bar data, including colors and values, to populate the chart."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"width"}),": Use this prop to set the width of the chart. If not provided, the chart will occupy the total available width."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"barHeight"}),": Use this prop to set the height of the bars in the chart. If not provided, a default bar height of 12px is used."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"hideDenominator"}),": Use this prop to hide the denominator of the chart data when it is displayed as a fraction/ratio. In the case of the multi-stacked bar chart, it takes an array of booleans with length equal to the number of bars in the chart, where each element determines whether to hide the denominator for the corresponding bar."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"benchmarkData"})," (Stacked): Use this prop to show a benchmark indicator/triangle above the bar."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"targetData"})," (Stacked): Use this prop to show a target indicator/triangle above the bar."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"hideNumberDisplay"})," (Stacked): Use this prop to hide the chart data from above the bar."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"ignoreFixStyle"})," (Stacked): By default, the chart data with a length of 1 is displayed as a number, and a length of 2 is displayed as a fraction/ratio. Use this prop to ignore the default display pattern and hide the chart data, irrespective of its length."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"hideRatio"})," (Multi-Stacked): This prop takes an array of booleans with length equal to the number of bars in the chart, where each element determines whether to hide the chart data for the corresponding bar."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"variant"})," (Multi-Stacked): Select the presentation style of the multi-stacked bar chart from the following options:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"MultiStackedBarChartVariant.PartToWhole"})," (default): In this variant, each bar represents a part or segment of a whole. It is excellent for showing how each category or segment contributes to the total or whole."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"MultiStackedBarChartVariant.AbsoluteScale"}),": In this variant, each bar's length is directly proportional to its absolute value or quantity. It is useful for comparing magnitudes across different categories."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"hideLabels"})," (Multi-Stacked): Use this prop to hide bar labels when using the AbsoluteScale variant."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For more details, see ",(0,s.jsx)(t.a,{href:"https://developer.microsoft.com/en-us/fluentui#/controls/web/horizontalbarchart/stackedbarchart",children:"Fluent UI - Controls - React - HorizontalBarChart - Stacked"})," and ",(0,s.jsx)(t.a,{href:"https://developer.microsoft.com/en-us/fluentui#/controls/web/horizontalbarchart/multistackedbarchart",children:"Fluent UI - Controls - React - HorizontalBarChart - Multi Stacked"})]}),"\n",(0,s.jsx)(t.h2,{id:"theming",children:"Theming"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The styles file contains a function called getStyles, which returns styles for different areas or subcomponents of the chart based on the props passed to it. The base component is wrapped with the styled HOC, which passes the theme (set by the user) and the concatenated styles (obtained from the styling function and any additional styles provided by the user) as props to the base component. Within the base component, the styles are applied to corresponding elements after converting them into class names. This conversion is done by passing theme and other style props as arguments to the function returned by the classNamesFunction utility. To learn more about component styling, refer ",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/wiki/Component-Styling",children:"this"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"debugging",children:"Debugging"}),"\n",(0,s.jsx)(t.h2,{id:"error-scenarios",children:"Error scenarios"}),"\n",(0,s.jsx)(t.h2,{id:"localization-aspects",children:"Localization aspects"}),"\n",(0,s.jsx)(t.p,{children:"Currently, the chart supports localization only for the chart data texts and the callout content."}),"\n",(0,s.jsx)(t.h2,{id:"some-notable-prs-and-their-brief-description",children:"Some notable PRs and their brief description"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/pull/28414",children:"Focus indicator bug in bar charts by yush-singla \xb7 Pull Request #28414 \xb7 microsoft/fluentui (github.com)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/pull/27580",children:"Disable focus on non-interactive elements by krkshitij \xb7 Pull Request #27580 \xb7 microsoft/fluentui (github.com)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/pull/26082",children:"Add new variant to horizontal bar chart by krkshitij \xb7 Pull Request #26082 \xb7 microsoft/fluentui (github.com)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/pull/24563",children:"Fix legends selection bugs by krkshitij \xb7 Pull Request #24563 \xb7 microsoft/fluentui (github.com)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/pull/24835",children:"Set minimum width of 1% for multi stacked horizontal bar chart by AtishayMsft \xb7 Pull Request #24835 \xb7 microsoft/fluentui (github.com)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/pull/24631",children:"Fix min width of bars as 1% for horizontal bar charts by AtishayMsft \xb7 Pull Request #24631 \xb7 microsoft/fluentui (github.com)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/pull/21750",children:"Fix charting callout not hoverable using mouse and callout flickering by AtishayMsft \xb7 Pull Request #21750 \xb7 microsoft/fluentui (github.com)"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"future-improvements",children:"Future improvements"}),"\n",(0,s.jsx)(t.h2,{id:"rendering-details",children:"Rendering details"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"When no data is provided by the user, an empty div is rendered in place of the chart."}),"\n",(0,s.jsx)(t.li,{children:"By default, chart data with a length of 1 is displayed as a number, and data with a length of 2 is displayed as a fraction/ratio above the bar. However, in the absolute-scale variant of the multi-stacked bar chart, the sum of the values of all highlighted bar segments is displayed as a number beside the bar."}),"\n",(0,s.jsx)(t.li,{children:"Changes in layout direction do not affect the stacking order of the bars but rather the text anchor. Therefore, the stacking order of the bars is reversed by adjusting the x attribute according to the layout direction, making it easier for the respective users to read the chart."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"interactions",children:"Interactions"}),"\n",(0,s.jsx)(t.p,{children:"The chart is wrapped with a FocusZone component to allow focus on its interactive subcomponents. The following subcomponents are accessible using the keyboard:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Bar segment <g>"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"data-is-focusable"}),": True if the hideTooltip prop is falsy."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onFocus"}),": Shows a callout near the element containing the segment details."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onBlur"}),": Does nothing."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Chart title <span>"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"data-is-focusable"}),": True if the text content overflows and is truncated."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onFocus"}),": Shows a tooltip with complete content."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onBlur"}),": Hides the tooltip if it is visible."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Legend <button>"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"data-is-focusable"}),": Depends on the allowFocusOnLegends prop, which is true by default."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onFocus"}),": Highlights the corresponding bar segment."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onBlur"}),": Unhighlights the corresponding bar segment."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Users can interact with the following subcomponents using the mouse:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Bar segment <g>"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onMouseOver"}),": Shows a callout near the element containing the segment details."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onMouseMove"}),": Shows the callout if it is not already visible."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onMouseLeave"}),": Does nothing."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Chart title <div>"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onMouseEnter"}),": Shows a tooltip with complete content if the text content overflows and is truncated."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onMouseLeave"}),": Hides the tooltip if it is visible."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Root <div>"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onMouseLeave"}),": Hides the callout if it is visible."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Legend <button>"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onMouseOver"}),": Highlights the corresponding bar segment."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onMouseOut"}),": Unhighlights the corresponding bar segment."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"onClick"}),": Highlights the corresponding bar segment if the legend is not already selected, otherwise unhighlights it."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"known-issues",children:"Known issues"}),"\n",(0,s.jsx)(t.h2,{id:"design-figma",children:"Design figma"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.figma.com/file/WOoCs0CmNYZhYl9xXeCGpi/Data-viz-(Archive)?type=design&node-id=21153-107763&mode=design&t=Ubd0AoDYFIsZ770q-4",children:"Horizontal stacked bar chart \u2013 Figma"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"learnings",children:"Learnings"}),"\n",(0,s.jsx)(t.h2,{id:"extensions",children:"Extensions"})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1968:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/stackedbarchart-test-coverage-60e746591e727d9b5a4aeadf84c995d5.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(7294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);