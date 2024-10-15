import{S as B,p as F,r as d,m as C,n as R,q as j,t as S,w as D,x as A,y as z,z as H,A as U,B as _,C as N,D as V}from"./owner-DP2ujv_O.js";import{r as b}from"./index-BeruYqlq.js";var W=class extends B{constructor(t,e){super(),this.options=e,this.#s=t,this.#i=null,this.#r=F(),this.options.experimental_prefetchInRender||this.#r.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(e)}#s;#t=void 0;#p=void 0;#e=void 0;#a;#c;#r;#i;#b;#l;#f;#o;#h;#n;#d=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),P(this.#t,this.options)?this.#u():this.updateResult(),this.#m())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Q(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Q(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#g(),this.#O(),this.#t.removeObserver(this)}setOptions(t,e){const s=this.options,i=this.#t;if(this.options=this.#s.defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof d(this.options.enabled,this.#t)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#C(),this.#t.setOptions(this.options),s._defaulted&&!C(this.options,s)&&this.#s.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#t,observer:this});const h=this.hasListeners();h&&L(this.#t,i,this.options,s)&&this.#u(),this.updateResult(e),h&&(this.#t!==i||d(this.options.enabled,this.#t)!==d(s.enabled,this.#t)||R(this.options.staleTime,this.#t)!==R(s.staleTime,this.#t))&&this.#v();const o=this.#R();h&&(this.#t!==i||d(this.options.enabled,this.#t)!==d(s.enabled,this.#t)||o!==this.#n)&&this.#y(o)}getOptimisticResult(t){const e=this.#s.getQueryCache().build(this.#s,t),s=this.createResult(e,t);return $(this,s)&&(this.#e=s,this.#c=this.options,this.#a=this.#t.state),s}getCurrentResult(){return this.#e}trackResult(t,e){const s={};return Object.keys(t).forEach(i=>{Object.defineProperty(s,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),e?.(i),t[i])})}),s}trackProp(t){this.#d.add(t)}getCurrentQuery(){return this.#t}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=this.#s.defaultQueryOptions(t),s=this.#s.getQueryCache().build(this.#s,e);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,e))}fetch(t){return this.#u({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#e))}#u(t){this.#C();let e=this.#t.fetch(this.options,t);return t?.throwOnError||(e=e.catch(j)),e}#v(){this.#g();const t=R(this.options.staleTime,this.#t);if(S||this.#e.isStale||!D(t))return;const s=A(this.#e.dataUpdatedAt,t)+1;this.#o=setTimeout(()=>{this.#e.isStale||this.updateResult()},s)}#R(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#y(t){this.#O(),this.#n=t,!(S||d(this.options.enabled,this.#t)===!1||!D(this.#n)||this.#n===0)&&(this.#h=setInterval(()=>{(this.options.refetchIntervalInBackground||z.isFocused())&&this.#u()},this.#n))}#m(){this.#v(),this.#y(this.#R())}#g(){this.#o&&(clearTimeout(this.#o),this.#o=void 0)}#O(){this.#h&&(clearInterval(this.#h),this.#h=void 0)}createResult(t,e){const s=this.#t,i=this.options,h=this.#e,o=this.#a,r=this.#c,n=t!==s?t.state:this.#p,{state:u}=t;let a={...u},v=!1,l;if(e._optimisticResults){const c=this.hasListeners(),O=!c&&P(t,e),k=c&&L(t,s,e,i);(O||k)&&(a={...a,...H(u.data,t.options)}),e._optimisticResults==="isRestoring"&&(a.fetchStatus="idle")}let{error:T,errorUpdatedAt:I,status:p}=a;if(e.select&&a.data!==void 0)if(h&&a.data===o?.data&&e.select===this.#b)l=this.#l;else try{this.#b=e.select,l=e.select(a.data),l=U(h?.data,l,e),this.#l=l,this.#i=null}catch(c){this.#i=c}else l=a.data;if(e.placeholderData!==void 0&&l===void 0&&p==="pending"){let c;if(h?.isPlaceholderData&&e.placeholderData===r?.placeholderData)c=h.data;else if(c=typeof e.placeholderData=="function"?e.placeholderData(this.#f?.state.data,this.#f):e.placeholderData,e.select&&c!==void 0)try{c=e.select(c),this.#i=null}catch(O){this.#i=O}c!==void 0&&(p="success",l=U(h?.data,c,e),v=!0)}this.#i&&(T=this.#i,l=this.#l,I=Date.now(),p="error");const y=a.fetchStatus==="fetching",m=p==="pending",g=p==="error",w=m&&y,x=l!==void 0;return{status:p,fetchStatus:a.fetchStatus,isPending:m,isSuccess:p==="success",isError:g,isInitialLoading:w,isLoading:w,data:l,dataUpdatedAt:a.dataUpdatedAt,error:T,errorUpdatedAt:I,failureCount:a.fetchFailureCount,failureReason:a.fetchFailureReason,errorUpdateCount:a.errorUpdateCount,isFetched:a.dataUpdateCount>0||a.errorUpdateCount>0,isFetchedAfterMount:a.dataUpdateCount>n.dataUpdateCount||a.errorUpdateCount>n.errorUpdateCount,isFetching:y,isRefetching:y&&!m,isLoadingError:g&&!x,isPaused:a.fetchStatus==="paused",isPlaceholderData:v,isRefetchError:g&&x,isStale:E(t,e),refetch:this.refetch,promise:this.#r}}updateResult(t){const e=this.#e,s=this.createResult(this.#t,this.options);if(this.#a=this.#t.state,this.#c=this.options,this.#a.data!==void 0&&(this.#f=this.#t),C(s,e))return;if(this.options.experimental_prefetchInRender){const o=n=>{s.status==="error"?n.reject(s.error):s.data!==void 0&&n.resolve(s.data)},r=()=>{const n=this.#r=s.promise=F();o(n)},f=this.#r;switch(f.status){case"pending":o(f);break;case"fulfilled":(s.status==="error"||s.data!==f.value)&&r();break;case"rejected":(s.status!=="error"||s.error!==f.reason)&&r();break}}this.#e=s;const i={},h=()=>{if(!e)return!0;const{notifyOnChangeProps:o}=this.options,r=typeof o=="function"?o():o;if(r==="all"||!r&&!this.#d.size)return!0;const f=new Set(r??this.#d);return this.options.throwOnError&&f.add("error"),Object.keys(this.#e).some(n=>{const u=n;return this.#e[u]!==e[u]&&f.has(u)})};t?.listeners!==!1&&h()&&(i.listeners=!0),this.#S({...i,...t})}#C(){const t=this.#s.getQueryCache().build(this.#s,this.options);if(t===this.#t)return;const e=this.#t;this.#t=t,this.#p=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#m()}#S(t){_.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(this.#e)}),this.#s.getQueryCache().notify({query:this.#t,type:"observerResultsUpdated"})})}};function K(t,e){return d(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function P(t,e){return K(t,e)||t.state.data!==void 0&&Q(t,e,e.refetchOnMount)}function Q(t,e,s){if(d(e.enabled,t)!==!1){const i=typeof s=="function"?s(t):s;return i==="always"||i!==!1&&E(t,e)}return!1}function L(t,e,s,i){return(t!==e||d(i.enabled,t)===!1)&&(!s.suspense||t.state.status!=="error")&&E(t,s)}function E(t,e){return d(e.enabled,t)!==!1&&t.isStaleByTime(R(e.staleTime,t))}function $(t,e){return!C(t.getCurrentResult(),e)}function q(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var G=b.createContext(q()),J=()=>b.useContext(G);function X(t,e){return typeof t=="function"?t(...e):!!t}function Y(){}var Z=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},tt=t=>{b.useEffect(()=>{t.clearReset()},[t])},et=({result:t,errorResetBoundary:e,throwOnError:s,query:i})=>t.isError&&!e.isReset()&&!t.isFetching&&i&&X(s,[t.error,i]),st=t=>{t.suspense&&(typeof t.staleTime!="number"&&(t.staleTime=1e3),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3)))},it=(t,e)=>t.isLoading&&t.isFetching&&!e,rt=(t,e)=>t?.suspense&&e.isPending,M=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function nt(t,e,s){const i=N(),h=V(),o=J(),r=i.defaultQueryOptions(t);i.getDefaultOptions().queries?._experimental_beforeQuery?.(r),r._optimisticResults=h?"isRestoring":"optimistic",st(r),Z(r,o),tt(o);const f=!i.getQueryCache().get(r.queryHash),[n]=b.useState(()=>new e(i,r)),u=n.getOptimisticResult(r);if(b.useSyncExternalStore(b.useCallback(a=>{const v=h?()=>{}:n.subscribe(_.batchCalls(a));return n.updateResult(),v},[n,h]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),b.useEffect(()=>{n.setOptions(r,{listeners:!1})},[r,n]),rt(r,u))throw M(r,n,o);if(et({result:u,errorResetBoundary:o,throwOnError:r.throwOnError,query:i.getQueryCache().get(r.queryHash)}))throw u.error;return i.getDefaultOptions().queries?._experimental_afterQuery?.(r,u),r.experimental_prefetchInRender&&!S&&it(u,h)&&(f?M(r,n,o):i.getQueryCache().get(r.queryHash)?.promise)?.catch(Y).finally(()=>{n.hasListeners()||n.updateResult()}),r.notifyOnChangeProps?u:n.trackResult(u)}function ut(t,e){return nt(t,W)}export{W as Q,nt as a,Y as n,X as s,ut as u};
