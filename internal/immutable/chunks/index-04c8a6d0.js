function v(){}function st(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function R(){return Object.create(null)}function k(t){t.forEach(K)}function H(t){return typeof t=="function"}function Et(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function rt(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function kt(t,e,n){t.$$.on_destroy.push(ot(e,n))}function At(t,e,n,i){if(t){const s=Q(t,e,n,i);return t[0](s)}}function Q(t,e,n,i){return t[1]&&i?st(n.ctx.slice(),t[1](i(e))):n.ctx}function Nt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)c[a]=e.dirty[a]|s[a];return c}return e.dirty|s}return e.dirty}function St(t,e,n,i,s,c){if(s){const r=Q(e,n,i,c);t.p(r,s)}}function Ct(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function jt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Tt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Mt(t,e,n){return t.set(n),e}function Dt(t){return t&&H(t.destroy)?t.destroy:v}let T=!1;function ct(){T=!0}function at(){T=!1}function lt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function ut(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:lt(1,s,d=>e[n[d]].claim_order,l))-1;i[o]=n[f]+1;const _=f+1;n[_]=o,s=Math.max(_,s)}const c=[],r=[];let a=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);a>=o;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);c.reverse(),r.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<r.length;o++){for(;l<c.length&&r[o].claim_order>=c[l].claim_order;)l++;const f=l<c.length?c[l]:null;t.insertBefore(r[o],f)}}function ft(t,e){t.appendChild(e)}function dt(t,e){if(T){for(ut(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Pt(t,e,n){T&&!n?dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function _t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function q(t){return document.createTextNode(t)}function Ot(){return q(" ")}function Lt(){return q("")}function G(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Wt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Bt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function X(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ht(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:X(t,i,e[i])}function qt(t,e){for(const n in e)X(t,n,e[n])}function ht(t){return Array.from(t.childNodes)}function mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Y(t,e,n,i,s=!1){mt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const o=n(a);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const o=n(a);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Z(t,e,n,i){return Y(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||c.push(a.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ft(t,e,n){return Z(t,e,n,V)}function It(t,e,n){return Z(t,e,n,_t)}function pt(t,e){return Y(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>q(e),!0)}function Rt(t){return pt(t," ")}function Gt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Jt(t,e){t.value=e??""}function Kt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let S;function yt(){if(S===void 0){S=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{S=!0}}return S}function Qt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=V("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=yt();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=G(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=G(i.contentWindow,"resize",e)}),ft(t,i),()=>{(s||c&&i.contentWindow)&&c(),U(i)}}function Ut(t,e,n){t.classList[n?"add":"remove"](e)}function gt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Vt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function Xt(t,e){return new t(e)}let E;function $(t){E=t}function x(){if(!E)throw new Error("Function called outside component initialization");return E}function Yt(t){x().$$.on_mount.push(t)}function Zt(t){x().$$.after_update.push(t)}function te(t){x().$$.on_destroy.push(t)}function ee(){const t=x();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=gt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function ne(t,e){return x().$$.context.set(t,e),e}function ie(t){return x().$$.context.get(t)}function se(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const w=[],J=[],C=[],L=[],tt=Promise.resolve();let W=!1;function et(){W||(W=!0,tt.then(nt))}function re(){return et(),tt}function B(t){C.push(t)}function oe(t){L.push(t)}const O=new Set;let b=0;function nt(){if(b!==0)return;const t=E;do{try{for(;b<w.length;){const e=w[b];b++,$(e),bt(e.$$)}}catch(e){throw w.length=0,b=0,e}for($(null),w.length=0,b=0;J.length;)J.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];O.has(n)||(O.add(n),n())}C.length=0}while(w.length);for(;L.length;)L.pop()();W=!1,O.clear(),$(t)}function bt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const j=new Set;let g;function ce(){g={r:0,c:[],p:g}}function ae(){g.r||k(g.c),g=g.p}function it(t,e){t&&t.i&&(j.delete(t),t.i(e))}function wt(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const le=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ue(t,e){wt(t,1,1,()=>{e.delete(t.key)})}function fe(t,e,n,i,s,c,r,a,o,l,f,_){let d=t.length,m=c.length,h=d;const M={};for(;h--;)M[t[h].key]=h;const A=[],D=new Map,P=new Map;for(h=m;h--;){const u=_(s,c,h),p=n(u);let y=r.get(p);y?i&&y.p(u,e):(y=l(p,u),y.c()),D.set(p,A[h]=y),p in M&&P.set(p,Math.abs(h-M[p]))}const F=new Set,I=new Set;function z(u){it(u,1),u.m(a,f),r.set(u.key,u),f=u.first,m--}for(;d&&m;){const u=A[m-1],p=t[d-1],y=u.key,N=p.key;u===p?(f=u.first,d--,m--):D.has(N)?!r.has(y)||F.has(y)?z(u):I.has(N)?d--:P.get(y)>P.get(N)?(I.add(y),z(u)):(F.add(N),d--):(o(p,r),d--)}for(;d--;){const u=t[d];D.has(u.key)||o(u,r)}for(;m;)z(A[m-1]);return A}function de(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],a=e[c];if(a){for(const o in r)o in a||(i[o]=1);for(const o in a)s[o]||(n[o]=a[o],s[o]=1);t[c]=a}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function _e(t){return typeof t=="object"&&t!==null?t:{}}function he(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function me(t){t&&t.c()}function pe(t,e){t&&t.l(e)}function xt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||B(()=>{const r=t.$$.on_mount.map(K).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...r):k(r),t.$$.on_mount=[]}),c.forEach(B)}function $t(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(w.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ye(t,e,n,i,s,c,r,a=[-1]){const o=E;$(t);const l=t.$$={fragment:null,ctx:[],props:c,update:v,not_equal:s,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:R(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&s(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&vt(t,_)),d}):[],l.update(),f=!0,k(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){ct();const _=ht(e.target);l.fragment&&l.fragment.l(_),_.forEach(U)}else l.fragment&&l.fragment.c();e.intro&&it(t.$$.fragment),xt(t,e.target,e.anchor,e.customElement),at(),nt()}$(o)}class ge{$destroy(){$t(this,1),this.$destroy=v}$on(e,n){if(!H(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!rt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{de as $,re as A,v as B,ot as C,k as D,H as E,At as F,St as G,Ct as H,Nt as I,dt as J,kt as K,G as L,ne as M,ee as N,J as O,he as P,oe as Q,B as R,ge as S,Qt as T,te as U,zt as V,Vt as W,st as X,_t as Y,It as Z,qt as _,Ot as a,Tt as a0,jt as a1,nt as a2,Ht as a3,Ut as a4,Jt as a5,se as a6,ie as a7,Dt as a8,_e as a9,Wt as aa,fe as ab,ue as ac,le as ad,Bt as ae,Mt as af,Pt as b,Rt as c,ae as d,Lt as e,it as f,ce as g,U as h,ye as i,Zt as j,V as k,Ft as l,ht as m,X as n,Yt as o,Kt as p,q,pt as r,Et as s,wt as t,Gt as u,Xt as v,me as w,pe as x,xt as y,$t as z};
