import{r as t,j as a}from"./index-BeruYqlq.js";import{s}from"./dom-BowoBODo.js";import{c as x}from"./StyledButton-BXrwZkLW.js";import{B as f}from"./index-CgBFOfa7.js";const h=t.forwardRef(({content:e,language:p,onChange:d,minHeight:c,className:m,padding:r=0},g)=>{const[o,n]=t.useState(e);t.useEffect(()=>{n(e)},[e]);const l={minHeight:c};return a.jsxs("div",{className:x("relative [&_*]:!font-mono [&_*]:!text-base [&_*]:!leading-normal",m),style:{padding:`${r}px`,"--padding":`${r*2}px`},contentEditable:!1,children:[a.jsx("textarea",{onKeyDown:s,onKeyUp:s,onPaste:s,contentEditable:!1,ref:g,className:"absolute size-[calc(100%-var(--padding))] resize-none overflow-hidden bg-transparent p-0 text-transparent caret-accent",style:l,value:o,onChange:i=>{n(i.target.value),d?.(i.target.value)}}),a.jsx(f,{className:"code-wrap pointer-events-none relative z-[1] !m-0 !p-0",style:l,lang:p,content:o})]})});h.displayName="CodeEditor";export{h as C};
