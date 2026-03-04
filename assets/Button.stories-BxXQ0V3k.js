import{R as e}from"./index-DwQS_Y10.js";import{B as a}from"./Button-DBLJ3K3v.js";import"./jsx-runtime-D_zvdyIk.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-CPcsbTWB.js";import"./Icon-i9e6lE6E.js";import"./Spinner-eQgyvCZp.js";const y={title:"Components/Button",component:a,parameters:{layout:"centered"},argTypes:{variant:{options:["primary","secondary","success","info","error"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"select"}},icon:{control:{type:"text"}},iconPosition:{options:["start","end"],control:{type:"select"}},isLoading:{control:{type:"boolean"}}}},t={args:{variant:"primary",size:"medium",children:"Click Me",onClick:()=>console.log("clicked")}},n={args:{...t.args,disabled:!0}},r={args:{...t.args,isLoading:!0}},s={args:{variant:"primary",size:"medium",icon:"add",iconPosition:"start",children:"Add item"}},i={args:{variant:"primary",size:"medium",icon:"add","aria-label":"Add"}},l=["primary","secondary","success","info","error"],c={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",null,e.createElement("p",{className:"mb-4 text-sm font-medium text-soil"},"Variants"),e.createElement("div",{className:"flex flex-wrap gap-3"},l.map(o=>e.createElement(a,{key:o,variant:o},o)))),e.createElement("div",null,e.createElement("p",{className:"mb-4 text-sm font-medium text-soil"},"Sizes"),e.createElement("div",{className:"flex flex-wrap items-center gap-3"},e.createElement(a,{variant:"primary",size:"small"},"Small"),e.createElement(a,{variant:"primary",size:"medium"},"Medium"),e.createElement(a,{variant:"primary",size:"large"},"Large"))),e.createElement("div",null,e.createElement("p",{className:"mb-4 text-sm font-medium text-soil"},"With icons"),e.createElement("div",{className:"flex flex-wrap gap-3"},e.createElement(a,{variant:"primary",icon:"add",iconPosition:"start"},"Add"),e.createElement(a,{variant:"secondary",icon:"search"},"Search"),e.createElement(a,{variant:"success",icon:"check",iconPosition:"end"},"Save"),e.createElement(a,{variant:"primary",icon:"add","aria-label":"Add"}),e.createElement(a,{variant:"secondary",icon:"delete","aria-label":"Delete"}))))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Click Me',
    onClick: () => console.log('clicked')
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultButton.args,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultButton.args,
    isLoading: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    icon: 'add',
    iconPosition: 'start',
    children: 'Add item'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    icon: 'add',
    'aria-label': 'Add'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    className: 'flex flex-col gap-8'
  }, React.createElement('div', null, React.createElement('p', {
    className: 'mb-4 text-sm font-medium text-soil'
  }, 'Variants'), React.createElement('div', {
    className: 'flex flex-wrap gap-3'
  }, variants.map(variant => React.createElement(Button, {
    key: variant,
    variant
  }, variant)))), React.createElement('div', null, React.createElement('p', {
    className: 'mb-4 text-sm font-medium text-soil'
  }, 'Sizes'), React.createElement('div', {
    className: 'flex flex-wrap items-center gap-3'
  }, React.createElement(Button, {
    variant: 'primary',
    size: 'small'
  }, 'Small'), React.createElement(Button, {
    variant: 'primary',
    size: 'medium'
  }, 'Medium'), React.createElement(Button, {
    variant: 'primary',
    size: 'large'
  }, 'Large'))), React.createElement('div', null, React.createElement('p', {
    className: 'mb-4 text-sm font-medium text-soil'
  }, 'With icons'), React.createElement('div', {
    className: 'flex flex-wrap gap-3'
  }, React.createElement(Button, {
    variant: 'primary',
    icon: 'add',
    iconPosition: 'start'
  }, 'Add'), React.createElement(Button, {
    variant: 'secondary',
    icon: 'search'
  }, 'Search'), React.createElement(Button, {
    variant: 'success',
    icon: 'check',
    iconPosition: 'end'
  }, 'Save'), React.createElement(Button, {
    variant: 'primary',
    icon: 'add',
    'aria-label': 'Add'
  }), React.createElement(Button, {
    variant: 'secondary',
    icon: 'delete',
    'aria-label': 'Delete'
  }))))
}`,...c.parameters?.docs?.source}}};const f=["DefaultButton","DisabledButton","LoadingButton","WithIcon","IconOnly","AllButtons"];export{c as AllButtons,t as DefaultButton,n as DisabledButton,i as IconOnly,r as LoadingButton,s as WithIcon,f as __namedExportsOrder,y as default};
