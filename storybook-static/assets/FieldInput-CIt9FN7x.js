import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as m}from"./index-BP8_t0zE.js";import{C}from"./CharacterCount-BGgvgJrP.js";import{d as j,F as I,T as _,a as p}from"./theme-ui-components.esm-DCiJ1mMX.js";const F=e=>e.charAt(0).toUpperCase()+e.slice(1),z=(e,n={})=>("string"!=typeof e||(n.trim&&(e=e.trim()),n.capitalize&&(e=F(e))),e),f=({input:e,meta:t,disabled:r,modifiers:a,customOnBlur:i,showCharacterCount:o,minLength:l,maxLength:s,endAdornment:u,...d})=>{var c;const[h,x]=m.useState((null==(c=null==e?void 0:e.value)?void 0:c.length)??0),f=n.jsx(j,{disabled:r,variant:null!=t&&t.error&&null!=t&&t.touched?"textareaError":"textarea",...e,...d,minLength:l,maxLength:s,onBlur:n=>{a&&(n.target.value=z(n.target.value,a),e.onChange(n)),i&&i(n),e.onBlur()},onChange:n=>{o&&x(n.target.value.length),e.onChange(n)}});return n.jsxs(I,{sx:{flexDirection:"column",flex:1,gap:1},children:[t.error&&t.touched&&n.jsx(_,{sx:{fontSize:1,color:"error"},children:t.error}),u?n.jsxs(p,{style:{display:"flex",alignItems:"center",position:"relative"},children:[f,n.jsx(p,{sx:{position:"absolute",right:2},children:u})]}):f,o&&s&&n.jsx(C,{currentSize:h,minSize:l,maxSize:s})]})};try{f.displayName="FieldInput",f.__docgenInfo={description:"",displayName:"FieldInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},showCharacterCount:{defaultValue:null,description:"",name:"showCharacterCount",required:!1,type:{name:"boolean"}},"data-cy":{defaultValue:null,description:"",name:"data-cy",required:!1,type:{name:"string"}},customOnBlur:{defaultValue:null,description:"",name:"customOnBlur",required:!1,type:{name:"((event: any) => void)"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"any"}}}}}catch{}export{f as F};