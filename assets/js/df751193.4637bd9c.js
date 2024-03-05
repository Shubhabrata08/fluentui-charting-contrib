"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[5966],{5321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(5893),a=n(1151);const r={},i="Donut Chart",o={id:"Charting-Concepts/DonutChart",title:"Donut Chart",description:"DonutChart1.png",source:"@site/../../docs/Charting-Concepts/DonutChart.md",sourceDirName:"Charting-Concepts",slug:"/Charting-Concepts/DonutChart",permalink:"/fluentui-charting-contrib/docs/Charting-Concepts/DonutChart",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Area Chart",permalink:"/fluentui-charting-contrib/docs/Charting-Concepts/AreaChart"},next:{title:"Gauge Chart",permalink:"/fluentui-charting-contrib/docs/Charting-Concepts/GaugeChart"}},h={},c=[{value:"Use cases",id:"use-cases",level:2},{value:"Mathematical/Geometrical concepts",id:"mathematicalgeometrical-concepts",level:2},{value:"Dev Design details",id:"dev-design-details",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"donut-chart",children:"Donut Chart"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"DonutChart1.png",src:n(3088).Z+"",width:"749",height:"529"})}),"\n",(0,s.jsx)(t.p,{children:"A Donut chart is a type of chart used to visualize data as a circular shape with the central area hollow. It is similar to a Pie chart, but with the area in the center cut out instead of a solid circle.\nDonut charts are useful for displaying data as parts of a whole, where each segment represents a percentage or proportion of the total. The segments are typically colored differently to make them easier to distinguish."}),"\n",(0,s.jsx)(t.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,s.jsx)(t.p,{children:"Donut charts are commonly used in business and finance to display financial data, such as revenue or expenses. They are also used in marketing to display customer demographics or market share. Here are some real-world use cases for Donut charts:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Sales data: Donut charts can be used to display sales data, where each segment represents a product or service category. This can help businesses identify which products or services are performing well and which ones need improvement."}),"\n",(0,s.jsx)(t.li,{children:"Budget data: Donut charts can be used to display budget data, where each segment represents a budget category. This can help businesses identify areas where they are overspending or underspending."}),"\n",(0,s.jsx)(t.li,{children:"Demographic data: Donut charts can be used to display demographic data, where each segment represents a different demographic group. This can help businesses identify their target audience and tailor their marketing efforts accordingly."}),"\n",(0,s.jsx)(t.li,{children:"Market share data: Donut charts can be used to display market share data, where each segment represents a different company or brand. This can help businesses identify their competitors and their position in the market."}),"\n",(0,s.jsx)(t.li,{children:"Survey data: Donut charts can be used to display survey data, where each segment represents a different response option. This can help businesses identify the most popular responses and areas where improvements can be made."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Overall, Donut charts are useful for displaying data as parts of a whole, where each segment represents a percentage or proportion of the total. They are a popular choice for visualizing financial, marketing, and survey data."}),"\n",(0,s.jsx)(t.h2,{id:"mathematicalgeometrical-concepts",children:"Mathematical/Geometrical concepts"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"DonutChart2.png",src:n(5269).Z+"",width:"1117",height:"662"})}),"\n",(0,s.jsx)(t.p,{children:"The d3-shape library provides various functions for creating and manipulating shapes such as arcs, lines, and areas. Following are the main mathematical/geometrical concepts that are used while drawing a donut chart."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"d3.arc():"})," Creates an arc generator function that can be used to create an SVG arc path. The arc generator function takes in an object that specifies the start and end angles of the arc, as well as the inner and outer radii of the arc. The following are some of the main props that the arc generator accepts:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"- startAngle: The starting angle of the arc, in radians. The default value is 0.\n- endAngle: The ending angle of the arc, in radians. The default value is 2\u03c0 (i.e., a full circle).\n- innerRadius: The inner radius of the arc, in pixels. The default value is 0.\n- outerRadius: The outer radius of the arc, in pixels. This prop is required.\n- padAngle: The amount of padding to add between adjacent arcs, in radians. The default value is 0.\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"d3.pie():"})," creates a pie generator function that can be used to create a pie chart. The pie generator function takes in an array of data and returns an array of objects that represent each data point in the pie chart."]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Pie formation: The function uses the data values to calculate the angles for each data point. It then uses the angles to create a series of arcs that represent each data point in the pie chart. The arcs are created using the d3.arc() function, which creates an SVG arc path based on the start and end angles of the arc."}),"\n",(0,s.jsx)(t.li,{children:"Supported props: The function also provides various options for customizing the pie chart, such as the pie start angle, the pie end angle, and the sort order of the data points. These options can be used to create different types of pie charts, such as donut charts or exploded pie charts.\nHere are the main props that can be passed to the pie generator function:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"- data: the input datum; the corresponding element in the input data array.\n- value: the numeric value of the arc.\n- index: the zero-based sorted index of the arc.\n- startAngle: The starting angle of the pie chart, in radians. The default value is 0.\n- endAngle: The ending angle of the pie chart, in radians. The default value is 2\u03c0 (i.e., a full circle).\n- padAngle: The amount of padding to add between adjacent data points, in radians. The default zalue is 0.\n"})}),"\n",(0,s.jsx)(t.h2,{id:"dev-design-details",children:"Dev Design details"}),"\n",(0,s.jsx)(t.p,{children:"This section contains the technical design of various sub components of a donut chart and how they interact with each other. This section can also contain any key interface or class structure of the donut chart.\nThe Donut chart consists of the following sub-components:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Arc:"})}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Arc creation:"})," This component is used to render an arc in a pie chart, and it receives various props such as the arc data, color, and focus state. The component uses the d3-shape library to create the arc shape, and it also uses the @fluentui/react library to apply styles to the component."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Arc event handlers:"})," The Arc component has several methods that handle events such as _onFocus, _hoverOn, _hoverOff, _onBlur and onClick. These methods are used to update the component's state and to trigger callbacks that are passed in as props. The component also has a method called _renderArcLabel that is used to render the label for the arc."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Arc update:"})," The Arc component uses the getDerivedStateFromProps method to update the chart whenever new props are received. This method calls the _updateChart function, which updates the inner and outer radius of the arc based on the new props.\nOverall, the Arc component is a reusable component that can be used to render an arc in a pie chart. It is highly customizable and can be used in a variety of contexts."]}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Pie:"})}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Pie creation:"})," This component is used to render a pie chart, and it receives various props such as the chart data, inner and outer radius, and callbacks for hover and focus events. The component uses the d3-shape library to create the pie chart shape, and it also uses the @fluentui/react library to apply styles to the component."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Constraint:"})," The inner radius has to be greater than 0."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Pie handlers:"})," The Pie component has several methods that handle events such as _focusCallback and _hoverCallback. These methods are used to update the component's state and to trigger callbacks that are passed in as props. The component also has a method called _computeTotalValue that is used to calculate the total value of the chart data."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Pie update:"})," The Pie component uses the getDerivedStateFromProps method to update the chart whenever new props are received. This method calls the _updateChart function, which updates the inner and outer radius of the chart based on the new props.\nOverall, the Pie component is a reusable component that can be used to render a pie chart. It is highly customizable and can be used in a variety of contexts."]}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Callout:"})}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Callout creation:"})," The DonutChart component has a method called _renderCallouts that is used to render callouts for the data points. This method creates a Callout component from the @fluentui/react library and passes in various props such as the target element, the callout ID, and the callout content. The method also sets up various actions for the callout, such as hover and dismiss actions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Callout behaviour:"})," The Callout component is used to display additional information about a data point when it is hovered over. It is positioned relative to the hovered data point and displays information such as the data point's legend, value, and color. The Callout component is highly customizable and can be used in a variety of contexts."]}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Legends:"})}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Legend creation:"})," The DonutChart component has a private method called _createLegends that is used to create the legends for the chart. This method takes in the chart data and color palette as arguments and returns a JSX element that contains the legends. The method maps over the chart data and creates a legend for each data point. It also sets up various actions for each legend, such as hover and click actions."]}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Inner Text:"})}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Inner text description:"})," The inner text in a Donut chart is the text displayed in the centre of the donut chart, inside the hollow region. This text can be used to display additional information about the data being displayed, such as the total value or the name of the data set."]}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Rendering details"}),"\nThe donut chart uses d3 SVG based rendering, which follows the following render cycles:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Invocation cycle: Donut Chart -> Pie -> Arc\nRendering cycle:  Donut chart <- d3.pie() <- d3.arc()\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Error scenarios"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Currently, donut chart cannot handle long inner texts which overflows and results in error state. Fix for this issue is already in PR."}),"\n",(0,s.jsxs)(t.ol,{start:"8",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Localization aspects"}),"\nCurrently, donut chart provides localization only for the inner text."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Testing"}),"\nThe manual, component and unit testing of donut charts have been completed. Following is the improvement in code coverage:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"DonutChart3.png",src:n(2621).Z+"",width:"2475",height:"537"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Component Tests:\no Work item: ",(0,s.jsx)(t.a,{href:"https://uifabric.visualstudio.com/iss/_workitems/edit/6798/",children:"https://uifabric.visualstudio.com/iss/_workitems/edit/6798/"}),"\no Test plan: ",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/blob/master/packages/react-charting/docs/TestPlans/DonutChart/ComponentTests.md",children:"https://github.com/microsoft/fluentui/blob/master/packages/react-charting/docs/TestPlans/DonutChart/ComponentTests.md"})]}),"\n",(0,s.jsxs)(t.li,{children:["Unit Tests:\no Work item: ",(0,s.jsx)(t.a,{href:"https://uifabric.visualstudio.com/iss/_workitems/edit/7403",children:"https://uifabric.visualstudio.com/iss/_workitems/edit/7403"})]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Accessibility"}),"\nFAST pass checks resulted in no error for Donut chart. Link to the FAST pass tool: ",(0,s.jsx)(t.a,{href:"https://accessibilityinsights.io/docs/web/getstarted/fastpass/",children:"https://accessibilityinsights.io/docs/web/getstarted/fastpass/"}),"\nOur charts have elaborate accessibility support. The charts are WCAG 2.1 MAS C compliant for accessibility.\nConsumers can define their own aria labels for each point by setting the xAxisCalloutAccessibilityData and callOutAccessibilityData properties."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Theming"}),'\nThe palette for donut chart is set from the "theme" prop as passed to the component during rendering. Both light and dark themes are supported and users can create there own theme too. Ref[3]  and Ref[4]  explains theming in detail.']}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Debugging"}),"\nThe detailed steps on debugging has been given in\xa0",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui-charting-contrib/blob/main/docs/Debugging.md",children:"Debugging"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Variants"}),"\nFollowing are the variants of donut chart: ",(0,s.jsx)(t.a,{href:"https://developer.microsoft.com/en-us/fluentui#/controls/web/donutchart",children:"Ref2"})]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Basic Donut Chart: Only basic props are provided."}),"\n",(0,s.jsx)(t.li,{children:"Dynamic Donut Chart: The data and pie colors can change."}),"\n",(0,s.jsx)(t.li,{children:"Custom Callout: Can show customized callout data."}),"\n",(0,s.jsx)(t.li,{children:"Custom Accessibility: Providing custom aria labels."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Interaction"}),"\nFollowing are the interactions that are allowed for donut chart:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Mouse Events:\na. On mouse over on the donut chart, should render callout.\nb. On mouse move on Pie 1 (step 1) -> mouse leave (step 2) -> mouse move on Pie 2 (step 3), should render the callout of the Pie 2.\nc. On mouse over, callout should be defined, on mouse leave, callout should disappear.\nd. On mouse over on legends, should highlight the corresponding pie.\ne. On mouse over on legends, should change the value inside donut with the legend value.\nf. On click on Pie, should highlight the corresponding pie with aria-selected set to \u201ctrue\u201d and tabIndex set to 0.\ng. On mouse out after mouse over on first legend, should have opacity 0.1 for second Pie initially (during mouseOver on first legend) and opacity set to 1 for both the Pies on mouse out."}),"\n",(0,s.jsx)(t.li,{children:"Keyboard Events:\na. On focus on a Pie, should render the corresponding callout.\nb. On blur on a Pie, should remove focus from the corresponding Pie."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Some notable PRs and their brief description"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/commit/b60d3dfb35367467568d91c2933bb7053e9b716b",children:"Adding the Donut Chart main component"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/commit/5349c8cbc522ff7b9eac2e5858cbad092d22eb82",children:"Adding Tests for Donut Chart using React Testing Library"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/commit/50ee71862affde61ace35edcb5c3d6f67928f343",children:"Allow focus navigation with tab key in donut chart (Accessibility)"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Learnings"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"While implementing the tests using react testing library, it was found that certain browser functions like getComputedTextLength() cannot be unit tested and needs to be tested End-to-End only."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Order of imports are important.\nFor example: for Vertical bar charts tests, improper sequencing of the imports (data first and then render) results in incorrect and incopmlete rendering of charts:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"import { chartPoints } from '../VerticalBarChart/VerticalBarChart.test';\nimport { render, screen, queryAllByAttribute, fireEvent, act } from '@testing- \nlibrary/react';\nHowever, the following results in correct rendering:\n\nimport { render, screen, queryAllByAttribute } from '@testing-library/react';\nimport { chartPoints } from './VerticalBarChart.test';\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Certain props need async await structure (waitFor in react testing library) for different props or nested SVGs to render."}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Known issues"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The value inside Donut chart overflows. Should be ideally wrapping inside the donut chart. Work item 5321 captures this bug. This item has already been fixed in this ",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/fluentui/pull/26192",children:"PR"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Future improvements"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Following are the list of future improvements for the donut chart:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The donut chart component can be extended to support Nested Donut Charts which can also be used to display multiple sets of data, where each ring represents a different data set."}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Design figma"}),"\nDonut Chart Figma: ",(0,s.jsx)(t.a,{href:"https://www.figma.com/file/WOoCs0CmNYZhYl9xXeCGpi/Data-viz-(Archive)?type=design&node-id=3361-77520&mode=design&t=lvW5txXwtfI7wvOI-0",children:"Link"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Performance"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The performance aspect of a donut chart refers to how efficiently and effectively it conveys information to the viewer. Here are some key considerations regarding the performance of a line chart:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Data Visualization Efficiency"}),"\n",(0,s.jsx)(t.li,{children:"Clarity and Simplicity"}),"\n",(0,s.jsx)(t.li,{children:"Responsiveness"}),"\n",(0,s.jsx)(t.li,{children:"Handling Large Datasets"}),"\n",(0,s.jsxs)(t.li,{children:["Interactive Features\nWe use Lighthouse tool for measuring the performance of our charts. Following are few of the scenarios for which we measure the performance score for donut chart:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"chart with 100 data points"}),"\n",(0,s.jsx)(t.li,{children:"charts with localized data\nAll of the above scenarios have 95+ Lighthouse score. We are efficient in terms of the performance of the donut chart."}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3088:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/DonutChart1-9f10b2df3479f2d893fa20709ae72eb0.png"},5269:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/DonutChart2-8fa01069f0af01a5a142c8909c588c1f.png"},2621:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/DonutChart3-43bb764e6b1372961370da02b2f7196b.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(7294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);