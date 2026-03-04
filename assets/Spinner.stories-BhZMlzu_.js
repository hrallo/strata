import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-DwQS_Y10.js";import{S as s}from"./Spinner-eQgyvCZp.js";import"./clsx-B-dksMZM.js";const g={title:"Components/Spinner",component:s,parameters:{layout:"centered"},argTypes:{size:{options:["small","medium","large"],control:{type:"select"}}}},a={args:{size:"medium"},render:l=>e.jsx("div",{className:"text-clay",children:e.jsx(s,{...l})})},m=[{bg:"bg-cream",text:"text-clay"},{bg:"bg-clay",text:"text-cream"},{bg:"bg-ember",text:"text-alabaster"},{bg:"bg-almond",text:"text-coal"},{bg:"bg-basil",text:"text-cream"}],t={args:{size:"medium"},render:l=>e.jsx("div",{className:"flex flex-wrap gap-6 p-8",children:m.map(({bg:n,text:i},c)=>e.jsx("div",{className:`flex items-center justify-center rounded-lg p-6 ${n} ${i}`,children:e.jsx(s,{...l})},c))})},r={render:()=>e.jsxs("div",{className:"flex items-center gap-8 text-clay",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"small"}),e.jsx("span",{className:"text-xs text-soil",children:"Small"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"medium"}),e.jsx("span",{className:"text-xs text-soil",children:"Medium"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"large"}),e.jsx("span",{className:"text-xs text-soil",children:"Large"})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  },
  render: args => <div className="text-clay">
      <Spinner {...args} />
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  },
  render: args => <div className="flex flex-wrap gap-6 p-8">
      {usageExamples.map(({
      bg,
      text
    }, i) => <div key={i} className={\`flex items-center justify-center rounded-lg p-6 \${bg} \${text}\`}>
          <Spinner {...args} />
        </div>)}
    </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8 text-clay">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="small" />
        <span className="text-xs text-soil">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="medium" />
        <span className="text-xs text-soil">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="large" />
        <span className="text-xs text-soil">Large</span>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};const u=["Default","ColorUsage","Sizes"];export{t as ColorUsage,a as Default,r as Sizes,u as __namedExportsOrder,g as default};
