import"./disclose-version.15-3dQtY.js";import{u as et,r as O,p as rt,g as d,d as _,x as S,a as dt,A as e,s as z,e as E}from"./runtime.N9sK9yCX.js";import{e as it}from"./each.-e9gUnfe.js";import{t as st,c as F,a as t,x as ot,F as L,D as s,s as vt,R as lt,Q as nt,o as N,b as r,d as P}from"./render.FNm7pgUH.js";import{l as b,d as _t}from"./db.D4TSvIhG.js";import{t as ct}from"./lang.7t8SORkE.js";import{o as ut}from"./main-client.3hV4Kem7.js";var ht=(c,o,i)=>d(o).length==d(i)?.totalItems?_(o,[]):_(o,d(i)?.items),bt=P('<tr><td sticky="" left-0=""><input type="checkbox" checkbox=""></td><td><div badge=""> </div></td><td> </td><td> </td><td> </td><td> </td></tr>'),pt=P('<div><div py-5=""><h1> </h1> </div> <div bg-base="" rounded-box=""><div overflow-x-auto="" min-h-50vh=""><table table="" w-full=""><thead><tr children-bg-base-b=""><th sticky="" left-0="" rounded-tl-xl="" w-1="" aria-label="Checkbox"><input type="checkbox" checkbox=""></th><th>ID</th><th>Name</th><th>Email</th><th>Avatar</th><th>Created</th></tr></thead><tbody></tbody></table></div></div></div>');function ft(c,o){dt(o,!1);const i={};et(i);const p=()=>z(b,"$loading",i),Q=()=>z(ct,"$t",i),R=[];let v=S([]),l=S();ut(async()=>{await T()});async function T(){E(b,!0),_(l,await _t.collection("users").getList()),E(b,!1)}var f=N(c,!0,pt),m=t(f),g=t(m),q=t(g),B=r(g),G=r(r(m)),H=t(G),x=t(H),y=t(x),J=t(y),K=t(J),u=t(K);L(u);var U=r(y);st(q,()=>Q()("users.title"));var h;O(()=>{s(B,` ${vt(p())}`),lt(x,p()?"opacity-50":""),h!==(h=d(v).length==d(l)?.totalItems)&&(u.checked=h)}),u.__click=[ht,v,l],it(U,()=>d(l)?.items||[],9,(k,a,mt)=>{var $=N(k,!0,bt),I=t($),n=t(I);L(n);var j=r(I),V=t(j),W=t(V),A=r(j),X=t(A),C=r(A),Y=t(C),D=r(C),Z=t(D),w=r(D),tt=t(w),M;O(()=>{M!==(M=e(a))&&(n.value=(n.__value=e(a))==null?"":e(a)),s(W,e(a).id),s(X,e(a).name),s(Y,e(a).email),s(Z,e(a).avatar),s(tt,e(a).created)}),nt(R,[],n,()=>(e(a),d(v)),at=>_(v,at)),F(k,$)},null),F(c,f),rt()}ot(["click"]);const At=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"}));export{ft as _,At as a};