import"./disclose-version.15-3dQtY.js";import{u as Na,r as W,p as Ta,z as l,y as e,q as X,b as k,a as Ua,a1 as Y,s as _a,A as o}from"./runtime.bbI-llpg.js";import{e as Z}from"./each.EYzjG2Rp.js";import{t as aa,F as ca,g as pa,w as fa,x as Ea,a as t,b as a,v as Fa,E as ta,M as Ga,N as ba,O as Ka,c as w,z as Qa,A as f,o as z,s as T,C as b,p as Ra,f as Ba,Q as Ha,G as Ia,d as h}from"./render.xdaRgOar.js";import{d as U,l as E,t as ha}from"./db.DaXTXu79.js";import{o as Ja}from"./main-client.tx5f1FhV.js";import{t as Va}from"./lang.ucBuaWId.js";import{f as Wa,a as Xa}from"./fnSelect.wqP3uKO_.js";var Ya=(S,n)=>l(n,!1),Za=h('<div><iframe title="SS"></iframe></div>'),at=h('<form><h1 text-lg="" mb-3=""> </h1> <div h-80vh="" overflow-auto=""><p pb-5=""> </p> <div grid="" grid-cols-1="" gap-5=""><div form-control="" max-w-full=""><span>Opsi Penilaian</span> <div><textarea input="" filter="" placeholder="Pilih Opsi" min-h-8="" rounded-box=""></textarea> <input type="hidden" selected> <div relative="" w-full=""><ul menu="" top-0="" hidden absolute="" bg-base="" h-48="" z-10="" overflow-auto="" rounded-box="" shadow=""><li option=""><label flex="" gap-2="" cursor-pointer=""><input type="checkbox" checkbox="" shrink-0="" tabindex="-1"> <div option-label=""></div></label></li></ul></div></div></div> <div form-control="" max-w-full=""><span>Keterangan</span> <textarea input="" rows="3" h-auto="" rounded-box=""></textarea></div> <div form-control="" max-w-full=""><input type="file" input="" multiple> <div><div carousel="" w-full="" rounded-box="" min-h-40vh="" border=""></div></div></div></div></div> <div><button btn="~ primary"><i></i> </button></div></form>'),tt=h('<div absolute="" top-0="" z-20="" w-full="" h-2="" bg-neutral="" animate-pulse="" animate-count-infinite=""></div>'),et=(S,n,u)=>e(n).length==e(u)?.items.length?l(n,[]):l(n,e(u)?.items),it=h('<div underline=""> </div>'),rt=h('<tr><td sticky="" left-0=""><input type="checkbox" checkbox=""></td><td></td><td><div><span badge=""> </span> </div></td><td> </td><td></td><td> </td></tr>'),dt=h('<div modal=""><div w-5xl="" max-w-full=""><button modal-close="">&times;</button> <!></div></div> <div><div sticky="" top-0="" z-10="" bg-base-a="" pt-15="" pb-3=""><div flex="" gap-5=""><h1 text-xl="">Sites Lists</h1> <button btn="~ sm circle outline" aria-label="Refresh" p-.5=""><i i-bx-refresh="" animate-reverse=""></i></button></div> <div><div flex=""><a href="./monitoring" btn="~ xs"> </a></div></div></div> <div bg-base="" min-h-70vh="" relative=""><!> <div relative="" bg-base="" z-20=""><table table="" w-full=""><thead><tr children-bg-base-b="" sticky="" top-0=""><th sticky="" left-0="" w-1="" aria-label="Checkbox" h-15=""><input type="checkbox" checkbox=""></th><th></th><th>Name</th><th>Organization</th><th>Status</th><th>Updated</th></tr></thead><tbody></tbody></table></div></div></div>',!0);function ot(S,n){Ua(n,!1);const u={};Na(u);const _=()=>_a(E,"$loading",u),F=()=>_a(Va,"$t",u),ma=[];let O=X(),$=X([]),i=X();Ja(async()=>{await G()});async function G(){k(E,!0),l(O,await U.collection("sites").getList(1,500,{expand:"organization",sort:"name"})),setTimeout(()=>k(E,!1),500)}async function ga(){k(E,!0);try{const d={template:e(i).template,question:e(i).id,answer:e(i).answer,score:e(i).score,media:e(i).file?[...e(i).file]:void 0};console.log(d,e(i)),e(i).aid?await U.collection("auditsDetails").update(e(i).aid,d):await U.collection("auditsDetails").create(d),k(ha,[{action:F()("action.saved")}])}catch(d){console.log(d),k(ha,[{error:d?.data}])}l(i,!1),G()}var ea=Ia(S,!0,dt),M=Qa(ea),xa=t(M),ia=t(xa),ya=a(a(ia)),ka=a(a(M)),ra=t(ka),da=t(ra),wa=t(da),oa=a(a(wa)),za=t(oa),Sa=a(a(da)),Oa=t(Sa),$a=t(Oa),Ma=t($a),qa=a(a(ra)),va=t(qa),Da=a(a(va)),na=t(Da),sa=t(na),Pa=t(sa),ja=t(Pa),K=t(ja);ta(K);var Aa=a(sa);aa(Ma,()=>F()("all.monitoring"));var Q;W(()=>{f(za,"animate-spin",_()),f(na,"opacity-50",_()),Q!==(Q=e($).length==e(O)?.items.length)&&(K.checked=Q)}),ca(M,(d,r)=>Wa(d,r),()=>e(i)),pa("close",M,()=>l(i,!1),!1),ia.__click=[Ya,i],fa(ya,()=>e(i),d=>{var r=z(d,!0,at),R=t(r),q=t(R),m=a(a(R)),s=t(m),B=t(s),D=a(a(s)),P=t(D),g=t(P),j=a(a(g)),H=t(j),x=a(a(H));ta(x);var A=a(a(P)),C=t(A),L=a(a(C));Ga(L);var I=a(a(A)),y=t(I),c=a(a(y)),J=t(c),la=a(a(m)),N=t(la),p=t(N),Ca=a(p);aa(Ca,()=>` ${T(F()("save.btn"))}`),W(()=>{b(q,`${T(e(i).question)} (${T(e(i).score)})`),b(B,e(i).hint),f(p,"i-bx-save",!_()),f(p,"i-bx-refresh",_()),f(p,"animate-spin",_())}),pa("submit",r,Ra(ga),!1),ca(j,(v,V)=>Xa(v,V),()=>e(i).options),ba(x,()=>e(i).score,v=>Y(i,e(i).score=v)),ba(L,()=>e(i).answer,v=>Y(i,e(i).answer=v)),Ka("files","change","set",y,()=>e(i).file,v=>Y(i,e(i).file=v)),Z(J,()=>e(i).media,9,(v,V,vt)=>{var ua=z(v,!0,Za),La=t(ua);Ba(La,"src",()=>U.files.getUrl(e(i),o(V))),w(v,ua)},null),w(d,r)},null),oa.__click=G,fa(va,_,d=>{var r=z(d,!0,tt);w(d,r)},null),K.__click=[et,$,O],Z(Aa,()=>e(O)?.items||[],9,(d,r,R)=>{var q=z(d,!0,rt),m=t(q),s=t(m);ta(s);var B=a(m),D=a(B),P=t(D),g=t(P),j=t(g),H=a(g),x=a(D),A=t(x),C=a(x),L=a(C),I=t(L),y;W(()=>{y!==(y=o(r))&&(s.value=(s.__value=o(r))==null?"":o(r)),f(g,"badge-primary",o(r).secure),b(j,o(r).secure?"https":"http"),b(H,` ${T(o(r).name)}`),b(A,o(r)?.expand?.organization?.name),b(I,o(r).updated)}),Ha(ma,[],s,()=>(o(r),e($)),c=>l($,c)),Z(C,()=>o(r)?.expand?.auditee||[],9,(c,J,la)=>{var N=z(c,!0,it),p=t(N);aa(p,()=>o(J).name),w(c,N)},null),w(d,q)},null),Ea(S,ea),Ta()}Fa(["click"]);const bt=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"}));export{ot as _,bt as a};
