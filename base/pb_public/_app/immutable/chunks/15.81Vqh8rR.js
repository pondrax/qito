import"./disclose-version.15-3dQtY.js";import{u as Ta,r as W,p as Ua,d as l,g as e,x as X,e as k,a as Aa,a1 as Y,s as _a,A as o}from"./runtime.N9sK9yCX.js";import{e as Z}from"./each.-e9gUnfe.js";import{t as aa,G as ca,i as pa,y as fa,z as Ba,a as t,b as a,x as Fa,F as ta,M as Ga,N as ba,O as Ha,c as w,B as Ka,C as f,o as z,s as U,D as b,j as Qa,g as Ra,Q as Ea,H as Ia,d as h}from"./render.FNm7pgUH.js";import{d as A,l as B,t as ha}from"./db.D4TSvIhG.js";import{o as Ja}from"./main-client.3hV4Kem7.js";import{t as Va}from"./lang.7t8SORkE.js";import{f as Wa,a as Xa}from"./fnSelect.wqP3uKO_.js";var Ya=(S,n)=>l(n,!1),Za=h('<div><iframe title="SS"></iframe></div>'),at=h('<form><h1 text-lg="" mb-3=""> </h1> <div h-80vh="" overflow-auto=""><p pb-5=""> </p> <div grid="" grid-cols-1="" gap-5=""><div form-control="" max-w-full=""><span>Opsi Penilaian</span> <div><textarea input="" filter="" placeholder="Pilih Opsi" min-h-8="" rounded-box=""></textarea> <input type="hidden" selected> <div relative="" w-full=""><ul menu="" top-0="" hidden absolute="" bg-base="" h-48="" z-10="" overflow-auto="" rounded-box="" shadow=""><li option=""><label flex="" gap-2="" cursor-pointer=""><input type="checkbox" checkbox="" shrink-0="" tabindex="-1"> <div option-label=""></div></label></li></ul></div></div></div> <div form-control="" max-w-full=""><span>Keterangan</span> <textarea input="" rows="3" h-auto="" rounded-box=""></textarea></div> <div form-control="" max-w-full=""><input type="file" input="" multiple> <div><div carousel="" w-full="" rounded-box="" min-h-40vh="" border=""></div></div></div></div></div> <div><button btn="~ primary"><i></i> </button></div></form>'),tt=h('<div absolute="" top-0="" z-20="" w-full="" h-2="" bg-neutral="" animate-pulse="" animate-count-infinite=""></div>'),et=(S,n,u)=>e(n).length==e(u)?.items.length?l(n,[]):l(n,e(u)?.items),it=h('<div underline=""> </div>'),rt=h('<tr><td sticky="" left-0=""><input type="checkbox" checkbox=""></td><td></td><td><div><span badge=""> </span> </div></td><td> </td><td></td><td> </td></tr>'),dt=h('<div modal=""><div w-5xl="" max-w-full=""><button modal-close="">&times;</button> <!></div></div> <div><div sticky="" top-0="" z-10="" bg-base-a="" pt-15="" pb-3=""><div flex="" gap-5=""><h1 text-xl="">Sites Lists</h1> <button btn="~ sm circle outline" aria-label="Refresh" p-.5=""><i i-bx-refresh="" animate-reverse=""></i></button></div> <div><div flex=""><a href="./monitoring" btn="~ xs"> </a></div></div></div> <div bg-base="" min-h-70vh="" relative=""><!> <div relative="" bg-base="" z-20=""><table table="" w-full=""><thead><tr children-bg-base-b="" sticky="" top-0=""><th sticky="" left-0="" w-1="" aria-label="Checkbox" h-15=""><input type="checkbox" checkbox=""></th><th></th><th>Name</th><th>Organization</th><th>Status</th><th>Updated</th></tr></thead><tbody></tbody></table></div></div></div>',!0);function ot(S,n){Aa(n,!1);const u={};Ta(u);const _=()=>_a(B,"$loading",u),F=()=>_a(Va,"$t",u),ma=[];let O=X(),$=X([]),i=X();Ja(async()=>{await G()});async function G(){k(B,!0),l(O,await A.collection("sites").getList(1,500,{expand:"organization",sort:"name"})),setTimeout(()=>k(B,!1),500)}async function ga(){k(B,!0);try{const d={template:e(i).template,question:e(i).id,answer:e(i).answer,score:e(i).score,media:e(i).file?[...e(i).file]:void 0};console.log(d,e(i)),e(i).aid?await A.collection("auditsDetails").update(e(i).aid,d):await A.collection("auditsDetails").create(d),k(ha,[{action:F()("action.saved")}])}catch(d){console.log(d),k(ha,[{error:d?.data}])}l(i,!1),G()}var ea=Ia(S,!0,dt),D=Ka(ea),xa=t(D),ia=t(xa),ya=a(a(ia)),ka=a(a(D)),ra=t(ka),da=t(ra),wa=t(da),oa=a(a(wa)),za=t(oa),Sa=a(a(da)),Oa=t(Sa),$a=t(Oa),Da=t($a),Ma=a(a(ra)),va=t(Ma),ja=a(a(va)),na=t(ja),sa=t(na),Pa=t(sa),qa=t(Pa),H=t(qa);ta(H);var Ca=a(sa);aa(Da,()=>F()("all.monitoring"));var K;W(()=>{f(za,"animate-spin",_()),f(na,"opacity-50",_()),K!==(K=e($).length==e(O)?.items.length)&&(H.checked=K)}),ca(D,(d,r)=>Wa(d,r),()=>e(i)),pa("close",D,()=>l(i,!1),!1),ia.__click=[Ya,i],fa(ya,()=>e(i),d=>{var r=z(d,!0,at),Q=t(r),M=t(Q),m=a(a(Q)),s=t(m),R=t(s),j=a(a(s)),P=t(j),g=t(P),q=a(a(g)),E=t(q),x=a(a(E));ta(x);var C=a(a(P)),L=t(C),N=a(a(L));Ga(N);var I=a(a(C)),y=t(I),c=a(a(y)),J=t(c),la=a(a(m)),T=t(la),p=t(T),La=a(p);aa(La,()=>` ${U(F()("save.btn"))}`),W(()=>{b(M,`${U(e(i).question)} (${U(e(i).score)})`),b(R,e(i).hint),f(p,"i-bx-save",!_()),f(p,"i-bx-refresh",_()),f(p,"animate-spin",_())}),pa("submit",r,Qa(ga),!1),ca(q,(v,V)=>Xa(v,V),()=>e(i).options),ba(x,()=>e(i).score,v=>Y(i,e(i).score=v)),ba(N,()=>e(i).answer,v=>Y(i,e(i).answer=v)),Ha("files","change","set",y,()=>e(i).file,v=>Y(i,e(i).file=v)),Z(J,()=>e(i).media,9,(v,V,vt)=>{var ua=z(v,!0,Za),Na=t(ua);Ra(Na,"src",()=>A.files.getUrl(e(i),o(V))),w(v,ua)},null),w(d,r)},null),oa.__click=G,fa(va,_,d=>{var r=z(d,!0,tt);w(d,r)},null),H.__click=[et,$,O],Z(Ca,()=>e(O)?.items||[],9,(d,r,Q)=>{var M=z(d,!0,rt),m=t(M),s=t(m);ta(s);var R=a(m),j=a(R),P=t(j),g=t(P),q=t(g),E=a(g),x=a(j),C=t(x),L=a(x),N=a(L),I=t(N),y;W(()=>{y!==(y=o(r))&&(s.value=(s.__value=o(r))==null?"":o(r)),f(g,"badge-primary",o(r).secure),b(q,o(r).secure?"https":"http"),b(E,` ${U(o(r).name)}`),b(C,o(r)?.expand?.organization?.name),b(I,o(r).updated)}),Ea(ma,[],s,()=>(o(r),e($)),c=>l($,c)),Z(L,()=>o(r)?.expand?.auditee||[],9,(c,J,la)=>{var T=z(c,!0,it),p=t(T);aa(p,()=>o(J).name),w(c,T)},null),w(d,M)},null),Ba(S,ea),Ua()}Fa(["click"]);const bt=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"}));export{ot as _,bt as a};