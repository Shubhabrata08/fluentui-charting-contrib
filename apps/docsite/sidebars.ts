import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import changelog from "../../docs/changelogSplits/changelogOrder.json";
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    "Overview",
    {
      type: "category",
      label: "Changelog",
      items: changelog.changelogOrder,
    },
    "Start Developing",
    {
      type: 'category',
      label: 'Contributor Guide',
      link: {
        type: 'doc',
        id: 'Contributor Guide',
      },
      items:[{
        type:"autogenerated",
        dirName:"Charting-Concepts"
      }]
    },
    "Technical Details",
    "Detailed Implementation Steps",
    {
      type: "category",
      label: "Examples",
      items: [
        {
          type: "autogenerated",
          dirName: "ChartingExamples",
        },
      ],
    },
    "Debugging",
    "Implementation Best Practices",
    "Accessibility",
    "colors",
    "implementing-2-to-1-spacing",
    "creating-date-objects-for-chart-data",
    "Testing Strategy",
    "TestCoverage",
    {
      type: "category",
      label: "Test Plans",
      items: [
        {
          type: "autogenerated",
          dirName: "Test Plans",
        },
      ],
    },
    "Testing Unpublished Library Version",
    "BundleSize",
    {
      type:'category',
      label: 'RFCs',
      items: [
        {
          type: 'autogenerated',
          dirName: 'rfcs'
        }
      ]
    },
  ],
};

export default sidebars;
