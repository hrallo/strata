import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-DwQS_Y10.js";import{H as n}from"./Heading-F0wrJG1J.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-CPcsbTWB.js";const c={title:"Components/Heading",component:n,parameters:{layout:"centered"},argTypes:{level:{options:[1,2,3,4,5,6],control:{type:"select"}},size:{options:[1,2,3,4,5,6],control:{type:"select"}}}},l={args:{level:1,children:"Heading"}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(n,{level:1,display:!0,children:"Display"}),e.jsx(n,{level:1,children:"Heading One"}),e.jsx(n,{level:2,children:"Heading Two"}),e.jsx(n,{level:3,children:"Heading Three"}),e.jsx(n,{level:4,children:"Heading Four"}),e.jsx(n,{level:5,children:"Heading Five"}),e.jsx(n,{level:6,children:"Heading Six"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"14px"},children:"h2 tag, size 4 (smaller):"}),e.jsx(n,{level:2,size:4,children:"Section heading that looks smaller"}),e.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"14px"},children:"h4 tag, size 1 (larger):"}),e.jsx(n,{level:4,size:1,children:"Subsection that looks like h1"})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'Heading'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Heading level={1} display>Display</Heading>
      <Heading level={1}>Heading One</Heading>
      <Heading level={2}>Heading Two</Heading>
      <Heading level={3}>Heading Three</Heading>
      <Heading level={4}>Heading Four</Heading>
      <Heading level={5}>Heading Five</Heading>
      <Heading level={6}>Heading Six</Heading>
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <p style={{
      fontFamily: 'var(--font-body)',
      fontSize: '14px'
    }}>h2 tag, size 4 (smaller):</p>
      <Heading level={2} size={4}>Section heading that looks smaller</Heading>
      <p style={{
      fontFamily: 'var(--font-body)',
      fontSize: '14px'
    }}>h4 tag, size 1 (larger):</p>
      <Heading level={4} size={1}>Subsection that looks like h1</Heading>
    </div>
}`,...a.parameters?.docs?.source}}};const g=["Default","AllLevels","LevelVsSize"];export{i as AllLevels,l as Default,a as LevelVsSize,g as __namedExportsOrder,c as default};
