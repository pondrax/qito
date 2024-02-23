import{l as K,a as q,b as Q}from"../chunks/lang.ucBuaWId.js";import"../chunks/disclose-version.15-3dQtY.js";import{u as R,w as W,p as X,a as Y,r as Z,s as x,A as u,b as B}from"../chunks/runtime.bbI-llpg.js";import{e as C}from"../chunks/each.EYzjG2Rp.js";import{v as ee,h as te,y as ae,t as w,F as oe,w as D,x as T,$ as re,s as ne,a as i,c as $,z,b as e,G as E,o as L,d as v}from"../chunks/render.xdaRgOar.js";import{P as ie,t as H,d as se,p as le}from"../chunks/db.DaXTXu79.js";import{p as ce}from"../chunks/stores.-m0VmZbj.js";const de=!0;async function ue({url:l,data:a}){const{pathname:o}=l,t=a.lang||"en";return await K(t,o),{}}const ze=Object.freeze(Object.defineProperty({__proto__:null,load:ue,prerender:de},Symbol.toStringTag,{value:"Module"}));function ve(l,a={theme:"cupcake",pos:"end"}){const o=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"],t=document.createElement("div");t.className="dropdown "+(a.pos=="end"?"dropdown-end":""),t.innerHTML=`
    <!-- Dropdown button -->
    <button btn="~ sm outline">
      <i i-bx-extension></i>
      <span>Theme</span>
    </button>
    <!-- Theme options list -->
    <ul menu bg-base rounded-box shadow h-60 overflow-auto gap-.5>
      ${o.map(r=>`<li>
        <button data-theme=${r} bg-base text-base-content capitalize gap-1 children-rounded-xl children-min-w-2 children-h-5>
          <span mr-auto>${r}</span>
          <span bg-primary></span>
          <span bg-secondary></span>
          <span bg-accent></span>
          <span bg-neutral></span>
        </button>
      </li>`).join("")}
    </ul>`,l.append(t),localStorage.theme?c(localStorage.theme):c(a.theme);function c(r){a.theme=r,localStorage.theme=r,document.querySelector("html").dataset.theme=r}function m(r){const _=r.target.closest("[data-theme]");_&&c(_.dataset.theme)}return t.addEventListener("click",m,!0),{destroy(){t.removeEventListener("click",m,!0)}}}var pe=(l,a,o,t)=>B(a,u(t)),be=v('<li><button uppercase=""> </button></li>'),fe=v('<i i-bx-x-circle="" text-error="" text-xl="" flex-shrink-0=""></i> <div w-64="" overflow-auto="" whitespace-pre-wrap=""> </div>',!0),me=v('<i i-bx-info-circle="" text-info="" text-xl="" flex-shrink-0=""></i> <div w-50="" overflow-auto=""> </div>',!0),_e=v('<div alert="" flex-nowrap="" border="" relative=""><button btn="~ xs" absolute="" top--1="" right-1="">&times;</button> <!></div>'),ge=v('<div flex="" flex-col="" gap-3="" fixed="" bottom-5="" right-2="" p-2="" z-99="" max-h-screen="" overflow-y-auto=""></div>'),he=v('<div bg-base=""><!> <div fixed="" z-50="" top-5="" right-5="" flex="" gap-1=""><div dropdown=""><button btn="~ outline sm" uppercase=""> </button> <ul menu="" bg-base="" rounded-box=""></ul></div> <div></div></div></div> <!>',!0);function Ee(l,a){Y(a,!0);const o={};R(o);const t=()=>x(H,"$toast",o),c=()=>x(q,"$locale",o),m=()=>x(Q,"$locales",o),r=()=>x(ce,"$page",o);W(()=>{se.authStore.isValid,le.set(!1)});function _(n){B(H,t().filter((s,p)=>p!==n))}var P=E(l,!0,he),M=z(P);te(n=>{Z(()=>{re.title=`${ne(ie)}`})});var j=i(M);ae(j,a.children,{},null);var F=e(e(j)),A=i(F),N=i(A),G=i(N),I=e(e(N)),J=e(e(A)),U=e(e(M));w(G,c),C(I,m,73,(n,s,p)=>{var d=L(n,!0,be),g=i(d),h=i(g);w(h,()=>u(s)),g.__click=[pe,q,c,s],$(n,d)},null),oe(J,(n,s)=>ve(n,s),()=>({theme:"cupcake",pos:"end"})),D(U,()=>t().length>0&&r().route.id!="/",n=>{var s=L(n,!0,ge);C(s,t,73,(p,d,g)=>{var h=L(p,!0,_e),O=i(h),V=e(e(O));O.__click=()=>_(u(g)),D(V,()=>u(d)?.error,b=>{var f=E(b,!0,fe),k=z(f),y=e(e(k)),S=i(y);w(S,()=>JSON.stringify(u(d).error,null,2)),T(b,f)},b=>{var f=E(b,!0,me),k=z(f),y=e(e(k)),S=i(y);w(S,()=>u(d).action),T(b,f)}),$(p,h)},null),$(n,s)},null),T(l,P),X()}ee(["click"]);export{Ee as component,ze as universal};
