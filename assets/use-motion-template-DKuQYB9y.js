import{r}from"./index-BeruYqlq.js";import{m as i}from"./visual-element-DBrrQU-Q.js";import{u as f,M as l,a as m,c as p,f as h,i as c}from"./proxy-DJMatoTb.js";function M(o){const t=f(()=>i(o)),{isStatic:s}=r.useContext(l);if(s){const[,n]=r.useState(o);r.useEffect(()=>t.on("change",n),[])}return t}function d(o,t){const s=M(t()),n=()=>s.set(t());return n(),m(()=>{const u=()=>h.preRender(n,!1,!0),a=o.map(e=>e.on("change",u));return()=>{a.forEach(e=>e()),p(n)}}),s}function x(o,...t){const s=o.length;function n(){let u="";for(let a=0;a<s;a++){u+=o[a];const e=t[a];e&&(u+=c(e)?e.get():e)}return u}return d(t.filter(c),n)}export{x as a,d as b,M as u};
