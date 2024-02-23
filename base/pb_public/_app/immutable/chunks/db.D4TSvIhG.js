import{w as P}from"./index.yrMRQZj_.js";const ie="Qito Nyaman",ne="3.0.0~beta",D="https://tte.mojokertokota.go.id",K=P(),I=P([]),oe=P(!0),re=P(!0);I.subscribe(r=>{r.forEach((e,t)=>{e.error||setTimeout(()=>I.set([]),3e3)})});class u extends Error{constructor(e){super("ClientResponseError"),this.url="",this.status=0,this.response={},this.isAbort=!1,this.originalError=null,Object.setPrototypeOf(this,u.prototype),e!==null&&typeof e=="object"&&(this.url=typeof e.url=="string"?e.url:"",this.status=typeof e.status=="number"?e.status:0,this.isAbort=!!e.isAbort,this.originalError=e.originalError,e.response!==null&&typeof e.response=="object"?this.response=e.response:e.data!==null&&typeof e.data=="object"?this.response=e.data:this.response={}),this.originalError||e instanceof u||(this.originalError=e),typeof DOMException<"u"&&e instanceof DOMException&&(this.isAbort=!0),this.name="ClientResponseError "+this.status,this.message=this.response?.message,this.message||(this.isAbort?this.message="The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation.":this.originalError?.cause?.message?.includes("ECONNREFUSED ::1")?this.message="Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).":this.message="Something went wrong while processing your request.")}get data(){return this.response}toJSON(){return{...this}}}const v=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function W(r,e){const t={};if(typeof r!="string")return t;const s=Object.assign({},e||{}).decode||B;let i=0;for(;i<r.length;){const n=r.indexOf("=",i);if(n===-1)break;let o=r.indexOf(";",i);if(o===-1)o=r.length;else if(o<n){i=r.lastIndexOf(";",n-1)+1;continue}const a=r.slice(i,n).trim();if(t[a]===void 0){let c=r.slice(n+1,o).trim();c.charCodeAt(0)===34&&(c=c.slice(1,-1));try{t[a]=s(c)}catch{t[a]=c}}i=o+1}return t}function j(r,e,t){const s=Object.assign({},t||{}),i=s.encode||M;if(!v.test(r))throw new TypeError("argument name is invalid");const n=i(e);if(n&&!v.test(n))throw new TypeError("argument val is invalid");let o=r+"="+n;if(s.maxAge!=null){const a=s.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(s.domain){if(!v.test(s.domain))throw new TypeError("option domain is invalid");o+="; Domain="+s.domain}if(s.path){if(!v.test(s.path))throw new TypeError("option path is invalid");o+="; Path="+s.path}if(s.expires){if(!function(c){return Object.prototype.toString.call(c)==="[object Date]"||c instanceof Date}(s.expires)||isNaN(s.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+s.expires.toUTCString()}if(s.httpOnly&&(o+="; HttpOnly"),s.secure&&(o+="; Secure"),s.priority)switch(typeof s.priority=="string"?s.priority.toLowerCase():s.priority){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(s.sameSite)switch(typeof s.sameSite=="string"?s.sameSite.toLowerCase():s.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function B(r){return r.indexOf("%")!==-1?decodeURIComponent(r):r}function M(r){return encodeURIComponent(r)}let U;function w(r){if(r)try{const e=decodeURIComponent(U(r.split(".")[1]).split("").map(function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(e)||{}}catch{}return{}}function x(r,e=0){let t=w(r);return!(Object.keys(t).length>0&&(!t.exp||t.exp-e>Date.now()/1e3))}U=typeof atob=="function"?atob:r=>{let e=String(r).replace(/=+$/,"");if(e.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,s,i=0,n=0,o="";s=e.charAt(n++);~s&&(t=i%4?64*t+s:s,i++%4)?o+=String.fromCharCode(255&t>>(-2*i&6)):0)s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(s);return o};const q="pb_auth";class ${constructor(){this.baseToken="",this.baseModel=null,this._onChangeCallbacks=[]}get token(){return this.baseToken}get model(){return this.baseModel}get isValid(){return!x(this.token)}get isAdmin(){return w(this.token).type==="admin"}get isAuthRecord(){return w(this.token).type==="authRecord"}save(e,t){this.baseToken=e||"",this.baseModel=t||null,this.triggerChange()}clear(){this.baseToken="",this.baseModel=null,this.triggerChange()}loadFromCookie(e,t=q){const s=W(e||"")[t]||"";let i={};try{i=JSON.parse(s),(typeof i===null||typeof i!="object"||Array.isArray(i))&&(i={})}catch{}this.save(i.token||"",i.model||null)}exportToCookie(e,t=q){const s={secure:!0,sameSite:!0,httpOnly:!0,path:"/"},i=w(this.token);s.expires=i?.exp?new Date(1e3*i.exp):new Date("1970-01-01"),e=Object.assign({},s,e);const n={token:this.token,model:this.model?JSON.parse(JSON.stringify(this.model)):null};let o=j(t,JSON.stringify(n),e);const a=typeof Blob<"u"?new Blob([o]).size:o.length;if(n.model&&a>4096){n.model={id:n?.model?.id,email:n?.model?.email};const c=["collectionId","username","verified"];for(const h in this.model)c.includes(h)&&(n.model[h]=this.model[h]);o=j(t,JSON.stringify(n),e)}return o}onChange(e,t=!1){return this._onChangeCallbacks.push(e),t&&e(this.token,this.model),()=>{for(let s=this._onChangeCallbacks.length-1;s>=0;s--)if(this._onChangeCallbacks[s]==e)return delete this._onChangeCallbacks[s],void this._onChangeCallbacks.splice(s,1)}}triggerChange(){for(const e of this._onChangeCallbacks)e&&e(this.token,this.model)}}class G extends ${constructor(e="pocketbase_auth"){super(),this.storageFallback={},this.storageKey=e,this._bindStorageEvent()}get token(){return(this._storageGet(this.storageKey)||{}).token||""}get model(){return(this._storageGet(this.storageKey)||{}).model||null}save(e,t){this._storageSet(this.storageKey,{token:e,model:t}),super.save(e,t)}clear(){this._storageRemove(this.storageKey),super.clear()}_storageGet(e){if(typeof window<"u"&&window?.localStorage){const t=window.localStorage.getItem(e)||"";try{return JSON.parse(t)}catch{return t}}return this.storageFallback[e]}_storageSet(e,t){if(typeof window<"u"&&window?.localStorage){let s=t;typeof t!="string"&&(s=JSON.stringify(t)),window.localStorage.setItem(e,s)}else this.storageFallback[e]=t}_storageRemove(e){typeof window<"u"&&window?.localStorage&&window.localStorage?.removeItem(e),delete this.storageFallback[e]}_bindStorageEvent(){typeof window<"u"&&window?.localStorage&&window.addEventListener&&window.addEventListener("storage",e=>{if(e.key!=this.storageKey)return;const t=this._storageGet(this.storageKey)||{};super.save(t.token||"",t.model||null)})}}class g{constructor(e){this.client=e}}class H extends g{async getAll(e){return e=Object.assign({method:"GET"},e),this.client.send("/api/settings",e)}async update(e,t){return t=Object.assign({method:"PATCH",body:e},t),this.client.send("/api/settings",t)}async testS3(e="storage",t){return t=Object.assign({method:"POST",body:{filesystem:e}},t),this.client.send("/api/settings/test/s3",t).then(()=>!0)}async testEmail(e,t,s){return s=Object.assign({method:"POST",body:{email:e,template:t}},s),this.client.send("/api/settings/test/email",s).then(()=>!0)}async generateAppleClientSecret(e,t,s,i,n,o){return o=Object.assign({method:"POST",body:{clientId:e,teamId:t,keyId:s,privateKey:i,duration:n}},o),this.client.send("/api/settings/apple/generate-client-secret",o)}}class R extends g{decode(e){return e}async getFullList(e,t){if(typeof e=="number")return this._getFullList(e,t);let s=500;return(t=Object.assign({},e,t)).batch&&(s=t.batch,delete t.batch),this._getFullList(s,t)}async getList(e=1,t=30,s){return(s=Object.assign({method:"GET"},s)).query=Object.assign({page:e,perPage:t},s.query),this.client.send(this.baseCrudPath,s).then(i=>(i.items=i.items?.map(n=>this.decode(n))||[],i))}async getFirstListItem(e,t){return(t=Object.assign({requestKey:"one_by_filter_"+this.baseCrudPath+"_"+e},t)).query=Object.assign({filter:e,skipTotal:1},t.query),this.getList(1,1,t).then(s=>{if(!s?.items?.length)throw new u({status:404,response:{code:404,message:"The requested resource wasn't found.",data:{}}});return s.items[0]})}async getOne(e,t){if(!e)throw new u({url:this.client.buildUrl(this.baseCrudPath+"/"),status:404,response:{code:404,message:"Missing required record id.",data:{}}});return t=Object.assign({method:"GET"},t),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e),t).then(s=>this.decode(s))}async create(e,t){return t=Object.assign({method:"POST",body:e},t),this.client.send(this.baseCrudPath,t).then(s=>this.decode(s))}async update(e,t,s){return s=Object.assign({method:"PATCH",body:t},s),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e),s).then(i=>this.decode(i))}async delete(e,t){return t=Object.assign({method:"DELETE"},t),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e),t).then(()=>!0)}_getFullList(e=500,t){(t=t||{}).query=Object.assign({skipTotal:1},t.query);let s=[],i=async n=>this.getList(n,e||500,t).then(o=>{const a=o.items;return s=s.concat(a),a.length==o.perPage?i(n+1):s});return i(1)}}function d(r,e,t,s){const i=s!==void 0;return i||t!==void 0?i?(console.warn(r),e.body=Object.assign({},e.body,t),e.query=Object.assign({},e.query,s),e):Object.assign(e,t):e}function E(r){r._resetAutoRefresh?.()}class J extends R{get baseCrudPath(){return"/api/admins"}async update(e,t,s){return super.update(e,t,s).then(i=>(this.client.authStore.model?.id===i.id&&this.client.authStore.model?.collectionId===void 0&&this.client.authStore.save(this.client.authStore.token,i),i))}async delete(e,t){return super.delete(e,t).then(s=>(s&&this.client.authStore.model?.id===e&&this.client.authStore.model?.collectionId===void 0&&this.client.authStore.clear(),s))}authResponse(e){const t=this.decode(e?.admin||{});return e?.token&&e?.admin&&this.client.authStore.save(e.token,t),Object.assign({},e,{token:e?.token||"",admin:t})}async authWithPassword(e,t,s,i){let n={method:"POST",body:{identity:e,password:t}};n=d("This form of authWithPassword(email, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(email, pass, options?).",n,s,i);const o=n.autoRefreshThreshold;delete n.autoRefreshThreshold,n.autoRefresh||E(this.client);let a=await this.client.send(this.baseCrudPath+"/auth-with-password",n);return a=this.authResponse(a),o&&function(h,y,k,A){E(h);const l=h.beforeSend,S=h.authStore.model,m=h.authStore.onChange((f,p)=>{(!f||p?.id!=S?.id||(p?.collectionId||S?.collectionId)&&p?.collectionId!=S?.collectionId)&&E(h)});h._resetAutoRefresh=function(){m(),h.beforeSend=l,delete h._resetAutoRefresh},h.beforeSend=async(f,p)=>{const _=h.authStore.token;if(p.query?.autoRefresh)return l?l(f,p):{url:f,sendOptions:p};let T=h.authStore.isValid;if(T&&x(h.authStore.token,y))try{await k()}catch{T=!1}T||await A();const C=p.headers||{};for(let O in C)if(O.toLowerCase()=="authorization"&&_==C[O]&&h.authStore.token){C[O]=h.authStore.token;break}return p.headers=C,l?l(f,p):{url:f,sendOptions:p}}}(this.client,o,()=>this.authRefresh({autoRefresh:!0}),()=>this.authWithPassword(e,t,Object.assign({autoRefresh:!0},n))),a}async authRefresh(e,t){let s={method:"POST"};return s=d("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).",s,e,t),this.client.send(this.baseCrudPath+"/auth-refresh",s).then(this.authResponse.bind(this))}async requestPasswordReset(e,t,s){let i={method:"POST",body:{email:e}};return i=d("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).",i,t,s),this.client.send(this.baseCrudPath+"/request-password-reset",i).then(()=>!0)}async confirmPasswordReset(e,t,s,i,n){let o={method:"POST",body:{token:e,password:t,passwordConfirm:s}};return o=d("This form of confirmPasswordReset(resetToken, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(resetToken, password, passwordConfirm, options?).",o,i,n),this.client.send(this.baseCrudPath+"/confirm-password-reset",o).then(()=>!0)}}const V=["requestKey","$cancelKey","$autoCancel","fetch","headers","body","query","params","cache","credentials","headers","integrity","keepalive","method","mode","redirect","referrer","referrerPolicy","signal","window"];function N(r){if(r){r.query=r.query||{};for(let e in r)V.includes(e)||(r.query[e]=r[e],delete r[e])}}class F extends g{constructor(){super(...arguments),this.clientId="",this.eventSource=null,this.subscriptions={},this.lastSentSubscriptions=[],this.maxConnectTimeout=15e3,this.reconnectAttempts=0,this.maxReconnectAttempts=1/0,this.predefinedReconnectIntervals=[200,300,500,1e3,1200,1500,2e3],this.pendingConnects=[]}get isConnected(){return!!this.eventSource&&!!this.clientId&&!this.pendingConnects.length}async subscribe(e,t,s){if(!e)throw new Error("topic must be set.");let i=e;if(s){N(s);const o="options="+encodeURIComponent(JSON.stringify({query:s.query,headers:s.headers}));i+=(i.includes("?")?"&":"?")+o}const n=function(o){const a=o;let c;try{c=JSON.parse(a?.data)}catch{}t(c||{})};return this.subscriptions[i]||(this.subscriptions[i]=[]),this.subscriptions[i].push(n),this.isConnected?this.subscriptions[i].length===1?await this.submitSubscriptions():this.eventSource?.addEventListener(i,n):await this.connect(),async()=>this.unsubscribeByTopicAndListener(e,n)}async unsubscribe(e){let t=!1;if(e){const s=this.getSubscriptionsByTopic(e);for(let i in s)if(this.hasSubscriptionListeners(i)){for(let n of this.subscriptions[i])this.eventSource?.removeEventListener(i,n);delete this.subscriptions[i],t||(t=!0)}}else this.subscriptions={};this.hasSubscriptionListeners()?t&&await this.submitSubscriptions():this.disconnect()}async unsubscribeByPrefix(e){let t=!1;for(let s in this.subscriptions)if((s+"?").startsWith(e)){t=!0;for(let i of this.subscriptions[s])this.eventSource?.removeEventListener(s,i);delete this.subscriptions[s]}t&&(this.hasSubscriptionListeners()?await this.submitSubscriptions():this.disconnect())}async unsubscribeByTopicAndListener(e,t){let s=!1;const i=this.getSubscriptionsByTopic(e);for(let n in i){if(!Array.isArray(this.subscriptions[n])||!this.subscriptions[n].length)continue;let o=!1;for(let a=this.subscriptions[n].length-1;a>=0;a--)this.subscriptions[n][a]===t&&(o=!0,delete this.subscriptions[n][a],this.subscriptions[n].splice(a,1),this.eventSource?.removeEventListener(n,t));o&&(this.subscriptions[n].length||delete this.subscriptions[n],s||this.hasSubscriptionListeners(n)||(s=!0))}this.hasSubscriptionListeners()?s&&await this.submitSubscriptions():this.disconnect()}hasSubscriptionListeners(e){if(this.subscriptions=this.subscriptions||{},e)return!!this.subscriptions[e]?.length;for(let t in this.subscriptions)if(this.subscriptions[t]?.length)return!0;return!1}async submitSubscriptions(){if(this.clientId)return this.addAllSubscriptionListeners(),this.lastSentSubscriptions=this.getNonEmptySubscriptionKeys(),this.client.send("/api/realtime",{method:"POST",body:{clientId:this.clientId,subscriptions:this.lastSentSubscriptions},requestKey:this.getSubscriptionsCancelKey()}).catch(e=>{if(!e?.isAbort)throw e})}getSubscriptionsCancelKey(){return"realtime_"+this.clientId}getSubscriptionsByTopic(e){const t={};e=e.includes("?")?e:e+"?";for(let s in this.subscriptions)(s+"?").startsWith(e)&&(t[s]=this.subscriptions[s]);return t}getNonEmptySubscriptionKeys(){const e=[];for(let t in this.subscriptions)this.subscriptions[t].length&&e.push(t);return e}addAllSubscriptionListeners(){if(this.eventSource){this.removeAllSubscriptionListeners();for(let e in this.subscriptions)for(let t of this.subscriptions[e])this.eventSource.addEventListener(e,t)}}removeAllSubscriptionListeners(){if(this.eventSource)for(let e in this.subscriptions)for(let t of this.subscriptions[e])this.eventSource.removeEventListener(e,t)}async connect(){if(!(this.reconnectAttempts>0))return new Promise((e,t)=>{this.pendingConnects.push({resolve:e,reject:t}),this.pendingConnects.length>1||this.initConnect()})}initConnect(){this.disconnect(!0),clearTimeout(this.connectTimeoutId),this.connectTimeoutId=setTimeout(()=>{this.connectErrorHandler(new Error("EventSource connect took too long."))},this.maxConnectTimeout),this.eventSource=new EventSource(this.client.buildUrl("/api/realtime")),this.eventSource.onerror=e=>{this.connectErrorHandler(new Error("Failed to establish realtime connection."))},this.eventSource.addEventListener("PB_CONNECT",e=>{const t=e;this.clientId=t?.lastEventId,this.submitSubscriptions().then(async()=>{let s=3;for(;this.hasUnsentSubscriptions()&&s>0;)s--,await this.submitSubscriptions()}).then(()=>{for(let i of this.pendingConnects)i.resolve();this.pendingConnects=[],this.reconnectAttempts=0,clearTimeout(this.reconnectTimeoutId),clearTimeout(this.connectTimeoutId);const s=this.getSubscriptionsByTopic("PB_CONNECT");for(let i in s)for(let n of s[i])n(e)}).catch(s=>{this.clientId="",this.connectErrorHandler(s)})})}hasUnsentSubscriptions(){const e=this.getNonEmptySubscriptionKeys();if(e.length!=this.lastSentSubscriptions.length)return!0;for(const t of e)if(!this.lastSentSubscriptions.includes(t))return!0;return!1}connectErrorHandler(e){if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),!this.clientId&&!this.reconnectAttempts||this.reconnectAttempts>this.maxReconnectAttempts){for(let s of this.pendingConnects)s.reject(new u(e));return this.pendingConnects=[],void this.disconnect()}this.disconnect(!0);const t=this.predefinedReconnectIntervals[this.reconnectAttempts]||this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length-1];this.reconnectAttempts++,this.reconnectTimeoutId=setTimeout(()=>{this.initConnect()},t)}disconnect(e=!1){if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),this.removeAllSubscriptionListeners(),this.client.cancelRequest(this.getSubscriptionsCancelKey()),this.eventSource?.close(),this.eventSource=null,this.clientId="",!e){this.reconnectAttempts=0;for(let t of this.pendingConnects)t.resolve();this.pendingConnects=[]}}}class z extends R{constructor(e,t){super(e),this.collectionIdOrName=t}get baseCrudPath(){return this.baseCollectionPath+"/records"}get baseCollectionPath(){return"/api/collections/"+encodeURIComponent(this.collectionIdOrName)}async subscribe(e,t,s){if(!e)throw new Error("Missing topic.");if(!t)throw new Error("Missing subscription callback.");return this.client.realtime.subscribe(this.collectionIdOrName+"/"+e,t,s)}async unsubscribe(e){return e?this.client.realtime.unsubscribe(this.collectionIdOrName+"/"+e):this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)}async getFullList(e,t){if(typeof e=="number")return super.getFullList(e,t);const s=Object.assign({},e,t);return super.getFullList(s)}async getList(e=1,t=30,s){return super.getList(e,t,s)}async getFirstListItem(e,t){return super.getFirstListItem(e,t)}async getOne(e,t){return super.getOne(e,t)}async create(e,t){return super.create(e,t)}async update(e,t,s){return super.update(e,t,s).then(i=>(this.client.authStore.model?.id!==i?.id||this.client.authStore.model?.collectionId!==this.collectionIdOrName&&this.client.authStore.model?.collectionName!==this.collectionIdOrName||this.client.authStore.save(this.client.authStore.token,i),i))}async delete(e,t){return super.delete(e,t).then(s=>(!s||this.client.authStore.model?.id!==e||this.client.authStore.model?.collectionId!==this.collectionIdOrName&&this.client.authStore.model?.collectionName!==this.collectionIdOrName||this.client.authStore.clear(),s))}authResponse(e){const t=this.decode(e?.record||{});return this.client.authStore.save(e?.token,t),Object.assign({},e,{token:e?.token||"",record:t})}async listAuthMethods(e){return e=Object.assign({method:"GET"},e),this.client.send(this.baseCollectionPath+"/auth-methods",e).then(t=>Object.assign({},t,{usernamePassword:!!t?.usernamePassword,emailPassword:!!t?.emailPassword,authProviders:Array.isArray(t?.authProviders)?t?.authProviders:[]}))}async authWithPassword(e,t,s,i){let n={method:"POST",body:{identity:e,password:t}};return n=d("This form of authWithPassword(usernameOrEmail, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(usernameOrEmail, pass, options?).",n,s,i),this.client.send(this.baseCollectionPath+"/auth-with-password",n).then(o=>this.authResponse(o))}async authWithOAuth2Code(e,t,s,i,n,o,a){let c={method:"POST",body:{provider:e,code:t,codeVerifier:s,redirectUrl:i,createData:n}};return c=d("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, options?).",c,o,a),this.client.send(this.baseCollectionPath+"/auth-with-oauth2",c).then(h=>this.authResponse(h))}async authWithOAuth2(...e){if(e.length>1||typeof e?.[0]=="string")return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."),this.authWithOAuth2Code(e?.[0]||"",e?.[1]||"",e?.[2]||"",e?.[3]||"",e?.[4]||{},e?.[5]||{},e?.[6]||{});const t=e?.[0]||{},s=(await this.listAuthMethods()).authProviders.find(c=>c.name===t.provider);if(!s)throw new u(new Error(`Missing or invalid provider "${t.provider}".`));const i=this.client.buildUrl("/api/oauth2-redirect"),n=new F(this.client);let o=null;function a(){o?.close(),n.unsubscribe()}return t.urlCallback||(o=L(void 0)),new Promise(async(c,h)=>{try{await n.subscribe("@oauth2",async l=>{const S=n.clientId;try{if(!l.state||S!==l.state)throw new Error("State parameters don't match.");if(l.error||!l.code)throw new Error("OAuth2 redirect error or missing code: "+l.error);const m=Object.assign({},t);delete m.provider,delete m.scopes,delete m.createData,delete m.urlCallback;const f=await this.authWithOAuth2Code(s.name,l.code,s.codeVerifier,i,t.createData,m);c(f)}catch(m){h(new u(m))}a()});const y={state:n.clientId};t.scopes?.length&&(y.scope=t.scopes.join(" "));const k=this._replaceQueryParams(s.authUrl+i,y);await(t.urlCallback||function(l){o?o.location.href=l:o=L(l)})(k)}catch(y){a(),h(new u(y))}})}async authRefresh(e,t){let s={method:"POST"};return s=d("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).",s,e,t),this.client.send(this.baseCollectionPath+"/auth-refresh",s).then(i=>this.authResponse(i))}async requestPasswordReset(e,t,s){let i={method:"POST",body:{email:e}};return i=d("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).",i,t,s),this.client.send(this.baseCollectionPath+"/request-password-reset",i).then(()=>!0)}async confirmPasswordReset(e,t,s,i,n){let o={method:"POST",body:{token:e,password:t,passwordConfirm:s}};return o=d("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).",o,i,n),this.client.send(this.baseCollectionPath+"/confirm-password-reset",o).then(()=>!0)}async requestVerification(e,t,s){let i={method:"POST",body:{email:e}};return i=d("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).",i,t,s),this.client.send(this.baseCollectionPath+"/request-verification",i).then(()=>!0)}async confirmVerification(e,t,s){let i={method:"POST",body:{token:e}};return i=d("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).",i,t,s),this.client.send(this.baseCollectionPath+"/confirm-verification",i).then(()=>{const n=w(e),o=this.client.authStore.model;return o&&!o.verified&&o.id===n.id&&o.collectionId===n.collectionId&&(o.verified=!0,this.client.authStore.save(this.client.authStore.token,o)),!0})}async requestEmailChange(e,t,s){let i={method:"POST",body:{newEmail:e}};return i=d("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).",i,t,s),this.client.send(this.baseCollectionPath+"/request-email-change",i).then(()=>!0)}async confirmEmailChange(e,t,s,i){let n={method:"POST",body:{token:e,password:t}};return n=d("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).",n,s,i),this.client.send(this.baseCollectionPath+"/confirm-email-change",n).then(()=>{const o=w(e),a=this.client.authStore.model;return a&&a.id===o.id&&a.collectionId===o.collectionId&&this.client.authStore.clear(),!0})}async listExternalAuths(e,t){return t=Object.assign({method:"GET"},t),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e)+"/external-auths",t)}async unlinkExternalAuth(e,t,s){return s=Object.assign({method:"DELETE"},s),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(e)+"/external-auths/"+encodeURIComponent(t),s).then(()=>!0)}_replaceQueryParams(e,t={}){let s=e,i="";e.indexOf("?")>=0&&(s=e.substring(0,e.indexOf("?")),i=e.substring(e.indexOf("?")+1));const n={},o=i.split("&");for(const a of o){if(a=="")continue;const c=a.split("=");n[decodeURIComponent(c[0].replace(/\+/g," "))]=decodeURIComponent((c[1]||"").replace(/\+/g," "))}for(let a in t)t.hasOwnProperty(a)&&(t[a]==null?delete n[a]:n[a]=t[a]);i="";for(let a in n)n.hasOwnProperty(a)&&(i!=""&&(i+="&"),i+=encodeURIComponent(a.replace(/%20/g,"+"))+"="+encodeURIComponent(n[a].replace(/%20/g,"+")));return i!=""?s+"?"+i:s}}function L(r){if(typeof window>"u"||!window?.open)throw new u(new Error("Not in a browser context - please pass a custom urlCallback function."));let e=1024,t=768,s=window.innerWidth,i=window.innerHeight;e=e>s?s:e,t=t>i?i:t;let n=s/2-e/2,o=i/2-t/2;return window.open(r,"popup_window","width="+e+",height="+t+",top="+o+",left="+n+",resizable,menubar=no")}class Q extends R{get baseCrudPath(){return"/api/collections"}async import(e,t=!1,s){return s=Object.assign({method:"PUT",body:{collections:e,deleteMissing:t}},s),this.client.send(this.baseCrudPath+"/import",s).then(()=>!0)}}class Y extends g{async getList(e=1,t=30,s){return(s=Object.assign({method:"GET"},s)).query=Object.assign({page:e,perPage:t},s.query),this.client.send("/api/logs",s)}async getOne(e,t){if(!e)throw new u({url:this.client.buildUrl("/api/logs/"),status:404,response:{code:404,message:"Missing required log id.",data:{}}});return t=Object.assign({method:"GET"},t),this.client.send("/api/logs/"+encodeURIComponent(e),t)}async getStats(e){return e=Object.assign({method:"GET"},e),this.client.send("/api/logs/stats",e)}}class X extends g{async check(e){return e=Object.assign({method:"GET"},e),this.client.send("/api/health",e)}}class Z extends g{getUrl(e,t,s={}){if(!t||!e?.id||!e?.collectionId&&!e?.collectionName)return"";const i=[];i.push("api"),i.push("files"),i.push(encodeURIComponent(e.collectionId||e.collectionName)),i.push(encodeURIComponent(e.id)),i.push(encodeURIComponent(t));let n=this.client.buildUrl(i.join("/"));if(Object.keys(s).length){s.download===!1&&delete s.download;const o=new URLSearchParams(s);n+=(n.includes("?")?"&":"?")+o}return n}async getToken(e){return e=Object.assign({method:"POST"},e),this.client.send("/api/files/token",e).then(t=>t?.token||"")}}class ee extends g{async getFullList(e){return e=Object.assign({method:"GET"},e),this.client.send("/api/backups",e)}async create(e,t){return t=Object.assign({method:"POST",body:{name:e}},t),this.client.send("/api/backups",t).then(()=>!0)}async upload(e,t){return t=Object.assign({method:"POST",body:e},t),this.client.send("/api/backups/upload",t).then(()=>!0)}async delete(e,t){return t=Object.assign({method:"DELETE"},t),this.client.send(`/api/backups/${encodeURIComponent(e)}`,t).then(()=>!0)}async restore(e,t){return t=Object.assign({method:"POST"},t),this.client.send(`/api/backups/${encodeURIComponent(e)}/restore`,t).then(()=>!0)}getDownloadUrl(e,t){return this.client.buildUrl(`/api/backups/${encodeURIComponent(t)}?token=${encodeURIComponent(e)}`)}}class te{constructor(e="/",t,s="en-US"){this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseUrl=e,this.lang=s,this.authStore=t||new G,this.admins=new J(this),this.collections=new Q(this),this.files=new Z(this),this.logs=new Y(this),this.settings=new H(this),this.realtime=new F(this),this.health=new X(this),this.backups=new ee(this)}collection(e){return this.recordServices[e]||(this.recordServices[e]=new z(this,e)),this.recordServices[e]}autoCancellation(e){return this.enableAutoCancellation=!!e,this}cancelRequest(e){return this.cancelControllers[e]&&(this.cancelControllers[e].abort(),delete this.cancelControllers[e]),this}cancelAllRequests(){for(let e in this.cancelControllers)this.cancelControllers[e].abort();return this.cancelControllers={},this}filter(e,t){if(!t)return e;for(let s in t){let i=t[s];switch(typeof i){case"boolean":case"number":i=""+i;break;case"string":i="'"+i.replace(/'/g,"\\'")+"'";break;default:i=i===null?"null":i instanceof Date?"'"+i.toISOString().replace("T"," ")+"'":"'"+JSON.stringify(i).replace(/'/g,"\\'")+"'"}e=e.replaceAll("{:"+s+"}",i)}return e}getFileUrl(e,t,s={}){return this.files.getUrl(e,t,s)}buildUrl(e){let t=this.baseUrl;return typeof window>"u"||!window.location||t.startsWith("https://")||t.startsWith("http://")||(t=window.location.origin?.endsWith("/")?window.location.origin.substring(0,window.location.origin.length-1):window.location.origin||"",this.baseUrl.startsWith("/")||(t+=window.location.pathname||"/",t+=t.endsWith("/")?"":"/"),t+=this.baseUrl),e&&(t+=t.endsWith("/")?"":"/",t+=e.startsWith("/")?e.substring(1):e),t}async send(e,t){t=this.initSendOptions(e,t);let s=this.buildUrl(e);if(this.beforeSend){const i=Object.assign({},await this.beforeSend(s,t));i.url!==void 0||i.options!==void 0?(s=i.url||s,t=i.options||t):Object.keys(i).length&&(t=i,console?.warn&&console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))}if(t.query!==void 0){const i=this.serializeQueryParams(t.query);i&&(s+=(s.includes("?")?"&":"?")+i),delete t.query}return this.getHeader(t.headers,"Content-Type")=="application/json"&&t.body&&typeof t.body!="string"&&(t.body=JSON.stringify(t.body)),(t.fetch||fetch)(s,t).then(async i=>{let n={};try{n=await i.json()}catch{}if(this.afterSend&&(n=await this.afterSend(i,n)),i.status>=400)throw new u({url:i.url,status:i.status,data:n});return n}).catch(i=>{throw new u(i)})}initSendOptions(e,t){if((t=Object.assign({method:"GET"},t)).body=this.convertToFormDataIfNeeded(t.body),N(t),t.query=Object.assign({},t.params,t.query),t.requestKey===void 0&&(t.$autoCancel===!1||t.query.$autoCancel===!1?t.requestKey=null:(t.$cancelKey||t.query.$cancelKey)&&(t.requestKey=t.$cancelKey||t.query.$cancelKey)),delete t.$autoCancel,delete t.query.$autoCancel,delete t.$cancelKey,delete t.query.$cancelKey,this.getHeader(t.headers,"Content-Type")!==null||this.isFormData(t.body)||(t.headers=Object.assign({},t.headers,{"Content-Type":"application/json"})),this.getHeader(t.headers,"Accept-Language")===null&&(t.headers=Object.assign({},t.headers,{"Accept-Language":this.lang})),this.authStore.token&&this.getHeader(t.headers,"Authorization")===null&&(t.headers=Object.assign({},t.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&t.requestKey!==null){const s=t.requestKey||(t.method||"GET")+e;delete t.requestKey,this.cancelRequest(s);const i=new AbortController;this.cancelControllers[s]=i,t.signal=i.signal}return t}convertToFormDataIfNeeded(e){if(typeof FormData>"u"||e===void 0||typeof e!="object"||e===null||this.isFormData(e)||!this.hasBlobField(e))return e;const t=new FormData;for(const s in e){const i=e[s];if(typeof i!="object"||this.hasBlobField({data:i})){const n=Array.isArray(i)?i:[i];for(let o of n)t.append(s,o)}else{let n={};n[s]=i,t.append("@jsonPayload",JSON.stringify(n))}}return t}hasBlobField(e){for(const t in e){const s=Array.isArray(e[t])?e[t]:[e[t]];for(const i of s)if(typeof Blob<"u"&&i instanceof Blob||typeof File<"u"&&i instanceof File)return!0}return!1}getHeader(e,t){e=e||{},t=t.toLowerCase();for(let s in e)if(s.toLowerCase()==t)return e[s];return null}isFormData(e){return e&&(e.constructor.name==="FormData"||typeof FormData<"u"&&e instanceof FormData)}serializeQueryParams(e){const t=[];for(const s in e){if(e[s]===null)continue;const i=e[s],n=encodeURIComponent(s);if(Array.isArray(i))for(const o of i)t.push(n+"="+encodeURIComponent(o));else i instanceof Date?t.push(n+"="+encodeURIComponent(i.toISOString())):typeof i!==null&&typeof i=="object"?t.push(n+"="+encodeURIComponent(JSON.stringify(i))):t.push(n+"="+encodeURIComponent(i))}return t.join("&")}}const b=new te(D);b.authStore.onChange((r,e)=>{console.log("client",e),K.set(e),document.cookie=b.authStore.exportToCookie({httpOnly:!1})},!0);const ae={async login(r,e){let t;try{t=await b.collection("users").authWithPassword(r,e,{expand:"role"})}catch{}return t},async logout(){b.authStore.clear()},async provider(r){return await b.collection("users").authWithOAuth2({provider:r,expand:"role",createData:{},urlCallback:t=>{window.open(t+"&prompt=consent","_blank")}})}};async function ce({target:r}){let e,t;if(r instanceof HTMLFormElement){const s=String(r.action.split("?/").pop()),i=new FormData(r);try{i.get("id")?e=await b.collection(s).update(String(i.get("id")),i):e=await b.collection(s).create(i)}catch(n){t=Object.keys(n.data.data).length>0?n.data.data:n.message,I.set([{error:t}])}r.reset()}return e}export{ie as P,ae as a,ne as b,b as d,re as l,oe as p,ce as s,I as t,K as u};
