# .npmrc

```
engine-strict=true

```

# .prettierignore

```
# Package Managers
package-lock.json
pnpm-lock.yaml
yarn.lock
bun.lock
bun.lockb

# Miscellaneous
/static/

```

# .prettierrc

```
{
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "none",
	"printWidth": 100,
	"plugins": ["prettier-plugin-svelte"],
	"overrides": [
		{
			"files": "*.svelte",
			"options": {
				"parser": "svelte"
			}
		}
	]
}

```

# docs\_app\env.js

```js
export const env={}
```

# docs\_app\immutable\chunks\B7-cwmcf.js

```js
import{N as a,H as f,h as p,I as _}from"./DPbs4qE5.js";import{b as c,r as u}from"./BRyQJnYS.js";const d=Symbol("is custom element"),g=Symbol("is html");function E(r,s,t,o){var e=N(r);p&&(e[s]=r.getAttribute(s),r.nodeName==="LINK")||e[s]!==(e[s]=t)&&(t==null?r.removeAttribute(s):typeof t!="string"&&m(r).includes(s)?r[s]=t:r.setAttribute(s,t))}function N(r){return r.__attributes??={[d]:r.nodeName.includes("-"),[g]:r.namespaceURI===a}}var n=new Map;function m(r){var s=n.get(r.nodeName);if(s)return s;n.set(r.nodeName,s=[]);for(var t,o=r,e=Element.prototype;e!==o;){t=_(o);for(var i in t)t[i].set&&s.push(i);o=f(o)}return s}function M(r,s){return c+u(r,s)}export{M as r,E as s};

```

# docs\_app\immutable\chunks\Bh_O582o.js

```js
import{J as q,K as A,L as D,M as V,O as T,P as $,Q as O,q as z,R as M,S as B,T as F,U as S,V as b,W as k,g as J,o as g,X as K,Y as Q,Z as X,_ as Z,$ as G,a0 as ee,a1 as te,l as ae,h as x,p as ne,v as l,j as re,c as se,a2 as y,x as oe,a3 as ie,a4 as j,a5 as le,y as N,a6 as ue,a7 as ce,a8 as fe,a9 as de,aa as _e,ab as pe,ac as ve}from"./DPbs4qE5.js";import{c as he}from"./D7zcbScl.js";const ge=["touchstart","touchmove"];function ye(e){return ge.includes(e)}const me=new Set,P=new Set;let L=null;function w(e){var t=this,n=t.ownerDocument,u=e.type,s=e.composedPath?.()||[],a=s[0]||e.target;L=e;var o=0,c=L===e&&e.__root;if(c){var d=s.indexOf(c);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var p=s.indexOf(t);if(p===-1)return;d<=p&&(o=d)}if(a=s[o]||e.target,a!==t){q(e,"currentTarget",{configurable:!0,get(){return a||n}});var E=T,f=$;A(null),D(null);try{for(var r,i=[];a!==null;){var v=a.assignedSlot||a.parentNode||a.host||null;try{var _=a["__"+u];if(_!=null&&(!a.disabled||e.target===a))if(V(_)){var[U,...W]=_;U.apply(a,[e,...W])}else _.call(a,e)}catch(m){r?i.push(m):r=m}if(e.cancelBubble||v===t||v===null)break;a=v}if(r){for(let m of i)queueMicrotask(()=>{throw m});throw r}}finally{e.__root=t,delete e.currentTarget,A(E),D(f)}}}function Ae(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function I(e,t){return Y(e,t)}function be(e,t){O(),t.intro=t.intro??!1;const n=t.target,u=x,s=g;try{for(var a=z(n);a&&(a.nodeType!==M||a.data!==B);)a=F(a);if(!a)throw S;b(!0),k(a),J();const o=Y(e,{...t,anchor:a});if(g===null||g.nodeType!==M||g.data!==K)throw Q(),S;return b(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(c=>c.startsWith("https://svelte.dev/e/")))throw o;return o!==S&&console.warn("Failed to hydrate: ",o),t.recover===!1&&X(),O(),Z(n),b(!1),I(e,t)}finally{b(u),k(s)}}const h=new Map;function Y(e,{target:t,anchor:n,props:u={},events:s,context:a,intro:o=!0}){O();var c=new Set,d=f=>{for(var r=0;r<f.length;r++){var i=f[r];if(!c.has(i)){c.add(i);var v=ye(i);t.addEventListener(i,w,{passive:v});var _=h.get(i);_===void 0?(document.addEventListener(i,w,{passive:v}),h.set(i,1)):h.set(i,_+1)}}};d(G(me)),P.add(d);var p=void 0,E=ee(()=>{var f=n??t.appendChild(te());return ae(()=>{if(a){ne({});var r=l;r.c=a}s&&(u.$$events=s),x&&re(f,null),p=e(f,u)||{},x&&($.nodes_end=g),a&&se()}),()=>{for(var r of c){t.removeEventListener(r,w);var i=h.get(r);--i===0?(document.removeEventListener(r,w),h.delete(r)):h.set(r,i)}P.delete(d),f!==n&&f.parentNode?.removeChild(f)}});return C.set(p,E),p}let C=new WeakMap;function we(e,t){const n=C.get(e);return n?(C.delete(e),n(t)):Promise.resolve()}function Ee(){return T===null&&ie(),(T.ac??=new AbortController).signal}function H(e){l===null&&y(),le&&l.l!==null?R(l).m.push(e):oe(()=>{const t=N(e);if(typeof t=="function")return t})}function Se(e){l===null&&y(),H(()=>()=>N(e))}function Te(e,t,{bubbles:n=!1,cancelable:u=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:u})}function Oe(){const e=l;return e===null&&y(),(t,n,u)=>{const s=e.s.$$events?.[t];if(s){const a=V(s)?s.slice():[s],o=Te(t,n,u);for(const c of a)c.call(e.x,o);return!o.defaultPrevented}return!0}}function xe(e){l===null&&y(),l.l===null&&j(),R(l).b.push(e)}function Ce(e){l===null&&y(),l.l===null&&j(),R(l).a.push(e)}function R(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const De=Object.freeze(Object.defineProperty({__proto__:null,afterUpdate:Ce,beforeUpdate:xe,createEventDispatcher:Oe,createRawSnippet:he,flushSync:ue,getAbortSignal:Ee,getAllContexts:ce,getContext:fe,hasContext:de,hydrate:be,mount:I,onDestroy:Se,onMount:H,setContext:_e,settled:pe,tick:ve,unmount:we,untrack:N},Symbol.toStringTag,{value:"Module"}));export{De as a,be as h,I as m,H as o,Ae as s,we as u};

```

# docs\_app\immutable\chunks\BRyQJnYS.js

```js
const w=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function x(t){const s=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${m(t).map(a=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(i)return s.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/([^]*))?";const c=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(c)return s.push({name:c[1],matcher:c[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const n=a.split(/\[(.+?)\](?!\])/);return"/"+n.map((e,l)=>{if(l%2){if(e.startsWith("x+"))return h(String.fromCharCode(parseInt(e.slice(2),16)));if(e.startsWith("u+"))return h(String.fromCharCode(...e.slice(2).split("-").map(g=>parseInt(g,16))));const o=w.exec(e),[,u,p,_,d]=o;return s.push({name:_,matcher:d,optional:!!u,rest:!!p,chained:p?l===1&&n[0]==="":!1}),p?"([^]*?)":u?"([^/]*)?":"([^/]+?)"}return h(e)}).join("")}).join("")}/?$`),params:s}}function $(t){return t!==""&&!/^\([^)]+\)$/.test(t)}function m(t){return t.slice(1).split("/").filter($)}function j(t,s,f){const a={},i=t.slice(1),c=i.filter(r=>r!==void 0);let n=0;for(let r=0;r<s.length;r+=1){const e=s[r];let l=i[r-n];if(e.chained&&e.rest&&n&&(l=i.slice(r-n,r+1).filter(o=>o).join("/"),n=0),l===void 0){e.rest&&(a[e.name]="");continue}if(!e.matcher||f[e.matcher](l)){a[e.name]=l;const o=s[r+1],u=i[r+1];o&&!o.rest&&o.optional&&u&&e.chained&&(n=0),!o&&!u&&Object.keys(a).length===c.length&&(n=0);continue}if(e.optional&&e.chained){n++;continue}return}if(!n)return a}function h(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}const b=/\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;function k(t,s){return"/"+m(t).map(a=>a.replace(b,(i,c,n,r)=>{const e=s[r];if(!e){if(c||n&&e!==void 0)return"";throw new Error(`Missing parameter '${r}' in route ${t}`)}if(e.startsWith("/")||e.endsWith("/"))throw new Error(`Parameter '${r}' in route ${t} cannot start or end with a slash -- this would cause an invalid route like foo//bar`);return e})).filter(Boolean).join("/")}const v=globalThis.__sveltekit_8fm3zq?.base??"/LearningDays",C=globalThis.__sveltekit_8fm3zq?.assets??v;export{C as a,v as b,j as e,x as p,k as r};

```

# docs\_app\immutable\chunks\D7zcbScl.js

```js
import{e as c,h as o,g as _,i as d,j as l,k as h,E as m,l as u,n as v,m as g,o as f,q as y}from"./DPbs4qE5.js";function b(r,n,...s){var t=r,e=v,a;c(()=>{e!==(e=n())&&(a&&(g(a),a=null),a=u(()=>e(t,...s)))},m),o&&(t=f)}function R(r){return(n,...s)=>{var t=r(...s),e;if(o)e=f,_();else{var a=t.render().trim(),p=d(a);e=y(p),n.before(e)}const i=t.setup?.(e);l(e,e),typeof i=="function"&&h(i)}}export{R as c,b as s};

```

# docs\_app\immutable\chunks\DEjW4HI6.js

```js
import{G as a}from"./DPbs4qE5.js";a();

```

# docs\_app\immutable\chunks\DPbs4qE5.js

```js
var Ie=Array.isArray,Fe=Array.prototype.indexOf,Sn=Array.from,Wt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,Me=Object.getOwnPropertyDescriptors,je=Object.prototype,qe=Array.prototype,re=Object.getPrototypeOf,$t=Object.isExtensible;const On=()=>{};function Nn(t){return t()}function se(t){for(var e=0;e<t.length;e++)t[e]()}function Le(){var t,e,n=new Promise((r,a)=>{t=r,e=a});return{promise:n,resolve:t,reject:e}}const k=2,Ct=4,gt=8,_t=16,C=32,W=64,ae=128,R=256,dt=512,E=1024,S=2048,q=4096,M=8192,et=16384,It=32768,ie=65536,Zt=1<<17,Ye=1<<18,Ft=1<<19,Mt=1<<20,Rt=1<<21,jt=1<<22,Y=1<<23,lt=Symbol("$state"),Dn=Symbol("legacy props"),qt=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Lt=3,le=8;function Ue(){throw new Error("https://svelte.dev/e/await_outside_boundary")}function Be(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function He(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ve(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ze(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ge(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Ke(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Cn(){throw new Error("https://svelte.dev/e/get_abort_signal_outside_reaction")}function In(){throw new Error("https://svelte.dev/e/hydration_failed")}function Fn(t){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function Mn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function We(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function $e(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ze(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const jn=1,qn=2,Ln=4,Yn=8,Un=16,Xe=1,Je=2,Qe="[",tn="[!",en="]",Yt={},m=Symbol(),Bn="http://www.w3.org/1999/xhtml";function Ut(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function Hn(t){O=t}let g;function X(t){if(t===null)throw Ut(),Yt;return g=t}function nn(){return X($(g))}function Vn(t){if(O){if($(g)!==null)throw Ut(),Yt;g=t}}function zn(t=1){if(O){for(var e=t,n=g;e--;)n=$(n);g=n}}function Gn(){for(var t=0,e=g;;){if(e.nodeType===le){var n=e.data;if(n===en){if(t===0)return e;t-=1}else(n===Qe||n===tn)&&(t+=1)}var r=$(e);e.remove(),e=r}}function Kn(t){if(!t||t.nodeType!==le)throw Ut(),Yt;return t.data}function fe(t){return t===this.v}function rn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function ue(t){return!rn(t,this.v)}let mt=!1;function Wn(){mt=!0}let y=null;function pt(t){y=t}function $n(t){return Et().get(t)}function Zn(t,e){return Et().set(t,e),e}function Xn(t){return Et().has(t)}function Jn(){return Et()}function Qn(t,e=!1,n){y={p:y,c:null,e:null,s:t,x:null,l:mt&&!e?{s:null,u:null,$:[]}:null}}function tr(t){var e=y,n=e.e;if(n!==null){e.e=null;for(var r of n)be(r)}return y=e.p,{}}function vt(){return!mt||y!==null&&y.l===null}function Et(t){return y===null&&Be(),y.c??=new Map(sn(y)||void 0)}function sn(t){let e=t.p;for(;e!==null;){const n=e.c;if(n!==null)return n;e=e.p}return null}const an=new WeakMap;function ln(t){var e=_;if(e===null)return c.f|=Y,t;if((e.f&It)===0){if((e.f&ae)===0)throw!e.parent&&t instanceof Error&&oe(t),t;e.b.error(t)}else Bt(t,e)}function Bt(t,e){for(;e!==null;){if((e.f&ae)!==0)try{e.b.error(t);return}catch(n){t=n}e=e.parent}throw t instanceof Error&&oe(t),t}function oe(t){const e=an.get(t);e&&(Wt(t,"message",{value:e.message}),Wt(t,"stack",{value:e.stack}))}let ut=[],St=[];function ce(){var t=ut;ut=[],se(t)}function fn(){var t=St;St=[],se(t)}function er(t){ut.length===0&&queueMicrotask(ce),ut.push(t)}function un(){ut.length>0&&ce(),St.length>0&&fn()}function on(){for(var t=_.b;t!==null&&!t.has_pending_snippet();)t=t.parent;return t===null&&Ue(),t}function Ht(t){var e=k|S,n=c!==null&&(c.f&k)!==0?c:null;return _===null||n!==null&&(n.f&R)!==0?e|=R:_.f|=Ft,{ctx:y,deps:null,effects:null,equals:fe,f:e,fn:t,reactions:null,rv:0,v:m,wv:0,parent:n??_,ac:null}}function cn(t,e){let n=_;n===null&&He();var r=n.b,a=void 0,s=zt(m),l=null,u=!c;return gn(()=>{try{var i=t()}catch(h){i=Promise.reject(h)}var f=()=>i;a=l?.then(f,f)??Promise.resolve(i),l=a;var o=w,v=r.pending;u&&(r.update_pending_count(1),v||o.increment());const p=(h,d=void 0)=>{l=null,v||o.activate(),d?d!==qt&&(s.f|=Y,Dt(s,d)):((s.f&Y)!==0&&(s.f^=Y),Dt(s,h)),u&&(r.update_pending_count(-1),v||o.decrement()),he()};if(a.then(p,h=>p(null,h||"unknown")),o)return()=>{queueMicrotask(()=>o.neuter())}}),new Promise(i=>{function f(o){function v(){o===a?i(s):f(a)}o.then(v,v)}f(a)})}function nr(t){const e=Ht(t);return Se(e),e}function _n(t){const e=Ht(t);return e.equals=ue,e}function _e(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)K(e[n])}}function vn(t){for(var e=t.parent;e!==null;){if((e.f&k)===0)return e;e=e.parent}return null}function Vt(t){var e,n=_;tt(vn(t));try{_e(t),e=Pe(t)}finally{tt(n)}return e}function ve(t){var e=Vt(t);if(t.equals(e)||(t.v=e,t.wv=Ne()),!nt)if(J!==null)J.set(t,t.v);else{var n=(F||(t.f&R)!==0)&&t.deps!==null?q:E;x(t,n)}}function hn(t,e,n){const r=vt()?Ht:_n;if(e.length===0){n(t.map(r));return}var a=w,s=_,l=dn(),u=on();Promise.all(e.map(i=>cn(i))).then(i=>{a?.activate(),l();try{n([...t.map(r),...i])}catch(f){(s.f&et)===0&&Bt(f,s)}a?.deactivate(),he()}).catch(i=>{u.error(i)})}function dn(){var t=_,e=c,n=y;return function(){tt(t),j(e),pt(n)}}function he(){tt(null),j(null),pt(null)}const rt=new Set;let w=null,J=null,Xt=new Set,wt=[];function de(){const t=wt.shift();wt.length>0&&queueMicrotask(de),t()}let V=[],bt=null,Ot=!1,ht=!1;class z{current=new Map;#s=new Map;#a=new Set;#t=0;#u=null;#o=!1;#n=[];#i=[];#r=[];#e=[];#l=[];#c=[];#_=[];skipped_effects=new Set;process(e){V=[];var n=null;if(rt.size>1){n=new Map,J=new Map;for(const[s,l]of this.current)n.set(s,{v:s.v,wv:s.wv}),s.v=l;for(const s of rt)if(s!==this)for(const[l,u]of s.#s)n.has(l)||(n.set(l,{v:l.v,wv:l.wv}),l.v=u)}for(const s of e)this.#h(s);if(this.#n.length===0&&this.#t===0){this.#v();var r=this.#r,a=this.#e;this.#r=[],this.#e=[],this.#l=[],w=null,Jt(r),Jt(a),w===null?w=this:rt.delete(this),this.#u?.resolve()}else this.#f(this.#r),this.#f(this.#e),this.#f(this.#l);if(n){for(const[s,{v:l,wv:u}]of n)s.wv<=u&&(s.v=l);J=null}for(const s of this.#n)ft(s);for(const s of this.#i)ft(s);this.#n=[],this.#i=[]}#h(e){e.f^=E;for(var n=e.first;n!==null;){var r=n.f,a=(r&(C|W))!==0,s=a&&(r&E)!==0,l=s||(r&M)!==0||this.skipped_effects.has(n);if(!l&&n.fn!==null){if(a)n.f^=E;else if((r&E)===0)if((r&Ct)!==0)this.#e.push(n);else if((r&jt)!==0){var u=n.b?.pending?this.#i:this.#n;u.push(n)}else xt(n)&&((n.f&_t)!==0&&this.#l.push(n),ft(n));var i=n.first;if(i!==null){n=i;continue}}var f=n.parent;for(n=n.next;n===null&&f!==null;)n=f.next,f=f.parent}}#f(e){for(const n of e)((n.f&S)!==0?this.#c:this.#_).push(n),x(n,E);e.length=0}capture(e,n){this.#s.has(e)||this.#s.set(e,n),this.current.set(e,e.v)}activate(){w=this}deactivate(){w=null;for(const e of Xt)if(Xt.delete(e),e(),w!==null)break}neuter(){this.#o=!0}flush(){V.length>0?Nt():this.#v(),w===this&&(this.#t===0&&rt.delete(this),this.deactivate())}#v(){if(!this.#o)for(const e of this.#a)e();this.#a.clear()}increment(){this.#t+=1}decrement(){if(this.#t-=1,this.#t===0){for(const e of this.#c)x(e,S),G(e);for(const e of this.#_)x(e,q),G(e);this.#r=[],this.#e=[],this.flush()}else this.deactivate()}add_callback(e){this.#a.add(e)}settled(){return(this.#u??=Le()).promise}static ensure(){if(w===null){const e=w=new z;rt.add(w),ht||z.enqueue(()=>{w===e&&e.flush()})}return w}static enqueue(e){wt.length===0&&queueMicrotask(de),wt.unshift(e)}}function pn(t){var e=ht;ht=!0;try{var n;for(t&&(Nt(),n=t());;){if(un(),V.length===0&&(w?.flush(),V.length===0))return bt=null,n;Nt()}}finally{ht=e}}function Nt(){var t=Z;Ot=!0;try{var e=0;for(te(!0);V.length>0;){var n=z.ensure();if(e++>1e3){var r,a;wn()}n.process(V),U.clear()}}finally{Ot=!1,te(t),bt=null}}function wn(){try{Ke()}catch(t){Bt(t,bt)}}function Jt(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(et|M))===0&&xt(r)){var a=w?w.current.size:0;if(ft(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?ke(r):r.fn=null),w!==null&&w.current.size>a&&(r.f&Mt)!==0)break}}for(;n<e;)G(t[n++])}}function G(t){for(var e=bt=t;e.parent!==null;){e=e.parent;var n=e.f;if(Ot&&e===_&&(n&_t)!==0)return;if((n&(W|C))!==0){if((n&E)===0)return;e.f^=E}}V.push(e)}const U=new Map;function zt(t,e){var n={f:0,v:t,reactions:null,equals:fe,rv:0,wv:0};return n}function I(t,e){const n=zt(t);return Se(n),n}function rr(t,e=!1,n=!0){const r=zt(t);return e||(r.equals=ue),mt&&n&&y!==null&&y.l!==null&&(y.l.s??=[]).push(r),r}function L(t,e,n=!1){c!==null&&(!N||(c.f&Zt)!==0)&&vt()&&(c.f&(k|_t|jt|Zt))!==0&&!P?.includes(t)&&Ze();let r=n?st(e):e;return Dt(t,r)}function Dt(t,e){if(!t.equals(e)){var n=t.v;nt?U.set(t,e):U.set(t,n),t.v=e;var r=z.ensure();r.capture(t,n),(t.f&k)!==0&&((t.f&S)!==0&&Vt(t),x(t,(t.f&R)===0?E:q)),t.wv=Ne(),pe(t,S),vt()&&_!==null&&(_.f&E)!==0&&(_.f&(C|W))===0&&(A===null?Tn([t]):A.push(t))}return e}function At(t){L(t,t.v+1)}function pe(t,e){var n=t.reactions;if(n!==null)for(var r=vt(),a=n.length,s=0;s<a;s++){var l=n[s],u=l.f;if(!(!r&&l===_)){var i=(u&S)===0;i&&x(l,e),(u&k)!==0?pe(l,q):i&&G(l)}}}function st(t){if(typeof t!="object"||t===null||lt in t)return t;const e=re(t);if(e!==je&&e!==qe)return t;var n=new Map,r=Ie(t),a=I(0),s=B,l=u=>{if(B===s)return u();var i=c,f=B;j(null),ne(s);var o=u();return j(i),ne(f),o};return r&&n.set("length",I(t.length)),new Proxy(t,{defineProperty(u,i,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&We();var o=n.get(i);return o===void 0?o=l(()=>{var v=I(f.value);return n.set(i,v),v}):L(o,f.value,!0),!0},deleteProperty(u,i){var f=n.get(i);if(f===void 0){if(i in u){const o=l(()=>I(m));n.set(i,o),At(a)}}else L(f,m),At(a);return!0},get(u,i,f){if(i===lt)return t;var o=n.get(i),v=i in u;if(o===void 0&&(!v||it(u,i)?.writable)&&(o=l(()=>{var h=st(v?u[i]:m),d=I(h);return d}),n.set(i,o)),o!==void 0){var p=at(o);return p===m?void 0:p}return Reflect.get(u,i,f)},getOwnPropertyDescriptor(u,i){var f=Reflect.getOwnPropertyDescriptor(u,i);if(f&&"value"in f){var o=n.get(i);o&&(f.value=at(o))}else if(f===void 0){var v=n.get(i),p=v?.v;if(v!==void 0&&p!==m)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(u,i){if(i===lt)return!0;var f=n.get(i),o=f!==void 0&&f.v!==m||Reflect.has(u,i);if(f!==void 0||_!==null&&(!o||it(u,i)?.writable)){f===void 0&&(f=l(()=>{var p=o?st(u[i]):m,h=I(p);return h}),n.set(i,f));var v=at(f);if(v===m)return!1}return o},set(u,i,f,o){var v=n.get(i),p=i in u;if(r&&i==="length")for(var h=f;h<v.v;h+=1){var d=n.get(h+"");d!==void 0?L(d,m):h in u&&(d=l(()=>I(m)),n.set(h+"",d))}if(v===void 0)(!p||it(u,i)?.writable)&&(v=l(()=>I(void 0)),L(v,st(f)),n.set(i,v));else{p=v.v!==m;var Tt=l(()=>st(f));L(v,Tt)}var Gt=Reflect.getOwnPropertyDescriptor(u,i);if(Gt?.set&&Gt.set.call(o,f),!p){if(r&&typeof i=="string"){var Kt=n.get("length"),kt=Number(i);Number.isInteger(kt)&&kt>=Kt.v&&L(Kt,kt+1)}At(a)}return!0},ownKeys(u){at(a);var i=Reflect.ownKeys(u).filter(v=>{var p=n.get(v);return p===void 0||p.v!==m});for(var[f,o]of n)o.v!==m&&!(f in u)&&i.push(f);return i},setPrototypeOf(){$e()}})}var Qt,we,ye,ge;function sr(){if(Qt===void 0){Qt=window,we=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;ye=it(e,"firstChild").get,ge=it(e,"nextSibling").get,$t(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),$t(n)&&(n.__t=void 0)}}function Q(t=""){return document.createTextNode(t)}function ot(t){return ye.call(t)}function $(t){return ge.call(t)}function ar(t,e){if(!O)return ot(t);var n=ot(g);if(n===null)n=g.appendChild(Q());else if(e&&n.nodeType!==Lt){var r=Q();return n?.before(r),X(r),r}return X(n),n}function ir(t,e){if(!O){var n=ot(t);return n instanceof Comment&&n.data===""?$(n):n}return g}function lr(t,e=1,n=!1){let r=O?g:t;for(var a;e--;)a=r,r=$(r);if(!O)return r;if(n&&r?.nodeType!==Lt){var s=Q();return r===null?a?.after(s):r.before(s),X(s),s}return X(r),r}function fr(t){t.textContent=""}function ur(){return!1}function me(t){var e=c,n=_;j(null),tt(null);try{return t()}finally{j(e),tt(n)}}function Ee(t){_===null&&c===null&&Ge(),c!==null&&(c.f&R)!==0&&_===null&&ze(),nt&&Ve()}function yn(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function D(t,e,n,r=!0){var a=_;a!==null&&(a.f&M)!==0&&(t|=M);var s={ctx:y,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:e,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{ft(s),s.f|=It}catch(i){throw K(s),i}else e!==null&&G(s);var l=n&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&Ft)===0;if(!l&&r&&(a!==null&&yn(s,a),c!==null&&(c.f&k)!==0&&(t&W)===0)){var u=c;(u.effects??=[]).push(s)}return s}function or(t){const e=D(gt,null,!1);return x(e,E),e.teardown=t,e}function cr(t){Ee();var e=_.f,n=!c&&(e&C)!==0&&(e&It)===0;if(n){var r=y;(r.e??=[]).push(t)}else return be(t)}function be(t){return D(Ct|Mt,t,!1)}function _r(t){return Ee(),D(gt|Mt,t,!0)}function vr(t){z.ensure();const e=D(W,t,!0);return(n={})=>new Promise(r=>{n.outro?bn(e,()=>{K(e),r(void 0)}):(K(e),r(void 0))})}function hr(t){return D(Ct,t,!1)}function gn(t){return D(jt|Ft,t,!0)}function dr(t,e=0){return D(gt|e,t,!0)}function pr(t,e=[],n=[]){hn(e,n,r=>{D(gt,()=>t(...r.map(at)),!0)})}function wr(t,e=0){var n=D(_t|e,t,!0);return n}function yr(t,e=!0){return D(C,t,!0,e)}function xe(t){var e=t.teardown;if(e!==null){const n=nt,r=c;ee(!0),j(null);try{e.call(null)}finally{ee(n),j(r)}}}function Te(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const a=n.ac;a!==null&&me(()=>{a.abort(qt)});var r=n.next;(n.f&W)!==0?n.parent=null:K(n,e),n=r}}function mn(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&C)===0&&K(e),e=n}}function K(t,e=!0){var n=!1;(e||(t.f&Ye)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(En(t.nodes_start,t.nodes_end),n=!0),Te(t,e&&!n),yt(t,0),x(t,et);var r=t.transitions;if(r!==null)for(const s of r)s.stop();xe(t);var a=t.parent;a!==null&&a.first!==null&&ke(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function En(t,e){for(;t!==null;){var n=t===e?null:$(t);t.remove(),t=n}}function ke(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function bn(t,e){var n=[];Ae(t,n,!0),xn(n,()=>{K(t),e&&e()})}function xn(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var a of t)a.out(r)}else e()}function Ae(t,e,n){if((t.f&M)===0){if(t.f^=M,t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&e.push(l);for(var r=t.first;r!==null;){var a=r.next,s=(r.f&ie)!==0||(r.f&C)!==0;Ae(r,e,s?n:!1),r=a}}}function gr(t){Re(t,!0)}function Re(t,e){if((t.f&M)!==0){t.f^=M,(t.f&E)===0&&(x(t,S),G(t));for(var n=t.first;n!==null;){var r=n.next,a=(n.f&ie)!==0||(n.f&C)!==0;Re(n,a?e:!1),n=r}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||e)&&s.in()}}let Z=!1;function te(t){Z=t}let nt=!1;function ee(t){nt=t}let c=null,N=!1;function j(t){c=t}let _=null;function tt(t){_=t}let P=null;function Se(t){c!==null&&(P===null?P=[t]:P.push(t))}let b=null,T=0,A=null;function Tn(t){A=t}let Oe=1,ct=0,B=ct;function ne(t){B=t}let F=!1;function Ne(){return++Oe}function xt(t){var e=t.f;if((e&S)!==0)return!0;if((e&q)!==0){var n=t.deps,r=(e&R)!==0;if(n!==null){var a,s,l=(e&dt)!==0,u=r&&_!==null&&!F,i=n.length;if((l||u)&&(_===null||(_.f&et)===0)){var f=t,o=f.parent;for(a=0;a<i;a++)s=n[a],(l||!s?.reactions?.includes(f))&&(s.reactions??=[]).push(f);l&&(f.f^=dt),u&&o!==null&&(o.f&R)===0&&(f.f^=R)}for(a=0;a<i;a++)if(s=n[a],xt(s)&&ve(s),s.wv>t.wv)return!0}(!r||_!==null&&!F)&&x(t,E)}return!1}function De(t,e,n=!0){var r=t.reactions;if(r!==null&&!P?.includes(t))for(var a=0;a<r.length;a++){var s=r[a];(s.f&k)!==0?De(s,e,!1):e===s&&(n?x(s,S):(s.f&E)!==0&&x(s,q),G(s))}}function Pe(t){var e=b,n=T,r=A,a=c,s=F,l=P,u=y,i=N,f=B,o=t.f;b=null,T=0,A=null,F=(o&R)!==0&&(N||!Z||c===null),c=(o&(C|W))===0?t:null,P=null,pt(t.ctx),N=!1,B=++ct,t.ac!==null&&(me(()=>{t.ac.abort(qt)}),t.ac=null);try{t.f|=Rt;var v=t.fn,p=v(),h=t.deps;if(b!==null){var d;if(yt(t,T),h!==null&&T>0)for(h.length=T+b.length,d=0;d<b.length;d++)h[T+d]=b[d];else t.deps=h=b;if(!F||(o&k)!==0&&t.reactions!==null)for(d=T;d<h.length;d++)(h[d].reactions??=[]).push(t)}else h!==null&&T<h.length&&(yt(t,T),h.length=T);if(vt()&&A!==null&&!N&&h!==null&&(t.f&(k|q|S))===0)for(d=0;d<A.length;d++)De(A[d],t);return a!==null&&a!==t&&(ct++,A!==null&&(r===null?r=A:r.push(...A))),(t.f&Y)!==0&&(t.f^=Y),p}catch(Tt){return ln(Tt)}finally{t.f^=Rt,b=e,T=n,A=r,c=a,F=s,P=l,pt(u),N=i,B=f}}function kn(t,e){let n=e.reactions;if(n!==null){var r=Fe.call(n,t);if(r!==-1){var a=n.length-1;a===0?n=e.reactions=null:(n[r]=n[a],n.pop())}}n===null&&(e.f&k)!==0&&(b===null||!b.includes(e))&&(x(e,q),(e.f&(R|dt))===0&&(e.f^=dt),_e(e),yt(e,0))}function yt(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)kn(t,n[r])}function ft(t){var e=t.f;if((e&et)===0){x(t,E);var n=_,r=Z;_=t,Z=!0;try{(e&_t)!==0?mn(t):Te(t),xe(t);var a=Pe(t);t.teardown=typeof a=="function"?a:null,t.wv=Oe;var s}finally{Z=r,_=n}}}async function mr(){await Promise.resolve(),pn()}function Er(){return z.ensure().settled()}function at(t){var e=t.f,n=(e&k)!==0;if(c!==null&&!N){var r=_!==null&&(_.f&et)!==0;if(!r&&!P?.includes(t)){var a=c.deps;if((c.f&Rt)!==0)t.rv<ct&&(t.rv=ct,b===null&&a!==null&&a[T]===t?T++:b===null?b=[t]:(!F||!b.includes(t))&&b.push(t));else{(c.deps??=[]).push(t);var s=t.reactions;s===null?t.reactions=[c]:s.includes(c)||s.push(c)}}}else if(n&&t.deps===null&&t.effects===null){var l=t,u=l.parent;u!==null&&(u.f&R)===0&&(l.f^=R)}if(nt){if(U.has(t))return U.get(t);if(n){l=t;var i=l.v;return((l.f&E)===0&&l.reactions!==null||Ce(l))&&(i=Vt(l)),U.set(l,i),i}}else if(n){if(l=t,J?.has(l))return J.get(l);xt(l)&&ve(l)}if((t.f&Y)!==0)throw t.v;return t.v}function Ce(t){if(t.v===m)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(U.has(e)||(e.f&k)!==0&&Ce(e))return!0;return!1}function br(t){var e=N;try{return N=!0,t()}finally{N=e}}const An=-7169;function x(t,e){t.f=t.f&An|e}function xr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(lt in t)Pt(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&lt in n&&Pt(n)}}}function Pt(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{Pt(t[r],e)}catch{}const n=re(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Me(n);for(let a in r){const s=r[a].get;if(s)try{s.call(t)}catch{}}}}}function Rn(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function H(t,e){var n=_;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function Tr(t,e){var n=(e&Xe)!==0,r=(e&Je)!==0,a,s=!t.startsWith("<!>");return()=>{if(O)return H(g,null),g;a===void 0&&(a=Rn(s?t:"<!>"+t),n||(a=ot(a)));var l=r||we?document.importNode(a,!0):a.cloneNode(!0);if(n){var u=ot(l),i=l.lastChild;H(u,i)}else H(l,l);return l}}function kr(t=""){if(!O){var e=Q(t+"");return H(e,e),e}var n=g;return n.nodeType!==Lt&&(n.before(n=Q()),X(n)),H(n,n),n}function Ar(){if(O)return H(g,null),g;var t=document.createDocumentFragment(),e=document.createComment(""),n=Q();return t.append(e,n),H(e,n),t}function Rr(t,e){if(O){_.nodes_end=g,nn();return}t!==null&&t.before(e)}export{Sn as $,Nn as A,at as B,xr as C,Ht as D,ie as E,kr as F,Wn as G,re as H,Me as I,Wt as J,j as K,tt as L,Ie as M,Bn as N,c as O,_ as P,sr as Q,le as R,Qe as S,$ as T,Yt as U,Hn as V,X as W,en as X,Ut as Y,In as Z,fr as _,ir as a,vr as a0,Q as a1,Be as a2,Cn as a3,Fn as a4,mt as a5,pn as a6,Jn as a7,$n as a8,Xn as a9,Un as aA,Dn as aB,rr as aC,I as aD,Ar as aE,nr as aF,rn as aG,Zn as aa,Er as ab,mr as ac,Kn as ad,tn as ae,Gn as af,w as ag,m as ah,ur as ai,gr as aj,bn as ak,hr as al,dr as am,er as an,lt as ao,it as ap,Mn as aq,Ln as ar,_n as as,st as at,L as au,nt as av,et as aw,Yn as ax,qn as ay,jn as az,Rr as b,tr as c,ar as d,wr as e,Tr as f,nn as g,O as h,Rn as i,H as j,or as k,yr as l,K as m,On as n,g as o,Qn as p,ot as q,Vn as r,lr as s,pr as t,zn as u,y as v,_r as w,cr as x,br as y,se as z};

```

# docs\_app\immutable\chunks\DsnmJJEf.js

```js
typeof window<"u"&&((window.__svelte??={}).v??=new Set).add("5");

```

# docs\_app\immutable\chunks\DVuS21lq.js

```js
import{o as De,a as wt}from"./Bh_O582o.js";import{p as vt,e as bt,a as At,b as U}from"./BRyQJnYS.js";import{n as me,aG as kt,aD as T,B as P,au as x,ac as $e}from"./DPbs4qE5.js";const q=[];function Se(e,t=me){let n=null;const r=new Set;function a(o){if(kt(e,o)&&(e=o,n)){const c=!q.length;for(const f of r)f[1](),q.push(f,e);if(c){for(let f=0;f<q.length;f+=2)q[f][0](q[f+1]);q.length=0}}}function s(o){a(o(e))}function i(o,c=me){const f=[o,c];return r.add(f),r.size===1&&(n=t(a,s)||me),o(e),()=>{r.delete(f),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}class le{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Re{constructor(t,n){this.status=t,this.location=n}}class Ie extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}new URL("sveltekit-internal://");function Et(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function St(e){return e.split("%25").map(decodeURI).join("%25")}function Rt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function ye({href:e}){return e.split("#")[0]}function It(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return f=>(n(f),i[o](f));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}function Ut(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}new TextEncoder;const Lt=new TextDecoder;function Tt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}const Pt=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&H.delete(Ue(e)),Pt(e,t));const H=new Map;function xt(e,t){const n=Ue(e,t),r=document.querySelector(n);if(r?.textContent){r.remove();let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&H.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Tt(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function Nt(e,t,n){if(H.size>0){const r=Ue(e,n),a=H.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(a.body,a.init);H.delete(r)}}return window.fetch(t,n)}function Ue(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Ut(...a)}"]`}return r}function Ot({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,f,d]])=>{const{pattern:h,params:u}=vt(o),l={id:o,exec:g=>{const w=h.exec(g);if(w)return bt(w,u,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...f||[]].map(i),leaf:s(c)};return l.errors.length=l.layouts.length=Math.max(l.errors.length,l.layouts.length),l});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function Je(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function qe(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const Ct="1755094276649",We="sveltekit:snapshot",Xe="sveltekit:scroll",Ze="sveltekit:states",jt="sveltekit:pageurl",V="sveltekit:history",J="sveltekit:navigation",j={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},fe=location.origin;function Qe(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function ue(){return{x:pageXOffset,y:pageYOffset}}function B(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Be={...j,"":j.hover};function et(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function tt(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=et(e)}}function be(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||de(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=r?.origin===fe&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function te(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=B(o,"preload-code")),a===null&&(a=B(o,"preload-data")),t===null&&(t=B(o,"keepfocus")),n===null&&(n=B(o,"noscroll")),s===null&&(s=B(o,"reload")),i===null&&(i=B(o,"replacestate")),o=et(o);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Be[r??"off"],preload_data:Be[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Ve(e){const t=Se(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const nt={v:()=>{}};function Dt(){const{set:e,subscribe:t}=Se(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${At}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Ct;return i&&(e(!0),nt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function de(e,t,n){return e.origin!==fe||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function kn(e){}function Fe(e){const t=qt(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const $t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function qt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=$t.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const Bt=-1,Vt=-2,Ft=-3,Mt=-4,Gt=-5,Ht=-6;function Kt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===Bt)return;if(s===Ft)return NaN;if(s===Mt)return 1/0;if(s===Gt)return-1/0;if(s===Ht)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],f=t?.[c];if(f)return r[s]=f(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let l=1;l<o.length;l+=1)d.add(a(o[l]));break;case"Map":const h=new Map;r[s]=h;for(let l=1;l<o.length;l+=2)h.set(a(o[l]),a(o[l+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const u=Object.create(null);r[s]=u;for(let l=1;l<o.length;l+=2)u[o[l]]=a(o[l+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const l=globalThis[c],g=o[1],w=Fe(g),_=new l(w);r[s]=_;break}case"ArrayBuffer":{const l=o[1],g=Fe(l);r[s]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let f=0;f<o.length;f+=1){const d=o[f];d!==Vt&&(c[f]=a(d))}}else{const c={};r[s]=c;for(const f in o){const d=o[f];c[f]=a(d)}}return r[s]}return a(0)}const rt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...rt];const Yt=new Set([...rt]);[...Yt];function zt(e){return e.filter(t=>t!=null)}const Jt="x-sveltekit-invalidated",Wt="x-sveltekit-trailing-slash";function ne(e){return e instanceof le||e instanceof Ie?e.status:500}function Xt(e){return e instanceof Ie?e.text:"Internal Error"}let E,W,we;const Zt=De.toString().includes("$$")||/function \w+\(\) \{\}/.test(De.toString());Zt?(E={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},W={current:null},we={current:!1}):(E=new class{#e=T({});get data(){return P(this.#e)}set data(t){x(this.#e,t)}#t=T(null);get form(){return P(this.#t)}set form(t){x(this.#t,t)}#n=T(null);get error(){return P(this.#n)}set error(t){x(this.#n,t)}#r=T({});get params(){return P(this.#r)}set params(t){x(this.#r,t)}#a=T({id:null});get route(){return P(this.#a)}set route(t){x(this.#a,t)}#o=T({});get state(){return P(this.#o)}set state(t){x(this.#o,t)}#s=T(-1);get status(){return P(this.#s)}set status(t){x(this.#s,t)}#i=T(new URL("https://example.com"));get url(){return P(this.#i)}set url(t){x(this.#i,t)}},W=new class{#e=T(null);get current(){return P(this.#e)}set current(t){x(this.#e,t)}},we=new class{#e=T(!1);get current(){return P(this.#e)}set current(t){x(this.#e,t)}},nt.v=()=>we.current=!0);function Qt(e){Object.assign(E,e)}const en="/__data.json",tn=".html__data.json";function nn(e){return e.endsWith(".html")?e.replace(/\.html$/,tn):e.replace(/\/$/,"")+en}const{tick:rn}=wt,an=new Set(["icon","shortcut icon","apple-touch-icon"]),$=Je(Xe)??{},X=Je(We)??{},C={url:Ve({}),page:Ve({}),navigating:Se(null),updated:Dt()};function Le(e){$[e]=ue()}function on(e,t){let n=e+1;for(;$[n];)delete $[n],n+=1;for(n=t+1;X[n];)delete X[n],n+=1}function M(e){return location.href=e.href,new Promise(()=>{})}async function at(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function Me(){}let Te,Ae,re,N,ke,v;globalThis.__sveltekit_8fm3zq.data;const ae=[],oe=[];let O=null;const ee=new Map,ot=new Set,sn=new Set,K=new Set;let y={branch:[],error:null,url:null},Pe=!1,se=!1,Ge=!0,Z=!1,G=!1,st=!1,xe=!1,it,A,R,D;const Y=new Set,He=new Map;async function In(e,t,n){document.URL!==location.href&&(location.href=location.href),v=e,await e.hooks.init?.(),Te=Ot(e),N=document.documentElement,ke=t,Ae=e.nodes[0],re=e.nodes[1],Ae(),re(),A=history.state?.[V],R=history.state?.[J],A||(A=R=Date.now(),history.replaceState({...history.state,[V]:A,[J]:R},""));const r=$[A];function a(){r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y))}n?(a(),await mn(ke,n)):(await z({type:"enter",url:Qe(v.hash?wn(new URL(location.href)):location.href),replace_state:!0}),a()),_n()}function cn(){ae.length=0,xe=!1}function ct(e){oe.some(t=>t?.snapshot)&&(X[e]=oe.map(t=>t?.snapshot?.capture()))}function lt(e){X[e]?.forEach((t,n)=>{oe[n]?.snapshot?.restore(t)})}function Ke(){Le(A),qe(Xe,$),ct(R),qe(We,X)}async function ft(e,t,n,r){let a;const s=await z({type:"goto",url:Qe(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(xe=!0,a=[...He.keys()]),t.invalidate&&t.invalidate.forEach(gn)}});return t.invalidateAll&&$e().then($e).then(()=>{He.forEach(({resource:i},o)=>{a?.includes(o)&&i.refresh?.()})}),s}async function ln(e){if(e.id!==O?.id){const t={};Y.add(t),O={id:e.id,token:t,promise:ht({...e,preload:t}).then(n=>(Y.delete(t),n.type==="loaded"&&n.state.error&&(O=null),n))}}return O.promise}async function ve(e){const t=(await pe(e,!1))?.route;t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function ut(e,t,n){y=e.state;const r=document.querySelector("style[data-sveltekit]");if(r&&r.remove(),Object.assign(E,e.props.page),it=new v.root({target:t,props:{...e.props,stores:C,components:oe},hydrate:n,sync:!1}),lt(R),n){const a={from:null,to:{params:y.params,route:{id:y.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};K.forEach(s=>s(a))}se=!0}function ie({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(U&&(e.pathname===U||e.pathname===U+"/"))o="always";else for(const l of n)l?.slash!==void 0&&(o=l.slash);e.pathname=Et(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:zt(n).map(l=>l.node.component),page:je(E)}};i!==void 0&&(c.props.form=i);let f={},d=!E,h=0;for(let l=0;l<Math.max(n.length,y.branch.length);l+=1){const g=n[l],w=y.branch[l];g?.data!==w?.data&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!y.url||e.href!==y.url.href||y.error!==a||i!==void 0&&i!==E.form||d)&&(c.props.page={error:a,params:t,route:{id:s?.id??null},state:{},status:r,url:new URL(e),form:i??null,data:d?f:E.data}),c}async function Ne({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if(f.universal?.load){let d=function(...u){for(const l of u){const{href:g}=new URL(l,n);c.dependencies.add(g)}};const h={route:new Proxy(a,{get:(u,l)=>(o&&(c.route=!0),u[l])}),params:new Proxy(r,{get:(u,l)=>(o&&c.params.add(l),u[l])}),data:s?.data??null,url:It(n,()=>{o&&(c.url=!0)},u=>{o&&c.search_params.add(u)},v.hash),async fetch(u,l){u instanceof Request&&(l={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:[...u.headers].length>0?u?.headers:void 0,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...l});const{resolved:g,promise:w}=dt(u,l,n);return o&&d(g.href),w},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(u){o=!1;try{return u()}finally{o=!0}}};i=await f.universal.load.call(null,h)??null}return{node:f,loader:e,server:s,universal:f.universal?.load?{type:"data",data:i,uses:c}:null,data:i??s?.data??null,slash:f.universal?.trailingSlash??s?.slash}}function dt(e,t,n){let r=e instanceof Request?e.url:e;const a=new URL(r,n);a.origin===n.origin&&(r=a.href.slice(n.origin.length));const s=se?Nt(r,a.href,t):xt(r,t);return{resolved:a,promise:s}}function Ye(e,t,n,r,a,s){if(xe)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==y.params[i])return!0;for(const i of a.dependencies)if(ae.some(o=>o(new URL(i))))return!0;return!1}function Oe(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function fn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function ze({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:je(E),constructors:[]}}}async function ht({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if(O?.id===e)return Y.delete(O.token),O.promise;const{errors:i,layouts:o,leaf:c}=a,f=[...o,c];i.forEach(p=>p?.().catch(()=>{})),f.forEach(p=>p?.[1]().catch(()=>{}));let d=null;const h=y.url?e!==ce(y.url):!1,u=y.route?a.id!==y.route.id:!1,l=fn(y.url,n);let g=!1;const w=f.map((p,m)=>{const b=y.branch[m],k=!!p?.[0]&&(b?.loader!==p[1]||Ye(g,u,h,l,b.server?.uses,r));return k&&(g=!0),k});if(w.some(Boolean)){try{d=await _t(n,w)}catch(p){const m=await F(p,{url:n,params:r,route:{id:e}});return Y.has(s)?ze({error:m,url:n,params:r,route:a}):he({status:ne(p),error:m,url:n,route:a})}if(d.type==="redirect")return d}const _=d?.nodes;let S=!1;const L=f.map(async(p,m)=>{if(!p)return;const b=y.branch[m],k=_?.[m];if((!k||k.type==="skip")&&p[1]===b?.loader&&!Ye(S,u,h,l,b.universal?.uses,r))return b;if(S=!0,k?.type==="error")throw k;return Ne({loader:p[1],url:n,params:r,route:a,parent:async()=>{const ge={};for(let _e=0;_e<m;_e+=1)Object.assign(ge,(await L[_e])?.data);return ge},server_data_node:Oe(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?b?.server:void 0)})});for(const p of L)p.catch(()=>{});const I=[];for(let p=0;p<f.length;p+=1)if(f[p])try{I.push(await L[p])}catch(m){if(m instanceof Re)return{type:"redirect",location:m.location};if(Y.has(s))return ze({error:await F(m,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=ne(m),k;if(_?.includes(m))b=m.status??b,k=m.error;else if(m instanceof le)k=m.body;else{if(await C.updated.check())return await at(),await M(n);k=await F(m,{params:r,url:n,route:{id:a.id}})}const Q=await un(p,I,i);return Q?ie({url:n,params:r,branch:I.slice(0,Q.idx).concat(Q.node),status:b,error:k,route:a}):await gt(n,{id:a.id},k,b)}else I.push(void 0);return ie({url:n,params:r,branch:I,status:200,error:null,route:a,form:t?void 0:null})}async function un(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function he({status:e,error:t,url:n,route:r}){const a={};let s=null;if(v.server_loads[0]===0)try{const o=await _t(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==fe||n.pathname!==location.pathname||Pe)&&await M(n)}try{const o=await Ne({loader:Ae,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Oe(s)}),c={node:await re(),loader:re,universal:null,server:null,data:null};return ie({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof Re)return ft(new URL(o.location,location.href),{},0);throw o}}async function dn(e){const t=e.href;if(ee.has(t))return ee.get(t);let n;try{const r=(async()=>{let a=await v.hooks.reroute({url:new URL(e),fetch:async(s,i)=>dt(s,i,e).promise})??e;if(typeof a=="string"){const s=new URL(e);v.hash?s.hash=a:s.pathname=a,a=s}return a})();ee.set(t,r),n=await r}catch{ee.delete(t);return}return n}async function pe(e,t){if(e&&!de(e,U,v.hash)){const n=await dn(e);if(!n)return;const r=hn(n);for(const a of Te){const s=a.exec(r);if(s)return{id:ce(e),invalidating:t,route:a,params:Rt(s),url:e}}}}function hn(e){return St(v.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(U.length))||"/"}function ce(e){return(v.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function pt({url:e,type:t,intent:n,delta:r}){let a=!1;const s=Ce(y,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return Z||ot.forEach(o=>o(i)),a?null:s}async function z({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:f=Me,block:d=Me}){const h=D;D=c;const u=await pe(t,!1),l=e==="enter"?Ce(y,u,t,e):pt({url:t,type:e,delta:n?.delta,intent:u});if(!l){d(),D===c&&(D=h);return}const g=A,w=R;f(),Z=!0,se&&l.navigation.type!=="enter"&&C.navigating.set(W.current=l.navigation);let _=u&&await ht(u);if(!_){if(de(t,U,v.hash))return await M(t);_=await gt(t,{id:null},await F(new Ie(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=u?.url||t,D!==c)return l.reject(new Error("navigation aborted")),!1;if(_.type==="redirect")if(o>=20)_=await he({status:500,error:await F(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return await ft(new URL(_.location,t).href,{},o+1,c),!1;else _.props.page.status>=400&&await C.updated.check()&&(await at(),await M(t));if(cn(),Le(g),ct(w),_.props.page.url.pathname!==t.pathname&&(t.pathname=_.props.page.url.pathname),i=n?n.state:i,!n){const p=s?0:1,m={[V]:A+=p,[J]:R+=p,[Ze]:i};(s?history.replaceState:history.pushState).call(history,m,"",t),s||on(A,R)}if(O=null,_.props.page.state=i,se){const p=(await Promise.all(Array.from(sn,m=>m(l.navigation)))).filter(m=>typeof m=="function");if(p.length>0){let m=function(){p.forEach(b=>{K.delete(b)})};p.push(m),p.forEach(b=>{K.add(b)})}y=_.state,_.props.page&&(_.props.page.url=t),it.$set(_.props),Qt(_.props.page),st=!0}else ut(_,ke,!1);const{activeElement:S}=document;await rn();const L=n?n.scroll:a?ue():null;if(Ge){const p=t.hash&&document.getElementById(yt(t));L?scrollTo(L.x,L.y):p?p.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==S&&document.activeElement!==document.body;!r&&!I&&yn(t),Ge=!0,_.props.page&&Object.assign(E,_.props.page),Z=!1,e==="popstate"&&lt(R),l.fulfil(void 0),K.forEach(p=>p(l.navigation)),C.navigating.set(W.current=null)}async function gt(e,t,n,r){return e.origin===fe&&e.pathname===location.pathname&&!Pe?await he({status:r,error:n,url:e,route:t}):await M(e)}function pn(){let e,t,n;N.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(e),e=setTimeout(()=>{s(c,j.hover)},20)});function r(o){o.defaultPrevented||s(o.composedPath()[0],j.tap)}N.addEventListener("mousedown",r),N.addEventListener("touchstart",r,{passive:!0});const a=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(ve(new URL(c.target.href)),a.unobserve(c.target))},{threshold:0});async function s(o,c){const f=tt(o,N),d=f===t&&c>=n;if(!f||d)return;const{url:h,external:u,download:l}=be(f,U,v.hash);if(u||l)return;const g=te(f),w=h&&ce(y.url)===ce(h);if(!(g.reload||w))if(c<=g.preload_data){t=f,n=j.tap;const _=await pe(h,!1);if(!_)return;ln(_)}else c<=g.preload_code&&(t=f,n=c,ve(h))}function i(){a.disconnect();for(const o of N.querySelectorAll("a")){const{url:c,external:f,download:d}=be(o,U,v.hash);if(f||d)continue;const h=te(o);h.reload||(h.preload_code===j.viewport&&a.observe(o),h.preload_code===j.eager&&ve(c))}}K.add(i),i()}function F(e,t){if(e instanceof le)return e.body;const n=ne(e),r=Xt(e);return v.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function gn(e){if(typeof e=="function")ae.push(e);else{const{href:t}=new URL(e,location.href);ae.push(n=>n.href===t)}}function _n(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Ke(),!Z){const r=Ce(y,void 0,null,"leave"),a={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};ot.forEach(s=>s(a))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ke()}),navigator.connection?.saveData||pn(),N.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=tt(t.composedPath()[0],N);if(!n)return;const{url:r,external:a,target:s,download:i}=be(n,U,v.hash);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const o=te(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;const[f,d]=(v.hash?r.hash.replace(/^#/,""):r.href).split("#"),h=f===ye(location);if(a||o.reload&&(!h||!d)){pt({url:r,type:"link"})?Z=!0:t.preventDefault();return}if(d!==void 0&&h){const[,u]=y.url.href.split("#");if(u===d){if(t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const l=n.ownerDocument.getElementById(decodeURIComponent(d));l&&(l.scrollIntoView(),l.focus())}return}if(G=!0,Le(A),e(r),!o.replace_state)return;G=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),await z({type:"link",url:r,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??r.href===location.href})}),N.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formTarget||n.target)==="_blank"||(r?.formMethod||n.method)!=="get")return;const i=new URL(r?.hasAttribute("formaction")&&r?.formAction||n.action);if(de(i,U,!1))return;const o=t.target,c=te(o);if(c.reload)return;t.preventDefault(),t.stopPropagation();const f=new FormData(o),d=r?.getAttribute("name");d&&f.append(d,r?.getAttribute("value")??""),i.search=new URLSearchParams(f).toString(),z({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{if(!Ee){if(t.state?.[V]){const n=t.state[V];if(D={},n===A)return;const r=$[n],a=t.state[Ze]??{},s=new URL(t.state[jt]??location.href),i=t.state[J],o=y.url?ye(location)===ye(y.url):!1;if(i===R&&(st||o)){a!==E.state&&(E.state=a),e(s),$[A]=ue(),r&&scrollTo(r.x,r.y),A=n;return}const f=n-A;await z({type:"popstate",url:s,popped:{state:a,scroll:r,delta:f},accept:()=>{A=n,R=i},block:()=>{history.go(-f)},nav_token:D})}else if(!G){const n=new URL(location.href);e(n),v.hash&&location.reload()}}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[V]:++A,[J]:R},"",location.href))});for(const t of document.querySelectorAll("link"))an.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&C.navigating.set(W.current=null)});function e(t){y.url=E.url=t,C.page.set(je(E)),C.page.notify()}}async function mn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Pe=!0;const f=new URL(location.href);let d;({params:a={},route:s={id:null}}=await pe(f,!1)||{}),d=Te.find(({id:l})=>l===s.id);let h,u=!0;try{const l=r.map(async(w,_)=>{const S=o[_];return S?.uses&&(S.uses=mt(S.uses)),Ne({loader:v.nodes[w],url:f,params:a,route:s,parent:async()=>{const L={};for(let I=0;I<_;I+=1)Object.assign(L,(await l[I]).data);return L},server_data_node:Oe(S)})}),g=await Promise.all(l);if(d){const w=d.layouts;for(let _=0;_<w.length;_++)w[_]||g.splice(_,0,void 0)}h=ie({url:f,params:a,branch:g,status:t,error:n,form:c,route:d??null})}catch(l){if(l instanceof Re){await M(new URL(l.location,location.href));return}h=await he({status:ne(l),error:await F(l,{url:f,params:a,route:s}),url:f,route:s}),e.textContent="",u=!1}h.props.page&&(h.props.page.state={}),ut(h,e,u)}async function _t(e,t){const n=new URL(e);n.pathname=nn(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Wt,"1"),n.searchParams.append(Jt,t.map(s=>s?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let s;throw a.headers.get("content-type")?.includes("application/json")?s=await a.json():a.status===404?s="Not Found":a.status===500&&(s="Internal Error"),new le(a.status,s)}return new Promise(async s=>{const i=new Map,o=a.body.getReader();function c(d){return Kt(d,{...v.decoders,Promise:h=>new Promise((u,l)=>{i.set(h,{fulfil:u,reject:l})})})}let f="";for(;;){const{done:d,value:h}=await o.read();if(d&&!f)break;for(f+=!h&&f?`
`:Lt.decode(h,{stream:!0});;){const u=f.indexOf(`
`);if(u===-1)break;const l=JSON.parse(f.slice(0,u));if(f=f.slice(u+1),l.type==="redirect")return s(l);if(l.type==="data")l.nodes?.forEach(g=>{g?.type==="data"&&(g.uses=mt(g.uses),g.data=c(g.data))}),s(l);else if(l.type==="chunk"){const{id:g,data:w,error:_}=l,S=i.get(g);i.delete(g),_?S.reject(c(_)):S.fulfil(c(w))}}}})}function mt(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}let Ee=!1;function yn(e){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=yt(e);if(n&&document.getElementById(n)){const{x:a,y:s}=ue();setTimeout(()=>{const i=history.state;Ee=!0,location.replace(`#${n}`),v.hash&&location.replace(e.hash),history.replaceState(i,"",e.hash),scrollTo(a,s),Ee=!1})}else{const a=document.body,s=a.getAttribute("tabindex");a.tabIndex=-1,a.focus({preventScroll:!0,focusVisible:!1}),s!==null?a.setAttribute("tabindex",s):a.removeAttribute("tabindex")}const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function Ce(e,t,n,r){let a,s;const i=new Promise((c,f)=>{a=c,s=f});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function je(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function wn(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}function yt(e){let t;if(v.hash){const[,,n]=e.hash.split("#",3);t=n??""}else t=e.hash.slice(1);return decodeURIComponent(t)}export{In as a,kn as l,E as p,C as s};

```

# docs\_app\immutable\chunks\N_y_u6ll.js

```js
import{v as d,w as g,x as i,y as m,z as l,A as v,B as p,C as b,D as h}from"./DPbs4qE5.js";function x(n=!1){const s=d,e=s.l.u;if(!e)return;let r=()=>b(s.s);if(n){let o=0,t={};const _=h(()=>{let c=!1;const a=s.s;for(const f in a)a[f]!==t[f]&&(t[f]=a[f],c=!0);return c&&o++,o});r=()=>p(_)}e.b.length&&g(()=>{u(s,r),l(e.b)}),i(()=>{const o=m(()=>e.m.map(v));return()=>{for(const t of o)typeof t=="function"&&t()}}),e.a.length&&i(()=>{u(s,r),l(e.a)})}function u(n,s){if(n.l.s)for(const e of n.l.s)p(e);s()}export{x as i};

```

# docs\_app\immutable\entry\app.DjHrKeM-.js

```js
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DBSX1OYU.js","../chunks/DsnmJJEf.js","../chunks/DPbs4qE5.js","../chunks/D7zcbScl.js","../chunks/B7-cwmcf.js","../chunks/BRyQJnYS.js","../nodes/1.CdhBHKyO.js","../chunks/DEjW4HI6.js","../chunks/Bh_O582o.js","../chunks/N_y_u6ll.js","../chunks/DVuS21lq.js","../nodes/2.6NGYomMm.js","../nodes/3.Df0r8KY7.js","../nodes/4.BD_66rRy.js"])))=>i.map(i=>d[i]);
import{h as I,g as V,e as Y,E as z,ad as ae,ae as ne,af as se,W as ie,V as F,a1 as W,l as B,ag as j,ah as oe,ai as Z,aj as ce,ak as G,o as H,al as fe,am as ue,an as le,y as J,ao as K,ap as de,aq as _e,ar as ve,B as b,D as me,as as he,at as ge,au as O,av as Ee,P as ye,aw as be,ax as Pe,a5 as Re,ay as Se,az as Ae,aA as Ie,aB as Q,a6 as Oe,J as Te,aC as Le,p as we,w as De,x as xe,aD as w,ac as ke,f as X,a as T,s as pe,b as S,c as Ce,aE as D,d as Ne,r as Be,aF as x,F as je,t as qe}from"../chunks/DPbs4qE5.js";import{h as Fe,m as Me,u as Ue,o as Ve,s as Ye}from"../chunks/Bh_O582o.js";import"../chunks/DsnmJJEf.js";function k(a,e,s=!1){I&&V();var o=a,n=null,t=null,r=oe,i=s?z:0,m=!1;const E=(y,f=!0)=>{m=!0,v(f,y)};var c=null;function h(){c!==null&&(c.lastChild.remove(),o.before(c),c=null);var y=r?n:t,f=r?t:n;y&&ce(y),f&&G(f,()=>{r?t=null:n=null})}const v=(y,f)=>{if(r===(r=y))return;let l=!1;if(I){const R=ae(o)===ne;!!r===R&&(o=se(),ie(o),F(!1),l=!0)}var d=Z(),_=o;if(d&&(c=document.createDocumentFragment(),c.append(_=W())),r?n??=f&&B(()=>f(_)):t??=f&&B(()=>f(_)),d){var P=j,u=r?n:t,g=r?t:n;u&&P.skipped_effects.delete(u),g&&P.skipped_effects.add(g),P.add_callback(h)}else h();l&&F(!0)};Y(()=>{m=!1,e(E),m||v(null,null)},i),I&&(o=H)}function p(a,e,s){I&&V();var o=a,n,t,r=null,i=null;function m(){t&&(G(t),t=null),r&&(r.lastChild.remove(),o.before(r),r=null),t=i,i=null}Y(()=>{if(n!==(n=e())){var E=Z();if(n){var c=o;E&&(r=document.createDocumentFragment(),r.append(c=W()),t&&j.skipped_effects.add(t)),i=B(()=>s(c,n))}E?j.add_callback(m):m()}},z),I&&(o=H)}function M(a,e){return a===e||a?.[K]===e}function C(a={},e,s,o){return fe(()=>{var n,t;return ue(()=>{n=t,t=[],J(()=>{a!==s(...t)&&(e(a,...t),n&&M(s(...n),a)&&e(null,...n))})}),()=>{le(()=>{t&&M(s(...t),a)&&e(null,...t)})}}),a}let L=!1;function ze(a){var e=L;try{return L=!1,[a(),L]}finally{L=e}}function N(a,e,s,o){var n=!Re||(s&Se)!==0,t=(s&Pe)!==0,r=(s&Ie)!==0,i=o,m=!0,E=()=>(m&&(m=!1,i=r?J(o):o),i),c;if(t){var h=K in a||Q in a;c=de(a,e)?.set??(h&&e in a?u=>a[e]=u:void 0)}var v,y=!1;t?[v,y]=ze(()=>a[e]):v=a[e],v===void 0&&o!==void 0&&(v=E(),c&&(n&&_e(),c(v)));var f;if(n?f=()=>{var u=a[e];return u===void 0?E():(m=!0,u)}:f=()=>{var u=a[e];return u!==void 0&&(i=void 0),u===void 0?i:u},n&&(s&ve)===0)return f;if(c){var l=a.$$legacy;return(function(u,g){return arguments.length>0?((!n||!g||l||y)&&c(g?f():u),u):f()})}var d=!1,_=((s&Ae)!==0?me:he)(()=>(d=!1,f()));t&&b(_);var P=ye;return(function(u,g){if(arguments.length>0){const R=g?b(_):n&&t?ge(u):u;return O(_,R),d=!0,i!==void 0&&(i=R),u}return Ee&&d||(P.f&be)!==0?_.v:b(_)})}function We(a){return class extends Ze{constructor(e){super({component:a,...e})}}}class Ze{#t;#e;constructor(e){var s=new Map,o=(t,r)=>{var i=Le(r,!1,!1);return s.set(t,i),i};const n=new Proxy({...e.props||{},$$events:{}},{get(t,r){return b(s.get(r)??o(r,Reflect.get(t,r)))},has(t,r){return r===Q?!0:(b(s.get(r)??o(r,Reflect.get(t,r))),Reflect.has(t,r))},set(t,r,i){return O(s.get(r)??o(r,i),i),Reflect.set(t,r,i)}});this.#e=(e.hydrate?Fe:Me)(e.component,{target:e.target,anchor:e.anchor,props:n,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&Oe(),this.#t=n.$$events;for(const t of Object.keys(this.#e))t==="$set"||t==="$destroy"||t==="$on"||Te(this,t,{get(){return this.#e[t]},set(r){this.#e[t]=r},enumerable:!0});this.#e.$set=t=>{Object.assign(n,t)},this.#e.$destroy=()=>{Ue(this.#e)}}$set(e){this.#e.$set(e)}$on(e,s){this.#t[e]=this.#t[e]||[];const o=(...n)=>s.call(this,...n);return this.#t[e].push(o),()=>{this.#t[e]=this.#t[e].filter(n=>n!==o)}}$destroy(){this.#e.$destroy()}}const Ge="modulepreload",He=function(a,e){return new URL(a,e).href},U={},A=function(e,s,o){let n=Promise.resolve();if(s&&s.length>0){let E=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),m=i?.nonce||i?.getAttribute("nonce");n=E(s.map(c=>{if(c=He(c,o),c in U)return;U[c]=!0;const h=c.endsWith(".css"),v=h?'[rel="stylesheet"]':"";if(!!o)for(let l=r.length-1;l>=0;l--){const d=r[l];if(d.href===c&&(!h||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${v}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Ge,h||(f.as="script"),f.crossOrigin="",f.href=c,m&&f.setAttribute("nonce",m),document.head.appendChild(f),h)return new Promise((l,d)=>{f.addEventListener("load",l),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function t(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return n.then(r=>{for(const i of r||[])i.status==="rejected"&&t(i.reason);return e().catch(t)})},nt={};var Je=X('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Ke=X("<!> <!>",1);function Qe(a,e){we(e,!0);let s=N(e,"components",23,()=>[]),o=N(e,"data_0",3,null),n=N(e,"data_1",3,null);De(()=>e.stores.page.set(e.page)),xe(()=>{e.stores,e.page,e.constructors,s(),e.form,o(),n(),e.stores.page.notify()});let t=w(!1),r=w(!1),i=w(null);Ve(()=>{const l=e.stores.page.subscribe(()=>{b(t)&&(O(r,!0),ke().then(()=>{O(i,document.title||"untitled page",!0)}))});return O(t,!0),l});const m=x(()=>e.constructors[1]);var E=Ke(),c=T(E);{var h=l=>{const d=x(()=>e.constructors[0]);var _=D(),P=T(_);p(P,()=>b(d),(u,g)=>{C(g(u,{get data(){return o()},get form(){return e.form},get params(){return e.page.params},children:(R,et)=>{var q=D(),$=T(q);p($,()=>b(m),(ee,te)=>{C(te(ee,{get data(){return n()},get form(){return e.form},get params(){return e.page.params}}),re=>s()[1]=re,()=>s()?.[1])}),S(R,q)},$$slots:{default:!0}}),R=>s()[0]=R,()=>s()?.[0])}),S(l,_)},v=l=>{const d=x(()=>e.constructors[0]);var _=D(),P=T(_);p(P,()=>b(d),(u,g)=>{C(g(u,{get data(){return o()},get form(){return e.form},get params(){return e.page.params}}),R=>s()[0]=R,()=>s()?.[0])}),S(l,_)};k(c,l=>{e.constructors[1]?l(h):l(v,!1)})}var y=pe(c,2);{var f=l=>{var d=Je(),_=Ne(d);{var P=u=>{var g=je();qe(()=>Ye(g,b(i))),S(u,g)};k(_,u=>{b(r)&&u(P)})}Be(d),S(l,d)};k(y,l=>{b(t)&&l(f)})}S(a,E),Ce()}const st=We(Qe),it=[()=>A(()=>import("../nodes/0.DBSX1OYU.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>A(()=>import("../nodes/1.CdhBHKyO.js"),__vite__mapDeps([6,1,7,2,8,3,9,10,5]),import.meta.url),()=>A(()=>import("../nodes/2.6NGYomMm.js"),__vite__mapDeps([11,1,7,2,4,5,9]),import.meta.url),()=>A(()=>import("../nodes/3.Df0r8KY7.js"),__vite__mapDeps([12,1,7,2]),import.meta.url),()=>A(()=>import("../nodes/4.BD_66rRy.js"),__vite__mapDeps([13,1,7,2]),import.meta.url)],ot=[],ct={"/":[2],"/contact":[3],"/schedule":[4]},Xe={handleError:(({error:a})=>{console.error(a)}),reroute:(()=>{}),transport:{}},$e=Object.fromEntries(Object.entries(Xe.transport).map(([a,e])=>[a,e.decode])),ft=!1,ut=(a,e)=>$e[a](e);export{ut as decode,$e as decoders,ct as dictionary,ft as hash,Xe as hooks,nt as matchers,it as nodes,st as root,ot as server_loads};

```

# docs\_app\immutable\entry\start.BFQ_ETJy.js

```js
import{l as o,a as r}from"../chunks/DVuS21lq.js";export{o as load_css,r as start};

```

# docs\_app\immutable\nodes\0.DBSX1OYU.js

```js
import"../chunks/DsnmJJEf.js";import{p as l,f as d,a as u,t as _,b,c as g,d as x,s as r,r as y,n as C}from"../chunks/DPbs4qE5.js";import{s as H}from"../chunks/D7zcbScl.js";import{r as t,s as e}from"../chunks/B7-cwmcf.js";var S=d("<nav><a>Home</a> <a>Contact</a> <a>Schedule</a></nav> <!>",1);function z(f,s){l(s,!0);var o=S(),a=u(o),n=x(a),p=r(n,2),i=r(p,2);y(a);var m=r(a,2);H(m,()=>s.children??C),_((c,v,h)=>{e(n,"href",c),e(p,"href",v),e(i,"href",h)},[()=>t("/"),()=>t("/contact"),()=>t("/schedule")]),b(f,o),g()}export{z as component};

```

# docs\_app\immutable\nodes\1.CdhBHKyO.js

```js
import"../chunks/DsnmJJEf.js";import"../chunks/DEjW4HI6.js";import{p as u,f as h,a as g,t as d,b as l,c as v,d as a,r as e,s as _}from"../chunks/DPbs4qE5.js";import{s as o}from"../chunks/Bh_O582o.js";import{i as x}from"../chunks/N_y_u6ll.js";import{s as $,p}from"../chunks/DVuS21lq.js";const b={get error(){return p.error},get status(){return p.status}};$.updated.check;const m=b;var k=h("<h1> </h1> <p> </p>",1);function A(i,c){u(c,!1),x();var t=k(),r=g(t),f=a(r,!0);e(r);var s=_(r,2),n=a(s,!0);e(s),d(()=>{o(f,m.status),o(n,m.error?.message)}),l(i,t),v()}export{A as component};

```

# docs\_app\immutable\nodes\2.6NGYomMm.js

```js
import"../chunks/DsnmJJEf.js";import"../chunks/DEjW4HI6.js";import{p as l,f as d,t as p,b as u,c as f,s as a,d as o,u as c,r as i}from"../chunks/DPbs4qE5.js";import{r as m,s as g}from"../chunks/B7-cwmcf.js";import{i as w}from"../chunks/N_y_u6ll.js";var y=d("<main><h1>Learning Days 2025</h1> <p>Did you ever hear the tragedy of Darth Plagueis the Wise? I thought not. It's not a story the Jedi would tell you. It's a <a>Sith</a> legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.</p></main>");function _(s,r){l(r,!1),w();var e=y(),t=a(o(e),2),h=a(o(t));c(),i(t),i(e),p(n=>g(h,"href",n),[()=>m("/contact")]),u(s,e),f()}export{_ as component};

```

# docs\_app\immutable\nodes\3.Df0r8KY7.js

```js
import"../chunks/DsnmJJEf.js";import"../chunks/DEjW4HI6.js";import{F as a,b as p,u as e}from"../chunks/DPbs4qE5.js";function s(t){e();var o=a("contacts");p(t,o)}export{s as component};

```

# docs\_app\immutable\nodes\4.BD_66rRy.js

```js
import"../chunks/DsnmJJEf.js";import"../chunks/DEjW4HI6.js";import{F as o,b as p,u as a}from"../chunks/DPbs4qE5.js";function s(t){a();var e=o("schedule");p(t,e)}export{s as component};

```

# docs\_app\version.json

```json
{"version":"1755094276649"}
```

# docs\.nojekyll

```

```

# docs\404.html

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/LearningDays/favicon.svg" type="image/svg+xml" sizes="any">
		
		<link rel="modulepreload" href="/LearningDays/_app/immutable/entry/start.BFQ_ETJy.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/chunks/DVuS21lq.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/chunks/Bh_O582o.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/chunks/DPbs4qE5.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/chunks/D7zcbScl.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/chunks/BRyQJnYS.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/entry/app.DjHrKeM-.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/chunks/DsnmJJEf.js">
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">
			<script>
				{
					__sveltekit_8fm3zq = {
						base: "/LearningDays",
						assets: "/LearningDays"
					};

					const element = document.currentScript.parentElement;

					Promise.all([
						import("/LearningDays/_app/immutable/entry/start.BFQ_ETJy.js"),
						import("/LearningDays/_app/immutable/entry/app.DjHrKeM-.js")
					]).then(([kit, app]) => {
						kit.start(app, element);
					});
				}
			</script>
		</div>
	</body>
</html>

```

# docs\events.json

```json
{
    "events": [
        {
            "slug": "opening-night",
            "title": "Opening Night",
            "date": "2025-09-01",
            "time": "18:00",
            "location": "Main Hall",
            "description": "Kickoff with welcome drinks."
        },
        {
            "slug": "keynote",
            "title": "Keynote",
            "date": "2025-09-02",
            "time": "10:00",
            "location": "Auditorium A",
            "description": "Keynote by the special guest."
        }
    ]
}
```

# docs\favicon.svg

This is a file of the type: SVG Image

# docs\robots.txt

```txt
# allow crawling everything by default
User-agent: *
Disallow:

```

# eslint.config.js

```js
import prettier from 'eslint-config-prettier';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: {
			// typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
			// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			'no-undef': 'off'
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	}
);

```

# package.json

```json
{
	"name": "app",
	"private": true,
	"version": "0.0.1",
	"type": "module",
	"scripts": {
		"dev": "vite dev",
		"build": "vite build",
		"preview": "vite preview",
		"prepare": "svelte-kit sync || echo ''",
		"check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
		"check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
		"format": "prettier --write .",
		"lint": "prettier --check . && eslint ."
	},
	"devDependencies": {
		"@eslint/compat": "^1.2.5",
		"@eslint/js": "^9.18.0",
		"@sveltejs/adapter-auto": "^6.0.0",
		"@sveltejs/adapter-static": "^3.0.9",
		"@sveltejs/kit": "^2.22.0",
		"@sveltejs/vite-plugin-svelte": "^6.0.0",
		"eslint": "^9.18.0",
		"eslint-config-prettier": "^10.0.1",
		"eslint-plugin-svelte": "^3.0.0",
		"globals": "^16.0.0",
		"prettier": "^3.4.2",
		"prettier-plugin-svelte": "^3.3.3",
		"svelte": "^5.0.0",
		"svelte-check": "^4.0.0",
		"typescript": "^5.0.0",
		"typescript-eslint": "^8.20.0",
		"vite": "^7.0.4"
	}
}

```

# README.md

```md
# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

\`\`\`sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
\`\`\`

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

\`\`\`sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
\`\`\`

## Building

To create a production version of your app:

\`\`\`sh
npm run build
\`\`\`

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

```

# src\app.d.ts

```ts
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

```

# src\app.html

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="%sveltekit.assets%/favicon.svg" type="image/svg+xml" sizes="any">
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>
```

# src\lib\assets\favicon.svg

This is a file of the type: SVG Image

# src\lib\index.ts

```ts
// place files you want to import through the `$lib` alias in this folder.

```

# src\routes\+layout.svelte

```svelte
<script lang="ts">
	import { resolve } from "$app/paths";
	let { children } = $props();
</script>

<nav>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a href={resolve("/")}>Home</a>
	<a href={resolve("/contact")}>Contact</a>
	<a href={resolve("/schedule")}>Schedule</a>
</nav>
{@render children?.()}
```

# src\routes\+page.svelte

```svelte
<script>
	import { resolve } from "$app/paths";

</script>
<main>
    <h1>Learning Days 2025</h1>
    <p>Did you ever hear the tragedy of Darth Plagueis the Wise? I thought not. It's not a story the Jedi would tell you. It's a <a href={resolve("/contact")}>Sith</a> legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.</p>
</main>
```

# src\routes\contact\+page.svelte

```svelte
contacts
```

# src\routes\schedule\+page.svelte

```svelte
schedule
```

# static\.nojekyll

```

```

# static\events.json

```json
{
    "events": [
        {
            "slug": "opening-night",
            "title": "Opening Night",
            "date": "2025-09-01",
            "time": "18:00",
            "location": "Main Hall",
            "description": "Kickoff with welcome drinks."
        },
        {
            "slug": "keynote",
            "title": "Keynote",
            "date": "2025-09-02",
            "time": "10:00",
            "location": "Auditorium A",
            "description": "Keynote by the special guest."
        }
    ]
}
```

# static\favicon.svg

This is a file of the type: SVG Image

# static\robots.txt

```txt
# allow crawling everything by default
User-agent: *
Disallow:

```

# svelte.config.js

```js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';
const repo = "LearningDays";

export default {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            // build to 'docs' so GH Pages can serve from there (no actions needed)
            pages: 'docs',
            assets: 'docs',
            // SPA fallback so dynamic routes work on hard-refresh
            fallback: '404.html',
            precompress: false,
            strict: true
        }),
        paths: {
            // IMPORTANT for GitHub Pages subpath
            base: dev ? '' : `/${repo}`
        }
    }
};
```

# tsconfig.json

```json
{
	"extends": "./.svelte-kit/tsconfig.json",
	"compilerOptions": {
		"allowJs": true,
		"checkJs": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"resolveJsonModule": true,
		"skipLibCheck": true,
		"sourceMap": true,
		"strict": true,
		"moduleResolution": "bundler"
	}
	// Path aliases are handled by https://svelte.dev/docs/kit/configuration#alias
	// except $lib which is handled by https://svelte.dev/docs/kit/configuration#files
	//
	// If you want to overwrite includes/excludes, make sure to copy over the relevant includes/excludes
	// from the referenced tsconfig.json - TypeScript does not merge them in
}

```

# vite.config.ts

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});

```

