"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[774],{1264:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>h});var i=t(5893),r=t(1151);const n={},s="Contributor guide: Area Chart",o={id:"Charting-Concepts/AreaChart",title:"Contributor guide: Area Chart",description:"Areachartpic1.png",source:"@site/../../docs/Charting-Concepts/AreaChart.md",sourceDirName:"Charting-Concepts",slug:"/Charting-Concepts/AreaChart",permalink:"/fluentui-charting-contrib/docs/Charting-Concepts/AreaChart",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Detailed Implementation Steps",permalink:"/fluentui-charting-contrib/docs/Detailed Implementation Steps"},next:{title:"Contributor guide: Gauge Chart",permalink:"/fluentui-charting-contrib/docs/Charting-Concepts/GaugeChart"}},c={},h=[{value:"Use cases:",id:"use-cases",level:2},{value:"Fluent Area chart also provide support for the scenarios where we need",id:"fluent-area-chart-also-provide-support-for-the-scenarios-where-we-need",level:3},{value:"Stacked Area Chart",id:"stacked-area-chart",level:3},{value:"Custom Accessibility",id:"custom-accessibility",level:3},{value:"Hover Options:",id:"hover-options",level:3},{value:"Dev Design Details",id:"dev-design-details",level:2},{value:"1.Area Chart",id:"1area-chart",level:3},{value:"2.Cartesian chart",id:"2cartesian-chart",level:3},{value:"3.ChartHover Card:",id:"3charthover-card",level:3},{value:"4.Legends:",id:"4legends",level:3},{value:"Mathematical/Geometrical concepts",id:"mathematicalgeometrical-concepts",level:2},{value:"D3-Line",id:"d3-line",level:3},{value:"D3-Area",id:"d3-area",level:3},{value:"Performance",id:"performance",level:2},{value:"Accessibility",id:"accessibility",level:2},{value:"Testingareachart4.png",id:"testingareachart4png",level:2},{value:"Variants",id:"variants",level:2},{value:"Stacked area chart:",id:"stacked-area-chart-1",level:3},{value:"Custom accessibility:",id:"custom-accessibility-1",level:3},{value:"Area chart with large dataset:",id:"area-chart-with-large-dataset",level:3},{value:"Theming",id:"theming",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Error scenarios",id:"error-scenarios",level:2},{value:"The stacked area chart cannot be loaded if the x-values are not consistent across all the charts within the stack.",id:"the-stacked-area-chart-cannot-be-loaded-if-the-x-values-are-not-consistent-across-all-the-charts-within-the-stack",level:3},{value:"The chart is in a loading state because of one or more reasons below.",id:"the-chart-is-in-a-loading-state-because-of-one-or-more-reasons-below",level:3},{value:"Errors in other components:",id:"errors-in-other-components",level:3},{value:"Localization aspects",id:"localization-aspects",level:2},{value:"Date Axis localization: The axes support 2 ways of localization.",id:"date-axis-localization-the-axes-support-2-ways-of-localization",level:3},{value:"Some notable PRs and their brief description",id:"some-notable-prs-and-their-brief-description",level:2},{value:"Future improvements",id:"future-improvements",level:2},{value:"Rendering details",id:"rendering-details",level:2},{value:"Chart Hover Card -&gt; Cartesian Chart -&gt; Legend -&gt; Area chart.",id:"chart-hover-card---cartesian-chart---legend---area-chart",level:3},{value:"Interactions",id:"interactions",level:2},{value:"Extension",id:"extension",level:2}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"contributor-guide-area-chart",children:"Contributor guide: Area Chart"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Areachartpic1.png",src:t(7039).Z+"",width:"1440",height:"784"})}),"\n",(0,i.jsx)(a.p,{children:"Area charts are graphical representations of data that display quantitative data points connected by lines and filled with colors to create a visual representation of trends and patterns. The area between the line and the x-axis is filled, which helps in emphasizing the cumulative total or the overall magnitude of the data."}),"\n",(0,i.jsx)(a.h2,{id:"use-cases",children:"Use cases:"}),"\n",(0,i.jsx)(a.p,{children:"Area charts are used for various use cases which involve Trend Analysis, Cumulative Data, Comparing Multiple Series , Part-to-Whole Relationships , Distribution Comparison Forecasting etc."}),"\n",(0,i.jsx)(a.h3,{id:"fluent-area-chart-also-provide-support-for-the-scenarios-where-we-need",children:"Fluent Area chart also provide support for the scenarios where we need"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.h3,{id:"stacked-area-chart",children:"Stacked Area Chart"}),"\n","In stacked area chart, two or more data series are stacked vertically. It helps in easy comparison across different dimensions."]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.h3,{id:"custom-accessibility",children:"Custom Accessibility"}),"\n","Area chart provides a bunch of props to enable custom accessibility messages.UsexAxisCalloutAccessibilityData and callOutAccessibilityData to configure x axis and y axis accessibility messages respectively"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.h3,{id:"hover-options",children:"Hover Options:"}),"\n","Area chart also provide different interactive options like ChartHoverCard on hovering over some data in chart. You can customize the content of the Hover card on the basis of the requirement.\n",(0,i.jsx)(a.img,{alt:"areachartpic2.png",src:t(8476).Z+"",width:"1400",height:"740"})]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"dev-design-details",children:"Dev Design Details"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Areachart3.png",src:t(826).Z+"",width:"1196",height:"860"})}),"\n",(0,i.jsx)(a.h3,{id:"1area-chart",children:"1.Area Chart"}),"\n",(0,i.jsx)(a.p,{children:"This is the main component which is responsible for invoking/using other components. This is the component which is responsible for creating area  and managing user interactions with itself , Legends and Cartesian Chart."}),"\n",(0,i.jsx)(a.h3,{id:"2cartesian-chart",children:"2.Cartesian chart"}),"\n",(0,i.jsx)(a.p,{children:"This is component which is responsible for creating the X and Y Axis and the ticks for Axis. All the calculation for domain/range is done in cartesian chart. This component can be accessed through area chart. This is also manages the ChartHoverCard component ."}),"\n",(0,i.jsx)(a.h3,{id:"3charthover-card",children:"3.ChartHover Card:"}),"\n",(0,i.jsx)(a.p,{children:"ChartHoverCard is a utility in the Fluent UI web library that provides a tooltip-like experience for charts. It is a React component that can be used to display additional information about data points on a chart when the user hovers over them."}),"\n",(0,i.jsx)(a.h3,{id:"4legends",children:"4.Legends:"}),"\n",(0,i.jsx)(a.p,{children:"In the Fluent UI React charting library, a legend contains a list of the variables appearing in the chart and an example of their appearance. This information allows the data from each variable to be identified in the chart. This component is populated in Area chart component."}),"\n",(0,i.jsx)(a.h2,{id:"mathematicalgeometrical-concepts",children:"Mathematical/Geometrical concepts"}),"\n",(0,i.jsxs)(a.p,{children:["Area Chart are created using ",(0,i.jsx)(a.a,{href:"https://github.com/d3/d3-shape#readme",children:"d3-shape"}),". The main API used from this library to create line between 2 points is ",(0,i.jsx)(a.a,{href:"https://github.com/d3/d3-shape#lines",children:"d3-line"})," and ",(0,i.jsx)(a.a,{href:"https://github.com/d3/d3-shape#areas",children:"d3-area"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"d3-line",children:"D3-Line"}),"\n",(0,i.jsxs)(a.p,{children:["Line Generator are generated using a\u202f",(0,i.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Spline_(mathematics)",children:"spline"})," or ",(0,i.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Polygonal_chain",children:"polyline"})," , as in a area chart. While\u202flines \u202fare defined as a sequence of two-dimensional [x,\u202fy] points, and ",(0,i.jsx)(a.a,{href:"https://github.com/d3/d3-shape#areas",children:"areas"})," similarly defined by a topline and a baseline, there remains the task of transforming this discrete representation into a continuous shape:\u202fi.e., how to interpolate between the points. A variety of curves are provided for this purpose. The curve used to draw these lines are ",(0,i.jsx)(a.a,{href:"https://github.com/d3/d3-shape#curveLinear",children:"curveLinear"})," ."]}),"\n",(0,i.jsx)(a.h3,{id:"d3-area",children:"D3-Area"}),"\n",(0,i.jsx)(a.p,{children:"The area generator produces an area, as in an area chart. An area is defined by two bounding lines, either splines or polylines. Typically, the two lines share the same x-values (x0 = x1), differing only in y-value (y0 and y1); most commonly, y0 is defined as a constant representing zero. The first line (the topline) is defined by x1 and y1 and is rendered first; the second line (the baseline) is defined by x0 and y0 and is rendered second, with the points in reverse order. With a curveLinear curve, this produces a clockwise polygon."}),"\n",(0,i.jsx)(a.h2,{id:"performance",children:"Performance"}),"\n",(0,i.jsx)(a.p,{children:"The performance aspect of a area chart refers to how efficiently and effectively it conveys information to the viewer. Here are some key considerations regarding the performance of a area chart:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Data Visualization Efficiency"}),"\n",(0,i.jsx)(a.li,{children:"Clarity and Simplicity"}),"\n",(0,i.jsx)(a.li,{children:"Responsiveness"}),"\n",(0,i.jsx)(a.li,{children:"Handling Large Datasets"}),"\n",(0,i.jsx)(a.li,{children:"Interactive Features"}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"We use Lighthouse tool for measuring the performance of our charts. We have multiple scenarios against which we measure the performance score for area chart:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"1 chart with 30k Points"}),"\n",(0,i.jsx)(a.li,{children:"6 charts,1 series with 100 data points each"}),"\n",(0,i.jsx)(a.li,{children:"18 charts,1 series 5 data points each\nLast two scenarios have 90+ LH score. We are currently working on improving the performance of the area with heavy data set (30 k Data points)."}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,i.jsx)(a.p,{children:"Following subcomponents are accessible using a screen reader:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Chart ",(0,i.jsx)(a.code,{children:"<svg>"}),"The role is set as presentation, and the aria-label attribute is set as a string to describe its contents. This is readable by screen reader if user has given chartTitle prop"]}),"\n",(0,i.jsxs)(a.li,{children:["Points accessibility is managed by ",(0,i.jsx)(a.code,{children:"<path>"})," tags with role=\u201dimg\u201d whose accessibility is managed by aria-label property ."]}),"\n",(0,i.jsx)(a.li,{children:"Area chart provides a bunch of props to enable custom accessibility messages.Use xAxisCalloutAccessibilityData and callOutAccessibilityData to configure x axis and y axis accessibility messages respectively."}),"\n"]}),"\n",(0,i.jsxs)(a.h2,{id:"testingareachart4png",children:["Testing",(0,i.jsx)(a.img,{alt:"areachart4.png",src:t(7541).Z+"",width:"1264",height:"422"})]}),"\n",(0,i.jsx)(a.h2,{id:"variants",children:"Variants"}),"\n",(0,i.jsxs)(a.p,{children:["Different variants of area charts are available starting from the basic area chart to stacked area charts, styled area chart, area chart with custom accessibility, Area chart with large data set, area chart with data change functionality. For more details visit DemoSite ",(0,i.jsx)(a.a,{href:"https://fluentuipr.z22.web.core.windows.net/heads/master/react-charting/demo/index.html#/examples/areachart",children:"Fluent UI React Charting Examples - Area Chart (windows.net)"})]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.h3,{id:"stacked-area-chart-1",children:"Stacked area chart:"}),"\n","In stacked area chart, two or more data series are stacked vertically. It helps in easy comparison across different dimensions. The callout on hover for stacked chart displays multiple values from the stack. The callout can be customized to show single values or stacked values. Refer to the propsonRenderCalloutPerDataPoint and onRenderCalloutPerStack using which custom content for the callout can be defined."]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.h3,{id:"custom-accessibility-1",children:"Custom accessibility:"}),"\n","Area chart provides a bunch of props to enable custom accessibility messages.UsexAxisCalloutAccessibilityDataand callOutAccessibilityData to configure x axis and y axis accessibility messages respectively."]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.h3,{id:"area-chart-with-large-dataset",children:"Area chart with large dataset:"}),"\n","We provide support  for smoth  rendering of large data area chart."]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"theming",children:"Theming"}),"\n",(0,i.jsx)(a.p,{children:"The getStyles function defined in the styles file returns styles for different areas (or subcomponents) of the chart based on the props passed to it. The base component is wrapped with the styled HOC, which passes the theme (set by the user) and the concatenated styles (derived from the styling function and any additional styles provided by the user) as props to the base component. Within the base component, the styles are named as the class name. The conversion is done by passing theme and other style props as arguments to the function returned by the classNamesFunction utility. Learn more about component styling here.\nThe color prop for a segment is optional. If the color prop is not defined, a color is selected from the qualitative palette using the getNextColor utility. On the other hand, if the color prop is defined, the getColorFromToken utility is used to determine the appropriate CSS color. If the value of the color prop is a theme-specific color token from the DataVizPalette, the utility will return the corresponding CSS color. Otherwise, if the color prop is already a valid CSS color, it will be returned as is."}),"\n",(0,i.jsx)(a.h2,{id:"debugging",children:"Debugging"}),"\n",(0,i.jsx)(a.p,{children:"Our Test Suites are exhaustive to test each and every features provided with Area Charts, for debugging any particular feature these can be used respectively .Few of these tests also verify the technical aspect of rendering like there is a test suite \u201cRender calling with respective to props\u201d available in area chart test which verifies that the render is called 2 times.\nFurthermore, the fundamental debugging techniques can also be applied to Area charts. These techniques encompass:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Employing logging mechanisms"}),"\n",(0,i.jsx)(a.li,{children:"Utilizing the browser debugger"}),"\n",(0,i.jsx)(a.li,{children:"Leveraging browser extensions"}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"error-scenarios",children:"Error scenarios"}),"\n",(0,i.jsx)(a.h3,{id:"the-stacked-area-chart-cannot-be-loaded-if-the-x-values-are-not-consistent-across-all-the-charts-within-the-stack",children:"The stacked area chart cannot be loaded if the x-values are not consistent across all the charts within the stack."}),"\n",(0,i.jsx)(a.p,{children:"The chart cannot be loaded because of one or more reasons:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Empty data passed such that chart does not have visual to show."}),"\n",(0,i.jsx)(a.li,{children:"One of the datapoint passed to the chart is corrupted. The corrupted datapoint can be for a continuous chart like line or area, or a discrete chart like bar chart, donut chart."}),"\n",(0,i.jsx)(a.li,{children:"The type of data passed to the chart is not supported."}),"\n",(0,i.jsx)(a.li,{children:"The user has not provided the required property."}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"the-chart-is-in-a-loading-state-because-of-one-or-more-reasons-below",children:"The chart is in a loading state because of one or more reasons below."}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"The chart data is too heavy."}),"\n",(0,i.jsx)(a.li,{children:"Chart is waiting for data from a webservice."}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"errors-in-other-components",children:"Errors in other components:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Empty/invalid data passed to hover callout."}),"\n",(0,i.jsx)(a.li,{children:"There is a large variation in data in one datapoint compared to others causing the graphs to become extremely skewed and non-interactable."}),"\n",(0,i.jsx)(a.li,{children:"Title for legends is not defined or is corrupted."}),"\n",(0,i.jsx)(a.li,{children:"There is more than point on y axis for the same point in x axis."}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"localization-aspects",children:"Localization aspects"}),"\n",(0,i.jsx)(a.h3,{id:"date-axis-localization-the-axes-support-2-ways-of-localization",children:"Date Axis localization: The axes support 2 ways of localization."}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Javascript provided inbuilt localization for numeric and date axis. Specify the culture and dateLocalizeOptions for date axis to define target localization. Refer theJavascript localization guidefor usage."}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Custom locale definition: The consumer of the library can specify a custom locale definition as supported by d3 like this:\nThe date axis will use the date range and the multiformat specified in the definition to determine the correct labels to show in the ticks. For example - If the date range is in days then the axis will show hourly ticks. If the date range spans across months then the a xis will show months in tick labels and so on. Specify the custom locale definition in the timeFormatLocale prop. Refer to the Custom Locale Date Axis example in line chart for sample usage."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"some-notable-prs-and-their-brief-description",children:"Some notable PRs and their brief description"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://github.com/microsoft/fluentui/pull/26869",children:"Add color palette for data visualization by krkshitij \xb7 Pull Request #26869 \xb7 microsoft/fluentui (github.com)"}),"  -Color is optional for the data series in AreaChart and LineChart. If the color is absent, it will be picked automatically from the default color palette. New DataVizPalette provides users with theme-specific color tokens"]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://github.com/microsoft/fluentui/pull/27721",children:"[2 of N] Changes for Making first render cycle faster and fixing test cases by ankityadav4 \xb7 Pull Request #27721 \xb7 microsoft/fluentui (github.com)"}),"  -Improving first render cycle of cartesian chart"]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://github.com/microsoft/fluentui/pull/27234",children:"Make area chart keyboard accessible by krkshitij \xb7 Pull Request #27234 \xb7 microsoft/fluentui (github.com)"}),"  -Data points in AreaChart are accessible using keyboard"]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://github.com/microsoft/fluentui/pull/27857",children:"[3 of N] Changes for lazy load for hover card and legends by ankityadav4 \xb7 Pull Request #27857 \xb7 microsoft/fluentui (github.com)"})," \u2013 Lazy loading for hover cards in cartesian charts."]}),"\n",(0,i.jsx)(a.h2,{id:"future-improvements",children:"Future improvements"}),"\n",(0,i.jsx)(a.p,{children:"We are working on Performance Improvements for area chart for large dataset scenario(30k data points)."}),"\n",(0,i.jsx)(a.h2,{id:"rendering-details",children:"Rendering details"}),"\n",(0,i.jsx)(a.p,{children:"Area Chart is a react class Component, which uses different states for managing user interaction. The various other components that are used and their relationship are shown here.The rendering order is reverse of the diagram that means the order of rendering of the components is."}),"\n",(0,i.jsx)(a.h3,{id:"chart-hover-card---cartesian-chart---legend---area-chart",children:"Chart Hover Card -> Cartesian Chart -> Legend -> Area chart."}),"\n",(0,i.jsx)(a.p,{children:"Every state change of user interaction causes different components to re-render. Example if a user hover onto the Legends then the components that will be re-rendered are Legends and then Area chart. However, if the user hovers onto a data point then the components that are re-rendered are Chart Hover Card then Cartesian Chart and then the Area Chart."}),"\n",(0,i.jsx)(a.h2,{id:"interactions",children:"Interactions"}),"\n",(0,i.jsxs)(a.p,{children:["There are various interactions that a user experiences in Area Chart which are\n",(0,i.jsx)(a.strong,{children:"1. Hover on Legends\n2. Hover on Data Points"}),"\nHovering on the legend highlights only that legend and area related to that legend.\nHovering on Data Points renders a card which highlights the nearest points and displays the value of x and all the y on it."]}),"\n",(0,i.jsx)(a.h2,{id:"extension",children:"Extension"}),"\n",(0,i.jsxs)(a.p,{children:["While working on area chart if you are exploring or adding any new things , so if you are planning to contribute or fix something related to creation of line, interaction with the chart and data related things you should start exploring ",(0,i.jsx)(a.a,{href:"https://github.com/microsoft/fluentui/tree/master/packages/react-charting/src/components/AreaChart",children:"fluentui/packages/react-charting/src/components/AreaChart at master \xb7 microsoft/fluentui (github.com)"}),"\nIf anything is related axis creation, domain range issues then one should start exploring cartesian chart code:\n",(0,i.jsx)(a.a,{href:"https://github.com/microsoft/fluentui/tree/master/packages/react-charting/src/components/CommonComponents",children:"fluentui/packages/react-charting/src/components/CommonComponents at master \xb7 microsoft/fluentui \xb7 GitHub"})]})]})}function d(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},7039:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Areachartpic1-b4935c2435221321169a237a02618ca9.png"},8476:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Areachartpic2-aa303ec052eb09134b5806a63b6a0451.png"},826:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Areachartpic3-f759d8bae28dcf41be165b6f447bb7be.png"},7541:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Areachartpic4-a7f762ab0ea882fd9482d5f59c74b208.png"},1151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>s});var i=t(7294);const r={},n=i.createContext(r);function s(e){const a=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(n.Provider,{value:a},e.children)}}}]);