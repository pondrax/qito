import{F as tt}from"./runtime.N9sK9yCX.js";import{w as de}from"./index.yrMRQZj_.js";import{H as ee,S as pe,R as Ue}from"./control.pJ1mnnAb.js";new URL("sveltekit-internal://");function nt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function at(e){return e.split("%25").map(decodeURI).join("%25")}function rt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function se({href:e}){return e.split("#")[0]}const ot=["href","pathname","search","toString","toJSON"];function st(e,t,n){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return s=>(n(s),r[o](s));t();const i=Reflect.get(r,o);return typeof i=="function"?i.bind(r):i}}),enumerable:!0,configurable:!0});for(const r of ot)Object.defineProperty(a,r,{get(){return t(),e[r]},enumerable:!0,configurable:!0});return a}const it="/__data.json",ct=".html__data.json";function lt(e){return e.endsWith(".html")?e.replace(/\.html$/,ct):e.replace(/\/$/,"")+it}function ft(...e){let t=5381;for(const n of e)if(typeof n=="string"){let a=n.length;for(;a;)t=t*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=a.length;for(;r;)t=t*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}const xe=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&D.delete(he(e)),xe(e,t));const D=new Map;function ut(e){const t=atob(e),n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n.buffer}function dt(e,t){const n=he(e,t),a=document.querySelector(n);if(a?.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&D.set(n,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=ut(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,t)}function pt(e,t,n){if(D.size>0){const a=he(e,n),r=D.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(r.body,r.init);D.delete(a)}}return window.fetch(t,n)}function he(e,t){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const r=[];t.headers&&r.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&r.push(t.body),a+=`[data-hash="${ft(...r)}"]`}return a}const ht=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function _t(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${mt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return t.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ie(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ie(String.fromCharCode(...c.slice(2).split("-").map(h=>parseInt(h,16))));const d=ht.exec(c),[,_,u,f,p]=d;return t.push({name:f,matcher:p,optional:!!_,rest:!!u,chained:u?l===1&&i[0]==="":!1}),u?"(.*?)":_?"([^/]*)?":"([^/]+?)"}return ie(c)}).join("")}).join("")}/?$`),params:t}}function gt(e){return!/^\([^)]+\)$/.test(e)}function mt(e){return e.slice(1).split("/").filter(gt)}function wt(e,t,n){const a={},r=e.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<t.length;s+=1){const c=t[s];let l=r[s-i];if(c.chained&&c.rest&&i&&(l=r.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){a[c.name]=l;const d=t[s+1],_=r[s+1];d&&!d.rest&&d.optional&&_&&c.chained&&(i=0),!d&&!_&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function ie(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function yt({nodes:e,server_loads:t,dictionary:n,matchers:a}){const r=new Set(t);return Object.entries(n).map(([s,[c,l,d]])=>{const{pattern:_,params:u}=_t(s),f={id:s,exec:p=>{const h=_.exec(p);if(h)return wt(h,u,a)},errors:[1,...d||[]].map(p=>e[p]),layouts:[0,...l||[]].map(i),leaf:o(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[r.has(s),e[s]]}}function Ne(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Ae(e,t,n=JSON.stringify){const a=n(t);try{sessionStorage[e]=a}catch{}}const S=globalThis.__sveltekit_1hl9mwv?.base??"",vt=globalThis.__sveltekit_1hl9mwv?.assets??S,bt="1708673671420",Oe="sveltekit:snapshot",je="sveltekit:scroll",De="sveltekit:states",Et="sveltekit:pageurl",x="sveltekit:history",C="sveltekit:navigation",K={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},H=location.origin;function $e(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function _e(){return{x:pageXOffset,y:pageYOffset}}function U(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Se={...K,"":K.hover};function Ce(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function Ve(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ce(e)}}function le(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!a||te(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=n?.origin===H&&e.hasAttribute("download");return{url:n,external:r,target:a,download:o}}function Y(e){let t=null,n=null,a=null,r=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=U(s,"preload-code")),r===null&&(r=U(s,"preload-data")),t===null&&(t=U(s,"keepfocus")),n===null&&(n=U(s,"noscroll")),o===null&&(o=U(s,"reload")),i===null&&(i=U(s,"replacestate")),s=Ce(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Se[a??"off"],preload_data:Se[r??"off"],keepfocus:c(t),noscroll:c(n),reload:c(o),replace_state:c(i)}}function Re(e){const t=de(e);let n=!0;function a(){n=!0,t.update(i=>i)}function r(i){n=!1,t.set(i)}function o(i){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}function kt(){const{set:e,subscribe:t}=de(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${vt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==bt;return i&&(e(!0),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:a}}function te(e,t){return e.origin!==H||!e.pathname.startsWith(t)}const At=-1,St=-2,Rt=-3,It=-4,Lt=-5,Pt=-6;function Tt(e,t){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,a=Array(n.length);function r(o,i=!1){if(o===At)return;if(o===Rt)return NaN;if(o===It)return 1/0;if(o===Lt)return-1/0;if(o===Pt)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=n[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=t?.[c];if(l)return a[o]=l(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const d=new Set;a[o]=d;for(let f=1;f<s.length;f+=1)d.add(r(s[f]));break;case"Map":const _=new Map;a[o]=_;for(let f=1;f<s.length;f+=2)_.set(r(s[f]),r(s[f+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const u=Object.create(null);a[o]=u;for(let f=1;f<s.length;f+=2)u[s[f]]=r(s[f+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==St&&(c[l]=r(d))}}else{const c={};a[o]=c;for(const l in s){const d=s[l];c[l]=r(d)}}return a[o]}return r(0)}const Fe=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Fe];const Ut=new Set([...Fe]);[...Ut];function xt(e){return e.filter(t=>t!=null)}const Nt="x-sveltekit-invalidated",Ot="x-sveltekit-trailing-slash";function W(e){return e instanceof ee||e instanceof pe?e.status:500}function jt(e){return e instanceof pe?e.text:"Internal Error"}const T=Ne(je)??{},V=Ne(Oe)??{},Dt=history.pushState,ge=history.replaceState,L={url:Re({}),page:Re({}),navigating:de(null),updated:kt()};function me(e){T[e]=_e()}function $t(e,t){let n=e+1;for(;T[n];)delete T[n],n+=1;for(n=t+1;V[n];)delete V[n],n+=1}function O(e){return location.href=e.href,new Promise(()=>{})}function Ie(){}let ne,fe,z,I,ue,M;const Ge=[],J=[];let N=null;const He=[],Ct=[];let $=[],w={branch:[],error:null,url:null},we=!1,X=!1,Le=!0,F=!1,j=!1,Me=!1,ye=!1,ve,y,k,A,Z;async function Jt(e,t,n){document.URL!==location.href&&(location.href=location.href),M=e,ne=yt(e),I=document.documentElement,ue=t,fe=e.nodes[0],z=e.nodes[1],fe(),z(),y=history.state?.[x],k=history.state?.[C],y||(y=k=Date.now(),ge.call(history,{...history.state,[x]:y,[C]:k},""));const a=T[y];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await Bt(ue,n):Mt(location.href,{replaceState:!0}),qt()}function qe(e){J.some(t=>t?.snapshot)&&(V[e]=J.map(t=>t?.snapshot?.capture()))}function Be(e){V[e]?.forEach((t,n)=>{J[n]?.snapshot?.restore(t)})}function Pe(){me(y),Ae(je,T),qe(k),Ae(Oe,V)}async function Ke(e,t,n,a){return B({type:"goto",url:$e(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:a,accept:()=>{t.invalidateAll&&(ye=!0)}})}async function Vt(e){return N={id:e.id,promise:We(e).then(t=>(t.type==="loaded"&&t.state.error&&(N=null),t))},N.promise}async function ce(e){const t=ne.find(n=>n.exec(ze(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function Ye(e,t){w=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),A=e.props.page,ve=new M.root({target:t,props:{...e.props,stores:L,components:J},hydrate:!0}),Be(k);const a={from:null,to:{params:w.params,route:{id:w.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};$.forEach(r=>r(a)),X=!0}async function Q({url:e,params:t,branch:n,status:a,error:r,route:o,form:i}){let s="never";if(S&&(e.pathname===S||e.pathname===S+"/"))s="always";else for(const f of n)f?.slash!==void 0&&(s=f.slash);e.pathname=nt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:r,route:o},props:{constructors:xt(n).map(f=>f.node.component),page:A}};i!==void 0&&(c.props.form=i);let l={},d=!A,_=0;for(let f=0;f<Math.max(n.length,w.branch.length);f+=1){const p=n[f],h=w.branch[f];p?.data!==h?.data&&(d=!0),p&&(l={...l,...p.data},d&&(c.props[`data_${_}`]=l),_+=1)}return(!w.url||e.href!==w.url.href||w.error!==r||i!==void 0&&i!==A.form||d)&&(c.props.page={error:r,params:t,route:{id:o?.id??null},state:{},status:a,url:new URL(e),form:i??null,data:d?l:A.data}),c}async function be({loader:e,parent:t,url:n,params:a,route:r,server_data_node:o}){let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if(l.universal?.load){let d=function(...u){for(const f of u){const{href:p}=new URL(f,n);c.dependencies.add(p)}};const _={route:new Proxy(r,{get:(u,f)=>(s&&(c.route=!0),u[f])}),params:new Proxy(a,{get:(u,f)=>(s&&c.params.add(f),u[f])}),data:o?.data??null,url:st(n,()=>{s&&(c.url=!0)},u=>{s&&c.search_params.add(u)}),async fetch(u,f){let p;u instanceof Request?(p=u.url,f={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...f}):p=u;const h=new URL(p,n);return s&&d(h.href),h.origin===n.origin&&(p=h.href.slice(n.origin.length)),X?pt(p,h.href,f):dt(p,f)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),t()},untrack(u){s=!1;try{return u()}finally{s=!0}}};i=await l.universal.load.call(null,_)??null}return{node:l,loader:e,server:o,universal:l.universal?.load?{type:"data",data:i,uses:c}:null,data:i??o?.data??null,slash:l.universal?.trailingSlash??o?.slash}}function Te(e,t,n,a,r,o){if(ye)return!0;if(!r)return!1;if(r.parent&&e||r.route&&t||r.url&&n)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==w.params[i])return!0;for(const i of r.dependencies)if(Ge.some(s=>s(new URL(i))))return!0;return!1}function Ee(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function Ft(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const a of n){const r=e.searchParams.getAll(a),o=t.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&n.delete(a)}return n}async function We({id:e,invalidating:t,url:n,params:a,route:r}){if(N?.id===e)return N.promise;const{errors:o,layouts:i,leaf:s}=r,c=[...i,s];o.forEach(g=>g?.().catch(()=>{})),c.forEach(g=>g?.[1]().catch(()=>{}));let l=null;const d=w.url?e!==w.url.pathname+w.url.search:!1,_=w.route?r.id!==w.route.id:!1,u=Ft(w.url,n);let f=!1;const p=c.map((g,m)=>{const v=w.branch[m],b=!!g?.[0]&&(v?.loader!==g[1]||Te(f,_,d,u,v.server?.uses,a));return b&&(f=!0),b});if(p.some(Boolean)){try{l=await Ze(n,p)}catch(g){return ae({status:W(g),error:await G(g,{url:n,params:a,route:{id:r.id}}),url:n,route:r})}if(l.type==="redirect")return l}const h=l?.nodes;let R=!1;const E=c.map(async(g,m)=>{if(!g)return;const v=w.branch[m],b=h?.[m];if((!b||b.type==="skip")&&g[1]===v?.loader&&!Te(R,_,d,u,v.universal?.uses,a))return v;if(R=!0,b?.type==="error")throw b;return be({loader:g[1],url:n,params:a,route:r,parent:async()=>{const re={};for(let oe=0;oe<m;oe+=1)Object.assign(re,(await E[oe])?.data);return re},server_data_node:Ee(b===void 0&&g[0]?{type:"skip"}:b??null,g[0]?v?.server:void 0)})});for(const g of E)g.catch(()=>{});const P=[];for(let g=0;g<c.length;g+=1)if(c[g])try{P.push(await E[g])}catch(m){if(m instanceof Ue)return{type:"redirect",location:m.location};let v=W(m),b;if(h?.includes(m))v=m.status??v,b=m.error;else if(m instanceof ee)b=m.body;else{if(await L.updated.check())return await O(n);b=await G(m,{params:a,url:n,route:{id:r.id}})}const q=await Gt(g,P,o);return q?await Q({url:n,params:a,branch:P.slice(0,q.idx).concat(q.node),status:v,error:b,route:r}):await Xe(n,{id:r.id},b,v)}else P.push(void 0);return await Q({url:n,params:a,branch:P,status:200,error:null,route:r,form:t?void 0:null})}async function Gt(e,t,n){for(;e--;)if(n[e]){let a=e;for(;!t[a];)a-=1;try{return{idx:a+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ae({status:e,error:t,url:n,route:a}){const r={};let o=null;if(M.server_loads[0]===0)try{const l=await Ze(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==H||n.pathname!==location.pathname||we)&&await O(n)}const s=await be({loader:fe,url:n,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Ee(o)}),c={node:await z(),loader:z,universal:null,server:null,data:null};return await Q({url:n,params:r,branch:[s,c],status:e,error:t,route:null})}function ke(e,t){if(te(e,S))return;const n=ze(e.pathname);for(const a of ne){const r=a.exec(n);if(r)return{id:e.pathname+e.search,invalidating:t,route:a,params:rt(r),url:e}}}function ze(e){return at(e.slice(S.length)||"/")}function Je({url:e,type:t,intent:n,delta:a}){let r=!1;const o=et(w,n,e,t);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return F||He.forEach(s=>s(i)),r?null:o}async function B({type:e,url:t,popped:n,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Ie,block:d=Ie}){const _=ke(t,!1),u=Je({url:t,type:e,delta:n?.delta,intent:_});if(!u){d();return}const f=y,p=k;l(),F=!0,X&&L.navigating.set(u.navigation),Z=c;let h=_&&await We(_);if(!h){if(te(t,S))return await O(t);h=await Xe(t,{id:null},await G(new pe(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=_?.url||t,Z!==c)return u.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(s>=20)h=await ae({status:500,error:await G(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Ke(new URL(h.location,t).href,{},s+1,c),!1;else h.props.page.status>=400&&await L.updated.check()&&await O(t);if(Ge.length=0,ye=!1,me(f),qe(p),h.props.page.url.pathname!==t.pathname&&(t.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const g=o?0:1,m={[x]:y+=g,[C]:k+=g,[De]:i};(o?ge:Dt).call(history,m,"",t),o||$t(y,k)}if(N=null,h.props.page.state=i,X){w=h.state,h.props.page&&(h.props.page.url=t);const g=(await Promise.all(Ct.map(m=>m(u.navigation)))).filter(m=>typeof m=="function");if(g.length>0){let m=function(){$=$.filter(v=>!g.includes(v))};g.push(m),callbacks.after_navigate.push(...g)}ve.$set(h.props),Me=!0}else Ye(h,ue);const{activeElement:R}=document;await tt();const E=n?n.scroll:r?_e():null;if(Le){const g=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));E?scrollTo(E.x,E.y):g?g.scrollIntoView():scrollTo(0,0)}const P=document.activeElement!==R&&document.activeElement!==document.body;!a&&!P&&Kt(),Le=!0,h.props.page&&(A=h.props.page),F=!1,e==="popstate"&&Be(k),u.fulfil(void 0),$.forEach(g=>g(u.navigation)),L.navigating.set(null)}async function Xe(e,t,n,a){return e.origin===H&&e.pathname===location.pathname&&!we?await ae({status:a,error:n,url:e,route:t}):await O(e)}function Ht(){let e;I.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function t(o){a(o.composedPath()[0],1)}I.addEventListener("mousedown",t),I.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(ce(i.target.href),n.unobserve(i.target))},{threshold:0});function a(o,i){const s=Ve(o,I);if(!s)return;const{url:c,external:l,download:d}=le(s,S);if(l||d)return;const _=Y(s);if(!_.reload)if(i<=_.preload_data){const u=ke(c,!1);u&&Vt(u)}else i<=_.preload_code&&ce(c.pathname)}function r(){n.disconnect();for(const o of I.querySelectorAll("a")){const{url:i,external:s,download:c}=le(o,S);if(s||c)continue;const l=Y(o);l.reload||(l.preload_code===K.viewport&&n.observe(o),l.preload_code===K.eager&&ce(i.pathname))}}$.push(r),r()}function G(e,t){if(e instanceof ee)return e.body;const n=W(e),a=jt(e);return M.hooks.handleError({error:e,event:t,status:n,message:a})??{message:a}}function Mt(e,t={}){return e=$e(e),e.origin!==H?Promise.reject(new Error("goto: invalid URL")):Ke(e,t,0)}function qt(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Pe(),!F){const a=et(w,void 0,null,"leave"),r={...a.navigation,cancel:()=>{n=!0,a.reject(new Error("navigation cancelled"))}};He.forEach(o=>o(r))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Pe()}),navigator.connection?.saveData||Ht(),I.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Ve(t.composedPath()[0],I);if(!n)return;const{url:a,external:r,target:o,download:i}=le(n,S);if(!a)return;if(o==="_parent"||o==="_top"){if(window.parent!==window)return}else if(o&&o!=="_self")return;const s=Y(n);if(!(n instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;if(r||s.reload){Je({url:a,type:"link"})?F=!0:t.preventDefault();return}const[l,d]=a.href.split("#");if(d!==void 0&&l===se(location)){const[,_]=w.url.href.split("#");if(_===d){t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):n.ownerDocument.getElementById(d)?.scrollIntoView();return}if(j=!0,me(y),e(a),!s.replace_state)return;j=!1}t.preventDefault(),B({type:"link",url:a,keepfocus:s.keepfocus,noscroll:s.noscroll,replace_state:s.replace_state??a.href===location.href})}),I.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if((a?.formMethod||n.method)!=="get")return;const o=new URL(a?.hasAttribute("formaction")&&a?.formAction||n.action);if(te(o,S))return;const i=t.target,s=Y(i);if(s.reload)return;t.preventDefault(),t.stopPropagation();const c=new FormData(i),l=a?.getAttribute("name");l&&c.append(l,a?.getAttribute("value")??""),o.search=new URLSearchParams(c).toString(),B({type:"form",url:o,keepfocus:s.keepfocus,noscroll:s.noscroll,replace_state:s.replace_state??o.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[x]){const n=t.state[x];if(Z={},n===y)return;const a=T[n],r=t.state[De]??{},o=new URL(t.state[Et]??location.href),i=t.state[C],s=se(location)===se(w.url);if(i===k&&(Me||s)){e(o),T[y]=_e(),a&&scrollTo(a.x,a.y),r!==A.state&&(A={...A,state:r},ve.$set({page:A})),y=n;return}const l=n-y;await B({type:"popstate",url:o,popped:{state:r,scroll:a,delta:l},accept:()=>{y=n,k=i},block:()=>{history.go(-l)},nav_token:Z})}else if(!j){const n=new URL(location.href);e(n)}}),addEventListener("hashchange",()=>{j&&(j=!1,ge.call(history,{...history.state,[x]:++y,[C]:k},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&L.navigating.set(null)});function e(t){w.url=t,L.page.set({...A,url:t}),L.page.notify()}}async function Bt(e,{status:t=200,error:n,node_ids:a,params:r,route:o,data:i,form:s}){we=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=ke(c,!1)||{});let l;try{const d=a.map(async(f,p)=>{const h=i[p];return h?.uses&&(h.uses=Qe(h.uses)),be({loader:M.nodes[f],url:c,params:r,route:o,parent:async()=>{const R={};for(let E=0;E<p;E+=1)Object.assign(R,(await d[E]).data);return R},server_data_node:Ee(h)})}),_=await Promise.all(d),u=ne.find(({id:f})=>f===o.id);if(u){const f=u.layouts;for(let p=0;p<f.length;p++)f[p]||_.splice(p,0,void 0)}l=await Q({url:c,params:r,branch:_,status:t,error:n,form:s,route:u??null})}catch(d){if(d instanceof Ue){await O(new URL(d.location,location.href));return}l=await ae({status:W(d),error:await G(d,{url:c,params:r,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),Ye(l,e)}async function Ze(e,t){const n=new URL(e);n.pathname=lt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Ot,"1"),n.searchParams.append(Nt,t.map(r=>r?"1":"0").join(""));const a=await xe(n.href);if(!a.ok){let r;throw a.headers.get("content-type")?.includes("application/json")?r=await a.json():a.status===404?r="Not Found":a.status===500&&(r="Internal Error"),new ee(a.status,r)}return new Promise(async r=>{const o=new Map,i=a.body.getReader(),s=new TextDecoder;function c(d){return Tt(d,{Promise:_=>new Promise((u,f)=>{o.set(_,{fulfil:u,reject:f})})})}let l="";for(;;){const{done:d,value:_}=await i.read();if(d&&!l)break;for(l+=!_&&l?`
`:s.decode(_,{stream:!0});;){const u=l.indexOf(`
`);if(u===-1)break;const f=JSON.parse(l.slice(0,u));if(l=l.slice(u+1),f.type==="redirect")return r(f);if(f.type==="data")f.nodes?.forEach(p=>{p?.type==="data"&&(p.uses=Qe(p.uses),p.data=c(p.data))}),r(f);else if(f.type==="chunk"){const{id:p,data:h,error:R}=f,E=o.get(p);o.delete(p),R?E.reject(c(R)):E.fulfil(c(h))}}}})}function Qe(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function Kt(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function et(e,t,n,a){let r,o;const i=new Promise((c,l)=>{r=c,o=l});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:a,complete:i},fulfil:r,reject:o}}export{Jt as a,Mt as g,L as s};
