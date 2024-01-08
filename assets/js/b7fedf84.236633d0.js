"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[527],{9619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>x});var l=n(5893),r=n(1151);const s={},i=void 0,d={id:"TestPlans/VerticalStackedBarChart/ComponentTests",title:"ComponentTests",description:"Vertical Stacked Bar Chart \u2013 Component test plan",source:"@site/../../docs/TestPlans/VerticalStackedBarChart/ComponentTests.md",sourceDirName:"TestPlans/VerticalStackedBarChart",slug:"/TestPlans/VerticalStackedBarChart/ComponentTests",permalink:"/fluentui-charting-contrib/docs/TestPlans/VerticalStackedBarChart/ComponentTests",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ComponentTests",permalink:"/fluentui-charting-contrib/docs/TestPlans/VerticalBarChart/ComponentTests"},next:{title:"TestingStrategy",permalink:"/fluentui-charting-contrib/docs/TestingStrategy"}},c={},x=[];function o(e){const t={li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Vertical Stacked Bar Chart \u2013 Component test plan"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Sub-components: Bar, Line, Legends, Callout, Labels"})}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Bar: Bar data, Bar color (single/multiple), bar label"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Line: show/hide line, highlight data points on line and show callout"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Legends: show/hide legends, highlight the corresponding bar/line on legend hover"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Callout: Default/custom callout"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Labels: x-Axis labels default/rotated"})}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Test steps"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Validation"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Tool used"})})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 1: [Snapshot testing]"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With only data prop, numerical data on x-axis."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Renders VerticalStackedBar chart correctly"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With only data prop, numerical data on x-axis and RTL mode"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render the vertical stacked bar chart with numeric x-axis in RTL mode"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With HideLegend prop set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should hide legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With HideTooltip prop set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should hide the tooltip in chart"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With EnabledLegendsWrapLines set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should enable the legends to wrap lines if there is not enough space to show all legends on a single line"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With ShowXAxisLablesTooltip set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should truncate x axis labels and show tooltip on x axis labels"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With WrapXAxisLables set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should wrap x axis label values"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With isCalloutForStack set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render callout for stack properly"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With yAxisTickFormat set to \u201c%d\u201d"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)("p",{children:"Should render the y-axis ticks in the format specified"}),(0,l.jsx)("p",{})]}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With hideLabels set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should hide bar labels"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 2: Basic props testing"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- HideLegend prop set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not mount legend when hideLegend is true"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- HideLegend prop set to \u201cfalse\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should mount legend when hideLegend is false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- HideTooltip prop set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not mount callout when hideTootip is true"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- HideTooltip prop set to \u201cfalse\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should mount callout when hideTootip is false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- onRenderCalloutPerStack prop is not given"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not render onRenderCalloutPerStack"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- onRenderCalloutPerDataPoint is given"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render onRenderCalloutPerDataPoint"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- onRenderCalloutPerDataPoint is not given"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not render onRenderCalloutPerDataPoint"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- onRenderCalloutPerDataPoint is given"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render onRenderCalloutPerDataPoint"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 3: Render calling with respective to props"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- No prop changes: Mount VerticalStackedBar chart and then set the same props again"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Render function should have been called twice"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Prop changes: Mount VerticalStackedBar chart and then set some other prop"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Render function should have been called twice"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 4: Mouse events"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse over on a bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render callout correctly on mouseover"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse move from one bar to other bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render callout correctly on mouse move"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse over on a bar with customized callout"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render customized callout on mouseover"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Customized callout per stack on mouse over"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render customized callout per stack correctly on mouseover"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Customized callout on a bar from one bar to other bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render customized callout for stack on mouseover"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 5: [Sub-Component]: Line"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Specify line data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render line with the data provided"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 6: [Sub-Component]: Bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Specify bar color"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render bar with the specified color"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Specify separate bars in a single bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render stacked bar with specified data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- setMinimumBarHeight to \u201cx\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render bars properly, bars below this height will be displayed at this height"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- set barWidth to \u201cx\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render bars with specified bar width"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- set barGapMax to \u201cx\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render bars with specified bar gap"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- set barCornerRadius"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render top bar with specified bar corner radius"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 7: [Sub-Component]: Legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Hide legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not show any rendered legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Hover mouse over line legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should reduce the opacity of the other lines/bars"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Hover mouse over bar legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should reduce the opacity of the other lines/bars"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse move from one Legend to another Legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should reset the opacity of the lines on mouse leave a bar legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Single mouse click on bar legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should select legend on single mouse click on respective legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Double mouse click on bar legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should deselect legend on double mouse click on respective legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Single mouse click on line legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should select legend on single mouse click on respective legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Double mouse click on line legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should deselect legend on double mouse click on respective legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse leave from bar legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should call the handler on mouse leave from bar legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse leave from line legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should call the handler on mouse leave from line legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse over on bar legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should call the handler mouse over on legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse click on legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should call the handler mouse click on legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 8: [Sub-Component]: Callout"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Hover mouse over a bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should call the handler on mouse over bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Hover mouse over a bar to display callout"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should show the default callout over that bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Hover mouse over a stacked bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should show the default stacked call out"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Hover mouse over the line"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should show the default callout over that line"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Specify custom callout and hover mouse over a bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should show the custom callout over that bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Specify custom callout and hover mouse over the line"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should show the custom callout over that line"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse click on bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should call the handler on mouse click on the bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 9: [Sub-Component]: x-axis labels"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Truncate x-axis labels"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should show the x-axis labels tooltip when hovered"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Rotate x-axis labels"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should rotate the x-axis labels by 45 degrees"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 10: [Sub-Component]: Screen resolution"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Increase the screen resolution (zoom in)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should remain unchanged on zoom in"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Decrease the screen resolution (zoom out)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should remain unchanged on zoom out"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 11: Theme changed to Dark Theme"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should reflect theme change"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var l=n(7294);const r={},s=l.createContext(r);function i(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);