import{a as i,s as c}from"./visual-element-DBrrQU-Q.js";import{u,a as f}from"./proxy-DJMatoTb.js";function h(t){t.values.forEach(r=>r.stop())}function e(t,r){[...r].reverse().forEach(s=>{const n=t.getVariant(s);n&&c(t,n),t.variantChildren&&t.variantChildren.forEach(a=>{e(a,r)})})}function p(t,r){if(Array.isArray(r))return e(t,r);if(typeof r=="string")return e(t,[r]);c(t,r)}function m(){const t=new Set,r={subscribe(o){return t.add(o),()=>void t.delete(o)},start(o,s){const n=[];return t.forEach(a=>{n.push(i(a,o,{transitionOverride:s}))}),Promise.all(n)},set(o){return t.forEach(s=>{p(s,o)})},stop(){t.forEach(o=>{h(o)})},mount(){return()=>{r.stop()}}};return r}function l(){const t=u(m);return f(t.mount,[]),t}const A=l;class C{constructor(){this.componentControls=new Set}subscribe(r){return this.componentControls.add(r),()=>this.componentControls.delete(r)}start(r,o){this.componentControls.forEach(s=>{s.start(r.nativeEvent||r,o)})}}const b=()=>new C;function y(){return u(b)}export{C as D,y as a,m as b,A as c,l as u};
