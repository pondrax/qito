import{i as P,p as T,t as r,q as h,v as W,c as z,b as t,s as B,w as C,o as G,f as s,a,d as I}from"../chunks/disclose-version.DshyVd_Z.js";import{p as J,a as K}from"../chunks/runtime.Cuj63gjm.js";import{u as N,s as Q,a as w}from"../chunks/store.DRzovyat.js";import{g as U}from"../chunks/entry.1ANe4tQr.js";import{d as V,t as x}from"../chunks/db.FEB5Gfq4.js";import{t as X}from"../chunks/lang.DpQJuId4.js";var Y=I('<div h-screen="" p-2="" bg-neutral=""><div rounded-box="" flex="" justify-center="" items-center="" h-full=""><div max-w-100="" w-full="" p-5="" bg-base="" rounded-box="" shadow=""><div avatar="" w-24="" h-24="" top--10="" rounded-3xl="" bg-base-a="" ring="2 stone offset-2"><img src="/favicon.png" alt="favicon"></div> <div> </div> <form method="post"><div form-control=""><span> </span> <input input="" name="email" autocomplete="off" required></div> <div form-control=""><span> </span> <input input="" type="password" name="password" required></div> <button btn="~ secondary" mt-3="" w-full=""> </button></form> <div mt-10="" text-center=""><a href="/" btn="~ outline"><i i-bx-home-alt=""></i> </a></div></div></div></div>');function ot(n,y){K(y,!1);const d={};N(d);const e=()=>Q(X,"$t",d);async function q({target:b}){if(b instanceof HTMLFormElement){const g=new FormData(b);let _;await V.admins.authWithPassword(String(g.get("email")),String(g.get("password"))).catch(o=>{_=Object.keys(o.data.data).length>0?o.data.data:o.message})?(w(x,[{action:e()("sign.success")}]),U("/dev")):w(x,[{error:_}])}}P();var v=G(n,!0,Y),$=a(v),j=a($),k=a(j),p=t(t(k,!0)),D=s(a(p)),i=t(t(p,!0)),u=a(i),l=a(u),F=s(a(l)),m=t(t(l,!0));T(m,!0);var f=t(t(u,!0)),c=a(f),L=s(a(c)),R=t(t(c,!0)),S=t(t(f,!0)),A=s(a(S)),E=t(t(i,!0)),H=a(E),M=a(H),O=t(M,!0);r(D,()=>e()("sign.titleAdmin")),r(F,()=>e()("email.label")),h(m,"placeholder",()=>e()("email.placeholder")),r(L,()=>e()("password.label")),h(R,"placeholder",()=>e()("password.placeholder")),r(A,()=>e()("sign.btn.in")),r(O,()=>` ${B(e()("back.home"))}`),W("submit",i,C(q),!1),z(n,v),J()}export{ot as component};
