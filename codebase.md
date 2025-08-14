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

# docs\_app\immutable\chunks\-QX5y4Md.js

```js
import{n as c,o,p as _,q as d,r as l,v as u,E as v,w as h,x as m,y,z as f,A as g}from"./BT6KussZ.js";function b(t,n,...s){var r=t,e=m,a;c(()=>{e!==(e=n())&&(a&&(y(a),a=null),a=h(()=>e(r,...s)))},v),o&&(r=f)}function w(t){return(n,...s)=>{var r=t(...s),e;if(o)e=f,_();else{var a=r.render().trim(),p=d(a);e=g(p),n.before(e)}const i=r.setup?.(e);l(e,e),typeof i=="function"&&u(i)}}export{w as c,b as s};

```

# docs\_app\immutable\chunks\BcTUKEQ-.js

```js
import{l as o,u as d,g,a as i,c as e,i as b,b as f,d as v,e as c,f as y,h,j as x,k as C,s as k,m as S,t as j}from"./BT6KussZ.js";import{h as w,m as A,u as D}from"./ysPryp9P.js";import{c as E}from"./-QX5y4Md.js";function M(){return i===null&&g(),(i.ac??=new AbortController).signal}function _(t){e===null&&o(),v&&e.l!==null?r(e).m.push(t):d(()=>{const n=c(t);if(typeof n=="function")return n})}function O(t){e===null&&o(),_(()=>()=>c(t))}function P(t,n,{bubbles:l=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:n,bubbles:l,cancelable:s})}function U(){const t=e;return t===null&&o(),(n,l,s)=>{const a=t.s.$$events?.[n];if(a){const m=b(a)?a.slice():[a],u=P(n,l,s);for(const p of m)p.call(t.x,u);return!u.defaultPrevented}return!0}}function $(t){e===null&&o(),e.l===null&&f(),r(e).b.push(t)}function z(t){e===null&&o(),e.l===null&&f(),r(e).a.push(t)}function r(t){var n=t.l;return n.u??={a:[],b:[],m:[]}}const B=Object.freeze(Object.defineProperty({__proto__:null,afterUpdate:z,beforeUpdate:$,createEventDispatcher:U,createRawSnippet:E,flushSync:y,getAbortSignal:M,getAllContexts:h,getContext:x,hasContext:C,hydrate:w,mount:A,onDestroy:O,onMount:_,setContext:k,settled:S,tick:j,unmount:D,untrack:c},Symbol.toStringTag,{value:"Module"}));export{_ as o,B as s};

```

# docs\_app\immutable\chunks\BJREn4Ip.js

```js
import{c as d,L as g,u as i,e as m,M as l,N as b,O as p,P as v,Q as h}from"./BT6KussZ.js";function x(n=!1){const s=d,e=s.l.u;if(!e)return;let r=()=>v(s.s);if(n){let o=0,t={};const _=h(()=>{let c=!1;const a=s.s;for(const f in a)a[f]!==t[f]&&(t[f]=a[f],c=!0);return c&&o++,o});r=()=>p(_)}e.b.length&&g(()=>{u(s,r),l(e.b)}),i(()=>{const o=m(()=>e.m.map(b));return()=>{for(const t of o)typeof t=="function"&&t()}}),e.a.length&&i(()=>{u(s,r),l(e.a)})}function u(n,s){if(n.l.s)for(const e of n.l.s)p(e);s()}export{x as i};

```

# docs\_app\immutable\chunks\BlK_T66N.js

```js
import{U as f,V as _,o as c,W as p,X as d}from"./BT6KussZ.js";import{a as g,b as a,r as u}from"./SQlIY1xE.js";const N=Symbol("is custom element"),A=Symbol("is html");function E(s,r,o,t){var n=M(s);c&&(n[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||n[r]!==(n[r]=o)&&(r==="loading"&&(s[d]=o),o==null?s.removeAttribute(r):typeof o!="string"&&S(s).includes(r)?s[r]=o:s.setAttribute(r,o))}function M(s){return s.__attributes??={[N]:s.nodeName.includes("-"),[A]:s.namespaceURI===f}}var i=new Map;function S(s){var r=i.get(s.nodeName);if(r)return r;i.set(s.nodeName,r=[]);for(var o,t=s,n=Element.prototype;n!==t;){o=p(t);for(var e in o)o[e].set&&r.push(e);t=_(t)}return r}function L(s){return(g||a)+s}function T(s,r){return a+u(s,r)}export{L as a,T as r,E as s};

```

# docs\_app\immutable\chunks\BT6KussZ.js

```js
var Ie=Array.isArray,Me=Array.prototype.indexOf,Sn=Array.from,Wt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,Fe=Object.getOwnPropertyDescriptors,Le=Object.prototype,je=Array.prototype,re=Object.getPrototypeOf,$t=Object.isExtensible;const On=()=>{};function Nn(t){return t()}function se(t){for(var e=0;e<t.length;e++)t[e]()}function qe(){var t,e,n=new Promise((r,a)=>{t=r,e=a});return{promise:n,resolve:t,reject:e}}const A=2,Pt=4,mt=8,_t=16,P=32,W=64,ae=128,k=256,dt=512,E=1024,S=2048,j=4096,F=8192,et=16384,It=32768,ie=65536,Xt=1<<17,Ye=1<<18,Mt=1<<19,Ft=1<<20,kt=1<<21,Lt=1<<22,Y=1<<23,lt=Symbol("$state"),Dn=Symbol("legacy props"),Cn=Symbol(""),jt=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},qt=3,le=8;function He(){throw new Error("https://svelte.dev/e/await_outside_boundary")}function Ue(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Be(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ve(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ge(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ke(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ze(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function In(){throw new Error("https://svelte.dev/e/get_abort_signal_outside_reaction")}function Mn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Fn(t){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function Ln(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function We(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function $e(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Xe(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const jn=1,qn=2,Yn=16,Hn=1,Un=2,Bn=4,Vn=8,Gn=16,Ze=1,Je=2,Qe="[",tn="[!",en="]",Yt={},g=Symbol(),Kn="http://www.w3.org/1999/xhtml";function Ht(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function zn(t){O=t}let m;function Z(t){if(t===null)throw Ht(),Yt;return m=t}function nn(){return Z($(m))}function Wn(t){if(O){if($(m)!==null)throw Ht(),Yt;m=t}}function $n(t=1){if(O){for(var e=t,n=m;e--;)n=$(n);m=n}}function Xn(){for(var t=0,e=m;;){if(e.nodeType===le){var n=e.data;if(n===en){if(t===0)return e;t-=1}else(n===Qe||n===tn)&&(t+=1)}var r=$(e);e.remove(),e=r}}function Zn(t){if(!t||t.nodeType!==le)throw Ht(),Yt;return t.data}function fe(t){return t===this.v}function rn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function ue(t){return!rn(t,this.v)}let gt=!1;function Jn(){gt=!0}let y=null;function pt(t){y=t}function Qn(t){return Et().get(t)}function tr(t,e){return Et().set(t,e),e}function er(t){return Et().has(t)}function nr(){return Et()}function rr(t,e=!1,n){y={p:y,c:null,e:null,s:t,x:null,l:gt&&!e?{s:null,u:null,$:[]}:null}}function sr(t){var e=y,n=e.e;if(n!==null){e.e=null;for(var r of n)be(r)}return y=e.p,{}}function vt(){return!gt||y!==null&&y.l===null}function Et(t){return y===null&&Ue(),y.c??=new Map(sn(y)||void 0)}function sn(t){let e=t.p;for(;e!==null;){const n=e.c;if(n!==null)return n;e=e.p}return null}const an=new WeakMap;function ln(t){var e=_;if(e===null)return c.f|=Y,t;if((e.f&It)===0){if((e.f&ae)===0)throw!e.parent&&t instanceof Error&&oe(t),t;e.b.error(t)}else Ut(t,e)}function Ut(t,e){for(;e!==null;){if((e.f&ae)!==0)try{e.b.error(t);return}catch(n){t=n}e=e.parent}throw t instanceof Error&&oe(t),t}function oe(t){const e=an.get(t);e&&(Wt(t,"message",{value:e.message}),Wt(t,"stack",{value:e.stack}))}let ut=[],St=[];function ce(){var t=ut;ut=[],se(t)}function fn(){var t=St;St=[],se(t)}function ar(t){ut.length===0&&queueMicrotask(ce),ut.push(t)}function un(){ut.length>0&&ce(),St.length>0&&fn()}function on(){for(var t=_.b;t!==null&&!t.has_pending_snippet();)t=t.parent;return t===null&&He(),t}function Bt(t){var e=A|S,n=c!==null&&(c.f&A)!==0?c:null;return _===null||n!==null&&(n.f&k)!==0?e|=k:_.f|=Mt,{ctx:y,deps:null,effects:null,equals:fe,f:e,fn:t,reactions:null,rv:0,v:g,wv:0,parent:n??_,ac:null}}function cn(t,e){let n=_;n===null&&Be();var r=n.b,a=void 0,s=Gt(g),l=null,u=!c;return mn(()=>{try{var i=t()}catch(h){i=Promise.reject(h)}var f=()=>i;a=l?.then(f,f)??Promise.resolve(i),l=a;var o=w,v=r.pending;u&&(r.update_pending_count(1),v||o.increment());const p=(h,d=void 0)=>{l=null,v||o.activate(),d?d!==jt&&(s.f|=Y,Dt(s,d)):((s.f&Y)!==0&&(s.f^=Y),Dt(s,h)),u&&(r.update_pending_count(-1),v||o.decrement()),he()};if(a.then(p,h=>p(null,h||"unknown")),o)return()=>{queueMicrotask(()=>o.neuter())}}),new Promise(i=>{function f(o){function v(){o===a?i(s):f(a)}o.then(v,v)}f(a)})}function ir(t){const e=Bt(t);return Se(e),e}function _n(t){const e=Bt(t);return e.equals=ue,e}function _e(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)z(e[n])}}function vn(t){for(var e=t.parent;e!==null;){if((e.f&A)===0)return e;e=e.parent}return null}function Vt(t){var e,n=_;tt(vn(t));try{_e(t),e=Ce(t)}finally{tt(n)}return e}function ve(t){var e=Vt(t);if(t.equals(e)||(t.v=e,t.wv=Ne()),!nt)if(J!==null)J.set(t,t.v);else{var n=(M||(t.f&k)!==0)&&t.deps!==null?j:E;T(t,n)}}function hn(t,e,n){const r=vt()?Bt:_n;if(e.length===0){n(t.map(r));return}var a=w,s=_,l=dn(),u=on();Promise.all(e.map(i=>cn(i))).then(i=>{a?.activate(),l();try{n([...t.map(r),...i])}catch(f){(s.f&et)===0&&Ut(f,s)}a?.deactivate(),he()}).catch(i=>{u.error(i)})}function dn(){var t=_,e=c,n=y;return function(){tt(t),L(e),pt(n)}}function he(){tt(null),L(null),pt(null)}const rt=new Set;let w=null,J=null,Zt=new Set,wt=[];function de(){const t=wt.shift();wt.length>0&&queueMicrotask(de),t()}let V=[],bt=null,Ot=!1,ht=!1;class G{current=new Map;#s=new Map;#a=new Set;#t=0;#u=null;#o=!1;#n=[];#i=[];#r=[];#e=[];#l=[];#c=[];#_=[];skipped_effects=new Set;process(e){V=[];var n=null;if(rt.size>1){n=new Map,J=new Map;for(const[s,l]of this.current)n.set(s,{v:s.v,wv:s.wv}),s.v=l;for(const s of rt)if(s!==this)for(const[l,u]of s.#s)n.has(l)||(n.set(l,{v:l.v,wv:l.wv}),l.v=u)}for(const s of e)this.#h(s);if(this.#n.length===0&&this.#t===0){this.#v();var r=this.#r,a=this.#e;this.#r=[],this.#e=[],this.#l=[],w=null,Jt(r),Jt(a),w===null?w=this:rt.delete(this),this.#u?.resolve()}else this.#f(this.#r),this.#f(this.#e),this.#f(this.#l);if(n){for(const[s,{v:l,wv:u}]of n)s.wv<=u&&(s.v=l);J=null}for(const s of this.#n)ft(s);for(const s of this.#i)ft(s);this.#n=[],this.#i=[]}#h(e){e.f^=E;for(var n=e.first;n!==null;){var r=n.f,a=(r&(P|W))!==0,s=a&&(r&E)!==0,l=s||(r&F)!==0||this.skipped_effects.has(n);if(!l&&n.fn!==null){if(a)n.f^=E;else if((r&E)===0)if((r&Pt)!==0)this.#e.push(n);else if((r&Lt)!==0){var u=n.b?.pending?this.#i:this.#n;u.push(n)}else Tt(n)&&((n.f&_t)!==0&&this.#l.push(n),ft(n));var i=n.first;if(i!==null){n=i;continue}}var f=n.parent;for(n=n.next;n===null&&f!==null;)n=f.next,f=f.parent}}#f(e){for(const n of e)((n.f&S)!==0?this.#c:this.#_).push(n),T(n,E);e.length=0}capture(e,n){this.#s.has(e)||this.#s.set(e,n),this.current.set(e,e.v)}activate(){w=this}deactivate(){w=null;for(const e of Zt)if(Zt.delete(e),e(),w!==null)break}neuter(){this.#o=!0}flush(){V.length>0?Nt():this.#v(),w===this&&(this.#t===0&&rt.delete(this),this.deactivate())}#v(){if(!this.#o)for(const e of this.#a)e();this.#a.clear()}increment(){this.#t+=1}decrement(){if(this.#t-=1,this.#t===0){for(const e of this.#c)T(e,S),K(e);for(const e of this.#_)T(e,j),K(e);this.#r=[],this.#e=[],this.flush()}else this.deactivate()}add_callback(e){this.#a.add(e)}settled(){return(this.#u??=qe()).promise}static ensure(){if(w===null){const e=w=new G;rt.add(w),ht||G.enqueue(()=>{w===e&&e.flush()})}return w}static enqueue(e){wt.length===0&&queueMicrotask(de),wt.unshift(e)}}function pn(t){var e=ht;ht=!0;try{var n;for(t&&(Nt(),n=t());;){if(un(),V.length===0&&(w?.flush(),V.length===0))return bt=null,n;Nt()}}finally{ht=e}}function Nt(){var t=X;Ot=!0;try{var e=0;for(te(!0);V.length>0;){var n=G.ensure();if(e++>1e3){var r,a;wn()}n.process(V),H.clear()}}finally{Ot=!1,te(t),bt=null}}function wn(){try{ze()}catch(t){Ut(t,bt)}}function Jt(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(et|F))===0&&Tt(r)){var a=w?w.current.size:0;if(ft(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?Ae(r):r.fn=null),w!==null&&w.current.size>a&&(r.f&Ft)!==0)break}}for(;n<e;)K(t[n++])}}function K(t){for(var e=bt=t;e.parent!==null;){e=e.parent;var n=e.f;if(Ot&&e===_&&(n&_t)!==0)return;if((n&(W|P))!==0){if((n&E)===0)return;e.f^=E}}V.push(e)}const H=new Map;function Gt(t,e){var n={f:0,v:t,reactions:null,equals:fe,rv:0,wv:0};return n}function I(t,e){const n=Gt(t);return Se(n),n}function lr(t,e=!1,n=!0){const r=Gt(t);return e||(r.equals=ue),gt&&n&&y!==null&&y.l!==null&&(y.l.s??=[]).push(r),r}function q(t,e,n=!1){c!==null&&(!N||(c.f&Xt)!==0)&&vt()&&(c.f&(A|_t|Lt|Xt))!==0&&!C?.includes(t)&&Xe();let r=n?st(e):e;return Dt(t,r)}function Dt(t,e){if(!t.equals(e)){var n=t.v;nt?H.set(t,e):H.set(t,n),t.v=e;var r=G.ensure();r.capture(t,n),(t.f&A)!==0&&((t.f&S)!==0&&Vt(t),T(t,(t.f&k)===0?E:j)),t.wv=Ne(),pe(t,S),vt()&&_!==null&&(_.f&E)!==0&&(_.f&(P|W))===0&&(R===null?xn([t]):R.push(t))}return e}function Rt(t){q(t,t.v+1)}function pe(t,e){var n=t.reactions;if(n!==null)for(var r=vt(),a=n.length,s=0;s<a;s++){var l=n[s],u=l.f;if(!(!r&&l===_)){var i=(u&S)===0;i&&T(l,e),(u&A)!==0?pe(l,j):i&&K(l)}}}function st(t){if(typeof t!="object"||t===null||lt in t)return t;const e=re(t);if(e!==Le&&e!==je)return t;var n=new Map,r=Ie(t),a=I(0),s=U,l=u=>{if(U===s)return u();var i=c,f=U;L(null),ne(s);var o=u();return L(i),ne(f),o};return r&&n.set("length",I(t.length)),new Proxy(t,{defineProperty(u,i,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&We();var o=n.get(i);return o===void 0?o=l(()=>{var v=I(f.value);return n.set(i,v),v}):q(o,f.value,!0),!0},deleteProperty(u,i){var f=n.get(i);if(f===void 0){if(i in u){const o=l(()=>I(g));n.set(i,o),Rt(a)}}else q(f,g),Rt(a);return!0},get(u,i,f){if(i===lt)return t;var o=n.get(i),v=i in u;if(o===void 0&&(!v||it(u,i)?.writable)&&(o=l(()=>{var h=st(v?u[i]:g),d=I(h);return d}),n.set(i,o)),o!==void 0){var p=at(o);return p===g?void 0:p}return Reflect.get(u,i,f)},getOwnPropertyDescriptor(u,i){var f=Reflect.getOwnPropertyDescriptor(u,i);if(f&&"value"in f){var o=n.get(i);o&&(f.value=at(o))}else if(f===void 0){var v=n.get(i),p=v?.v;if(v!==void 0&&p!==g)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(u,i){if(i===lt)return!0;var f=n.get(i),o=f!==void 0&&f.v!==g||Reflect.has(u,i);if(f!==void 0||_!==null&&(!o||it(u,i)?.writable)){f===void 0&&(f=l(()=>{var p=o?st(u[i]):g,h=I(p);return h}),n.set(i,f));var v=at(f);if(v===g)return!1}return o},set(u,i,f,o){var v=n.get(i),p=i in u;if(r&&i==="length")for(var h=f;h<v.v;h+=1){var d=n.get(h+"");d!==void 0?q(d,g):h in u&&(d=l(()=>I(g)),n.set(h+"",d))}if(v===void 0)(!p||it(u,i)?.writable)&&(v=l(()=>I(void 0)),q(v,st(f)),n.set(i,v));else{p=v.v!==g;var xt=l(()=>st(f));q(v,xt)}var Kt=Reflect.getOwnPropertyDescriptor(u,i);if(Kt?.set&&Kt.set.call(o,f),!p){if(r&&typeof i=="string"){var zt=n.get("length"),At=Number(i);Number.isInteger(At)&&At>=zt.v&&q(zt,At+1)}Rt(a)}return!0},ownKeys(u){at(a);var i=Reflect.ownKeys(u).filter(v=>{var p=n.get(v);return p===void 0||p.v!==g});for(var[f,o]of n)o.v!==g&&!(f in u)&&i.push(f);return i},setPrototypeOf(){$e()}})}var Qt,we,ye,me;function fr(){if(Qt===void 0){Qt=window,we=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;ye=it(e,"firstChild").get,me=it(e,"nextSibling").get,$t(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),$t(n)&&(n.__t=void 0)}}function Q(t=""){return document.createTextNode(t)}function ot(t){return ye.call(t)}function $(t){return me.call(t)}function ur(t,e){if(!O)return ot(t);var n=ot(m);if(n===null)n=m.appendChild(Q());else if(e&&n.nodeType!==qt){var r=Q();return n?.before(r),Z(r),r}return Z(n),n}function or(t,e){if(!O){var n=ot(t);return n instanceof Comment&&n.data===""?$(n):n}return m}function cr(t,e=1,n=!1){let r=O?m:t;for(var a;e--;)a=r,r=$(r);if(!O)return r;if(n&&r?.nodeType!==qt){var s=Q();return r===null?a?.after(s):r.before(s),Z(s),s}return Z(r),r}function _r(t){t.textContent=""}function vr(){return!1}function ge(t){var e=c,n=_;L(null),tt(null);try{return t()}finally{L(e),tt(n)}}function Ee(t){_===null&&c===null&&Ke(),c!==null&&(c.f&k)!==0&&_===null&&Ge(),nt&&Ve()}function yn(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function D(t,e,n,r=!0){var a=_;a!==null&&(a.f&F)!==0&&(t|=F);var s={ctx:y,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:e,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{ft(s),s.f|=It}catch(i){throw z(s),i}else e!==null&&K(s);var l=n&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&Mt)===0;if(!l&&r&&(a!==null&&yn(s,a),c!==null&&(c.f&A)!==0&&(t&W)===0)){var u=c;(u.effects??=[]).push(s)}return s}function hr(t){const e=D(mt,null,!1);return T(e,E),e.teardown=t,e}function dr(t){Ee();var e=_.f,n=!c&&(e&P)!==0&&(e&It)===0;if(n){var r=y;(r.e??=[]).push(t)}else return be(t)}function be(t){return D(Pt|Ft,t,!1)}function pr(t){return Ee(),D(mt|Ft,t,!0)}function wr(t){G.ensure();const e=D(W,t,!0);return(n={})=>new Promise(r=>{n.outro?bn(e,()=>{z(e),r(void 0)}):(z(e),r(void 0))})}function yr(t){return D(Pt,t,!1)}function mn(t){return D(Lt|Mt,t,!0)}function mr(t,e=0){return D(mt|e,t,!0)}function gr(t,e=[],n=[]){hn(e,n,r=>{D(mt,()=>t(...r.map(at)),!0)})}function Er(t,e=0){var n=D(_t|e,t,!0);return n}function br(t,e=!0){return D(P,t,!0,e)}function Te(t){var e=t.teardown;if(e!==null){const n=nt,r=c;ee(!0),L(null);try{e.call(null)}finally{ee(n),L(r)}}}function xe(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const a=n.ac;a!==null&&ge(()=>{a.abort(jt)});var r=n.next;(n.f&W)!==0?n.parent=null:z(n,e),n=r}}function gn(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&P)===0&&z(e),e=n}}function z(t,e=!0){var n=!1;(e||(t.f&Ye)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(En(t.nodes_start,t.nodes_end),n=!0),xe(t,e&&!n),yt(t,0),T(t,et);var r=t.transitions;if(r!==null)for(const s of r)s.stop();Te(t);var a=t.parent;a!==null&&a.first!==null&&Ae(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function En(t,e){for(;t!==null;){var n=t===e?null:$(t);t.remove(),t=n}}function Ae(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function bn(t,e){var n=[];Re(t,n,!0),Tn(n,()=>{z(t),e&&e()})}function Tn(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var a of t)a.out(r)}else e()}function Re(t,e,n){if((t.f&F)===0){if(t.f^=F,t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&e.push(l);for(var r=t.first;r!==null;){var a=r.next,s=(r.f&ie)!==0||(r.f&P)!==0;Re(r,e,s?n:!1),r=a}}}function Tr(t){ke(t,!0)}function ke(t,e){if((t.f&F)!==0){t.f^=F,(t.f&E)===0&&(T(t,S),K(t));for(var n=t.first;n!==null;){var r=n.next,a=(n.f&ie)!==0||(n.f&P)!==0;ke(n,a?e:!1),n=r}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||e)&&s.in()}}let X=!1;function te(t){X=t}let nt=!1;function ee(t){nt=t}let c=null,N=!1;function L(t){c=t}let _=null;function tt(t){_=t}let C=null;function Se(t){c!==null&&(C===null?C=[t]:C.push(t))}let b=null,x=0,R=null;function xn(t){R=t}let Oe=1,ct=0,U=ct;function ne(t){U=t}let M=!1;function Ne(){return++Oe}function Tt(t){var e=t.f;if((e&S)!==0)return!0;if((e&j)!==0){var n=t.deps,r=(e&k)!==0;if(n!==null){var a,s,l=(e&dt)!==0,u=r&&_!==null&&!M,i=n.length;if((l||u)&&(_===null||(_.f&et)===0)){var f=t,o=f.parent;for(a=0;a<i;a++)s=n[a],(l||!s?.reactions?.includes(f))&&(s.reactions??=[]).push(f);l&&(f.f^=dt),u&&o!==null&&(o.f&k)===0&&(f.f^=k)}for(a=0;a<i;a++)if(s=n[a],Tt(s)&&ve(s),s.wv>t.wv)return!0}(!r||_!==null&&!M)&&T(t,E)}return!1}function De(t,e,n=!0){var r=t.reactions;if(r!==null&&!C?.includes(t))for(var a=0;a<r.length;a++){var s=r[a];(s.f&A)!==0?De(s,e,!1):e===s&&(n?T(s,S):(s.f&E)!==0&&T(s,j),K(s))}}function Ce(t){var e=b,n=x,r=R,a=c,s=M,l=C,u=y,i=N,f=U,o=t.f;b=null,x=0,R=null,M=(o&k)!==0&&(N||!X||c===null),c=(o&(P|W))===0?t:null,C=null,pt(t.ctx),N=!1,U=++ct,t.ac!==null&&(ge(()=>{t.ac.abort(jt)}),t.ac=null);try{t.f|=kt;var v=t.fn,p=v(),h=t.deps;if(b!==null){var d;if(yt(t,x),h!==null&&x>0)for(h.length=x+b.length,d=0;d<b.length;d++)h[x+d]=b[d];else t.deps=h=b;if(!M||(o&A)!==0&&t.reactions!==null)for(d=x;d<h.length;d++)(h[d].reactions??=[]).push(t)}else h!==null&&x<h.length&&(yt(t,x),h.length=x);if(vt()&&R!==null&&!N&&h!==null&&(t.f&(A|j|S))===0)for(d=0;d<R.length;d++)De(R[d],t);return a!==null&&a!==t&&(ct++,R!==null&&(r===null?r=R:r.push(...R))),(t.f&Y)!==0&&(t.f^=Y),p}catch(xt){return ln(xt)}finally{t.f^=kt,b=e,x=n,R=r,c=a,M=s,C=l,pt(u),N=i,U=f}}function An(t,e){let n=e.reactions;if(n!==null){var r=Me.call(n,t);if(r!==-1){var a=n.length-1;a===0?n=e.reactions=null:(n[r]=n[a],n.pop())}}n===null&&(e.f&A)!==0&&(b===null||!b.includes(e))&&(T(e,j),(e.f&(k|dt))===0&&(e.f^=dt),_e(e),yt(e,0))}function yt(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)An(t,n[r])}function ft(t){var e=t.f;if((e&et)===0){T(t,E);var n=_,r=X;_=t,X=!0;try{(e&_t)!==0?gn(t):xe(t),Te(t);var a=Ce(t);t.teardown=typeof a=="function"?a:null,t.wv=Oe;var s}finally{X=r,_=n}}}async function xr(){await Promise.resolve(),pn()}function Ar(){return G.ensure().settled()}function at(t){var e=t.f,n=(e&A)!==0;if(c!==null&&!N){var r=_!==null&&(_.f&et)!==0;if(!r&&!C?.includes(t)){var a=c.deps;if((c.f&kt)!==0)t.rv<ct&&(t.rv=ct,b===null&&a!==null&&a[x]===t?x++:b===null?b=[t]:(!M||!b.includes(t))&&b.push(t));else{(c.deps??=[]).push(t);var s=t.reactions;s===null?t.reactions=[c]:s.includes(c)||s.push(c)}}}else if(n&&t.deps===null&&t.effects===null){var l=t,u=l.parent;u!==null&&(u.f&k)===0&&(l.f^=k)}if(nt){if(H.has(t))return H.get(t);if(n){l=t;var i=l.v;return((l.f&E)===0&&l.reactions!==null||Pe(l))&&(i=Vt(l)),H.set(l,i),i}}else if(n){if(l=t,J?.has(l))return J.get(l);Tt(l)&&ve(l)}if((t.f&Y)!==0)throw t.v;return t.v}function Pe(t){if(t.v===g)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(H.has(e)||(e.f&A)!==0&&Pe(e))return!0;return!1}function Rr(t){var e=N;try{return N=!0,t()}finally{N=e}}const Rn=-7169;function T(t,e){t.f=t.f&Rn|e}function kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(lt in t)Ct(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&lt in n&&Ct(n)}}}function Ct(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{Ct(t[r],e)}catch{}const n=re(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Fe(n);for(let a in r){const s=r[a].get;if(s)try{s.call(t)}catch{}}}}}function kn(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function B(t,e){var n=_;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function Sr(t,e){var n=(e&Ze)!==0,r=(e&Je)!==0,a,s=!t.startsWith("<!>");return()=>{if(O)return B(m,null),m;a===void 0&&(a=kn(s?t:"<!>"+t),n||(a=ot(a)));var l=r||we?document.importNode(a,!0):a.cloneNode(!0);if(n){var u=ot(l),i=l.lastChild;B(u,i)}else B(l,l);return l}}function Or(t=""){if(!O){var e=Q(t+"");return B(e,e),e}var n=m;return n.nodeType!==qt&&(n.before(n=Q()),Z(n)),B(n,n),n}function Nr(){if(O)return B(m,null),m;var t=document.createDocumentFragment(),e=document.createComment(""),n=Q();return t.append(e,n),B(e,n),t}function Dr(t,e){if(O){_.nodes_end=m,nn();return}t!==null&&t.before(e)}export{Zn as $,ot as A,Or as B,Dr as C,$n as D,ie as E,rr as F,Sr as G,cr as H,or as I,gr as J,sr as K,pr as L,se as M,Nn as N,at as O,kr as P,Bt as Q,Jn as R,ur as S,Wn as T,Kn as U,re as V,Fe as W,Cn as X,Q as Y,Z,_n as _,c as a,tn as a0,Xn as a1,zn as a2,le as a3,en as a4,vr as a5,w as a6,Dt as a7,lr as a8,Gt as a9,it as aA,Ln as aB,Bn as aC,st as aD,q as aE,nt as aF,et as aG,Vn as aH,Un as aI,Hn as aJ,Gn as aK,Dn as aL,I as aM,Nr as aN,ir as aO,rn as aP,Sn as aa,qn as ab,Tr as ac,bn as ad,jn as ae,Yn as af,F as ag,$ as ah,Re as ai,_r as aj,Tn as ak,_ as al,Wt as am,L as an,tt as ao,fr as ap,Qe as aq,Yt as ar,Ht as as,Mn as at,wr as au,g as av,yr as aw,mr as ax,ar as ay,lt as az,Fn as b,y as c,gt as d,Rr as e,pn as f,In as g,nr as h,Ie as i,Qn as j,er as k,Ue as l,Ar as m,Er as n,O as o,nn as p,kn as q,B as r,tr as s,xr as t,dr as u,hr as v,br as w,On as x,z as y,m as z};

```

# docs\_app\immutable\chunks\DdMaYHV8.js

```js
import{R as a}from"./BT6KussZ.js";a();

```

# docs\_app\immutable\chunks\DsnmJJEf.js

```js
typeof window<"u"&&((window.__svelte??={}).v??=new Set).add("5");

```

# docs\_app\immutable\chunks\sovl0vNR.js

```js
import{o as De,s as wt}from"./BcTUKEQ-.js";import{p as vt,e as bt,a as At,b as U}from"./SQlIY1xE.js";import{x as me,aP as kt,aM as T,O as P,aE as x,t as $e}from"./BT6KussZ.js";const q=[];function Se(e,t=me){let n=null;const r=new Set;function a(o){if(kt(e,o)&&(e=o,n)){const c=!q.length;for(const f of r)f[1](),q.push(f,e);if(c){for(let f=0;f<q.length;f+=2)q[f][0](q[f+1]);q.length=0}}}function s(o){a(o(e))}function i(o,c=me){const f=[o,c];return r.add(f),r.size===1&&(n=t(a,s)||me),o(e),()=>{r.delete(f),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}class le{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Re{constructor(t,n){this.status=t,this.location=n}}class Ie extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}new URL("sveltekit-internal://");function Et(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function St(e){return e.split("%25").map(decodeURI).join("%25")}function Rt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function ye({href:e}){return e.split("#")[0]}function It(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return f=>(n(f),i[o](f));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}function Ut(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}new TextEncoder;const Lt=new TextDecoder;function Tt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}const Pt=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&H.delete(Ue(e)),Pt(e,t));const H=new Map;function xt(e,t){const n=Ue(e,t),r=document.querySelector(n);if(r?.textContent){r.remove();let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&H.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Tt(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function Ot(e,t,n){if(H.size>0){const r=Ue(e,n),a=H.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(a.body,a.init);H.delete(r)}}return window.fetch(t,n)}function Ue(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Ut(...a)}"]`}return r}function Nt({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,f,d]])=>{const{pattern:h,params:u}=vt(o),l={id:o,exec:g=>{const w=h.exec(g);if(w)return bt(w,u,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...f||[]].map(i),leaf:s(c)};return l.errors.length=l.layouts.length=Math.max(l.errors.length,l.layouts.length),l});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function Je(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function qe(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const Ct="1755100067567",We="sveltekit:snapshot",Xe="sveltekit:scroll",Ze="sveltekit:states",jt="sveltekit:pageurl",V="sveltekit:history",J="sveltekit:navigation",j={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},fe=location.origin;function Qe(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function ue(){return{x:pageXOffset,y:pageYOffset}}function B(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Be={...j,"":j.hover};function et(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function tt(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=et(e)}}function be(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||de(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=r?.origin===fe&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function te(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=B(o,"preload-code")),a===null&&(a=B(o,"preload-data")),t===null&&(t=B(o,"keepfocus")),n===null&&(n=B(o,"noscroll")),s===null&&(s=B(o,"reload")),i===null&&(i=B(o,"replacestate")),o=et(o);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Be[r??"off"],preload_data:Be[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Ve(e){const t=Se(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const nt={v:()=>{}};function Dt(){const{set:e,subscribe:t}=Se(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${At}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Ct;return i&&(e(!0),nt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function de(e,t,n){return e.origin!==fe||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function kn(e){}function Fe(e){const t=qt(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const $t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function qt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=$t.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const Bt=-1,Vt=-2,Ft=-3,Mt=-4,Gt=-5,Ht=-6;function Kt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===Bt)return;if(s===Ft)return NaN;if(s===Mt)return 1/0;if(s===Gt)return-1/0;if(s===Ht)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],f=t?.[c];if(f)return r[s]=f(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let l=1;l<o.length;l+=1)d.add(a(o[l]));break;case"Map":const h=new Map;r[s]=h;for(let l=1;l<o.length;l+=2)h.set(a(o[l]),a(o[l+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const u=Object.create(null);r[s]=u;for(let l=1;l<o.length;l+=2)u[o[l]]=a(o[l+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const l=globalThis[c],g=o[1],w=Fe(g),_=new l(w);r[s]=_;break}case"ArrayBuffer":{const l=o[1],g=Fe(l);r[s]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let f=0;f<o.length;f+=1){const d=o[f];d!==Vt&&(c[f]=a(d))}}else{const c={};r[s]=c;for(const f in o){const d=o[f];c[f]=a(d)}}return r[s]}return a(0)}const rt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...rt];const Yt=new Set([...rt]);[...Yt];function zt(e){return e.filter(t=>t!=null)}const Jt="x-sveltekit-invalidated",Wt="x-sveltekit-trailing-slash";function ne(e){return e instanceof le||e instanceof Ie?e.status:500}function Xt(e){return e instanceof Ie?e.text:"Internal Error"}let E,W,we;const Zt=De.toString().includes("$$")||/function \w+\(\) \{\}/.test(De.toString());Zt?(E={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},W={current:null},we={current:!1}):(E=new class{#e=T({});get data(){return P(this.#e)}set data(t){x(this.#e,t)}#t=T(null);get form(){return P(this.#t)}set form(t){x(this.#t,t)}#n=T(null);get error(){return P(this.#n)}set error(t){x(this.#n,t)}#r=T({});get params(){return P(this.#r)}set params(t){x(this.#r,t)}#a=T({id:null});get route(){return P(this.#a)}set route(t){x(this.#a,t)}#o=T({});get state(){return P(this.#o)}set state(t){x(this.#o,t)}#s=T(-1);get status(){return P(this.#s)}set status(t){x(this.#s,t)}#i=T(new URL("https://example.com"));get url(){return P(this.#i)}set url(t){x(this.#i,t)}},W=new class{#e=T(null);get current(){return P(this.#e)}set current(t){x(this.#e,t)}},we=new class{#e=T(!1);get current(){return P(this.#e)}set current(t){x(this.#e,t)}},nt.v=()=>we.current=!0);function Qt(e){Object.assign(E,e)}const en="/__data.json",tn=".html__data.json";function nn(e){return e.endsWith(".html")?e.replace(/\.html$/,tn):e.replace(/\/$/,"")+en}const{tick:rn}=wt,an=new Set(["icon","shortcut icon","apple-touch-icon"]),$=Je(Xe)??{},X=Je(We)??{},C={url:Ve({}),page:Ve({}),navigating:Se(null),updated:Dt()};function Le(e){$[e]=ue()}function on(e,t){let n=e+1;for(;$[n];)delete $[n],n+=1;for(n=t+1;X[n];)delete X[n],n+=1}function M(e){return location.href=e.href,new Promise(()=>{})}async function at(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function Me(){}let Te,Ae,re,O,ke,v;globalThis.__sveltekit_fsharb.data;const ae=[],oe=[];let N=null;const ee=new Map,ot=new Set,sn=new Set,K=new Set;let y={branch:[],error:null,url:null},Pe=!1,se=!1,Ge=!0,Z=!1,G=!1,st=!1,xe=!1,it,A,R,D;const Y=new Set,He=new Map;async function In(e,t,n){document.URL!==location.href&&(location.href=location.href),v=e,await e.hooks.init?.(),Te=Nt(e),O=document.documentElement,ke=t,Ae=e.nodes[0],re=e.nodes[1],Ae(),re(),A=history.state?.[V],R=history.state?.[J],A||(A=R=Date.now(),history.replaceState({...history.state,[V]:A,[J]:R},""));const r=$[A];function a(){r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y))}n?(a(),await mn(ke,n)):(await z({type:"enter",url:Qe(v.hash?wn(new URL(location.href)):location.href),replace_state:!0}),a()),_n()}function cn(){ae.length=0,xe=!1}function ct(e){oe.some(t=>t?.snapshot)&&(X[e]=oe.map(t=>t?.snapshot?.capture()))}function lt(e){X[e]?.forEach((t,n)=>{oe[n]?.snapshot?.restore(t)})}function Ke(){Le(A),qe(Xe,$),ct(R),qe(We,X)}async function ft(e,t,n,r){let a;const s=await z({type:"goto",url:Qe(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(xe=!0,a=[...He.keys()]),t.invalidate&&t.invalidate.forEach(gn)}});return t.invalidateAll&&$e().then($e).then(()=>{He.forEach(({resource:i},o)=>{a?.includes(o)&&i.refresh?.()})}),s}async function ln(e){if(e.id!==N?.id){const t={};Y.add(t),N={id:e.id,token:t,promise:ht({...e,preload:t}).then(n=>(Y.delete(t),n.type==="loaded"&&n.state.error&&(N=null),n))}}return N.promise}async function ve(e){const t=(await pe(e,!1))?.route;t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function ut(e,t,n){y=e.state;const r=document.querySelector("style[data-sveltekit]");if(r&&r.remove(),Object.assign(E,e.props.page),it=new v.root({target:t,props:{...e.props,stores:C,components:oe},hydrate:n,sync:!1}),lt(R),n){const a={from:null,to:{params:y.params,route:{id:y.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};K.forEach(s=>s(a))}se=!0}function ie({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(U&&(e.pathname===U||e.pathname===U+"/"))o="always";else for(const l of n)l?.slash!==void 0&&(o=l.slash);e.pathname=Et(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:zt(n).map(l=>l.node.component),page:je(E)}};i!==void 0&&(c.props.form=i);let f={},d=!E,h=0;for(let l=0;l<Math.max(n.length,y.branch.length);l+=1){const g=n[l],w=y.branch[l];g?.data!==w?.data&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!y.url||e.href!==y.url.href||y.error!==a||i!==void 0&&i!==E.form||d)&&(c.props.page={error:a,params:t,route:{id:s?.id??null},state:{},status:r,url:new URL(e),form:i??null,data:d?f:E.data}),c}async function Oe({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if(f.universal?.load){let d=function(...u){for(const l of u){const{href:g}=new URL(l,n);c.dependencies.add(g)}};const h={route:new Proxy(a,{get:(u,l)=>(o&&(c.route=!0),u[l])}),params:new Proxy(r,{get:(u,l)=>(o&&c.params.add(l),u[l])}),data:s?.data??null,url:It(n,()=>{o&&(c.url=!0)},u=>{o&&c.search_params.add(u)},v.hash),async fetch(u,l){u instanceof Request&&(l={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:[...u.headers].length>0?u?.headers:void 0,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...l});const{resolved:g,promise:w}=dt(u,l,n);return o&&d(g.href),w},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(u){o=!1;try{return u()}finally{o=!0}}};i=await f.universal.load.call(null,h)??null}return{node:f,loader:e,server:s,universal:f.universal?.load?{type:"data",data:i,uses:c}:null,data:i??s?.data??null,slash:f.universal?.trailingSlash??s?.slash}}function dt(e,t,n){let r=e instanceof Request?e.url:e;const a=new URL(r,n);a.origin===n.origin&&(r=a.href.slice(n.origin.length));const s=se?Ot(r,a.href,t):xt(r,t);return{resolved:a,promise:s}}function Ye(e,t,n,r,a,s){if(xe)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==y.params[i])return!0;for(const i of a.dependencies)if(ae.some(o=>o(new URL(i))))return!0;return!1}function Ne(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function fn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function ze({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:je(E),constructors:[]}}}async function ht({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if(N?.id===e)return Y.delete(N.token),N.promise;const{errors:i,layouts:o,leaf:c}=a,f=[...o,c];i.forEach(p=>p?.().catch(()=>{})),f.forEach(p=>p?.[1]().catch(()=>{}));let d=null;const h=y.url?e!==ce(y.url):!1,u=y.route?a.id!==y.route.id:!1,l=fn(y.url,n);let g=!1;const w=f.map((p,m)=>{const b=y.branch[m],k=!!p?.[0]&&(b?.loader!==p[1]||Ye(g,u,h,l,b.server?.uses,r));return k&&(g=!0),k});if(w.some(Boolean)){try{d=await _t(n,w)}catch(p){const m=await F(p,{url:n,params:r,route:{id:e}});return Y.has(s)?ze({error:m,url:n,params:r,route:a}):he({status:ne(p),error:m,url:n,route:a})}if(d.type==="redirect")return d}const _=d?.nodes;let S=!1;const L=f.map(async(p,m)=>{if(!p)return;const b=y.branch[m],k=_?.[m];if((!k||k.type==="skip")&&p[1]===b?.loader&&!Ye(S,u,h,l,b.universal?.uses,r))return b;if(S=!0,k?.type==="error")throw k;return Oe({loader:p[1],url:n,params:r,route:a,parent:async()=>{const ge={};for(let _e=0;_e<m;_e+=1)Object.assign(ge,(await L[_e])?.data);return ge},server_data_node:Ne(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?b?.server:void 0)})});for(const p of L)p.catch(()=>{});const I=[];for(let p=0;p<f.length;p+=1)if(f[p])try{I.push(await L[p])}catch(m){if(m instanceof Re)return{type:"redirect",location:m.location};if(Y.has(s))return ze({error:await F(m,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=ne(m),k;if(_?.includes(m))b=m.status??b,k=m.error;else if(m instanceof le)k=m.body;else{if(await C.updated.check())return await at(),await M(n);k=await F(m,{params:r,url:n,route:{id:a.id}})}const Q=await un(p,I,i);return Q?ie({url:n,params:r,branch:I.slice(0,Q.idx).concat(Q.node),status:b,error:k,route:a}):await gt(n,{id:a.id},k,b)}else I.push(void 0);return ie({url:n,params:r,branch:I,status:200,error:null,route:a,form:t?void 0:null})}async function un(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function he({status:e,error:t,url:n,route:r}){const a={};let s=null;if(v.server_loads[0]===0)try{const o=await _t(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==fe||n.pathname!==location.pathname||Pe)&&await M(n)}try{const o=await Oe({loader:Ae,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ne(s)}),c={node:await re(),loader:re,universal:null,server:null,data:null};return ie({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof Re)return ft(new URL(o.location,location.href),{},0);throw o}}async function dn(e){const t=e.href;if(ee.has(t))return ee.get(t);let n;try{const r=(async()=>{let a=await v.hooks.reroute({url:new URL(e),fetch:async(s,i)=>dt(s,i,e).promise})??e;if(typeof a=="string"){const s=new URL(e);v.hash?s.hash=a:s.pathname=a,a=s}return a})();ee.set(t,r),n=await r}catch{ee.delete(t);return}return n}async function pe(e,t){if(e&&!de(e,U,v.hash)){const n=await dn(e);if(!n)return;const r=hn(n);for(const a of Te){const s=a.exec(r);if(s)return{id:ce(e),invalidating:t,route:a,params:Rt(s),url:e}}}}function hn(e){return St(v.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(U.length))||"/"}function ce(e){return(v.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function pt({url:e,type:t,intent:n,delta:r}){let a=!1;const s=Ce(y,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return Z||ot.forEach(o=>o(i)),a?null:s}async function z({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:f=Me,block:d=Me}){const h=D;D=c;const u=await pe(t,!1),l=e==="enter"?Ce(y,u,t,e):pt({url:t,type:e,delta:n?.delta,intent:u});if(!l){d(),D===c&&(D=h);return}const g=A,w=R;f(),Z=!0,se&&l.navigation.type!=="enter"&&C.navigating.set(W.current=l.navigation);let _=u&&await ht(u);if(!_){if(de(t,U,v.hash))return await M(t);_=await gt(t,{id:null},await F(new Ie(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=u?.url||t,D!==c)return l.reject(new Error("navigation aborted")),!1;if(_.type==="redirect")if(o>=20)_=await he({status:500,error:await F(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return await ft(new URL(_.location,t).href,{},o+1,c),!1;else _.props.page.status>=400&&await C.updated.check()&&(await at(),await M(t));if(cn(),Le(g),ct(w),_.props.page.url.pathname!==t.pathname&&(t.pathname=_.props.page.url.pathname),i=n?n.state:i,!n){const p=s?0:1,m={[V]:A+=p,[J]:R+=p,[Ze]:i};(s?history.replaceState:history.pushState).call(history,m,"",t),s||on(A,R)}if(N=null,_.props.page.state=i,se){const p=(await Promise.all(Array.from(sn,m=>m(l.navigation)))).filter(m=>typeof m=="function");if(p.length>0){let m=function(){p.forEach(b=>{K.delete(b)})};p.push(m),p.forEach(b=>{K.add(b)})}y=_.state,_.props.page&&(_.props.page.url=t),it.$set(_.props),Qt(_.props.page),st=!0}else ut(_,ke,!1);const{activeElement:S}=document;await rn();const L=n?n.scroll:a?ue():null;if(Ge){const p=t.hash&&document.getElementById(yt(t));L?scrollTo(L.x,L.y):p?p.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==S&&document.activeElement!==document.body;!r&&!I&&yn(t),Ge=!0,_.props.page&&Object.assign(E,_.props.page),Z=!1,e==="popstate"&&lt(R),l.fulfil(void 0),K.forEach(p=>p(l.navigation)),C.navigating.set(W.current=null)}async function gt(e,t,n,r){return e.origin===fe&&e.pathname===location.pathname&&!Pe?await he({status:r,error:n,url:e,route:t}):await M(e)}function pn(){let e,t,n;O.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(e),e=setTimeout(()=>{s(c,j.hover)},20)});function r(o){o.defaultPrevented||s(o.composedPath()[0],j.tap)}O.addEventListener("mousedown",r),O.addEventListener("touchstart",r,{passive:!0});const a=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(ve(new URL(c.target.href)),a.unobserve(c.target))},{threshold:0});async function s(o,c){const f=tt(o,O),d=f===t&&c>=n;if(!f||d)return;const{url:h,external:u,download:l}=be(f,U,v.hash);if(u||l)return;const g=te(f),w=h&&ce(y.url)===ce(h);if(!(g.reload||w))if(c<=g.preload_data){t=f,n=j.tap;const _=await pe(h,!1);if(!_)return;ln(_)}else c<=g.preload_code&&(t=f,n=c,ve(h))}function i(){a.disconnect();for(const o of O.querySelectorAll("a")){const{url:c,external:f,download:d}=be(o,U,v.hash);if(f||d)continue;const h=te(o);h.reload||(h.preload_code===j.viewport&&a.observe(o),h.preload_code===j.eager&&ve(c))}}K.add(i),i()}function F(e,t){if(e instanceof le)return e.body;const n=ne(e),r=Xt(e);return v.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function gn(e){if(typeof e=="function")ae.push(e);else{const{href:t}=new URL(e,location.href);ae.push(n=>n.href===t)}}function _n(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Ke(),!Z){const r=Ce(y,void 0,null,"leave"),a={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};ot.forEach(s=>s(a))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ke()}),navigator.connection?.saveData||pn(),O.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=tt(t.composedPath()[0],O);if(!n)return;const{url:r,external:a,target:s,download:i}=be(n,U,v.hash);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const o=te(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;const[f,d]=(v.hash?r.hash.replace(/^#/,""):r.href).split("#"),h=f===ye(location);if(a||o.reload&&(!h||!d)){pt({url:r,type:"link"})?Z=!0:t.preventDefault();return}if(d!==void 0&&h){const[,u]=y.url.href.split("#");if(u===d){if(t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const l=n.ownerDocument.getElementById(decodeURIComponent(d));l&&(l.scrollIntoView(),l.focus())}return}if(G=!0,Le(A),e(r),!o.replace_state)return;G=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),await z({type:"link",url:r,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??r.href===location.href})}),O.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formTarget||n.target)==="_blank"||(r?.formMethod||n.method)!=="get")return;const i=new URL(r?.hasAttribute("formaction")&&r?.formAction||n.action);if(de(i,U,!1))return;const o=t.target,c=te(o);if(c.reload)return;t.preventDefault(),t.stopPropagation();const f=new FormData(o),d=r?.getAttribute("name");d&&f.append(d,r?.getAttribute("value")??""),i.search=new URLSearchParams(f).toString(),z({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{if(!Ee){if(t.state?.[V]){const n=t.state[V];if(D={},n===A)return;const r=$[n],a=t.state[Ze]??{},s=new URL(t.state[jt]??location.href),i=t.state[J],o=y.url?ye(location)===ye(y.url):!1;if(i===R&&(st||o)){a!==E.state&&(E.state=a),e(s),$[A]=ue(),r&&scrollTo(r.x,r.y),A=n;return}const f=n-A;await z({type:"popstate",url:s,popped:{state:a,scroll:r,delta:f},accept:()=>{A=n,R=i},block:()=>{history.go(-f)},nav_token:D})}else if(!G){const n=new URL(location.href);e(n),v.hash&&location.reload()}}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[V]:++A,[J]:R},"",location.href))});for(const t of document.querySelectorAll("link"))an.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&C.navigating.set(W.current=null)});function e(t){y.url=E.url=t,C.page.set(je(E)),C.page.notify()}}async function mn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Pe=!0;const f=new URL(location.href);let d;({params:a={},route:s={id:null}}=await pe(f,!1)||{}),d=Te.find(({id:l})=>l===s.id);let h,u=!0;try{const l=r.map(async(w,_)=>{const S=o[_];return S?.uses&&(S.uses=mt(S.uses)),Oe({loader:v.nodes[w],url:f,params:a,route:s,parent:async()=>{const L={};for(let I=0;I<_;I+=1)Object.assign(L,(await l[I]).data);return L},server_data_node:Ne(S)})}),g=await Promise.all(l);if(d){const w=d.layouts;for(let _=0;_<w.length;_++)w[_]||g.splice(_,0,void 0)}h=ie({url:f,params:a,branch:g,status:t,error:n,form:c,route:d??null})}catch(l){if(l instanceof Re){await M(new URL(l.location,location.href));return}h=await he({status:ne(l),error:await F(l,{url:f,params:a,route:s}),url:f,route:s}),e.textContent="",u=!1}h.props.page&&(h.props.page.state={}),ut(h,e,u)}async function _t(e,t){const n=new URL(e);n.pathname=nn(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Wt,"1"),n.searchParams.append(Jt,t.map(s=>s?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let s;throw a.headers.get("content-type")?.includes("application/json")?s=await a.json():a.status===404?s="Not Found":a.status===500&&(s="Internal Error"),new le(a.status,s)}return new Promise(async s=>{const i=new Map,o=a.body.getReader();function c(d){return Kt(d,{...v.decoders,Promise:h=>new Promise((u,l)=>{i.set(h,{fulfil:u,reject:l})})})}let f="";for(;;){const{done:d,value:h}=await o.read();if(d&&!f)break;for(f+=!h&&f?`
`:Lt.decode(h,{stream:!0});;){const u=f.indexOf(`
`);if(u===-1)break;const l=JSON.parse(f.slice(0,u));if(f=f.slice(u+1),l.type==="redirect")return s(l);if(l.type==="data")l.nodes?.forEach(g=>{g?.type==="data"&&(g.uses=mt(g.uses),g.data=c(g.data))}),s(l);else if(l.type==="chunk"){const{id:g,data:w,error:_}=l,S=i.get(g);i.delete(g),_?S.reject(c(_)):S.fulfil(c(w))}}}})}function mt(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}let Ee=!1;function yn(e){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=yt(e);if(n&&document.getElementById(n)){const{x:a,y:s}=ue();setTimeout(()=>{const i=history.state;Ee=!0,location.replace(`#${n}`),v.hash&&location.replace(e.hash),history.replaceState(i,"",e.hash),scrollTo(a,s),Ee=!1})}else{const a=document.body,s=a.getAttribute("tabindex");a.tabIndex=-1,a.focus({preventScroll:!0,focusVisible:!1}),s!==null?a.setAttribute("tabindex",s):a.removeAttribute("tabindex")}const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function Ce(e,t,n,r){let a,s;const i=new Promise((c,f)=>{a=c,s=f});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function je(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function wn(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}function yt(e){let t;if(v.hash){const[,,n]=e.hash.split("#",3);t=n??""}else t=e.hash.slice(1);return decodeURIComponent(t)}export{In as a,kn as l,E as p,C as s};

```

# docs\_app\immutable\chunks\SQlIY1xE.js

```js
const w=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function x(t){const s=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${_(t).map(a=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(i)return s.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/([^]*))?";const c=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(c)return s.push({name:c[1],matcher:c[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const n=a.split(/\[(.+?)\](?!\])/);return"/"+n.map((e,l)=>{if(l%2){if(e.startsWith("x+"))return h(String.fromCharCode(parseInt(e.slice(2),16)));if(e.startsWith("u+"))return h(String.fromCharCode(...e.slice(2).split("-").map(g=>parseInt(g,16))));const o=w.exec(e),[,u,p,m,d]=o;return s.push({name:m,matcher:d,optional:!!u,rest:!!p,chained:p?l===1&&n[0]==="":!1}),p?"([^]*?)":u?"([^/]*)?":"([^/]+?)"}return h(e)}).join("")}).join("")}/?$`),params:s}}function $(t){return t!==""&&!/^\([^)]+\)$/.test(t)}function _(t){return t.slice(1).split("/").filter($)}function j(t,s,f){const a={},i=t.slice(1),c=i.filter(r=>r!==void 0);let n=0;for(let r=0;r<s.length;r+=1){const e=s[r];let l=i[r-n];if(e.chained&&e.rest&&n&&(l=i.slice(r-n,r+1).filter(o=>o).join("/"),n=0),l===void 0){e.rest&&(a[e.name]="");continue}if(!e.matcher||f[e.matcher](l)){a[e.name]=l;const o=s[r+1],u=i[r+1];o&&!o.rest&&o.optional&&u&&e.chained&&(n=0),!o&&!u&&Object.keys(a).length===c.length&&(n=0);continue}if(e.optional&&e.chained){n++;continue}return}if(!n)return a}function h(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}const b=/\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;function k(t,s){return"/"+_(t).map(a=>a.replace(b,(i,c,n,r)=>{const e=s[r];if(!e){if(c||n&&e!==void 0)return"";throw new Error(`Missing parameter '${r}' in route ${t}`)}if(e.startsWith("/")||e.endsWith("/"))throw new Error(`Parameter '${r}' in route ${t} cannot start or end with a slash -- this would cause an invalid route like foo//bar`);return e})).filter(Boolean).join("/")}const v=globalThis.__sveltekit_fsharb?.base??"/LearningDays",C=globalThis.__sveltekit_fsharb?.assets??v;export{C as a,v as b,j as e,x as p,k as r};

```

# docs\_app\immutable\chunks\ysPryp9P.js

```js
import{am as k,an as O,ao as S,i as C,a as H,al as I,ap as T,A as P,a3 as R,aq as j,ah as q,ar as E,a2 as g,Z as A,p as x,z as v,a4 as F,as as W,at as $,aj as z,aa as B,au as K,Y as Z,w as G,o as N,F as J,c as Q,r as U,K as X}from"./BT6KussZ.js";const ee=["touchstart","touchmove"];function te(e){return ee.includes(e)}const ae=new Set,D=new Set;let M=null;function m(e){var t=this,s=t.ownerDocument,c=e.type,l=e.composedPath?.()||[],a=l[0]||e.target;M=e;var o=0,d=M===e&&e.__root;if(d){var u=l.indexOf(d);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var _=l.indexOf(t);if(_===-1)return;u<=_&&(o=u)}if(a=l[o]||e.target,a!==t){k(e,"currentTarget",{configurable:!0,get(){return a||s}});var w=H,i=I;O(null),S(null);try{for(var r,n=[];a!==null;){var h=a.assignedSlot||a.parentNode||a.host||null;try{var f=a["__"+c];if(f!=null&&(!a.disabled||e.target===a))if(C(f)){var[V,...Y]=f;V.apply(a,[e,...Y])}else f.call(a,e)}catch(y){r?n.push(y):r=y}if(e.cancelBubble||h===t||h===null)break;a=h}if(r){for(let y of n)queueMicrotask(()=>{throw y});throw r}}finally{e.__root=t,delete e.currentTarget,O(w),S(i)}}}function ne(e,t){var s=t==null?"":typeof t=="object"?t+"":t;s!==(e.__t??=e.nodeValue)&&(e.__t=s,e.nodeValue=s+"")}function re(e,t){return L(e,t)}function oe(e,t){T(),t.intro=t.intro??!1;const s=t.target,c=N,l=v;try{for(var a=P(s);a&&(a.nodeType!==R||a.data!==j);)a=q(a);if(!a)throw E;g(!0),A(a),x();const o=L(e,{...t,anchor:a});if(v===null||v.nodeType!==R||v.data!==F)throw W(),E;return g(!1),o}catch(o){if(o instanceof Error&&o.message.split(`
`).some(d=>d.startsWith("https://svelte.dev/e/")))throw o;return o!==E&&console.warn("Failed to hydrate: ",o),t.recover===!1&&$(),T(),z(s),g(!1),re(e,t)}finally{g(c),A(l)}}const p=new Map;function L(e,{target:t,anchor:s,props:c={},events:l,context:a,intro:o=!0}){T();var d=new Set,u=i=>{for(var r=0;r<i.length;r++){var n=i[r];if(!d.has(n)){d.add(n);var h=te(n);t.addEventListener(n,m,{passive:h});var f=p.get(n);f===void 0?(document.addEventListener(n,m,{passive:h}),p.set(n,1)):p.set(n,f+1)}}};u(B(ae)),D.add(u);var _=void 0,w=K(()=>{var i=s??t.appendChild(Z());return G(()=>{if(a){J({});var r=Q;r.c=a}l&&(c.$$events=l),N&&U(i,null),_=e(i,c)||{},N&&(I.nodes_end=v),a&&X()}),()=>{for(var r of d){t.removeEventListener(r,m);var n=p.get(r);--n===0?(document.removeEventListener(r,m),p.delete(r)):p.set(r,n)}D.delete(u),i!==s&&i.parentNode?.removeChild(i)}});return b.set(_,w),_}let b=new WeakMap;function ie(e,t){const s=b.get(e);return s?(b.delete(e),s(t)):Promise.resolve()}export{oe as h,re as m,ne as s,ie as u};

```

# docs\_app\immutable\entry\app.I5D0vyMl.js

```js
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BPQxZIMI.js","../chunks/DsnmJJEf.js","../chunks/BT6KussZ.js","../chunks/-QX5y4Md.js","../chunks/BlK_T66N.js","../chunks/SQlIY1xE.js","../nodes/1.CN2BJlGk.js","../chunks/DdMaYHV8.js","../chunks/ysPryp9P.js","../chunks/BJREn4Ip.js","../chunks/sovl0vNR.js","../chunks/BcTUKEQ-.js","../nodes/2.CdllZjMB.js","../nodes/3.BNjxxM5Z.js","../nodes/4.CE7uwcFk.js"])))=>i.map(i=>d[i]);
import{o as O,p as q,n as V,E as z,$ as ae,a0 as ne,a1 as se,Z as ie,a2 as F,Y as G,w as B,a6 as M,av as oe,a5 as H,ac as ce,ad as Z,z as J,aw as fe,ax as ue,ay as le,e as K,az as Q,aA as de,aB as _e,aC as ve,O as b,Q as me,_ as he,aD as ge,aE as A,aF as Ee,al as ye,aG as be,aH as Pe,d as Re,aI as Se,aJ as Ie,aK as Oe,aL as W,f as Ae,am as Te,a8 as Le,F as we,L as De,u as xe,aM as w,t as ke,G as X,I as T,H as Ce,C as S,K as Ne,aN as D,S as pe,T as Be,aO as x,B as Me,J as je}from"../chunks/BT6KussZ.js";import{h as Fe,m as Ue,u as Ye,s as qe}from"../chunks/ysPryp9P.js";import"../chunks/DsnmJJEf.js";import{o as Ve}from"../chunks/BcTUKEQ-.js";function k(a,e,s=!1){O&&q();var o=a,n=null,t=null,r=oe,i=s?z:0,m=!1;const E=(y,f=!0)=>{m=!0,v(f,y)};var c=null;function h(){c!==null&&(c.lastChild.remove(),o.before(c),c=null);var y=r?n:t,f=r?t:n;y&&ce(y),f&&Z(f,()=>{r?t=null:n=null})}const v=(y,f)=>{if(r===(r=y))return;let l=!1;if(O){const R=ae(o)===ne;!!r===R&&(o=se(),ie(o),F(!1),l=!0)}var d=H(),_=o;if(d&&(c=document.createDocumentFragment(),c.append(_=G())),r?n??=f&&B(()=>f(_)):t??=f&&B(()=>f(_)),d){var P=M,u=r?n:t,g=r?t:n;u&&P.skipped_effects.delete(u),g&&P.skipped_effects.add(g),P.add_callback(h)}else h();l&&F(!0)};V(()=>{m=!1,e(E),m||v(null,null)},i),O&&(o=J)}function C(a,e,s){O&&q();var o=a,n,t,r=null,i=null;function m(){t&&(Z(t),t=null),r&&(r.lastChild.remove(),o.before(r),r=null),t=i,i=null}V(()=>{if(n!==(n=e())){var E=H();if(n){var c=o;E&&(r=document.createDocumentFragment(),r.append(c=G()),t&&M.skipped_effects.add(t)),i=B(()=>s(c,n))}E?M.add_callback(m):m()}},z),O&&(o=J)}function U(a,e){return a===e||a?.[Q]===e}function N(a={},e,s,o){return fe(()=>{var n,t;return ue(()=>{n=t,t=[],K(()=>{a!==s(...t)&&(e(a,...t),n&&U(s(...n),a)&&e(null,...n))})}),()=>{le(()=>{t&&U(s(...t),a)&&e(null,...t)})}}),a}let L=!1;function ze(a){var e=L;try{return L=!1,[a(),L]}finally{L=e}}function p(a,e,s,o){var n=!Re||(s&Se)!==0,t=(s&Pe)!==0,r=(s&Oe)!==0,i=o,m=!0,E=()=>(m&&(m=!1,i=r?K(o):o),i),c;if(t){var h=Q in a||W in a;c=de(a,e)?.set??(h&&e in a?u=>a[e]=u:void 0)}var v,y=!1;t?[v,y]=ze(()=>a[e]):v=a[e],v===void 0&&o!==void 0&&(v=E(),c&&(n&&_e(),c(v)));var f;if(n?f=()=>{var u=a[e];return u===void 0?E():(m=!0,u)}:f=()=>{var u=a[e];return u!==void 0&&(i=void 0),u===void 0?i:u},n&&(s&ve)===0)return f;if(c){var l=a.$$legacy;return(function(u,g){return arguments.length>0?((!n||!g||l||y)&&c(g?f():u),u):f()})}var d=!1,_=((s&Ie)!==0?me:he)(()=>(d=!1,f()));t&&b(_);var P=ye;return(function(u,g){if(arguments.length>0){const R=g?b(_):n&&t?ge(u):u;return A(_,R),d=!0,i!==void 0&&(i=R),u}return Ee&&d||(P.f&be)!==0?_.v:b(_)})}function Ge(a){return class extends He{constructor(e){super({component:a,...e})}}}class He{#t;#e;constructor(e){var s=new Map,o=(t,r)=>{var i=Le(r,!1,!1);return s.set(t,i),i};const n=new Proxy({...e.props||{},$$events:{}},{get(t,r){return b(s.get(r)??o(r,Reflect.get(t,r)))},has(t,r){return r===W?!0:(b(s.get(r)??o(r,Reflect.get(t,r))),Reflect.has(t,r))},set(t,r,i){return A(s.get(r)??o(r,i),i),Reflect.set(t,r,i)}});this.#e=(e.hydrate?Fe:Ue)(e.component,{target:e.target,anchor:e.anchor,props:n,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&Ae(),this.#t=n.$$events;for(const t of Object.keys(this.#e))t==="$set"||t==="$destroy"||t==="$on"||Te(this,t,{get(){return this.#e[t]},set(r){this.#e[t]=r},enumerable:!0});this.#e.$set=t=>{Object.assign(n,t)},this.#e.$destroy=()=>{Ye(this.#e)}}$set(e){this.#e.$set(e)}$on(e,s){this.#t[e]=this.#t[e]||[];const o=(...n)=>s.call(this,...n);return this.#t[e].push(o),()=>{this.#t[e]=this.#t[e].filter(n=>n!==o)}}$destroy(){this.#e.$destroy()}}const Ze="modulepreload",Je=function(a,e){return new URL(a,e).href},Y={},I=function(e,s,o){let n=Promise.resolve();if(s&&s.length>0){let E=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),m=i?.nonce||i?.getAttribute("nonce");n=E(s.map(c=>{if(c=Je(c,o),c in Y)return;Y[c]=!0;const h=c.endsWith(".css"),v=h?'[rel="stylesheet"]':"";if(!!o)for(let l=r.length-1;l>=0;l--){const d=r[l];if(d.href===c&&(!h||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${v}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Ze,h||(f.as="script"),f.crossOrigin="",f.href=c,m&&f.setAttribute("nonce",m),document.head.appendChild(f),h)return new Promise((l,d)=>{f.addEventListener("load",l),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function t(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return n.then(r=>{for(const i of r||[])i.status==="rejected"&&t(i.reason);return e().catch(t)})},st={};var Ke=X('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Qe=X("<!> <!>",1);function We(a,e){we(e,!0);let s=p(e,"components",23,()=>[]),o=p(e,"data_0",3,null),n=p(e,"data_1",3,null);De(()=>e.stores.page.set(e.page)),xe(()=>{e.stores,e.page,e.constructors,s(),e.form,o(),n(),e.stores.page.notify()});let t=w(!1),r=w(!1),i=w(null);Ve(()=>{const l=e.stores.page.subscribe(()=>{b(t)&&(A(r,!0),ke().then(()=>{A(i,document.title||"untitled page",!0)}))});return A(t,!0),l});const m=x(()=>e.constructors[1]);var E=Qe(),c=T(E);{var h=l=>{const d=x(()=>e.constructors[0]);var _=D(),P=T(_);C(P,()=>b(d),(u,g)=>{N(g(u,{get data(){return o()},get form(){return e.form},get params(){return e.page.params},children:(R,et)=>{var j=D(),$=T(j);C($,()=>b(m),(ee,te)=>{N(te(ee,{get data(){return n()},get form(){return e.form},get params(){return e.page.params}}),re=>s()[1]=re,()=>s()?.[1])}),S(R,j)},$$slots:{default:!0}}),R=>s()[0]=R,()=>s()?.[0])}),S(l,_)},v=l=>{const d=x(()=>e.constructors[0]);var _=D(),P=T(_);C(P,()=>b(d),(u,g)=>{N(g(u,{get data(){return o()},get form(){return e.form},get params(){return e.page.params}}),R=>s()[0]=R,()=>s()?.[0])}),S(l,_)};k(c,l=>{e.constructors[1]?l(h):l(v,!1)})}var y=Ce(c,2);{var f=l=>{var d=Ke(),_=pe(d);{var P=u=>{var g=Me();je(()=>qe(g,b(i))),S(u,g)};k(_,u=>{b(r)&&u(P)})}Be(d),S(l,d)};k(y,l=>{b(t)&&l(f)})}S(a,E),Ne()}const it=Ge(We),ot=[()=>I(()=>import("../nodes/0.BPQxZIMI.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>I(()=>import("../nodes/1.CN2BJlGk.js"),__vite__mapDeps([6,1,7,2,8,9,10,11,3,5]),import.meta.url),()=>I(()=>import("../nodes/2.CdllZjMB.js"),__vite__mapDeps([12,4,2,5,1,8]),import.meta.url),()=>I(()=>import("../nodes/3.BNjxxM5Z.js"),__vite__mapDeps([13,1,7,2]),import.meta.url),()=>I(()=>import("../nodes/4.CE7uwcFk.js"),__vite__mapDeps([14,1,7,2,4,5,9]),import.meta.url)],ct=[],ft={"/":[2],"/contact":[3],"/schedule":[4]},Xe={handleError:(({error:a})=>{console.error(a)}),reroute:(()=>{}),transport:{}},$e=Object.fromEntries(Object.entries(Xe.transport).map(([a,e])=>[a,e.decode])),ut=!1,lt=(a,e)=>$e[a](e);export{lt as decode,$e as decoders,ft as dictionary,ut as hash,Xe as hooks,st as matchers,ot as nodes,it as root,ct as server_loads};

```

# docs\_app\immutable\entry\start.BCVOjK_n.js

```js
import{l as o,a as r}from"../chunks/sovl0vNR.js";export{o as load_css,r as start};

```

# docs\_app\immutable\nodes\0.BPQxZIMI.js

```js
import"../chunks/DsnmJJEf.js";import{F as v,G as _,I as d,J as h,C as b,K as g,S as y,H as e,T as S,x as j}from"../chunks/BT6KussZ.js";import{s as x}from"../chunks/-QX5y4Md.js";import{r,s as t}from"../chunks/BlK_T66N.js";const C=!0,G=Object.freeze(Object.defineProperty({__proto__:null,prerender:C},Symbol.toStringTag,{value:"Module"}));var H=_("<nav><a>Home</a> <a>Contact</a> <a>Schedule</a></nav> <!>",1);function I(i,o){v(o,!0);var s=H(),a=d(s),n=y(a),l=e(n,2),p=e(l,2);S(a);var c=e(a,2);x(c,()=>o.children??j),h((f,m,u)=>{t(n,"href",f),t(l,"href",m),t(p,"href",u)},[()=>r("/"),()=>r("/contact"),()=>r("/schedule")]),b(i,s),g()}export{I as component,G as universal};

```

# docs\_app\immutable\nodes\1.CN2BJlGk.js

```js
import"../chunks/DsnmJJEf.js";import"../chunks/DdMaYHV8.js";import{F as u,G as h,I as g,J as l,C as v,K as d,S as e,T as a,H as _}from"../chunks/BT6KussZ.js";import{s as o}from"../chunks/ysPryp9P.js";import{i as x}from"../chunks/BJREn4Ip.js";import{s as $,p}from"../chunks/sovl0vNR.js";const k={get error(){return p.error},get status(){return p.status}};$.updated.check;const m=k;var b=h("<h1> </h1> <p> </p>",1);function J(i,n){u(n,!1),x();var t=b(),r=g(t),c=e(r,!0);a(r);var s=_(r,2),f=e(s,!0);a(s),l(()=>{o(c,m.status),o(f,m.error?.message)}),v(i,t),d()}export{J as component};

```

# docs\_app\immutable\nodes\2.CdllZjMB.js

```js
import{a as K,s as ae}from"../chunks/BlK_T66N.js";import"../chunks/DsnmJJEf.js";import{Y as P,n as re,Z as H,o as M,A as te,p as ne,O as C,_ as se,$ as le,a0 as ie,a1 as L,a2 as R,z as D,a3 as fe,a4 as ue,w as Y,a5 as ve,a6 as oe,a7 as de,a8 as ce,a9 as V,aa as U,i as _e,ab as he,ac as X,ad as pe,ae as me,af as ge,ag as $,y as Z,ah as Ee,ai as Te,aj as we,ak as xe,al as be,F as Ae,G as k,H as q,I as Ie,J as B,C as G,K as ye,T as J,S as Me}from"../chunks/BT6KussZ.js";import{s as Ce}from"../chunks/ysPryp9P.js";function Ne(t,a){return a}function Se(t,a,e){for(var s=t.items,u=[],v=a.length,l=0;l<v;l++)Te(a[l].e,u,!0);var d=v>0&&u.length===0&&e!==null;if(d){var p=e.parentNode;we(p),p.append(e),s.clear(),x(t,a[0].prev,a[v-1].next)}xe(u,()=>{for(var _=0;_<v;_++){var g=a[_];d||(s.delete(g.k),x(t,g.prev,g.next)),Z(g.e,!d)}})}function Oe(t,a,e,s,u,v=null){var l=t,d={flags:a,items:new Map,first:null};{var p=t;l=M?H(te(p)):p.appendChild(P())}M&&ne();var _=null,g=!1,I=new Map,r=se(()=>{var f=e();return _e(f)?f:f==null?[]:U(f)}),h,n;function i(){De(n,h,d,I,l,u,a,s,e),v!==null&&(h.length===0?_?X(_):_=Y(()=>v(l)):_!==null&&pe(_,()=>{_=null}))}re(()=>{n??=be,h=C(r);var f=h.length;if(g&&f===0)return;g=f===0;let A=!1;if(M){var T=le(l)===ie;T!==(f===0)&&(l=L(),H(l),R(!1),A=!0)}if(M){for(var o=null,m,c=0;c<f;c++){if(D.nodeType===fe&&D.data===ue){l=D,A=!0,R(!1);break}var b=h[c],w=s(b,c);m=z(D,d,o,null,b,w,c,u,a,e),d.items.set(w,m),o=m}f>0&&H(L())}if(M)f===0&&v&&(_=Y(()=>v(l)));else if(ve()){var y=new Set,E=oe;for(c=0;c<f;c+=1){b=h[c],w=s(b,c);var N=d.items.get(w)??I.get(w);N?Q(N,b,c):(m=z(null,d,null,null,b,w,c,u,a,e,!0),I.set(w,m)),y.add(w)}for(const[S,O]of d.items)y.has(S)||E.skipped_effects.add(O.e);E.add_callback(i)}else i();A&&R(!0),C(r)}),M&&(l=D)}function De(t,a,e,s,u,v,l,d,p){var _=a.length,g=e.items,I=e.first,r=I,h,n=null,i=[],f=[],A,T,o,m;for(m=0;m<_;m+=1){if(A=a[m],T=d(A,m),o=g.get(T),o===void 0){var c=s.get(T);if(c!==void 0){s.delete(T),g.set(T,c);var b=n?n.next:r;x(e,n,c),x(e,c,b),F(c,b,u),n=c}else{var w=r?r.e.nodes_start:u;n=z(w,e,n,n===null?e.first:n.next,A,T,m,v,l,p)}g.set(T,n),i=[],f=[],r=n.next;continue}if(Q(o,A,m),(o.e.f&$)!==0&&X(o.e),o!==r){if(h!==void 0&&h.has(o)){if(i.length<f.length){var y=f[0],E;n=y.prev;var N=i[0],S=i[i.length-1];for(E=0;E<i.length;E+=1)F(i[E],y,u);for(E=0;E<f.length;E+=1)h.delete(f[E]);x(e,N.prev,S.next),x(e,n,N),x(e,S,y),r=y,n=S,m-=1,i=[],f=[]}else h.delete(o),F(o,r,u),x(e,o.prev,o.next),x(e,o,n===null?e.first:n.next),x(e,n,o),n=o;continue}for(i=[],f=[];r!==null&&r.k!==T;)(r.e.f&$)===0&&(h??=new Set).add(r),f.push(r),r=r.next;if(r===null)continue;o=r}i.push(o),n=o,r=o.next}if(r!==null||h!==void 0){for(var O=h===void 0?[]:U(h);r!==null;)(r.e.f&$)===0&&O.push(r),r=r.next;var W=O.length;if(W>0){var j=_===0?u:null;Se(e,O,j)}}t.first=e.first&&e.first.e,t.last=n&&n.e;for(var ee of s.values())Z(ee.e);s.clear()}function Q(t,a,e,s){de(t.v,a),t.i=e}function z(t,a,e,s,u,v,l,d,p,_,g){var I=(p&me)!==0,r=(p&ge)===0,h=I?r?ce(u,!1,!1):V(u):u,n=(p&he)===0?l:V(l),i={i:n,v:h,k:v,a:null,e:null,prev:e,next:s};try{if(t===null){var f=document.createDocumentFragment();f.append(t=P())}return i.e=Y(()=>d(t,h,n,_),M),i.e.prev=e&&e.e,i.e.next=s&&s.e,e===null?g||(a.first=i):(e.next=i,e.e.next=i.e),s!==null&&(s.prev=i,s.e.prev=i.e),i}finally{}}function F(t,a,e){for(var s=t.next?t.next.e.nodes_start:e,u=a?a.e.nodes_start:e,v=t.e.nodes_start;v!==null&&v!==s;){var l=Ee(v);u.before(v),v=l}}function x(t,a,e){a===null?t.first=e:(a.next=e,a.e.next=e&&e.e),e!==null&&(e.prev=a,e.e.prev=a&&a.e)}const He=async({fetch:t})=>{const a=await t(K("/events.json"));if(!a.ok)throw new Error(`Failed to fetch events.json (${a.status})`);const{events:e}=await a.json();return{events:e}},Ve=Object.freeze(Object.defineProperty({__proto__:null,load:He},Symbol.toStringTag,{value:"Module"}));var Re=k("<li> </li>"),$e=k('<h2>Schedule</h2> <img alt=""/> <ul></ul>',1);function qe(t,a){Ae(a,!0);const{events:e}=a.data;var s=$e(),u=q(Ie(s),2),v=q(u,2);Oe(v,21,()=>e,Ne,(l,d)=>{var p=Re(),_=Me(p);J(p),B(()=>Ce(_,`${C(d).date??""} ${C(d).time??""} — ${C(d).title??""} @ ${C(d).location??""}`)),G(l,p)}),J(v),B(l=>ae(u,"src",l),[()=>K("/favicon.svg")]),G(t,s),ye()}export{qe as component,Ve as universal};

```

# docs\_app\immutable\nodes\3.BNjxxM5Z.js

```js
import"../chunks/DsnmJJEf.js";import"../chunks/DdMaYHV8.js";import{B as a,C as p,D as e}from"../chunks/BT6KussZ.js";function s(t){e();var o=a("contacts");p(t,o)}export{s as component};

```

# docs\_app\immutable\nodes\4.CE7uwcFk.js

```js
import"../chunks/DsnmJJEf.js";import"../chunks/DdMaYHV8.js";import{F as o,G as e,H as m,I as p,J as f,C as n,K as c,D as l}from"../chunks/BT6KussZ.js";import{a as g,s as v}from"../chunks/BlK_T66N.js";import{i as _}from"../chunks/BJREn4Ip.js";var h=e('schedule <img alt=""/>',1);function D(s,t){o(t,!1),_(),l();var a=h(),r=m(p(a));f(i=>v(r,"src",i),[()=>g("/favicon.svg")]),n(s,a),c()}export{D as component};

```

# docs\_app\version.json

```json
{"version":"1755100067567"}
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
		
		<link rel="modulepreload" href="/LearningDays/_app/immutable/entry/start.BCVOjK_n.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/chunks/sovl0vNR.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/chunks/BcTUKEQ-.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/chunks/BT6KussZ.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/chunks/ysPryp9P.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/chunks/-QX5y4Md.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/chunks/SQlIY1xE.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/entry/app.I5D0vyMl.js">
		<link rel="modulepreload" href="/LearningDays/_app/immutable/chunks/DsnmJJEf.js">
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">
			<script>
				{
					__sveltekit_fsharb = {
						base: "/LearningDays",
						assets: "/LearningDays"
					};

					const element = document.currentScript.parentElement;

					Promise.all([
						import("/LearningDays/_app/immutable/entry/start.BCVOjK_n.js"),
						import("/LearningDays/_app/immutable/entry/app.I5D0vyMl.js")
					]).then(([kit, app]) => {
						kit.start(app, element);
					});
				}
			</script>
		</div>
	</body>
</html>
```

# docs\contact.html

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="./favicon.svg" type="image/svg+xml" sizes="any">
		
		<link rel="modulepreload" href="./_app/immutable/entry/start.BCVOjK_n.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/sovl0vNR.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/BcTUKEQ-.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/BT6KussZ.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/ysPryp9P.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/-QX5y4Md.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/SQlIY1xE.js">
		<link rel="modulepreload" href="./_app/immutable/entry/app.I5D0vyMl.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/DsnmJJEf.js">
		<link rel="modulepreload" href="./_app/immutable/nodes/0.BPQxZIMI.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/BlK_T66N.js">
		<link rel="modulepreload" href="./_app/immutable/nodes/3.BNjxxM5Z.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/DdMaYHV8.js">
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents"><!--[--><!--[--><!----><nav><a href="./">Home</a> <a href="./contact">Contact</a> <a href="./schedule">Schedule</a></nav> <!----><!---->contacts<!----><!----><!----><!--]--> <!--[!--><!--]--><!--]-->
			
			<script>
				{
					__sveltekit_fsharb = {
						base: new URL(".", location).pathname.slice(0, -1),
						assets: "/LearningDays"
					};

					const element = document.currentScript.parentElement;

					Promise.all([
						import("./_app/immutable/entry/start.BCVOjK_n.js"),
						import("./_app/immutable/entry/app.I5D0vyMl.js")
					]).then(([kit, app]) => {
						kit.start(app, element, {
							node_ids: [0, 3],
							data: [null,null],
							form: null,
							error: null
						});
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

# docs\index.html

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="./favicon.svg" type="image/svg+xml" sizes="any">
		
		<link rel="modulepreload" href="./_app/immutable/entry/start.BCVOjK_n.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/sovl0vNR.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/BcTUKEQ-.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/BT6KussZ.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/ysPryp9P.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/-QX5y4Md.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/SQlIY1xE.js">
		<link rel="modulepreload" href="./_app/immutable/entry/app.I5D0vyMl.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/DsnmJJEf.js">
		<link rel="modulepreload" href="./_app/immutable/nodes/0.BPQxZIMI.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/BlK_T66N.js">
		<link rel="modulepreload" href="./_app/immutable/nodes/2.CdllZjMB.js">
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents"><!--[--><!--[--><!----><nav><a href="./">Home</a> <a href="./contact">Contact</a> <a href="./schedule">Schedule</a></nav> <!----><h2>Schedule</h2> <img src="./favicon.svg" alt=""/> <ul><!--[--><li>2025-09-01 18:00 — Opening Night @ Main Hall</li><li>2025-09-02 10:00 — Keynote @ Auditorium A</li><!--]--></ul><!----><!----><!----><!--]--> <!--[!--><!--]--><!--]-->
			<script type="application/json" data-sveltekit-fetched data-url="/LearningDays/events.json">{"status":200,"statusText":"","headers":{},"body":"{\r\n    \"events\": [\r\n        {\r\n            \"slug\": \"opening-night\",\r\n            \"title\": \"Opening Night\",\r\n            \"date\": \"2025-09-01\",\r\n            \"time\": \"18:00\",\r\n            \"location\": \"Main Hall\",\r\n            \"description\": \"Kickoff with welcome drinks.\"\r\n        },\r\n        {\r\n            \"slug\": \"keynote\",\r\n            \"title\": \"Keynote\",\r\n            \"date\": \"2025-09-02\",\r\n            \"time\": \"10:00\",\r\n            \"location\": \"Auditorium A\",\r\n            \"description\": \"Keynote by the special guest.\"\r\n        }\r\n    ]\r\n}"}</script>
			<script>
				{
					__sveltekit_fsharb = {
						base: new URL(".", location).pathname.slice(0, -1),
						assets: "/LearningDays"
					};

					const element = document.currentScript.parentElement;

					Promise.all([
						import("./_app/immutable/entry/start.BCVOjK_n.js"),
						import("./_app/immutable/entry/app.I5D0vyMl.js")
					]).then(([kit, app]) => {
						kit.start(app, element, {
							node_ids: [0, 2],
							data: [null,null],
							form: null,
							error: null
						});
					});
				}
			</script>
		</div>
	</body>
</html>
```

# docs\robots.txt

```txt
# allow crawling everything by default
User-agent: *
Disallow:

```

# docs\schedule.html

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="./favicon.svg" type="image/svg+xml" sizes="any">
		
		<link rel="modulepreload" href="./_app/immutable/entry/start.BCVOjK_n.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/sovl0vNR.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/BcTUKEQ-.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/BT6KussZ.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/ysPryp9P.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/-QX5y4Md.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/SQlIY1xE.js">
		<link rel="modulepreload" href="./_app/immutable/entry/app.I5D0vyMl.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/DsnmJJEf.js">
		<link rel="modulepreload" href="./_app/immutable/nodes/0.BPQxZIMI.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/BlK_T66N.js">
		<link rel="modulepreload" href="./_app/immutable/nodes/4.CE7uwcFk.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/DdMaYHV8.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/BJREn4Ip.js">
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents"><!--[--><!--[--><!----><nav><a href="./">Home</a> <a href="./contact">Contact</a> <a href="./schedule">Schedule</a></nav> <!----><!---->schedule <img src="./favicon.svg" alt=""/><!----><!----><!----><!--]--> <!--[!--><!--]--><!--]-->
			
			<script>
				{
					__sveltekit_fsharb = {
						base: new URL(".", location).pathname.slice(0, -1),
						assets: "/LearningDays"
					};

					const element = document.currentScript.parentElement;

					Promise.all([
						import("./_app/immutable/entry/start.BCVOjK_n.js"),
						import("./_app/immutable/entry/app.I5D0vyMl.js")
					]).then(([kit, app]) => {
						kit.start(app, element, {
							node_ids: [0, 4],
							data: [null,null],
							form: null,
							error: null
						});
					});
				}
			</script>
		</div>
	</body>
</html>
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

# src\routes\+layout.ts

```ts
export const prerender = true;
```

# src\routes\+page.svelte

```svelte
<script lang="ts">
	import { asset } from '$app/paths';
	let { data } = $props();
	const { events } = data;
</script>

<h2>Schedule</h2>
<img src={asset('/favicon.svg')} alt="">

<ul>
	{#each events as e}
		<li>{e.date} {e.time} — {e.title} @ {e.location}</li>
	{/each}
</ul>
```

# src\routes\+page.ts

```ts
import { asset } from '$app/paths';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	// asset() -> correct URL for /static/events.json
	const res = await fetch(asset('/events.json')); // no leading slash
	if (!res.ok) throw new Error(`Failed to fetch events.json (${res.status})`);

	// your file shape is { "events": [...] }
	const { events } = await res.json();
	return { events };
};
```

# src\routes\contact\+page.svelte

```svelte
contacts
```

# src\routes\schedule\+page.svelte

```svelte
<script lang="ts">
    import { asset } from "$app/paths";
</script>

schedule
<img src={asset("/favicon.svg")} alt="">
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

