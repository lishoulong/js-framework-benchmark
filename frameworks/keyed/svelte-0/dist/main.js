function t(){}function e(t){return t()}function n(){return Object.create(null)}function a(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function u(){return i(" ")}function m(t,e,n,a){return t.addEventListener(e,n,a),()=>t.removeEventListener(e,n,a)}function p(t,e){e=""+e,t.data!==e&&(t.data=e)}let f;function b(t){f=t}const h=[],y=Promise.resolve();let g=!1;const $=[],w=[],k=[];function v(t){w.push(t)}function N(){const t=new Set;do{for(;h.length;){const t=h.shift();b(t),x(t.$$)}for(;$.length;)$.shift()();for(;w.length;){const e=w.pop();t.has(e)||(e(),t.add(e))}}while(h.length);for(;k.length;)k.pop()();g=!1}function x(t){t.fragment&&(t.update(t.dirty),a(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(v))}function _(t,e){t.d(1),e.delete(t.key)}function C(t,e){t.$$.dirty||(h.push(t),g||(g=!0,y.then(N)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function M(o,c,l,s,d,i){const u=f;b(o);const m=c.props||{},p=o.$$={fragment:null,ctx:null,props:i,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:null};let h=!1;var y;p.ctx=l?l(o,m,(t,e)=>{p.ctx&&d(p.ctx[t],p.ctx[t]=e)&&(p.bound[t]&&p.bound[t](e),h&&C(o,t))}):m,p.update(),h=!0,a(p.before_render),p.fragment=s(p.ctx),c.target&&(c.hydrate?p.fragment.l((y=c.target,Array.from(y.childNodes))):p.fragment.c(),c.intro&&o.$$.fragment.i&&o.$$.fragment.i(),function(t,n,o){const{fragment:c,on_mount:l,on_destroy:s,after_render:d}=t.$$;c.m(n,o),v(()=>{const n=l.map(e).filter(r);s?s.push(...n):a(n),t.$$.on_mount=[]}),d.forEach(v)}(o,c.target,c.anchor),N()),b(u)}class E{$destroy(){var e,n;n=!0,(e=this).$$&&(a(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function L(t,e,n){const a=Object.create(t);return a.row=e[n],a.num=n,a}function S(t,e){var n,a,r,o,m,f,b,h,y,g,$,w,k=e.row.id,v=e.row.label;return{key:t,first:null,c(){n=d("tr"),a=d("td"),r=i(k),o=u(),m=d("td"),f=d("a"),b=i(v),h=u(),(y=d("td")).innerHTML='<a><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>',g=u(),$=d("td"),a.className="col-md-1",m.className="col-md-4",y.className="col-md-1",$.className="col-md-6",n.className=w=e.selected===e.row.id?"danger":"",this.first=n},m(t,e){l(t,n,e),c(n,a),c(a,r),c(n,o),c(n,m),c(m,f),c(f,b),c(n,h),c(n,y),c(n,g),c(n,$)},p(t,e){t.data&&k!==(k=e.row.id)&&p(r,k),t.data&&v!==(v=e.row.label)&&p(b,v),(t.selected||t.data)&&w!==(w=e.selected===e.row.id?"danger":"")&&(n.className=w)},d(t){t&&s(n)}}}function A(e){var n,r,o,i,p,f,b,h,y,g,$,w,k,v,N,x,C,M,E,A,j,q,z,I,O,R,T,U,H,B=[],P=new Map,V=e.data;const D=t=>t.row.id;for(var F=0;F<V.length;F+=1){let t=L(e,V,F),n=D(t);P.set(n,B[F]=S(n,t))}return{c(){for(n=d("div"),r=d("div"),(o=d("div")).innerHTML="<h1>Svelte (keyed)</h1>",i=u(),p=d("div"),f=d("div"),b=d("div"),(h=d("button")).textContent="Create 1,000\n                        rows",y=u(),g=d("div"),($=d("button")).textContent="Create\n                        10,000\n                        rows",w=u(),k=d("div"),(v=d("button")).textContent="Append 1,000\n                        rows",N=u(),x=d("div"),(C=d("button")).textContent="Update\n                        every\n                        10th row",M=u(),E=d("div"),(A=d("button")).textContent="Clear",j=u(),q=d("div"),(z=d("button")).textContent="Swap\n                        Rows",I=u(),O=d("table"),R=d("tbody"),F=0;F<B.length;F+=1)B[F].c();var t,a,c;T=u(),U=d("span"),o.className="col-md-6",h.type="button",h.className="btn btn-primary btn-block",h.id="run",b.className="col-sm-6 smallpad",$.type="button",$.className="btn btn-primary btn-block",$.id="runlots",g.className="col-sm-6 smallpad",v.type="button",v.className="btn btn-primary btn-block",v.id="add",k.className="col-sm-6 smallpad",C.type="button",C.className="btn btn-primary btn-block",C.id="update",x.className="col-sm-6 smallpad",A.type="button",A.className="btn btn-primary btn-block",A.id="clear",E.className="col-sm-6 smallpad",z.type="button",z.className="btn btn-primary btn-block",z.id="swaprows",q.className="col-sm-6 smallpad",f.className="row",p.className="col-md-6",r.className="row",n.className="jumbotron",O.className="table table-hover table-striped test-data",U.className="preloadicon glyphicon glyphicon-remove",t=U,a="aria-hidden",null==(c="true")?t.removeAttribute(a):t.setAttribute(a,c),H=[m(h,"click",e.run),m($,"click",e.runLots),m(v,"click",e.add),m(C,"click",e.partialUpdate),m(A,"click",e.clear),m(z,"click",e.swapRows),m(R,"click",e.click)]},m(t,e){for(l(t,n,e),c(n,r),c(r,o),c(r,i),c(r,p),c(p,f),c(f,b),c(b,h),c(f,y),c(f,g),c(g,$),c(f,w),c(f,k),c(k,v),c(f,N),c(f,x),c(x,C),c(f,M),c(f,E),c(E,A),c(f,j),c(f,q),c(q,z),l(t,I,e),l(t,O,e),c(O,R),F=0;F<B.length;F+=1)B[F].m(R,null);l(t,T,e),l(t,U,e)},p(t,e){const n=e.data;B=function(t,e,n,a,r,o,c,l,s,d,i,u){let m=t.length,p=o.length,f=m;const b={};for(;f--;)b[t[f].key]=f;const h=[],y=new Map,g=new Map;for(f=p;f--;){const t=u(r,o,f),l=n(t);let s=c.get(l);s?a&&s.p(e,t):(s=d(l,t)).c(),y.set(l,h[f]=s),l in b&&g.set(l,Math.abs(f-b[l]))}const $=new Set,w=new Set;function k(t){t.i&&t.i(1),t.m(l,i),c.set(t.key,t),i=t.first,p--}for(;m&&p;){const e=h[p-1],n=t[m-1],a=e.key,r=n.key;e===n?(i=e.first,m--,p--):y.has(r)?!c.has(a)||$.has(a)?k(e):w.has(r)?m--:g.get(a)>g.get(r)?(w.add(a),k(e)):($.add(r),m--):(s(n,c),m--)}for(;m--;){const e=t[m];y.has(e.key)||s(e,c)}for(;p;)k(h[p-1]);return h}(B,t,D,1,e,n,P,R,_,S,null,L)},i:t,o:t,d(t){for(t&&(s(n),s(I),s(O)),F=0;F<B.length;F+=1)B[F].d();t&&(s(T),s(U)),a(H)}}}function j(t,e,n){let a=0;const r=t=>{const e=a++%t;return n("seed",a),e},o=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],c=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],l=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"];let s=1,d=[],i=0;function u(t){const e=Array(t);for(let a=0;a<t;a++)e[a]={id:s++,label:`${o[r(o.length)]} ${c[r(c.length)]} ${l[r(l.length)]}`},n("nextId",s);return e}return{data:d,selected:i,add:()=>{n("data",d=d.concat(u(1e3)))},clear:()=>{n("data",d=[]),n("selected",i=0)},partialUpdate:()=>{for(let t=0;t<d.length;t+=10)d[t].label+=" !!!",n("data",d)},run:()=>{n("data",d=u(1e3)),n("selected",i=0)},runLots:()=>{n("data",d=u(1e4)),n("selected",i=0)},swapRows:()=>{if(d.length>998){n("data",d=d.slice());const t=d[1];d[1]=d[998],n("data",d),d[998]=t,n("data",d)}},click:({target:t})=>{const e=Number.parseInt(t.closest("tr").firstChild.firstChild.nodeValue);t.matches(".glyphicon-remove")?(t=>{const e=d.findIndex(e=>e.id===t);n("data",d=d.slice()),d.splice(e,1)})(e):(t=>{n("selected",i=t)})(e)}}}new class extends E{constructor(t){super(),M(this,t,j,A,o,[])}}({target:document.querySelector("#main")});
