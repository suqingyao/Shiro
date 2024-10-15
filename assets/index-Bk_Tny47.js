import{r as l,j as e}from"./index-BeruYqlq.js";import{a as u,b as g}from"./viewport-DH-I-8hX.js";import{E as q,f as M,F as H,G as X}from"./owner-DP2ujv_O.js";import{g as Z,u as Q,C as D,a as J,b as Y,c as ee,M as se,d as B,e as w,f as N,U as k,s as b,h,i as te,E as ae,j as ne,S as re}from"./utils-BXSUxku3.js";import{A as T}from"./Shiki-FDvSO5Pf.js";import{c as C,a as d,M as oe,S as ie}from"./StyledButton-BXrwZkLW.js";import{c as ce,d as A,u as le,e as P}from"./index-CU0cbbFu.js";import{r as v,F as me,a as de}from"./util-CVD_c193.js";import{a as ue}from"./alert-BVGTJqlY.js";import{A as xe}from"./index-Djivm970.js";import{m as y}from"./proxy-DJMatoTb.js";import{I as he}from"./Gallery-CYrDZbm5.js";import{u as ge}from"./useQuery-QDrF4ceH.js";import{G as pe}from"./SocialSourceLink-BNt_ysYw.js";import"./provider-BIFAntKB.js";import"./use-ref-value-LJGxjPkn.js";import"./index-Ch4SJQPy.js";import"./FloatPopover-D2JD9v5P.js";import"./spring-C80N1tKa.js";import"./use-event-callback-Bhwn3ola.js";import"./dom-BowoBODo.js";import"./image-DsS-QZYo.js";import"./use-is-dark-BBrnlEAi.js";import"./customParseFormat-YVSgx6Zb.js";import"./use-drag-controls-C7347hqm.js";import"./visual-element-DBrrQU-Q.js";import"./LinkCard-BaFs5GrK.js";import"./use-motion-template-DKuQYB9y.js";import"./index-CgBFOfa7.js";import"./Collapse-DHiirC7x.js";import"./use-is-unmounted-F2cS0ppq.js";var S="Avatar",[fe,fs]=ce(S),[je,E]=fe(S),F=l.forwardRef((s,t)=>{const{__scopeAvatar:n,...a}=s,[o,r]=l.useState("idle");return e.jsx(je,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:r,children:e.jsx(A.span,{...a,ref:t})})});F.displayName=S;var $="AvatarImage",U=l.forwardRef((s,t)=>{const{__scopeAvatar:n,src:a,onLoadingStatusChange:o=()=>{},...r}=s,c=E($,n),i=be(a,r.referrerPolicy),m=le(x=>{o(x),c.onImageLoadingStatusChange(x)});return P(()=>{i!=="idle"&&m(i)},[i,m]),i==="loaded"?e.jsx(A.img,{...r,ref:t,src:a}):null});U.displayName=$;var _="AvatarFallback",O=l.forwardRef((s,t)=>{const{__scopeAvatar:n,delayMs:a,...o}=s,r=E(_,n),[c,i]=l.useState(a===void 0);return l.useEffect(()=>{if(a!==void 0){const m=window.setTimeout(()=>i(!0),a);return()=>window.clearTimeout(m)}},[a]),c&&r.imageLoadingStatus!=="loaded"?e.jsx(A.span,{...o,ref:t}):null});O.displayName=_;function be(s,t){const[n,a]=l.useState("idle");return P(()=>{if(!s){a("error");return}let o=!0;const r=new window.Image,c=i=>()=>{o&&a(i)};return a("loading"),r.onload=c("loaded"),r.onerror=c("error"),r.src=s,t&&(r.referrerPolicy=t),()=>{o=!1}},[s,t]),n}var ve=F,ye=U,we=O;const V=({className:s})=>{const n=u()?.provider,a=n&&Z(n);return a?e.jsx("span",{className:C("pointer-events-none flex size-4 select-none items-center justify-center rounded-full bg-white dark:bg-zinc-900",s),children:e.jsx(a,{className:"size-3"})}):null};async function Ne(s,t,n){const{callbackUrl:a=window.location.href,redirect:o=!0}={},r=await v.getProviders(),c=`${q}/auth`;if(!r){window.location.href=`${c}/error`;return}if(!s||!(s in r)){window.location.href=`${c}/signin?${new URLSearchParams({callbackUrl:a})}`;return}const i=r[s].type==="credentials",m=r[s].type==="email",x=i||m,W=`${`${c}/${i?"callback":"signin"}/${s}`}`,p=await fetch(W,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Auth-Return-Redirect":"1"},credentials:"include",body:new URLSearchParams({...t,csrfToken:await v.getCsrfToken(),callbackUrl:a,json:!0})}),f=await p.json();if(o||!x){const R=f.url??a;window.location.href=R,R.includes("#")&&window.location.reload();return}const I=new URL(f.url).searchParams.get("error");return{error:I,status:p.status,ok:p.ok,url:I?null:f.url}}const ke=s=>{if(s.handle)switch(s.provider){case"github":return`https://github.com/${s.handle}`}};function Ce({className:s}){return e.jsx("i",{className:d("i-mingcute-send-plane-line",s)})}const Ae=()=>{const s=Y(),t=ee();return e.jsxs("span",{className:d("font-mono text-[10px]",s?"text-red-500":"text-zinc-500"),children:[t.length,"/",se]})},Se=()=>{const s=g(),t=B(),n=M(w().isWhisper),a=N();return s||t?null:e.jsxs("label",{className:"label mx-2 flex items-center",children:[e.jsx("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:n,type:"checkbox",onChange:o=>{const{checked:r}=o.target;a("isWhisper",r)}}),e.jsx("span",{className:"label-text text-sm",children:"悄悄话"})]})},Le=()=>{const s=g(),t=M(w().syncToRecently),n=N(),a=B();return!s||a?null:e.jsxs("label",{className:"label mx-2 flex items-center",children:[e.jsx("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:t,type:"checkbox",onChange:o=>{const{checked:r}=o.target;n("syncToRecently",r)}}),e.jsx("span",{className:"label-text text-sm",children:"同步到碎碎念"})]})},L=({className:s})=>{const t=Q();return e.jsxs("footer",{className:C("mt-3 flex h-5 w-full min-w-0 items-center justify-between",s),children:[e.jsxs("span",{className:d("flex-1 select-none text-[10px] text-zinc-500 transition-opacity"),children:[e.jsxs("span",{className:"hidden md:inline",children:["支持 ",e.jsx("b",{children:"Markdown"})," 与"," ",e.jsx(ue,{href:"https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",children:"GFM"})]}),e.jsx(D,{})]}),e.jsx(xe,{children:t&&e.jsxs(y.aside,{initial:{opacity:0,scale:.96,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.98,y:8},className:"flex select-none items-center gap-2.5",children:[e.jsx(Ae,{}),e.jsx(Se,{}),e.jsx(Le,{}),e.jsx(Ie,{})]},"send-button-wrapper")})]})},Ie=()=>{const[s,t]=J();return e.jsxs(y.button,{className:"flex appearance-none items-center space-x-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",disabled:t,onClick:s,children:[e.jsx(Ce,{className:"size-5 text-zinc-800 dark:text-zinc-200"}),e.jsx(y.span,{className:"text-sm",layout:"size",children:t?"送信...":"送信"})]})},Re=()=>{const s=N(),t=u(),n=t?t.name||"Anonymous":"";return l.useEffect(()=>{t&&(s("author",n),s("avatar",t.image),s("mail",t.email),t.handle&&s("url",ke({provider:t.provider,handle:t.handle})||""),s("source",t.provider))},[n,t,s]),t?e.jsxs("div",{className:"flex space-x-4",children:[e.jsxs("div",{className:d("relative mb-2 shrink-0 select-none self-end rounded-full","bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800","backface-hidden ml-[2px]"),children:[e.jsxs(ve,{children:[e.jsx(ye,{className:"rounded-full object-cover",src:t.image,alt:`${n}'s avatar`,width:48,height:48}),e.jsx(we,{delayMs:600,className:"block size-[48px] shrink-0 rounded-full"})]}),e.jsx(V,{className:"absolute -bottom-1 right-0"})]}),e.jsx("div",{className:"relative h-[150px] w-full rounded-xl bg-gray-200/50 dark:bg-zinc-800/50",children:e.jsx(k,{className:"pb-5"})}),e.jsx(L,{className:"absolute bottom-0 left-14 right-0 mb-2 ml-4 w-auto px-4"})]}):null},ze=()=>g()?e.jsx(Pe,{}):e.jsx(Te,{}),G="relative h-[150px] w-full rounded-xl bg-gray-200/50 dark:bg-zinc-800/50",Me={author:"昵称",mail:"邮箱",url:"网址"},Be={author:{validator:s=>s.length>0&&s.length<=20,message:"昵称长度应在 1-20 之间"},mail:{validator:s=>/^[\w-]+@[\w-]+(\.[\w-]+)+$/.test(s),message:"邮箱格式不正确"},url:{validator:s=>/^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(s),message:"网址格式不正确"}},j=s=>{const{fieldKey:t,required:n}=s,[a,o]=X(w()[t]);return e.jsx(de,{type:"text",value:a,onChange:r=>o(r.target.value),required:n,placeholder:Me[t]+(n?" *":""),name:t,className:"bg-gray-200/50 dark:bg-zinc-800/50",rules:[Be[t]]})},Te=()=>e.jsxs(me,{className:"flex flex-col space-y-4 px-2 pt-2",showErrorMessage:!1,children:[e.jsxs("div",{className:"flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0",children:[e.jsx(j,{fieldKey:"author",required:!0}),e.jsx(j,{fieldKey:"mail",required:!0}),e.jsx(j,{fieldKey:"url"})]}),e.jsx("div",{className:G,children:e.jsx(k,{className:"pb-8"})}),e.jsx(L,{className:"absolute bottom-4 left-0 right-4 mb-2 ml-2 w-auto px-4"})]}),Pe=()=>{const s=H(t=>t.user);return e.jsxs("div",{className:"flex space-x-4",children:[e.jsxs("div",{className:d("relative mb-2 shrink-0 select-none self-end rounded-full","ring-2 ring-accent","backface-hidden ml-[2px]"),children:[e.jsx(he,{className:"rounded-full object-cover",src:s.avatar,alt:`${s.name||s.username}'s avatar`,width:48,height:48}),e.jsx(V,{className:"absolute -bottom-1 right-0"})]}),e.jsx("div",{className:G,children:e.jsx(k,{className:"pb-5"})}),e.jsx(L,{className:"absolute bottom-0 left-14 right-0 mb-2 ml-4 w-auto px-4"})]})},K=()=>{const{data:s}=ge({queryKey:["providers"],queryFn:v.getProviders,refetchOnMount:"always",meta:{persist:!0}});return s},Ee=()=>{const s=K(),[t,n]=l.useState(()=>new Set);return e.jsx(e.Fragment,{children:s&&e.jsx("ul",{className:"flex items-center justify-center gap-3",children:Object.keys(s).map(a=>e.jsx("li",{children:e.jsx(oe,{disabled:t.has(a),onClick:()=>{t.has(a)||(Ne(a),n(o=>(o.add(a),new Set(o))))},children:e.jsx("div",{className:"flex size-10 items-center justify-center rounded-full border bg-base-100 dark:border-neutral-700",children:t.has(a)?e.jsx("div",{className:"center flex",children:e.jsx("i",{className:"loading loading-spinner loading-xs opacity-50"})}):e.jsx(l.Fragment,{children:a==="github"?e.jsx(pe,{}):e.jsx("img",{className:"size-4",src:`https://authjs.dev/img/providers/${a}.svg`})})})})},a))})})};function Fe(){const s=!!u(),t=K(),n=t&&Object.keys(t).length>0;return l.useEffect(()=>{t&&Object.keys(t).length===0&&b(h.legacy)},[t]),s?null:e.jsxs("div",{className:"center flex h-[150px] w-full flex-col rounded-lg bg-gray-100/80 dark:bg-zinc-900/80",children:[e.jsx("p",{className:"mb-4 text-sm",children:"使用社交账号登录"}),e.jsx(Ee,{}),e.jsx(ie,{className:d(n?"mt-6":""),variant:"secondary",type:"button",onClick:()=>{b(h.legacy)},children:"免登录评论"})]})}const js=s=>{const{refId:t,className:n,afterSubmit:a,initialValue:o}=s,r=te(),c=g(),i=u();return l.useEffect(()=>{i&&b(h["with-auth"])},[i]),e.jsx(ae,{children:e.jsx(ne,{refId:t,afterSubmit:a,initialValue:o,children:e.jsxs("div",{className:C("group relative w-full min-w-0",n),"data-hide-print":!0,children:[e.jsx(re,{}),e.jsx("div",{className:"relative w-full",children:c?e.jsx(z,{}):r===h.legacy?e.jsx(z,{}):e.jsx($e,{})})]})})})},z=()=>e.jsx(T,{children:e.jsx(ze,{})}),$e=()=>{const s=!!u();return e.jsx(T,{children:s?e.jsx(Re,{}):e.jsx(Fe,{})})};export{js as CommentBoxRoot};
