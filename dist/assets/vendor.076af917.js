function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let u,a;function i(t,n){return u||(u=document.createElement("a")),u.href=n,t===u.href}function s(t,n){t.appendChild(n)}function f(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function h(){return t=" ",document.createTextNode(t);var t}function p(t,n,e){n in t?t[n]="boolean"==typeof t[n]&&""===e||e:function(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}(t,n,e)}function $(t){a=t}function m(t){(function(){if(!a)throw new Error("Function called outside component initialization");return a})().$$.on_mount.push(t)}const g=[],b=[],_=[],y=[],x=Promise.resolve();let k=!1;function E(t){_.push(t)}let v=!1;const w=new Set;function j(){if(!v){v=!0;do{for(let t=0;t<g.length;t+=1){const n=g[t];$(n),A(n.$$)}for($(null),g.length=0;b.length;)b.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];w.has(n)||(w.add(n),n())}_.length=0}while(g.length);for(;y.length;)y.pop()();k=!1,v=!1,w.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const N=new Set;function O(t,n){t&&t.i&&(N.delete(t),t.i(n))}function S(t,n,e,o){if(t&&t.o){if(N.has(t))return;N.add(t),undefined.c.push((()=>{N.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function C(t){t&&t.c()}function q(t,e,c,u){const{fragment:a,on_mount:i,on_destroy:s,after_update:f}=t.$$;a&&a.m(e,c),u||E((()=>{const e=i.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(E)}function z(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function B(t,n){-1===t.$$.dirty[0]&&(g.push(t),k||(k=!0,x.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function F(n,r,c,u,i,s,f,d=[-1]){const h=a;$(n);const p=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(h?h.$$.context:[])),callbacks:e(),dirty:d,skip_bound:!1,root:r.target||h.$$.root};f&&f(p.root);let m=!1;if(p.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&B(n,t)),e})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!u&&u(p.ctx),r.target){if(r.hydrate){const t=(g=r.target,Array.from(g.childNodes));p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&O(n.$$.fragment),q(n,r.target,r.anchor,r.customElement),j()}var g;$(h)}class M{$destroy(){z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{M as S,f as a,h as b,C as c,l as d,d as e,i as f,p as g,s as h,F as i,S as j,z as k,q as m,t as n,m as o,c as s,O as t};
