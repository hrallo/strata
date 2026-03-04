import{j as a}from"./jsx-runtime-D_zvdyIk.js";import"./index-DwQS_Y10.js";import{B as r}from"./Body-DsQzCziL.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-CPcsbTWB.js";const c={title:"Components/Body",component:r,parameters:{layout:"centered"},argTypes:{as:{options:["div","p","span","label","li"],control:{type:"select"}},variant:{options:["lg","base","sm","caption"],control:{type:"select"}}}},e={args:{as:"p",children:"Body text paragraph. Use the correct container for your context."}},t={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[a.jsx(r,{variant:"lg",children:"Body large (18px)"}),a.jsx(r,{variant:"base",children:"Body base (16px)"}),a.jsx(r,{variant:"sm",children:"Body small (14px)"}),a.jsx(r,{variant:"caption",children:"Caption (12px)"})]})},o={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[a.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"14px"},children:"p tag, variant caption (smaller):"}),a.jsx(r,{as:"p",variant:"caption",children:"Paragraph that looks like a caption"}),a.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"14px"},children:"span tag, variant lg (larger):"}),a.jsx(r,{as:"span",variant:"lg",children:"Inline text that looks large"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'p',
    children: 'Body text paragraph. Use the correct container for your context.'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Body variant="lg">Body large (18px)</Body>
      <Body variant="base">Body base (16px)</Body>
      <Body variant="sm">Body small (14px)</Body>
      <Body variant="caption">Caption (12px)</Body>
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <p style={{
      fontFamily: 'var(--font-body)',
      fontSize: '14px'
    }}>p tag, variant caption (smaller):</p>
      <Body as="p" variant="caption">Paragraph that looks like a caption</Body>
      <p style={{
      fontFamily: 'var(--font-body)',
      fontSize: '14px'
    }}>span tag, variant lg (larger):</p>
      <Body as="span" variant="lg">Inline text that looks large</Body>
    </div>
}`,...o.parameters?.docs?.source}}};const d=["Default","AllVariants","AsVsVariant"];export{t as AllVariants,o as AsVsVariant,e as Default,d as __namedExportsOrder,c as default};
