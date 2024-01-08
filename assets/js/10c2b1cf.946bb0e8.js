"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[914],{9423:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(5893),a=t(1151);const o={},s="Colors",i={id:"colors",title:"Colors",description:"We provide the following 3 ways to specify colors for the data series.",source:"@site/../../docs/colors.md",sourceDirName:".",slug:"/colors",permalink:"/fluentui-charting-contrib/docs/colors",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TestingStrategy",permalink:"/fluentui-charting-contrib/docs/TestingStrategy"},next:{title:"Implementing 2:1 spacing",permalink:"/fluentui-charting-contrib/docs/implementing-2-to-1-spacing"}},l={},c=[{value:"1. Use CSS colors",id:"1-use-css-colors",level:2},{value:"2. Omit color prop",id:"2-omit-color-prop",level:2},{value:"3. Use colors from palette",id:"3-use-colors-from-palette",level:2},{value:"Qualitative Color Palette",id:"qualitative-color-palette",level:3},{value:"Semantic Color Palette",id:"semantic-color-palette",level:3}];function h(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"colors",children:"Colors"}),"\n",(0,n.jsx)(r.p,{children:"We provide the following 3 ways to specify colors for the data series."}),"\n",(0,n.jsx)(r.h2,{id:"1-use-css-colors",children:"1. Use CSS colors"}),"\n",(0,n.jsx)(r.p,{children:"The users can supply custom colors for the data series using named colors, hex codes, RGB, HSL, and other browser-supported color formats. The users will be responsible for managing the contrast ratio between adjacent data series and adjusting the color in relation to the light and dark themes."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"import * as React from 'react';\r\nimport { IChartProps, ILineChartPoints, LineChart } from '@fluentui/react-charting';\r\n\r\nconst dataSeries: ILineChartPoints[] = [\r\n  {\r\n    legend: 'Line 1',\r\n    data: [\r\n      { x: 20, y: 50 },\r\n      { x: 40, y: 80 },\r\n    ],\r\n    color: 'red', // #ff0000, rgb(255, 0, 0), hsl(0, 100%, 50%), etc.\r\n  },\r\n];\r\nconst chartData: IChartProps = {\r\n  chartTitle: 'Line chart',\r\n  lineChartData: dataSeries,\r\n};\r\n\r\nconst App = () => {\r\n  return <LineChart data={chartData} />;\r\n};\r\nexport default App;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"2-omit-color-prop",children:"2. Omit color prop"}),"\n",(0,n.jsx)(r.p,{children:"The users can omit the color prop for the data series. The color will be chosen automatically from the default color palette. See below for more details on the palette."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"import * as React from 'react';\r\nimport { IChartProps, ILineChartPoints, LineChart } from '@fluentui/react-charting';\r\n\r\nconst dataSeries: ILineChartPoints[] = [\r\n  {\r\n    legend: 'Line 1',\r\n    data: [\r\n      { x: 20, y: 50 },\r\n      { x: 40, y: 80 },\r\n    ],\r\n    // Notice the absent color prop here.\r\n  },\r\n];\r\nconst chartData: IChartProps = {\r\n  chartTitle: 'Line chart',\r\n  lineChartData: dataSeries,\r\n};\r\n\r\nconst App = () => {\r\n  return <LineChart data={chartData} />;\r\n};\r\nexport default App;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"3-use-colors-from-palette",children:"3. Use colors from palette"}),"\n",(0,n.jsx)(r.p,{children:"The users can pick colors from our data visualization color palette, which is categorized into the following two types."}),"\n",(0,n.jsx)(r.h3,{id:"qualitative-color-palette",children:"Qualitative Color Palette"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.img,{alt:"First 10 colors in Qualitative palette",src:t(4412).Z+"",width:"2725",height:"1690"}),"\r\n",(0,n.jsx)(r.img,{alt:"Second 10 colors in Qualitative palette",src:t(2200).Z+"",width:"2725",height:"1660"}),"\r\n",(0,n.jsx)(r.img,{alt:"Third 10 colors in Qualitative palette",src:t(8570).Z+"",width:"2725",height:"1570"}),"\r\n",(0,n.jsx)(r.img,{alt:"Final 10 colors in Qualitative palette",src:t(2070).Z+"",width:"2725",height:"1580"})]}),"\n",(0,n.jsxs)(r.p,{children:["Each qualitative color is distinct from the others. This type of palette is ideal for visualizations displaying categorical variables that are unrelated to one another. This is our ",(0,n.jsx)(r.strong,{children:"default color palette"}),", which totals 40 colors, including 10 base colors and 30 extension colors. We cycle through these colors sequentially to paint the data series without color."]}),"\n",(0,n.jsx)(r.p,{children:"To use colors from this palette:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Import ",(0,n.jsx)(r.code,{children:"DataVizPalette"})," from the charting package."]}),"\n",(0,n.jsxs)(r.li,{children:["Choose from the available colors like this:\r\n",(0,n.jsx)(r.code,{children:"DataVizPalette.color<slot_number>"}),", where ",(0,n.jsx)(r.code,{children:"slot_number"})," ranges from 1 to 40."]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"import * as React from 'react';\r\nimport { DataVizPalette, IChartProps, ILineChartPoints, LineChart } from '@fluentui/react-charting';\r\n\r\nconst dataSeries: ILineChartPoints[] = [\r\n  {\r\n    legend: 'Line 1',\r\n    data: [\r\n      { x: 20, y: 50 },\r\n      { x: 40, y: 80 },\r\n    ],\r\n    color: DataVizPalette.color1, // .color2, .color3, ....., .color40\r\n  },\r\n];\r\nconst chartData: IChartProps = {\r\n  chartTitle: 'Line chart',\r\n  lineChartData: dataSeries,\r\n};\r\n\r\nconst App = () => {\r\n  return <LineChart data={chartData} />;\r\n};\r\nexport default App;\n"})}),"\n",(0,n.jsx)(r.h3,{id:"semantic-color-palette",children:"Semantic Color Palette"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Colors in Semantic palette",src:t(2058).Z+"",width:"1827",height:"1094"})}),"\n",(0,n.jsx)(r.p,{children:"Semantic color represents a clear message as well as status, such as success, error, warning, info and so on. Each color has the same basic meaning in all contexts."}),"\n",(0,n.jsx)(r.p,{children:"To use colors from this palette:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Import ",(0,n.jsx)(r.code,{children:"DataVizPalette"})," from the charting package."]}),"\n",(0,n.jsxs)(r.li,{children:["Choose from the 7 available colors like this:\r\n",(0,n.jsx)(r.code,{children:"DataVizPalette.<status>"}),", where ",(0,n.jsx)(r.code,{children:"status"})," can be one of the following:","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"highError"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"error"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"warning"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"success"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"highSuccess"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"disabled"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:"info"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"import * as React from 'react';\r\nimport { DataVizPalette, IChartProps, ILineChartPoints, LineChart } from '@fluentui/react-charting';\r\n\r\nconst dataSeries: ILineChartPoints[] = [\r\n  {\r\n    legend: 'Line 1',\r\n    data: [\r\n      { x: 20, y: 50 },\r\n      { x: 40, y: 80 },\r\n    ],\r\n    color: DataVizPalette.info, // .success, .warning, .error, .disabled, .highSuccess, .highError\r\n  },\r\n];\r\nconst chartData: IChartProps = {\r\n  chartTitle: 'Line chart',\r\n  lineChartData: dataSeries,\r\n};\r\n\r\nconst App = () => {\r\n  return <LineChart data={chartData} />;\r\n};\r\nexport default App;\n"})})]})}function d(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4412:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/1-820ffa0e1ab750b53f4bfb1a4777f025.png"},2200:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/2-c25a606701d58d66263f180ea5b6c52b.png"},8570:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/3-e9cbf635779edb3818f6fbbc7f5311c4.png"},2070:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/4-855a5c6a8fd408426c2ebaaa74407503.png"},2058:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/5-c596646b25f2fba06a739133db4f76ac.png"},1151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>s});var n=t(7294);const a={},o=n.createContext(a);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);