"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[788],{4318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(5893),i=n(1151);const s={},o=void 0,a={id:"TestPlans/TestingGuide",title:"TestingGuide",description:"This document highlights few common testing practices for any new tests that are being added to the charting library.",source:"@site/../../docs/TestPlans/TestingGuide.md",sourceDirName:"TestPlans",slug:"/TestPlans/TestingGuide",permalink:"/fluentui-charting-contrib/docs/TestPlans/TestingGuide",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ComponentTests",permalink:"/fluentui-charting-contrib/docs/TestPlans/StackedBarChart/ComponentTests"},next:{title:"Unit test plan for Donut Chart",permalink:"/fluentui-charting-contrib/docs/TestPlans/Utilities/UnitTests"}},c={},l=[];function d(e){const t={code:"code",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This document highlights few common testing practices for any new tests that are being added to the charting library."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Any new test should always be added using React Testing Library."}),"\n",(0,r.jsxs)(t.li,{children:["The utility functions like ",(0,r.jsx)(t.code,{children:"testWithoutWait"}),", ",(0,r.jsx)(t.code,{children:"testWithWait"})," and ",(0,r.jsx)(t.code,{children:"testScreenResolutionChanges"})," can be used in writing the component tests which will reduce the number of lines of code."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"testWithWait"})," is needed when we are either trying to provide any prop and update or we are trying to extract any sub-sub svg element like bars within the vertical bar chart."]}),"\n",(0,r.jsxs)(t.li,{children:["Order of imports is important while writing tests. Following is an example:\r\nImporting the test data before importing the render function from the '@testing-library/react' results in erroneous rendering of the chart.\r\nFor example: for Vertical bar charts, improper sequencing of the imports results in the following output:\r\n",(0,r.jsx)(t.code,{children:"import { chartPoints } from '../VerticalBarChart/VerticalBarChart.test';"}),"\r\n",(0,r.jsx)(t.code,{children:"import { render, screen, queryAllByAttribute, fireEvent, act } from '@testing-library/react';"}),"\r\nHowever, reordering the import sequence results in the correct rendering as follows:\r\n",(0,r.jsx)(t.code,{children:"import { render, screen, queryAllByAttribute } from '@testing-library/react';"}),"\r\n",(0,r.jsx)(t.code,{children:"import { chartPoints } from './VerticalBarChart.test';"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(7294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);