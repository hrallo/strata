import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DwQS_Y10.js";import{A as a}from"./Animate-B97IVWv_.js";import{B as x}from"./Button-DBLJ3K3v.js";import"./use-reduced-motion-Di9w-ZGj.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-CPcsbTWB.js";import"./Icon-i9e6lE6E.js";import"./Spinner-eQgyvCZp.js";function s({children:r}){return e.jsx("div",{className:"flex h-40 w-40 items-center justify-center p-2",children:e.jsx("div",{className:"flex rounded-sm h-28 w-28 shrink-0 rotate-45 items-center justify-center bg-clay outline outline-3 outline-clay outline-offset-2",children:e.jsx("span",{className:"-rotate-45 px-2 text-center text-sm font-medium text-cream",children:r})})})}const A={title:"Components/Animate",component:a,parameters:{layout:"centered"},argTypes:{variant:{options:["fadeUp","fadeIn","scaleUp","scaleDown","spin","shimmer"],control:{type:"select"}},trigger:{options:["inView","hover","mount","tap"],control:{type:"select"}},delay:{control:{type:"number"}},duration:{control:{type:"number"}}}},f=["fadeUp","fadeIn","scaleUp","scaleDown","spin","shimmer"],c={args:{variant:"fadeUp",trigger:"mount"},render:function(t){const[n,i]=u.useState(0);return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(a,{...t,children:e.jsx(s,{children:"Press Retrigger"})},n),e.jsx(x,{variant:"secondary",size:"small",onClick:()=>i(o=>o+1),children:"Retrigger"})]})}},l={render:()=>e.jsx("div",{className:"flex flex-wrap items-end justify-center gap-8",children:f.map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{variant:r,trigger:"tap",className:"cursor-pointer",children:e.jsx(s,{children:`Press for ${r}`})}),e.jsx("span",{className:"text-sm text-soil",children:r})]},r))})},m={args:{variant:"scaleUp",trigger:"inView"},render:function(t){const[n,i]=u.useState(0);return e.jsxs("div",{className:"space-y-24 py-24",children:[e.jsx("p",{className:"text-soil",children:"Scroll down to see the animation"}),e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(a,{...t,children:e.jsx(s,{children:"Scroll down"})},n),e.jsx(x,{variant:"secondary",size:"small",onClick:()=>i(o=>o+1),children:"Retrigger"})]})]})}},d={args:{variant:"fadeIn",trigger:"mount"},render:function(t){const[n,i]=u.useState(0);return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(a,{...t,children:e.jsx(s,{children:"Retrigger to replay"})},n),e.jsx(x,{variant:"secondary",size:"small",onClick:()=>i(o=>o+1),children:"Retrigger"})]})}},p={args:{variant:"scaleUp",trigger:"hover",className:"cursor-pointer"},render:r=>e.jsx(a,{...r,children:e.jsx(s,{children:"Hover"})})},g={args:{variant:"scaleUp",trigger:"tap",className:"cursor-pointer"},render:r=>e.jsx(a,{...r,children:e.jsx(s,{children:"Press"})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fadeUp',
    trigger: 'mount'
  },
  render: function DefaultStory(args) {
    const [key, setKey] = useState(0);
    return <div className="flex flex-col items-center gap-4">
        <Animate key={key} {...args}>
          <Diamond>Press Retrigger</Diamond>
        </Animate>
        <Button variant="secondary" size="small" onClick={() => setKey(k => k + 1)}>
          Retrigger
        </Button>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-end justify-center gap-8">
      {variants.map(variant => <div key={variant} className="flex flex-col items-center gap-2">
          <Animate variant={variant} trigger="tap" className="cursor-pointer">
            <Diamond>{\`Press for \${variant}\`}</Diamond>
          </Animate>
          <span className="text-sm text-soil">{variant}</span>
        </div>)}
    </div>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'scaleUp',
    trigger: 'inView'
  },
  render: function InViewStory(args) {
    const [key, setKey] = useState(0);
    return <div className="space-y-24 py-24">
        <p className="text-soil">Scroll down to see the animation</p>
        <div className="flex flex-col items-center gap-4">
          <Animate key={key} {...args}>
            <Diamond>Scroll down</Diamond>
          </Animate>
          <Button variant="secondary" size="small" onClick={() => setKey(k => k + 1)}>
            Retrigger
          </Button>
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fadeIn',
    trigger: 'mount'
  },
  render: function MountStory(args) {
    const [key, setKey] = useState(0);
    return <div className="flex flex-col items-center gap-4">
        <Animate key={key} {...args}>
          <Diamond>Retrigger to replay</Diamond>
        </Animate>
        <Button variant="secondary" size="small" onClick={() => setKey(k => k + 1)}>
          Retrigger
        </Button>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'scaleUp',
    trigger: 'hover',
    className: 'cursor-pointer'
  },
  render: args => <Animate {...args}>
      <Diamond>Hover</Diamond>
    </Animate>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'scaleUp',
    trigger: 'tap',
    className: 'cursor-pointer'
  },
  render: args => <Animate {...args}>
      <Diamond>Press</Diamond>
    </Animate>
}`,...g.parameters?.docs?.source}}};const U=["Default","AllVariants","InView","Mount","Hover","Tap"];export{l as AllVariants,c as Default,p as Hover,m as InView,d as Mount,g as Tap,U as __namedExportsOrder,A as default};
