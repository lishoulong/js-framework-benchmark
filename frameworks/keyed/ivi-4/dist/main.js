const e=void 0,t=e=>({v:e}),n={},l={},o={},r=[];let c=!1;function i(e){return function(){if(!c)try{return e.apply(void 0,arguments)}catch(e){throw c=!0,r.forEach(t=>{t(e)}),e}}}function s(e,t){const n=e.length-1,l=e.pop();t!==n&&(e[t]=l)}const f=()=>{};function a(e){for(let t=0;t<e.length;++t)!0===e[t]()&&s(e,t--)}const u=(e,t)=>Object.getOwnPropertyDescriptor(e,t),d=Node.prototype,v=Element.prototype,h=document,p=Object.prototype.hasOwnProperty,y=d.insertBefore,g=d.removeChild,m=(d.replaceChild,d.cloneNode),b=v.setAttribute,w=(v.setAttributeNS,v.removeAttribute),k=u(d,"textContent").set,A=u(v,"className").set,N=u(HTMLElement.prototype,"style").get,x=u(SVGElement.prototype,"style").get,j="http://www.w3.org/2000/svg",E=(e,t)=>({f:e,d:t}),P=E(16,null),O=E(8,null),C=(e,t)=>({t:e,v:t}),M=(e,t,n)=>({t:e,v:t,c:n}),S=(e,t,n,l)=>({t:e,v:t,c:n,n:l}),q=(e,t)=>M(P,e,t),z=(e,t)=>({k:e,v:t}),$=e=>C(O,e);let B=null;function L(e){return B=e}const T=e=>({o:e,f:0,c:null,s:null});let V,D;function F(e){let t,n=e.f;if(0===(3&n)){if(e=e.c,0!==(136&n)){for(n=0;n<e.length;n++)if(null!==(t=e[n]))return F(t);return null}return null===e?null:F(e)}return e.s}function G(e,t,n,o){const r=t.f;let c,i,s,f;if(0!==(256&r))c=t.s,0!==(1024&r)||null!==c.s&&!0===c.s(l)?t.c=Y(e,t.c,c.r(t.o.v),n,o):0!==(65536&r)?G(e,t.c,n,o):!0===n?H(e,t):V=F(t),t.f=64511&t.f|D,D|=(49152&t.f)<<2;else if(0!==(65536&r)){if(i=t.c,0!==(2&r))c=t.s,!0===n&&y.call(e,c,V),V=null,G(c,i,!1,!0),V=c;else if(0!==(136&r)){for(f=0,s=i.length;s>0;)null!==(c=i[--s])&&(G(e,c,n,!1),f|=D,D=0);D=f}else 0!==(20&r)?G(e,i,n,o):(c=L(t.s),G(e,i,n,o),L(c));t.f=64511&r|D}else!0===n?H(e,t):V=F(t),D=196608&r}function H(e,t){const n=t.f;let l,o,r;if(0!==(3&n))o=t.s,y.call(e,o,V),V=o;else if(l=t.c,0!==(136&n))for(r=l.length;r>0;)null!==(o=l[--r])&&H(e,o);else null!==l&&H(e,l)}function I(e){const t=e.f;let n,l,r;if(0!==(131072&t)&&null!==(n=e.c))if(0!==(136&t))for(l=0;l<n.length;l++)null!==(r=n[l])&&I(r);else I(n);if(0!==(32768&t)&&null!==(r=e.s.u))if("function"===typeof r)r(o);else for(l=0;l<r.length;l++)r[l](o)}function R(e,t,n){let l,o=t.f;if(0!==(3&o))g.call(e,t.s);else if(t=t.c,0!==(136&o))if(!0===n)k.call(e,"");else for(o=0;o<t.length;++o)null!==(l=t[o])&&R(e,l,!1);else null!==t&&R(e,t,n)}function U(e,t,n){R(e,t,n),I(t)}function J(e,t,n){const l=h.createTextNode(n);y.call(e,l,V),V=l,t.s=l,t.f=1}function K(e,t){const{t:n,v:l,n:o}=t,r=0!==(512&n.f);if(void 0===e){const t=n.d;e=r?h.createElementNS(j,t):h.createElement(t)}return o&&ee(e,o,r),void 0!==l&&ne(e,void 0,l,r),e}function Q(e,t,n){const l=n.t,o=l.f;let r,c,i,s,f;if(0!==(4&o))0!==(256&o)?(t.s=r={r:null,s:null,u:null},r.r=c=l.d.c(t)):c=l.d.c,t.c=X(e,c(n.v)),t.f|=o|D,D|=(49152&t.f)<<2;else{if(0!==(2&o))c=l.d,0!==(64&o)&&(null===(i=c.n)&&(c.n=i=K(void 0,c.p)),i=m.call(i,!1)),t.s=i=K(i,n),r=V,null!==(c=n.c)&&(V=null,t.c=X(i,c)),V=i,y.call(e,i,r);else if(0!==(48&o))0!==(32&o)?(t.s=r=0!==(8192&o)?L(n.v):(a=l.d,u=n.v,B={n:B,d:a,v:u}),t.c=X(e,n.c),L(r)):t.c=X(e,n.c);else{for(f=0,s=(i=n.v).length,t.c=c=Array(s);s>0;)c[--s]=X(e,i[s].v),f|=D,D=0;D=f}t.f=o|D}var a,u}function W(e,t,n){let l=n.length,o=0;const r=Array(l);for(;l>0;)r[--l]=X(e,n[l]),o|=D,D=0;D=o,t.c=r,t.f=128|o}function X(e,t){if(null!==t){const n=T(t);return"object"===typeof t?t instanceof Array?W(e,n,t):Q(e,n,t):J(e,n,t),n}return null}function Y(e,t,n,l,o){if(null===n)return null!==t&&U(e,t,o),null;if(null===t)return X(e,n);const{f:r,o:c,s:i}=t;if(0!==(1&r)){if("object"===typeof n)return g.call(e,i),X(e,n);t.o=n,c!==n&&(i.nodeValue=n),!0===l&&y.call(e,i,V),V=i}else{if(c===n)return G(e,t,l,o),t;if(0!==(128&r)?!(n instanceof Array):n instanceof Array||c.t!==n.t)return U(e,t,o),X(e,n);t.o=n;const s=t.c;let f,a,u,d,v;if(0!==(4&r))f=c.v,a=n.v,u=n.t.d,f===a||void 0!==u.e&&!0===u.e(f,a)?G(e,t,l,o):(t.c=Y(e,s,0!==(256&r)?i.r(a):u.c(a),l,o),t.f=64511&t.f|D,D|=(49152&t.f)<<2);else{if(0!==(2&r))d=0!==(512&r),!0===l&&y.call(e,i,V),u=n.n,c.n!==u&&(void 0===u&&(u=""),ee(i,u,d)),u=n.v,c.v!==u&&ne(i,c.v,u,d),V=null,t.c=Y(i,s,n.c,!1,!0),V=i;else if(0!==(136&r))if(0!==(128&r))if(0===(d=n.length))U(e,t,o);else{if(v=0,d!==(f=s.length)){for(t.c=u=Array(d);f>d;)null!==(a=s[--f])&&U(e,a,!1);for(;d>f;)u[--d]=X(e,n[d]),v|=D,D=0}else u=s;for(;d>0;)u[--d]=Y(e,s[d],n[d],l,!1),v|=D,D=0;D=v}else Z(e,t,c.v,n.v,l,o);else 0!==(16&r)?t.c=Y(e,s,n.c,l,o):(a=n.v,0!==(8192&r)?t.s=a:i.v=a,u=L(t.s),t.c=Y(e,s,n.c,l,o),L(u));t.f=64511&r|D}}return t}function Z(e,t,n,l,o,r){let c=l.length,i=n.length,s=0;const f=Array(c);if(0===c)i>0&&U(e,t,r);else if(0===i)for(;c>0;)f[--c]=X(e,l[c].v),s|=D,D=0;else{const a=t.c;let u=i-1,d=c-1,v=0,h=l[d];e:for(;;){for(;n[u].k===h.k;){if(f[d]=Y(e,a[u--],h.v,o,!1),s|=D,D=0,v>--d||v>u)break e;h=l[d]}for(;n[v].k===l[v].k&&++v<=u&&v<=d;);break}if(v>u)for(;d>=v;)f[d]=X(e,l[d--].v),s|=D,D=0;else if(v>d){c=v;do{null!==(h=a[c++])&&U(e,h,!1)}while(c<=u)}else{let p=0,y=0;const g=u-v+1,m=d-v+1,b=Array(m),w=new Map;for(c=0;c<m;++c)i=c+v,b[c]=-1,w.set(l[i].k,i);for(c=v;c<=u&&y<m;++c)void 0!==(i=w.get(n[c].k))&&(p=p<i?i:99999999,++y,b[i-v]=c,f[i]=a[c],a[c]=null);if(g===n.length&&0===y)for(U(e,t,r);d>=0;)f[d]=X(e,l[d--].v),s|=D,D=0;else{for(c=v;c<=u;c++)null!==(h=a[c])&&U(e,h,!1);if(c=m,!0===o||99999999!==p)for(;c>0;)h=l[p=--c+v].v,f[p]=-1===b[c]?X(e,h):Y(e,f[p],h,o,!1),s|=D,D=0;else{const t=_(b);for(i=t.length-1;c>0;)h=l[p=--c+v].v,-1===b[c]?f[p]=X(e,h):(i<0||c!==t[i]?o=!0:--i,f[p]=Y(e,f[p],h,o,!1),o=!1),s|=D,D=0}}}for(;v>0;)f[--v]=Y(e,a[v],l[v].v,o,!1),s|=D,D=0}t.c=f,D=s}function _(e){const t=e.slice(),n=[];let l,o,r,c=0,i=0;for(n[0]=0;i<e.length;++i){const s=e[i];if(s>-1)if(e[r=n[c]]<s)t[i]=r,n[++c]=i;else{for(l=0,o=c;l<o;)e[n[r=l+o>>1]]<s?l=r+1:o=r;s<e[n[l]]&&(l>0&&(t[i]=n[l-1]),n[l]=i)}}for(o=n[c];c>=0;)n[c--]=o,o=t[o];return n}function ee(e,t,n){!0===n?b.call(e,"class",t):A.call(e,t)}function te(e,t,n,l){const o=!0===l?x.call(e):N.call(e);let r,c;if(void 0===t)for(r in n)void 0!==(c=n[r])&&o.setProperty(r,c);else if(void 0===n)for(r in t)void 0!==t[r]&&o.removeProperty(r);else{let e=0,l=0;for(r in t)t[r]!==(c=!0===p.call(n,r)?(e++,n[r]):void 0)&&(void 0!==c?o.setProperty(r,c):o.removeProperty(r));const i=Object.keys(n);for(;e<i.length&&l<i.length;++l)r=i[l],!1===p.call(t,r)&&(c=n[r],++e,void 0!==c&&o.setProperty(r,n[r]))}}function ne(e,t,n,l){let o;if(void 0===t)for(o in n)le(e,o,void 0,n[o],l);else if(void 0===n)for(o in t)le(e,o,t[o],void 0,l);else{let r=0,c=0;for(o in t)le(e,o,t[o],!0===p.call(n,o)?(r++,n[o]):void 0,l);const i=Object.keys(n);for(;r<i.length&&c<i.length;++c)o=i[c],!1===p.call(t,o)&&(le(e,o,void 0,n[o],l),++r)}}function le(e,t,n,l,o){"style"!==t?"object"===typeof l?l.u(e,t,void 0===n?void 0:n.v,l.v):"object"===typeof n?n.u(e,t,n.v,void 0):n!==l&&("boolean"===typeof l&&(l=l?"":void 0),void 0===l?void 0!==n&&!1!==n&&w.call(e,t):b.call(e,t,l)):n!==l&&te(e,n,l,o)}const oe=[],re=e=>oe.find(e);function ce(){for(let e=0;e<oe.length;++e){const t=oe[e],{container:n,state:l,next:o}=t;V=null,D=0,void 0!==o?(t.next=void 0,t.state=Y(n,l,o,!1,!0)):null!==l&&G(n,l,!1,!0)}}function ie(e){for(;e.v.length>0;){const t=e.v;e.v=[];for(let e=0;e<t.length;++e)t[e](n)}}let se=0,fe=1;const ae=Promise.resolve(),ue=t([]),de=t([]),ve=t([]),he=[],pe=[],ye=e=>i(function(){se|=1,e.apply(void 0,arguments),ie(ue),se&=-4,++fe}),ge=ye(f),me=()=>fe,be=e=>ye(t=>{se|=16,e(t),0!==(4&se)&&(a(he),0!==(32&se)&&ce(),ie(de),a(pe),ie(ve)),se&=-61}),we=be(f),ke=()=>{we()};function Ae(e){var t;void 0!==e&&0!==(1&e)&&0===(8&se)?0===(16&(se|=12))&&(t=ke,ue.v.push(t),0===(3&se)&&(se|=2,ae.then(ge))):0===(4&se)&&0===(16&(se|=4))&&requestAnimationFrame(we)}function Ne(e){se|=32,Ae(e)}function xe(e,t,n){const l=re(e=>e.container===t);l?l.next=e:oe.push({container:t,state:null,next:e}),Ne(n)}function je(e,t){const n=E(t,e);return(e,t,l=null)=>S(n,t,l,e)}const Ee=e=>je(e,2);function Pe(e,t){const n=E(16644,{c:e,e:t});return e=>C(n,e)}function Oe(e,t,n){let o,r,c=0;const i=e.s.s,s=e=>e===l?null!==i&&!0===i(l)||void 0!==o&&(e=t(r,o),c=me(),o!==e)&&(o=e,!0):(void 0===o||r===e||void 0!==n&&!0===n(r,e)||(o=void 0),(void 0===o||c<me())&&(o=t(e,o)),r=e,o);return e.s.s=s,s}function Ce(e,t){const n=[],l=re(t=>t.container.contains(e));if(l){const o=l.container;o!==e&&Me(n,t,e,o,l.state)}return n}function Me(e,t,n,l,o){const r=n.parentNode;return r===l||null!==(o=Me(e,t,r,l,o))?Se(e,t,n,o):null}function Se(e,t,n,l){if(null!==l){const{f:o,c:r}=l;let c;if(0!==(2&o)){if(l.s===n)return l;if(null!==r)return Se(e,t,n,r)}else if(0!==(52&o)){if(null!==(c=Se(e,t,n,l.c)))return 0!==(16&o)&&qe(e,l,l.o.v,t),c}else if(0!==(136&o))for(let l=0;l<r.length;l++)if(null!==(c=Se(e,t,n,r[l])))return c}return null}function qe(e,t,n,l){if(null!==n)if(n instanceof Array){let o=n.length;for(;--o>=0;)qe(e,t,n[o],l)}else{const o=n.d.s;("function"===typeof o&&!0===o(l)||o===l)&&e.push({t:t,h:n})}}function ze(e,t,n){const l=Ce(t,e);let o,r,c=l.length;if(c>0){for(;--c>=0;)if(0!==(1&(r=(o=l[c]).h.d).f)&&!0===r.h(n,o,e))return;for(;++c<l.length;)if(0===(1&(r=(o=l[c]).h.d).f)&&!0===r.h(n,o,e))return}}const $e=(e,t,n)=>t.h.h(e,t.t,n),Be=function(e){const t={s:e,h:$e,f:0},n={s:e,h:$e,f:1};return(e,l)=>({d:!0===l?n:t,h:e})}(function(e,t=!0){const n={next:e=>{ze(n,e.target,e)}};return h.addEventListener("click",ye(e=>{n.next(e)}),t),n}()),Le=Ee("a"),Te=Ee("button"),Ve=Ee("div"),De=Ee("h1"),Fe=Ee("span"),Ge=Ee("table"),He=Ee("tbody"),Ie=Ee("td"),Re=Ee("tr"),Ue=e=>Math.round(1e3*Math.random())%e,Je=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],Ke=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],Qe=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"];let We=1;function Xe(e){const t=Array(e);for(let n=0;n<e;n++)t[n]={id:We++,label:`${Je[Ue(Je.length)]} ${Ke[Ue(Ke.length)]} ${Qe[Ue(Qe.length)]}`};return t}const Ye={data:[],selected:0};let Ze=Ye;const _e=t=>(function(){Ze=t.apply(e,[Ze,...arguments]),be(Ne)()}),et=(tt=(e=>Ze.selected===e.id),e=>Oe(e,tt,void 0));var tt;const nt=_e(({selected:e})=>({data:Xe(1e3),selected:e})),lt=_e(({selected:e})=>({data:Xe(1e4),selected:e})),ot=_e(({data:e,selected:t})=>({data:e.concat(Xe(1e3)),selected:t})),rt=_e(({data:e,selected:t})=>{e=e.slice();for(let t=0;t<e.length;t+=10){const n=e[t];e[t]={id:n.id,label:n.label+" !!!"}}return{data:e,selected:t}}),ct=_e(({data:e,selected:t})=>{const n=(e=e.slice())[1];return e[1]=e[998],e[998]=n,{data:e,selected:t}}),it=_e(({data:e},t)=>({data:e,selected:t.id})),st=_e(({data:e,selected:t},n)=>(e=e.slice(),e.splice(e.indexOf(n),1),{data:e,selected:t})),ft=_e(()=>Ye),at=Pe(()=>e=>Fe(e?"preloadicon glyphicon glyphicon-remove":"glyphicon glyphicon-remove",{"aria-hidden":"true"})),ut=Pe(()=>({className:t,children:n})=>t?Ie(t,e,n):null),dt=Pe(()=>({selected:t,item:n})=>Re(t?"danger":"",e,[ut({className:"col-md-1",children:n.id}),ut({className:"col-md-4",children:q(Be(()=>{it(n)}),Le(e,e,n.label))}),ut({className:"col-md-1",children:q(Be(()=>{st(n)}),Le(e,e,at()))}),ut({className:"col-md-6"})])),vt=Pe(e=>{const t=et(e);return e=>dt({selected:t(e),item:e})}),ht=Pe(e=>{const t=Oe(e,()=>Ze.data);return()=>$(t().map(e=>z(e.id,vt(e))))}),pt=(t,n,l)=>Ve("col-sm-6 smallpad",e,q(Be(l),Te("btn btn-primary btn-block",{type:"button",id:n},t)));be(()=>{xe(Ve("container",e,[Ve("jumbotron",e,Ve("row",e,[Ve("col-md-6",e,De(e,e,"ivi")),Ve("col-md-6",e,Ve("row",e,[pt("Create 1,000 rows","run",nt),pt("Create 10,000 rows","runlots",lt),pt("Append 1,000 rows","add",ot),pt("Update every 10th row","update",rt),pt("Clear","clear",ft),pt("Swap Rows","swaprows",ct)]))])),Ge("table table-hover table-striped test-data",e,He(e,e,ht())),at(!0)]),document.getElementById("main"))})();
