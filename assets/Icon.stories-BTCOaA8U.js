import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-DwQS_Y10.js";import{I as s}from"./Icon-i9e6lE6E.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-CPcsbTWB.js";const d={title:"Components/Icon",component:s,parameters:{layout:"centered"},argTypes:{icon:{control:{type:"text"},description:"Material Icons ligature name"},size:{options:["sm","md","lg"],control:{type:"select"}}}},t={args:{icon:"home",size:"md"},render:a=>e.jsx("div",{className:"text-clay",children:e.jsx(s,{...a})})},c={render:()=>e.jsxs("div",{className:"flex items-end gap-8 text-clay",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{icon:"favorite",size:"sm"}),e.jsx("span",{className:"text-xs text-soil",children:"Small"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{icon:"favorite",size:"md"}),e.jsx("span",{className:"text-xs text-soil",children:"Medium"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{icon:"favorite",size:"lg"}),e.jsx("span",{className:"text-xs text-soil",children:"Large"})]})]})},i=["home","search","add","settings","delete","edit","check","close"],n={render:()=>e.jsx("div",{className:"flex flex-wrap gap-6 text-clay",children:i.map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{icon:a,size:"lg"}),e.jsx("span",{className:"text-xs text-soil",children:a})]},a))})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    size: 'md'
  },
  render: args => <div className="text-clay">
      <Icon {...args} />
    </div>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-8 text-clay">
      <div className="flex flex-col items-center gap-2">
        <Icon icon="favorite" size="sm" />
        <span className="text-xs text-soil">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="favorite" size="md" />
        <span className="text-xs text-soil">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="favorite" size="lg" />
        <span className="text-xs text-soil">Large</span>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6 text-clay">
      {iconExamples.map(icon => <div key={icon} className="flex flex-col items-center gap-2">
          <Icon icon={icon} size="lg" />
          <span className="text-xs text-soil">{icon}</span>
        </div>)}
    </div>
}`,...n.parameters?.docs?.source}}};const p=["Default","Sizes","CommonIcons"];export{n as CommonIcons,t as Default,c as Sizes,p as __namedExportsOrder,d as default};
