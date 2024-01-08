"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[289],{2515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var l=n(5893),r=n(1151);const s={},i=void 0,d={id:"TestPlans/MultiStackedBarChart/componentTests",title:"componentTests",description:"Multi stacked bar Chart \u2013 Component test plan",source:"@site/../../docs/TestPlans/MultiStackedBarChart/componentTests.md",sourceDirName:"TestPlans/MultiStackedBarChart",slug:"/TestPlans/MultiStackedBarChart/componentTests",permalink:"/fluentui-charting-contrib/docs/TestPlans/MultiStackedBarChart/componentTests",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ComponentTests",permalink:"/fluentui-charting-contrib/docs/TestPlans/LineChart/ComponentTests"},next:{title:"ComponentTests",permalink:"/fluentui-charting-contrib/docs/TestPlans/SankeyChart/ComponentTests"}},c={},h=[];function o(e){const t={li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Multi stacked bar Chart \u2013 Component test plan"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Sub-components: Bar, Legends, Callout"})}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Bar: bar data, bar variants like \u2018part-to-whole\u2019 and \u2018absolute-scale\u2019"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Legends: show/hide legends, highlight the corresponding bar on legend hover"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Callout: Default/custom callout"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Screen resolution changes, theme changes"})}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Test steps"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Validation"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Tool used"})})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 1: [Snapshot testing]"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With only data prop, non-empty data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Renders multi stacked bar chart correctly"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With empty data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Renders multi stacked bar chart correctly"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With HideLegend prop set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should hide legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With HideTooltip prop set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should hide the tooltip in chart"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With HideRatio set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not show ratio on top of multi stacked bar chart"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With HideDenominator set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not show the denominator for the ratio above the chart"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With variant set to \u201cAbsoluteScale\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render absolute-scale variant correctly"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With variant set to \u201cAbsoluteScale\u201d and \u201cHideLabels\u201d set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not render bar labels in absolute-scale variant"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 2: Basic props testing"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- HideLegend prop set to \u201cfalse\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should mount legend when hideLegend is false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- HideTooltip prop set to \u201cfalse\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should mount callout when hideTootip is false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- HideDenominator set to \u201cfalse\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not mount callout"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- onRenderCalloutPerDataPoint is given"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render onRenderCalloutPerDataPoint"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- onRenderCalloutPerDataPoint is not given"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not render onRenderCalloutPerDataPoint"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 3: Render calling with respective to props"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- No prop changes: Mount multi stacked bar chart and then set the same props again"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Render function should have been called twice"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Prop changes: Mount multi stacked bar chart and then set the some other prop"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Render function should have been called twice"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 4: Mouse events"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse over on a bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render callout correctly on mouseover"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse over on a bar with customized callout"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render customized callout on mouseover"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse move on a bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render callout correctly on mousemove"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 5: Render empty chart aria label div when chart is empty"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Multi stacked bar chart mounted with non-empty data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"No empty chart aria label div rendered"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Multi stacked bar chart mounted with empty data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Empty chart aria label div rendered"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 6: [Sub-Component]: Multi stacked bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Specify bar height"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render the bar with the given height"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With variant set to \u201cPartToWhole\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render the variant correctly and for a single bar, the sum of the width of the rectangles should equal to 100%."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With variant set to \u201cAbsoluteScale\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render the variant correctly and for a single bar with the highest width, the sum of the width of the rectangles should equal to 100% and for the rest of the bars, the sum should be < 100%."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Localize the numbers of the bars with a given culture"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render the bars with the numbers localized in the given culture"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"E2E"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Specify the href for the multi stacked bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should redirect to the Url to upon clicking on the multi stacked bar chart"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"E2E"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 7: [Sub-Component]: Legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Hover mouse over bar legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should reduce the opacity of the other bars and their legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse out from a bar legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should change the opacity of the other bars and their legends on mouse out action from a bar legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Click on a bar legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should reduce the opacity of the other bars and their legends on mouse click a bar legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Legends overflow scenario"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Overflow button should contain the additional legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"E2E"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Placeholder data scenario"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not show any legends when a datapoint is marked as placeholder"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 8: [Sub-Component]: Callout"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Hover mouse over a bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should call the handler on mouse over bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Hover mouse over a bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should show the default callout over that bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Specify custom callout and hover mouse over a bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should show the custom callout over that bar"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 9: [Sub-Component]: Screen resolution"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Increase the screen resolution (zoom in)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should remain unchanged on zoom in"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Decrease the screen resolution (zoom out)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should remain unchanged on zoom out"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 10: Theme changed to Dark Theme"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should reflect theme change"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var l=n(7294);const r={},s=l.createContext(r);function i(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);