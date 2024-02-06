"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[1321],{9431:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var t=s(5893),i=s(1151);const r={},a="Contributor guide: Gauge Chart",l={id:"Charting-Concepts/GaugeChart",title:"Contributor guide: Gauge Chart",description:"Gauge chart measures the progress of a metric against its target and its primary components are a speedometer and a needle. The speedometer usually consists of color-coded segments progressing value from left to right.",source:"@site/../../docs/Charting-Concepts/GaugeChart.md",sourceDirName:"Charting-Concepts",slug:"/Charting-Concepts/GaugeChart",permalink:"/fluentui-charting-contrib/docs/Charting-Concepts/GaugeChart",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributor guide: Area Chart",permalink:"/fluentui-charting-contrib/docs/Charting-Concepts/AreaChart"},next:{title:"Contributor guide: Heatmap Chart",permalink:"/fluentui-charting-contrib/docs/Charting-Concepts/HeatMapChart"}},o={},h=[{value:"Use cases",id:"use-cases",level:2},{value:"Dev Design details",id:"dev-design-details",level:2},{value:"Mathematical/Geometrical concepts",id:"mathematicalgeometrical-concepts",level:2},{value:"Performance",id:"performance",level:2},{value:"Accessibility",id:"accessibility",level:2},{value:"Testing",id:"testing",level:2},{value:"Variants",id:"variants",level:2},{value:"Theming",id:"theming",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Error scenarios",id:"error-scenarios",level:2},{value:"Localization aspects",id:"localization-aspects",level:2},{value:"Some notable PRs and their brief description",id:"some-notable-prs-and-their-brief-description",level:2},{value:"Future improvements",id:"future-improvements",level:2},{value:"Rendering details",id:"rendering-details",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"Design figma",id:"design-figma",level:2},{value:"Learnings",id:"learnings",level:2},{value:"Extensions",id:"extensions",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"contributor-guide-gauge-chart",children:"Contributor guide: Gauge Chart"}),"\n",(0,t.jsx)(n.p,{children:"Gauge chart measures the progress of a metric against its target and its primary components are a speedometer and a needle. The speedometer usually consists of color-coded segments progressing value from left to right."}),"\n",(0,t.jsx)(n.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,t.jsx)(n.p,{children:"Gauge chart offers a quick and intuitive way to evaluate a single value within a specific range and its relation to targets or thresholds. Here are some common use cases for gauge chart:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Performance Monitoring: Track metrics like sales or customer satisfaction against predefined benchmarks."}),"\n",(0,t.jsx)(n.li,{children:"KPI Tracking: Monitor progress towards goals by displaying key performance indicators."}),"\n",(0,t.jsx)(n.li,{children:"Health and Fitness: Display health parameters such as heart rate or steps taken."}),"\n",(0,t.jsx)(n.li,{children:"Survey Feedback: Visualize satisfaction scores or survey feedback."}),"\n",(0,t.jsx)(n.li,{children:"Resource Allocation: Show resource distribution across different categories."}),"\n",(0,t.jsx)(n.li,{children:"Risk Assessment: Assess risk levels or safety ratings."}),"\n",(0,t.jsx)(n.li,{children:"Project Progress: Represent project or task completion percentage."}),"\n",(0,t.jsx)(n.li,{children:"Quality Control: Monitor defect or error rates."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"dev-design-details",children:"Dev Design details"}),"\n",(0,t.jsx)("img",{src:s(6399).Z,alt:"Gauge chart dev design",width:"300"}),"\n",(0,t.jsx)(n.p,{children:"The Gauge chart comprises the following components and subcomponents:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GaugeChart"}),": This is the main component responsible for rendering and managing subcomponents such as chart title, limits (min and max values), segments, needle, chart value, sublabel, and other components. It handles user interactions and provides the overall functionality of the chart."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"FocusZone"}),": This component facilitates focus navigation within the Gauge chart. It allows users to navigate between focusable subcomponents, such as segments and the needle, using the arrow and tab keys."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SVGTooltipText"}),": This component is used to render the chart value and sublabel as SVG text elements with an optional tooltip. The tooltip is triggered when the content overflows and appears when users hover over or focus on the element."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Legends"}),": Legends are a list of strings that identify each segment in the Gauge chart. The Legends component renders a button for each legend, enabling users to highlight the corresponding segment by hovering over or selecting the legend."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Callout"}),": This component functions as an anchored tip, offering additional information about the segment, needle, or chart value that is currently hovered over or focused without blocking the user."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Segments"}),": These are the color-coded intervals that indicate different levels or categories."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Needle"}),": It indicates the current value of the chart within a range."]}),"\n",(0,t.jsx)(n.h2,{id:"mathematicalgeometrical-concepts",children:"Mathematical/Geometrical concepts"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Segments in the chart are generated using the ",(0,t.jsx)(n.a,{href:"https://github.com/d3/d3-shape#arcs",children:"arc"})," utility from the ",(0,t.jsx)(n.a,{href:"https://github.com/d3/d3-shape",children:"d3-shape"})," library. This utility returns an arc generator that produces path data based on specified angle and radius values. The arcs are always centred at coordinates {0, 0}, so a transform is applied to move the arc to a different position."]}),"\n",(0,t.jsx)(n.li,{children:"Here, an angle of 0 radians corresponds to the positive y-axis. The arc is created in a clockwise direction if the signed difference between the start and end angles is positive. The angular span of each segment is determined by the ratio of its individual size to the total size of all segments."}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/d3/d3-shape#arc_padAngle",children:"pad angle"})," is converted to a fixed linear distance separating adjacent arcs, defined as padRadius * padAngle. As per the design doc, the desired distance between adjacent arcs is 2px, referred to as ARC_PADDING. To maintain this distance between the outer boundaries of the arcs, padRadius is kept the same as outerRadius, and padAngle is calculated as ARC_PADDING / padRadius. Note that if the inner radius or angular span is small relative to the pad angle, it may not be possible to maintain parallel edges between adjacent arcs."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,t.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsx)(n.p,{children:"The following subcomponents are accessible using a screen reader:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Chart <svg>"}),": The following attributes provide an accessible name describing the contents of the chart."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"role"}),' = "presentation"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aria-label"}),' = "This is a gauge chart with {numSegments} section represented."']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Min value <text>"}),": It is already accessible to screen readers, but the content doesn\u2019t convey complete information. The following attributes specify a different accessible name for the min value."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"role"}),' = "img"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aria-label"}),' = "Min value: {minValue}"']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Max value <text>"}),": It is already accessible to screen readers, but the content doesn\u2019t convey complete information. The following attributes specify a different accessible name for the max value."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"role"}),' = "img"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aria-label"}),' = "Max value: {adjustedMaxValue}"']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Segments <path>"}),": The following attributes provide an accessible name describing the segment."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"role"}),' = "img"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aria-label"}),' =\n"{segmentLegend}, {segmentStart} - {segmentEnd}" when variant is GaugeChartVariant.MultipleSegments, or\n"{segmentLegend}, {segmentSize} out of {totalSizeOfSegments} or {segmentSizeInPercent}%" when variant is GaugeChartVariant.SingleSegment.']}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Users can provide a custom accessible name or description for a segment using its accessibilityData prop."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Chart value <text>"}),": It is already accessible to screen readers, but the content doesn\u2019t convey complete information. The following attributes specify a different accessible name for the chart value."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"role"}),' = "img"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aria-label"}),' = "Current value: {formattedChartValue}"']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Sublabel <text>"}),": It is already accessible to screen readers. The following attributes provide an accessible name for the sublabel."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"role"}),' = "img"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aria-label"})," = the sublabel itself"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Test coverage report",src:s(9485).Z+"",width:"1430",height:"456"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/fluentui-charting-contrib/docs/Test%20Plans/GaugeChart/ComponentTests",children:"GaugeChart test plan"})}),"\n",(0,t.jsx)(n.h2,{id:"variants",children:"Variants"}),"\n",(0,t.jsx)(n.p,{children:"Here are the props available for customizing the gauge chart:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"width"})," and ",(0,t.jsx)(n.strong,{children:"height"}),": These props determine the diameter of the gauge. If not provided, a default diameter of 140px is used."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"chartTitle"}),": Use this prop to render a title above the gauge."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"chartValue"}),": This required prop controls the rotation of the needle. If the chart value is less than the minimum, the needle points to the min value. Similarly, if it exceeds the maximum, the needle points to the max value."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"segments"}),": Use this required prop to divide the gauge into colored sections. The segments can have fixed sizes or vary with the chart value to create a sweeping effect. Negative segment sizes are treated as 0."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"minValue"}),": Use this prop if the minimum value of the gauge is different from 0."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"maxValue"}),": Use this prop to render a placeholder segment when the difference between the max and min values is larger than the total size of the segments. If the difference is smaller, the max value will be adjusted so that the total size of the segments matches the difference."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"sublabel"}),": Use this prop to render additional text below the chart value."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"hideMinMax"}),": Set this prop to true to hide the min and max values of the gauge."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"chartValueFormat"}),": This prop controls how the chart value is displayed. Set it to one of the following options:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A custom formatter function that returns a string representing the chart value."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"GaugeValueFormat.Fraction"}),": Renders the chart value as a fraction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"GaugeValueFormat.Percentage"}),": Renders the chart value as a percentage. This is the default format."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note: If the min value is non-zero and no formatter function is provided, the chart value will be rendered as a number."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"variant"}),": This prop determines the presentation style of the gauge chart. Set it to one of the following options:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"GaugeChartVariant.SingleSegment"}),": Displays and announces the segment sizes as percentages."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"GaugeChartVariant.MultipleSegments"}),": Displays and announces the segment sizes as ranges. This is the default variant."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more details, see ",(0,t.jsx)(n.a,{href:"https://developer.microsoft.com/en-us/fluentui#/controls/web/gaugechart",children:"Fluent UI - Controls - React - GaugeChart"})]}),"\n",(0,t.jsx)(n.h2,{id:"theming",children:"Theming"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The styles file contains a function called getStyles, which returns styles for different areas or subcomponents of the chart based on the props passed to it. The base component is wrapped with the styled HOC, which passes the theme (set by the user) and the concatenated styles (obtained from the styling function and any additional styles provided by the user) as props to the base component. Within the base component, the styles are applied to corresponding elements after converting them into class names. This conversion is done by passing theme and other style props as arguments to the function returned by the classNamesFunction utility. To learn more about component styling, refer ",(0,t.jsx)(n.a,{href:"https://github.com/microsoft/fluentui/wiki/Component-Styling",children:"this"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"For each segment in the chart, the color prop is optional. If the color prop is not defined, a color is selected from the qualitative palette using the getNextColor utility. However, if the color prop is defined, the getColorFromToken utility is used to determine the appropriate CSS color. If the value of the color prop is a theme-specific color token from the DataVizPalette, the utility will return the corresponding CSS color. Otherwise, if the color prop is already a valid CSS color, it will be returned as is."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"debugging",children:"Debugging"}),"\n",(0,t.jsx)(n.h2,{id:"error-scenarios",children:"Error scenarios"}),"\n",(0,t.jsx)(n.h2,{id:"localization-aspects",children:"Localization aspects"}),"\n",(0,t.jsx)(n.p,{children:"Currently, the chart supports localization only for the callout content."}),"\n",(0,t.jsx)(n.h2,{id:"some-notable-prs-and-their-brief-description",children:"Some notable PRs and their brief description"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/microsoft/fluentui/pull/27170",children:"Add gauge chart by krkshitij \xb7 Pull Request #27170 \xb7 microsoft/fluentui (github.com)"})}),"\n",(0,t.jsx)(n.h2,{id:"future-improvements",children:"Future improvements"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Add min width and height"}),"\n",(0,t.jsx)(n.li,{children:"Show message when chart is empty"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"rendering-details",children:"Rendering details"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The calculation of margins for the Gauge chart takes into account the presence of the chart title, sublabel, and limits (min and max values) to ensure that they do not overlap with the segments. Additionally, there is an extra margin of 16px around the gauge, referred to as GAUGE_MARGIN."}),"\n",(0,t.jsx)(n.li,{children:"Assuming that the legends do not wrap, the legends container is considered to have a fixed height of 24px. This helps calculate the available height for the <svg> element."}),"\n",(0,t.jsx)(n.li,{children:"The outer radius of the gauge is calculated based on the width and height props. If these props are not provided, the viewable width and height of the root div when the component mounts are used instead."}),"\n",(0,t.jsx)(n.li,{children:"According to the design doc, the font size of the chart value and the arc width vary depending on the size of the gauge chart. We cannot use CSS media queries in this case because the styles would be conditionally applied based on browser and operating system parameters. Instead, we use the BREAKPOINTS constant to determine the appropriate inner radius of the gauge and the font size of the chart value."}),"\n",(0,t.jsx)(n.li,{children:"If the difference between the max and min values exceeds the total size of all segments, a placeholder segment is rendered with a value equal to the difference. However, if the difference is smaller, the maximum value is adjusted to the correct value."}),"\n",(0,t.jsx)(n.li,{children:"The sweep fraction is calculated using the chart value, min value, and adjusted max value to determine the rotation of the needle."}),"\n",(0,t.jsx)(n.li,{children:"The min and max values are formatted with SI prefixes, as mentioned in the design doc. This formatting ensures that the values do not exceed 6 characters, equivalent to a width of 36px, referred to as LABEL_WIDTH."}),"\n",(0,t.jsx)(n.li,{children:"By default, the focus outline for segments is rectangular in shape. So the default outline is removed, and a custom outline is shown or hidden based on focus and blur events by adjusting the stroke width."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"interactions",children:"Interactions"}),"\n",(0,t.jsx)(n.p,{children:"The chart is wrapped with a FocusZone component to allow focus on its interactive subcomponents. The following subcomponents are accessible using the keyboard:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Segments <path>"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data-is-focusable"}),": True"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onFocus"}),": Shows a callout near the element containing the chart value and all segments, along with their respective ranges"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onBlur"}),": Hides the callout if it is visible"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Needle <path>"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data-is-focusable"}),": True"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onFocus"}),": Shows a callout near the element containing the chart value and all segments, along with their respective ranges"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onBlur"}),": Hides the callout if it is visible"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Chart value <text>"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data-is-focusable"}),": True if the text content overflows the specified width and height"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onFocus"}),": Shows a tooltip with the complete content"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onBlur"}),": Hides the tooltip if it is visible"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Legend <button>"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data-is-focusable"}),": Depends on the allowFocusOnLegends prop, which is true by default"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onFocus"}),": Highlights the corresponding segment"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onBlur"}),":\tUnhighlights the corresponding segment"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Users can interact with the following subcomponents using the mouse:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Segments <path>"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onMouseEnter"}),": Shows a callout near the element containing the chart value and all segments, along with their respective ranges"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onMouseMove"}),": Shows the callout if it is not already visible"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Needle <path>"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onMouseEnter"}),": Shows a callout near the element containing the chart value and all segments, along with their respective ranges"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onMouseMove"}),": Shows the callout if it is not already visible"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Chart value"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"<g>"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onMouseEnter"}),": Shows a callout near the element containing the chart value and all segments, along with their respective ranges"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onMouseMove"}),": Shows the callout if it is not already visible"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"<text>"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onMouseEnter"}),": Shows a tooltip with the complete content if the text content overflows the specified width and height"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onMouseLeave"}),": Hides the tooltip if it is visible"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Sublabel <text>"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onMouseEnter"}),": Shows a tooltip with the complete content if the text content overflows the specified width and height"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onMouseLeave"}),": Hides the tooltip if it is visible"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Chart <svg>"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onMouseLeave"}),": Hides the callout if it is visible"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Legend <button>"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onMouseOver"}),": Highlights the corresponding segment"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onMouseOut"}),": Unhighlights the corresponding segment"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onClick"}),": Highlights the corresponding segment if the legend is not already selected, otherwise unhighlights it"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"known-issues",children:"Known issues"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:['The chart is assigned the role of presentation. The "presentation" role and its synonym "none" remove an element\'s implicit ARIA semantics from being exposed to the accessibility tree. For more details, see ',(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role",children:"ARIA: presentation role - Accessibility | MDN"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"design-figma",children:"Design figma"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.figma.com/file/oNWKEgIOCSLElvMZPOVMCq/ARCHIVED-Fluent-Data-Viz-(WIP)?type=design&node-id=2415-274387&mode=design&t=jdEfxXd3aMNuyWuz-4",children:"Gauge chart \u2013 Figma"})}),"\n",(0,t.jsx)(n.h2,{id:"learnings",children:"Learnings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The needle is expanded from all sides by half the stroke width to maintain consistent dimensions with the design doc. This is necessary because the stroke is always centered on the outline, with half on the inside and half on the outside."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"extensions",children:"Extensions"})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},6399:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gaugechart-dev-design-35b9551ffa7dc491d20730e4a65e9c2c.png"},9485:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gaugechart-test-coverage-eb67779e6e7ab65f6e1aebce72af193d.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var t=s(7294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);