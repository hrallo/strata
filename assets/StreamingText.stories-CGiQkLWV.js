import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-DwQS_Y10.js";import{S as o}from"./StreamingText-Dgp7tWUQ.js";import{B as c}from"./Body-DsQzCziL.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-CPcsbTWB.js";import"./use-reduced-motion-Di9w-ZGj.js";const g={title:"Components/StreamingText",component:o,parameters:{layout:"centered"},argTypes:{speed:{control:{type:"number",min:5,max:200,step:5}},chunk:{options:["char","word"],control:{type:"select"}},cursor:{control:{type:"boolean"}}}},n="Strata helps you build thoughtful interfaces. Components stream, animate, and adapt, keeping your product can keep up with the pace of modern AI.",a={args:{children:n,speed:30,chunk:"char",cursor:!0},render:r=>e.jsx(c,{as:"div",variant:"lg",className:"max-w-xl text-coal",children:e.jsx(o,{...r})})},s={args:{children:n,speed:80,chunk:"word",cursor:!0},render:r=>e.jsx(c,{as:"div",variant:"base",className:"max-w-xl text-coal",children:e.jsx(o,{...r})})},t={args:{children:"Responsive, accessible, and ready for AI-era UIs.",speed:15,cursor:!0},render:r=>e.jsx(c,{as:"div",variant:"base",className:"text-coal",children:e.jsx(o,{...r})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleText,
    speed: 30,
    chunk: 'char',
    cursor: true
  },
  render: args => <Body as="div" variant="lg" className="max-w-xl text-coal">
      <StreamingText {...args} />
    </Body>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: sampleText,
    speed: 80,
    chunk: 'word',
    cursor: true
  },
  render: args => <Body as="div" variant="base" className="max-w-xl text-coal">
      <StreamingText {...args} />
    </Body>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Responsive, accessible, and ready for AI-era UIs.',
    speed: 15,
    cursor: true
  },
  render: args => <Body as="div" variant="base" className="text-coal">
      <StreamingText {...args} />
    </Body>
}`,...t.parameters?.docs?.source}}};const h=["Default","ByWord","FastStream"];export{s as ByWord,a as Default,t as FastStream,h as __namedExportsOrder,g as default};
