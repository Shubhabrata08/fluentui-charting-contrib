"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[375],{4939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>h,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var s=n(5893),r=n(1151);const d={},h="Component testing - Gauge chart test plan",l={id:"TestPlans/GaugeChart/ComponentTests",title:"Component testing - Gauge chart test plan",description:"Snapshot testing",source:"@site/../../docs/TestPlans/GaugeChart/ComponentTests.md",sourceDirName:"TestPlans/GaugeChart",slug:"/TestPlans/GaugeChart/ComponentTests",permalink:"/fluentui-charting-contrib/docs/TestPlans/GaugeChart/ComponentTests",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ComponentTests",permalink:"/fluentui-charting-contrib/docs/TestPlans/DonutChart/ComponentTests"},next:{title:"ComponentTests",permalink:"/fluentui-charting-contrib/docs/TestPlans/GroupedVerticalBarChart/ComponentTests"}},i={},c=[{value:"Snapshot testing",id:"snapshot-testing",level:2},{value:"Testing event listeners",id:"testing-event-listeners",level:2}];function o(e){const t={h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"component-testing---gauge-chart-test-plan",children:"Component testing - Gauge chart test plan"}),"\n",(0,s.jsx)(t.h2,{id:"snapshot-testing",children:"Snapshot testing"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Test case"}),(0,s.jsx)(t.th,{children:"Validation"}),(0,s.jsx)(t.th,{children:"Tool used"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When only segments and chartValue props are set"}),(0,s.jsx)(t.td,{children:"Should render gauge chart correctly"}),(0,s.jsx)(t.td,{children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When hideMinMax prop is set to true"}),(0,s.jsx)(t.td,{children:"Should not render the min and max values of the gauge"}),(0,s.jsx)(t.td,{children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When chartTitle prop is set"}),(0,s.jsx)(t.td,{children:"Should render the chart title correctly"}),(0,s.jsx)(t.td,{children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When sublabel prop is set"}),(0,s.jsx)(t.td,{children:"Should render the sublabel correctly"}),(0,s.jsx)(t.td,{children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When the layout direction is RTL"}),(0,s.jsx)(t.td,{children:"Should render gauge chart correctly"}),(0,s.jsx)(t.td,{children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When hideLegend prop is set to true"}),(0,s.jsx)(t.td,{children:"Should not render the legends"}),(0,s.jsx)(t.td,{children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When chartValueFormat is set to \u2018fraction\u2019"}),(0,s.jsx)(t.td,{children:"Should render the chart value in fraction format"}),(0,s.jsx)(t.td,{children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When a segment has no color"}),(0,s.jsx)(t.td,{children:"Should render a color from DataVizPalette for the segment"}),(0,s.jsx)(t.td,{children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When the total size of the segments is less than the difference between maxValue and minValue props"}),(0,s.jsx)(t.td,{children:"Should render a placeholder segment"}),(0,s.jsx)(t.td,{children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When the theme is dark"}),(0,s.jsx)(t.td,{children:"Should render gauge chart correctly"}),(0,s.jsx)(t.td,{children:"Enzyme"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"testing-event-listeners",children:"Testing event listeners"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Test case"}),(0,s.jsx)(t.th,{children:"Validation"}),(0,s.jsx)(t.th,{children:"Tool used"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When the mouse moves over a segment and then leaves the chart"}),(0,s.jsx)(t.td,{children:"Should show a callout and hide it respectively"}),(0,s.jsx)(t.td,{children:"RTL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When a segment is focused and then blurred"}),(0,s.jsx)(t.td,{children:"Should show an outline around the segment and hide it respectively"}),(0,s.jsx)(t.td,{children:"RTL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When the mouse moves over the chart value and then leaves the chart"}),(0,s.jsx)(t.td,{children:"Should show a callout and hide it respectively"}),(0,s.jsx)(t.td,{children:"RTL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When the mouse moves over the needle and then leaves the chart"}),(0,s.jsx)(t.td,{children:"Should show a callout and hide it respectively"}),(0,s.jsx)(t.td,{children:"RTL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When the needle is focused and then blurred"}),(0,s.jsx)(t.td,{children:"Should show a callout and hide it respectively"}),(0,s.jsx)(t.td,{children:"RTL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When the mouse moves over a legend and then moves out of the legend"}),(0,s.jsx)(t.td,{children:"Should highlight the corresponding segment and unhighlight it respectively"}),(0,s.jsx)(t.td,{children:"RTL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When a legend is clicked once and then clicked again"}),(0,s.jsx)(t.td,{children:"Should highlight the corresponding segment and unhighlight it respectively"}),(0,s.jsx)(t.td,{children:"RTL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When the length of the chart value exceeds the max width"}),(0,s.jsx)(t.td,{children:"Should truncate the chart value with ellipsis"}),(0,s.jsx)(t.td,{children:"RTL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When the chart resizes"}),(0,s.jsx)(t.td,{children:"Should update the font size of the chart value"}),(0,s.jsx)(t.td,{children:"RTL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"When hideTooltip prop is set to true"}),(0,s.jsx)(t.td,{children:"Should not show a callout"}),(0,s.jsx)(t.td,{children:"RTL"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>h});var s=n(7294);const r={},d=s.createContext(r);function h(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:h(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);