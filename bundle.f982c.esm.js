!function(t){function e(e){for(var n,r,o=e[0],u=e[1],l=0,c=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(a&&a(e);c.length;)c.shift()()}function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(t){var e=[];o[t]?e.push(o[t]):0!==o[t]&&{2:1,3:1}[t]&&e.push(o[t]=new Promise((function(e,r){for(var i=({2:"route-about",3:"route-home"}[t]||t)+".chunk."+{2:"082a0",3:"a2b14"}[t]+".css",u=n.p+i,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var a=(_=l[c]).getAttribute("data-href")||_.getAttribute("href");if("stylesheet"===_.rel&&(a===i||a===u))return e()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var _;if((a=(_=s[c]).getAttribute("data-href"))===i||a===u)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||u,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],f.parentNode.removeChild(f),r(i)},f.href=u,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(t){return n.p+""+({2:"route-about",3:"route-home"}[t]||t)+".chunk."+{2:"d07f4",3:"63b34"}[t]+".esm.js"}(t);var a=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}i[t]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://buom01.github.io/tremulous_fork/",n.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var a=l;n(n.s="mdyV")}({"+E3a":function(){},"/A0j":function(){},"1UZS":function(){},FaUl:function(){},QfWi:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var s=c[a].split("=");u[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=l(t.replace(o,"")),e=l(e||"");for(var _=Math.max(t.length,e.length),f=0;f<_;f++)if(e[f]&&":"===e[f].charAt(0)){var p=e[f].replace(/(^:|[+*?]+$)/g,""),d=(e[f].match(/[+*?]+$/)||m)[0]||"",h=~d.indexOf("+"),y=~d.indexOf("*"),v=t[f]||"";if(!v&&!y&&(d.indexOf("?")<0||h)){r=!1;break}if(u[p]=decodeURIComponent(v),h||y){u[p]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(c).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function c(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function a(){var t;return""+((t=g&&g.location?g.location:g&&g.getCurrentLocation?g.getCurrentLocation():"undefined"!=typeof location?location:C).pathname||"")+(t.search||"")}function s(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=b.length;e--;)if(b[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),g&&g[e]?g[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),_(t)}function _(t){for(var e=!1,n=0;n<b.length;n++)!0===b[n].routeTo(t)&&(e=!0);for(var r=k.length;r--;)k[r](t);return e}function f(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return s(e)}}function p(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return f(t.currentTarget||t.target||this),d(t)}function d(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function h(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(f(e))return d(t)}}while(e=e.parentNode)}}function y(t){function e(){v.Component.call(this),n||(this.componentWillMount=()=>{t(t=>{n=t&&t.default||t,this.setState({})})},this.shouldComponentUpdate=()=>null!=n),this.render=t=>{if(n)return Object(v.h)(n,t);const e=function t(e,n){if("string"==typeof e.type)return null;const r=e.__;if(!r)return;let o=r.__k;if(o){Array.isArray(o)||(o=[o]);let n=o.indexOf(e);-1===n&&(n=o.length);for(let e=n;e--;){const n=o[e],r=n&&n.__e||t(n,!0);if(r)return r}}return n?void 0:t(r)}(this.__v),r=e&&e.nextSibling||(this.__P||this._parentDom).firstChild;return r&&Object(v.h)(r.localName,{dangerouslySetInnerHTML:S})}}let n;return e.preload=t,(e.prototype=new v.Component).constructor=e,e}n.r(e);n("1UZS"),n("q22g"),n("/A0j"),n("V322"),n("+E3a"),n("skV7"),n("FaUl");var v=n("hosL"),m={},g=null,b=[],k=[],C={},x=!1,w=function(t){function e(e){t.call(this,e),e.history&&(g=e.history),this.state={url:e.url||a()},x||("function"==typeof addEventListener&&(g||addEventListener("popstate",(function(){_(a())})),addEventListener("click",h)),x=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){b.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;g&&(this.unlisten=g.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),b.splice(b.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},e}(v.Component);w.subscribers=k,w.getCurrentUrl=a,w.route=s,w.Router=w,w.Route=function(t){return Object(v.createElement)(t.component,t)},w.Link=function(t){return Object(v.createElement)("a",r({onClick:p},t))},w.exec=o;const S={};var A=y((function(t){n.e(3).then(function(){var e=n("+1Jk");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),E=y((function(t){n.e(2).then(function(){var e=n("ZbNB");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)}));e.default=class extends v.Component{constructor(...t){super(...t),this.handleRoute=()=>{}}render(){return Object(v.h)("div",{id:"app"},Object(v.h)(w,{onChange:this.handleRoute},Object(v.h)(A,{path:"/"}),Object(v.h)(E,{path:"/about"})))}}},V322:function(){},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o=arguments,i={};for(r in e)"key"!==r&&"ref"!==r&&(i[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return u(t,i,e&&e.key,e&&e.ref,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),j.vnode&&j.vnode(i),i}function l(){return{current:null}}function c(t){return t.children}function a(t,e){this.props=t,this.context=e}function s(t,e){if(null==e)return t.__?s(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?s(t):null}function _(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return _(t)}}function f(t){(!t.__d&&(t.__d=!0)&&T.push(t)&&!p.__r++||D!==j.debounceRendering)&&((D=j.debounceRendering)||N)(p)}function p(){for(var t;p.__r=T.length;)t=T.sort((function(t,e){return t.__v.__b-e.__v.__b})),T=[],t.some((function(t){var e,n,o,i,u,l,c;t.__d&&(l=(u=(e=t).__v).__e,(c=e.__P)&&(n=[],(o=r({},u)).__v=o,i=k(c,u,o,e.__n,void 0!==c.ownerSVGElement,null,n,null==l?s(u):l),C(n,u),i!=l&&_(u)))}))}function d(t,e,n,r,i,l,a,_,f,p){var d,h,v,m,g,b,C,x=r&&r.__k||I,A=x.length;for(f==W&&(f=null!=a?a[0]:A?s(r,0):null),n.__k=[],d=0;d<e.length;d++)if(null!=(m=n.__k[d]=null==(m=e[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(c,{children:m},null,null,null):null!=m.__e||null!=m.__c?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=x[d])||v&&m.key==v.key&&m.type===v.type)x[d]=void 0;else for(h=0;h<A;h++){if((v=x[h])&&m.key==v.key&&m.type===v.type){x[h]=void 0;break}v=null}g=k(t,m,v=v||W,i,l,a,_,f,p),(h=m.ref)&&v.ref!=h&&(C||(C=[]),v.ref&&C.push(v.ref,null,m),C.push(h,m.__c||g,m)),null!=g?(null==b&&(b=g),f=y(t,m,v,x,a,g,f),p||"option"!=n.type?"function"==typeof n.type&&(n.__d=f):t.value=""):f&&v.__e==f&&f.parentNode!=t&&(f=s(v))}if(n.__e=b,null!=a&&"function"!=typeof n.type)for(d=a.length;d--;)null!=a[d]&&o(a[d]);for(d=A;d--;)null!=x[d]&&S(x[d],x[d]);if(C)for(d=0;d<C.length;d++)w(C[d],C[++d],C[++d])}function h(t){return null==t||"boolean"==typeof t?[]:Array.isArray(t)?I.concat.apply([],t.map(h)):[t]}function y(t,e,n,r,o,i,u){var l,c,a;if(void 0!==e.__d)l=e.__d,e.__d=void 0;else if(o==n||i!=u||null==i.parentNode)t:if(null==u||u.parentNode!==t)t.appendChild(i),l=null;else{for(c=u,a=0;(c=c.nextSibling)&&a<r.length;a+=2)if(c==i)break t;t.insertBefore(i,u),l=u}return void 0!==l?l:i.nextSibling}function v(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===F.test(e)?n+"px":null==n?"":n}function m(t,e,n,r,o){var i,u,l,c,a;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(c in r)n&&c in n||v(i,c,"");if(n)for(a in n)r&&n[a]===r[a]||v(i,a,n[a])}else"o"===e[0]&&"n"===e[1]?(u=e!==(e=e.replace(/Capture$/,"")),l=e.toLowerCase(),e=(l in t?l:e).slice(2),n?(r||t.addEventListener(e,g,u),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,g,u)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&"download"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function g(t){this.l[t.type](j.event?j.event(t):t)}function b(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,o.__e&&("function"==typeof o.type&&o.__k.length>1&&b(o,e,n),e=y(n,o,o,t.__k,null,o.__e,e),"function"==typeof t.type&&(t.__d=e)))}function k(t,e,n,o,i,u,l,s,_){var f,p,h,y,v,m,g,k,C,w,S,E=e.type;if(void 0!==e.constructor)return null;(f=j.__b)&&f(e);try{t:if("function"==typeof E){if(k=e.props,C=(f=E.contextType)&&o[f.__c],w=f?C?C.props.value:f.__:o,n.__c?g=(p=e.__c=n.__c).__=p.__E:("prototype"in E&&E.prototype.render?e.__c=p=new E(k,w):(e.__c=p=new a(k,w),p.constructor=E,p.render=A),C&&C.sub(p),p.props=k,p.state||(p.state={}),p.context=w,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=E.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,E.getDerivedStateFromProps(k,p.__s))),y=p.props,v=p.state,h)null==E.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==E.getDerivedStateFromProps&&k!==y&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,w)||e.__v===n.__v){p.props=k,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,p.__h.length&&l.push(p),b(e,s,t);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(y,v,m)}))}p.context=w,p.props=k,p.state=p.__s,(f=j.__r)&&f(e),p.__d=!1,p.__v=e,p.__P=t,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(y,v)),S=null!=f&&f.type==c&&null==f.key?f.props.children:f,d(t,Array.isArray(S)?S:[S],e,n,o,i,u,l,s,_),p.base=e.__e,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=x(n.__e,e,n,o,i,u,l,_);(f=j.diffed)&&f(e)}catch(t){e.__v=null,j.__e(t,e,n)}return e.__e}function C(t,e){j.__c&&j.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){j.__e(t,e.__v)}}))}function x(t,e,n,r,o,i,u,l){var c,a,s,_,f,p=n.props,h=e.props;if(o="svg"===e.type||o,null!=i)for(c=0;c<i.length;c++)if(null!=(a=i[c])&&((null===e.type?3===a.nodeType:a.localName===e.type)||t==a)){t=a,i[c]=null;break}if(null==t){if(null===e.type)return document.createTextNode(h);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,h.is&&{is:h.is}),i=null,l=!1}if(null===e.type)p!==h&&t.data!==h&&(t.data=h);else{if(null!=i&&(i=I.slice.call(t.childNodes)),s=(p=n.props||W).dangerouslySetInnerHTML,_=h.dangerouslySetInnerHTML,!l){if(null!=i)for(p={},f=0;f<t.attributes.length;f++)p[t.attributes[f].name]=t.attributes[f].value;(_||s)&&(_&&s&&_.__html==s.__html||(t.innerHTML=_&&_.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||m(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||m(t,i,e[i],n[i],r)})(t,h,p,o,l),_?e.__k=[]:(c=e.props.children,d(t,Array.isArray(c)?c:[c],e,n,r,"foreignObject"!==e.type&&o,i,u,W,l)),l||("value"in h&&void 0!==(c=h.value)&&c!==t.value&&m(t,"value",c,p.value,!1),"checked"in h&&void 0!==(c=h.checked)&&c!==t.checked&&m(t,"checked",c,p.checked,!1))}return t}function w(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){j.__e(t,n)}}function S(t,e,n){var r,i,u;if(j.unmount&&j.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||w(r,null,e)),n||"function"==typeof t.type||(n=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){j.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(u=0;u<r.length;u++)r[u]&&S(r[u],e,n);null!=i&&o(i)}function A(t,e,n){return this.constructor(t,n)}function E(t,e,n){var r,o,u;j.__&&j.__(t,e),o=(r=n===M)?null:n&&n.__k||e.__k,t=i(c,null,[t]),u=[],k(e,(r?e:n||e).__k=t,o||W,W,void 0!==e.ownerSVGElement,n&&!r?[n]:o?null:e.childNodes.length?I.slice.call(e.childNodes):null,u,n||W,r),C(u,t)}function O(t,e){E(t,e,M)}function P(t,e){var n,o;for(o in e=r(r({},t.props),e),arguments.length>2&&(e.children=I.slice.call(arguments,2)),n={},e)"key"!==o&&"ref"!==o&&(n[o]=e[o]);return u(t.type,n,e.key||t.key,e.ref||t.ref,null)}function U(t){var e={},n={__c:"__cC"+R++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return e[n.__c]=o,e},this.shouldComponentUpdate=function(t){o.props.value!==t.value&&r.some((function(e){e.context=t.value,f(e)}))},this.sub=function(t){r.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){r.splice(r.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}n.r(e),n.d(e,"render",(function(){return E})),n.d(e,"hydrate",(function(){return O})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return c})),n.d(e,"createRef",(function(){return l})),n.d(e,"isValidElement",(function(){return L})),n.d(e,"Component",(function(){return a})),n.d(e,"cloneElement",(function(){return P})),n.d(e,"createContext",(function(){return U})),n.d(e,"toChildArray",(function(){return h})),n.d(e,"__u",(function(){return S})),n.d(e,"options",(function(){return j}));var j,L,T,N,D,M,R,W={},I=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;j={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return f(n.__E=n)}catch(e){t=e}throw t}},L=function(t){return null!=t&&void 0===t.constructor},a.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),f(this))},a.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),f(this))},a.prototype.render=c,T=[],N="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,M=W,R=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL");const{h:o,render:i,hydrate:u}=r,l=t=>t&&t.default?t.default:t,c=t=>"/"===t[t.length-1]?t:t+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof l(n("QfWi"))){let t=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let e=l(n("QfWi")),r={};const a=document.querySelector('[type="__PREACT_CLI_DATA__"]');a&&(r=JSON.parse(decodeURI(a.innerHTML)).preRenderData||r);const s={preRenderData:r},_=r.url?c(r.url):"",f=u&&_===c(location.pathname);t=(f?u:i)(o(e,{CLI_DATA:s}),document.body,t)})()}},q22g:function(){},skV7:function(){}});
//# sourceMappingURL=bundle.f982c.esm.js.map