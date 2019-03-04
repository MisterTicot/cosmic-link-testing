var lib=function(e){function t(t){for(var r,o,i=t[0],a=t[1],c=0,s=[];c<i.length;c++)o=i[c],n[o]&&s.push(n[o][0]),n[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(u&&u(t);s.length;)s.shift()()}var r={},n={2:0};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,o){r=n[e]=[t,o]});t.push(r[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+({0:"app",1:"ledger",3:"vendors~app",4:"vendors~ledger"}[e]||e)+".js"}(e),a=function(t){c.onerror=c.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,r[1](a)}n[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonplib=window.webpackJsonplib||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=a;return o(o.s=8)}([function(e,t,r){e.exports=r(10)},function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}e.exports=n},function(e,t,r){var n=t,o=r(5).deprecated,i=r(3),a=i.window?i.window.document:void 0;i.isNode&&console.error("@cosmic-plus/jsutils/html is a browser-only module"),n.addStyles=function(e){var t=n.create("style",{type:"text/css"},e);n.append(a.head,t)},n.append=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];r.forEach(function(t){return e.appendChild(n.convert(t))})},n.addClass=function(e,t){-1===e.className.split(" ").indexOf(t)&&(e.className+=" ".concat(t))},n.appendClass=function(e,t){return o("2019-07-16","html.appendClass()","html.addClass()"),n.addClass(e,t)},n.clear=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(function(e){return e.innerHTML=""})},n.convert=function(e){return e instanceof Element||e instanceof HTMLDocument||e instanceof Text?e:null==e?a.createTextNode(""):e.domNode||a.createTextNode(e)},n.copyContent=function(e){if(e.selectionStart===e.selectionEnd){if(e.select)e.select();else{if(!window.getSelection)return;var t=a.createRange();t.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}return a.execCommand("copy")}},n.copyString=function(e){var t=n.create("textarea",{},e);n.append(a.body,t),n.copyContent(t),n.destroy(t)},n.create=function(e,t){var r=a.createElement(e);if("string"==typeof t)switch(t.substr(0,1)){case"#":r.id=t.substr(1);break;case".":r.className=t.substr(1);break;default:throw new Error("Unhandled attribute")}else Object.assign(r,t);for(var o=arguments.length,i=new Array(o>2?o-2:0),c=2;c<o;c++)i[c-2]=arguments[c];return i.length>0&&n.append.apply(n,[r].concat(i)),r},n.destroy=function(e){try{e.parentNode&&e.parentNode.removeChild(e),e.innerHTML=""}catch(e){console.error(e)}},n.grab=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:a).querySelector(e)},n.hide=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(function(e){return e.hidden=!0})},n.replace=function(e,t){var r=n.convert(t);return e.parentNode.replaceChild(r,e),r},n.rewrite=function(e){n.clear(e);for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n.append.apply(n,[e].concat(r))},n.show=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(function(e){return e.hidden=!1})}},function(module,exports,__webpack_require__){(function(process,global){var env=exports;if(env.isBrowser="undefined"!=typeof window&&void 0!==window.document,env.isNode=void 0!==process&&process.versions&&process.versions.node,env.isEmbedded=env.isBrowser&&window.self!==window.top,env.window=env.isBrowser&&window,env.global=env.isNode&&global,env.nodeRequire=function(){},env.isNode){var stealth_require=eval("require");env.nodeRequire=function(e){return stealth_require(e)}}}).call(this,__webpack_require__(4),__webpack_require__(1))},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&h())}function h(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new d(e,t)),1!==s.length||l||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){"use strict";var n=t;n.delay=function(e){var t,r=!0;return function(){return r&&(r=!1,t=new Promise(function(t){return t(e())})),t}},n.timeout=function(e){return new Promise(function(t){return setTimeout(t,e)})},n.capitalize=function(e){return e.substr(0,1).toUpperCase()+e.slice(1)},n.shorter=function(e){return e.length>50?e.substr(0,5)+"..."+e.substr(-5):e},n.setHiddenProperty=function(e,t,r){Object.defineProperty(e,t,{value:r,enumerable:!1,configurable:!0})},n.deprecated=function(e,t,r){console.error("Warning: ".concat(t," is deprecated and will be removed after ").concat(e,". Please use ").concat(r," instead."))},n.useExtra=function(e){return e[o]||n.setHiddenProperty(e,o,{}),e[o]};var o="@cosmic-plus";n.isUtf8=function(e){return!e.match(/[\0-\x1F\x7F-\x9F\xAD\uD7FC-\uF8FF]/)},n.isBase64=function(e){return!!e.match(/^[0-9a-zA-Z+\/]*=*$/)},n.day=function(e){return(e?new Date(e):new Date).toISOString().replace(/T.*/,"")},n.copy=function(){return console.error("misc.copy() have been moved to html.copyString()")}},function(e,t,r){var n=r(0);function o(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=t,c=r(2),u=r(13),s=r(14);a.array=[],a.nodes=[];var l=function(){"use strict";function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,t,s[t.protocol]),!this.buttonText&&this.redirection&&(this.buttonText="Go to "+this.name)}var t,r,a;return t=e,(r=[{key:"handle",value:function(){var e,t=(e=n.mark(function e(t){return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.handler(this,t));case 1:case"end":return e.stop()}},e,this)}),function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function c(e){o(a,n,i,c,u,"next",e)}function u(e){o(a,n,i,c,u,"throw",e)}c(void 0)})});return function(e){return t.apply(this,arguments)}}()},{key:"node",get:function(){return c.create("option",{value:this.name},this.name)}}])&&i(t.prototype,r),a&&i(t,a),e}();for(var f in u){var p=new l(u[f]);t.array.push(p),t.nodes.push(p.node),t[p.name]=p}},function(e,t){},function(e,t,r){navigator.serviceWorker&&navigator.serviceWorker.register("worker.js"),r(9);var n=r(6),o=r(7);o.query=location.search.length>1&&location.search,o.authenticator=n[localStorage.authenticator]||n["Stellar Authenticator"],o.redirect="true"===localStorage.redirect,o.qrCode="true"===localStorage.QR,o.query&&o.redirect&&"cosmiclink"===o.authenticator.protocol?location.replace(o.authenticator.url+location.search):history.replaceState({},"",location.pathname.replace(/index.html$/,"")+location.search+location.hash),window.onload=function(){return Promise.all([r.e(3),r.e(0)]).then(r.t.bind(null,15,7))}},function(e,t){NodeList.prototype.forEach||(NodeList.prototype.forEach=Array.prototype.forEach),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),r=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var n=arguments[1],o=0;o<r;){var i=t[o];if(e.call(n,i,o,t))return i;o++}},configurable:!0,writable:!0}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(e),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])}return r},writable:!0,configurable:!0});var r=Function.bind.call(Function.call,Array.prototype.reduce),n=Function.bind.call(Function.call,Object.prototype.propertyIsEnumerable),o=Function.bind.call(Function.call,Array.prototype.concat),i=Object.getOwnPropertyNames;Object.values||(Object.values=function(e){return r(i(e),function(t,r){return o(t,"string"==typeof r&&n(e,r)?[e[r]]:[])},[])}),Object.entries||(Object.entries=function(e){return r(i(e),function(t,r){return o(t,"string"==typeof r&&n(e,r)?[[r,e[r]]]:[])},[])})},function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(){return this||"object"===("undefined"==typeof self?"undefined":n(self))&&self}()||Function("return this")(),i=o.regeneratorRuntime&&Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime")>=0,a=i&&o.regeneratorRuntime;if(o.regeneratorRuntime=void 0,e.exports=r(11),i)o.regeneratorRuntime=a;else try{delete o.regeneratorRuntime}catch(e){o.regeneratorRuntime=void 0}},function(e,t,r){(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(r){"use strict";var n,o=Object.prototype,i=o.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",l="object"===t(e),f=r.regeneratorRuntime;if(f)l&&(e.exports=f);else{(f=r.regeneratorRuntime=l?e.exports:{}).wrap=x;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",v={},m={};m[c]=function(){return this};var w=Object.getPrototypeOf,g=w&&w(w(C([])));g&&g!==o&&i.call(g,c)&&(m=g);var b=j.prototype=S.prototype=Object.create(m);O.prototype=b.constructor=j,j.constructor=O,j[s]=O.displayName="GeneratorFunction",f.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===O||"GeneratorFunction"===(t.displayName||t.name))},f.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(b),e},f.awrap=function(e){return{__await:e}},E(L.prototype),L.prototype[u]=function(){return this},f.AsyncIterator=L,f.async=function(e,t,r,n){var o=new L(x(e,t,r,n));return f.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(b),b[s]="Generator",b[c]=function(){return this},b.toString=function(){return"[object Generator]"},f.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=C,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return c.type="throw",c.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:C(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function x(e,t,r,n){var o=t&&t.prototype instanceof S?t:S,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(e,t,r){var n=p;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=T(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=k(e,t,r);if("normal"===u.type){if(n=r.done?y:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function k(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function S(){}function O(){}function j(){}function E(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function L(e){var r;this._invoke=function(n,o){function a(){return new Promise(function(r,a){!function r(n,o,a,c){var u=k(e[n],e,o);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===t(l)&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(e){r("next",e,a,c)},function(e){r("throw",e,a,c)}):Promise.resolve(l).then(function(e){s.value=e,a(s)},function(e){return r("throw",e,a,c)})}c(u.arg)}(n,o,r,a)})}return r=r?r.then(a,a):a()}}function T(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,T(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=k(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,v;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,v):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function C(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:A}}function A(){return{value:n,done:!0}}}(function(){return this||"object"===("undefined"==typeof self?"undefined":t(self))&&self}()||Function("return this")())}).call(this,r(12)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var r=t;r.StellarAuthenticator={name:"Stellar Authenticator",protocol:"cosmiclink",url:"https://stellar-authenticator.org/"},r.LedgerWallet={name:"Ledger Wallet",protocol:"ledgerwallet",needSource:!0,needNetwork:!0},r.Sep7Wallet={name:"Sep-0007 Wallet",protocol:"sep0007",url:"web+stellar:tx/",target:"external",needNetwork:!0},r.StellarLaboratory={name:"Stellar Laboratory",protocol:"stellarlab",url:"https://stellar.org/laboratory/#txsigner",target:"new",needSource:!0,needNetwork:!0},r.CopyPasteXdr={name:"Copy/Paste XDR",protocol:"copy",needSource:!0,needNetwork:!0}},function(e,t,r){var n=r(0);function o(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function c(e){o(a,n,i,c,u,"next",e)}function u(e){o(a,n,i,c,u,"throw",e)}c(void 0)})}}var a=t,c={redirection:!0,textarea:!1,qrCode:!0};function u(){return Promise.all([r.e(4),r.e(1)]).then(r.t.bind(null,16,7)).then(function(e){return e.default})}for(var s in a.cosmiclink={handler:function(e,t){return e.url+t.query}},a.ledgerwallet={buttonText:"Sign with Ledger Wallet",qrCode:!1,getAccountId:function(){var e=i(n.mark(function e(){var t;return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:return t=e.sent,e.next=5,t.connect();case 5:return e.abrupt("return",t.publicKey);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),handler:function(){var e=i(n.mark(function e(t,r){var o;return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.lock();case 2:return e.next=4,u();case 4:return o=e.sent,e.abrupt("return",i(n.mark(function e(){return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.sign(r.transaction));case 1:case"end":return e.stop()}},e)})));case 6:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}(),refresh:function(){var e=i(n.mark(function e(t){return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:e.sent.onDisconnect=function(){return t()};case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),onExit:function(){var e=i(n.mark(function e(){return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:e.sent.disconnect();case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},a.sep0007={handler:function(){var e=i(n.mark(function e(t,r){return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.lock();case 2:return e.abrupt("return",r.sep7);case 3:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()},a.stellarlab={handler:function(){var e=i(n.mark(function e(t,r){var o,i,a,c;return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.lock();case 2:return o=encodeURIComponent(r.xdr),i="?xdr=".concat(o),"public"===r.network||"test"===r.network?i+="&network=".concat(r.network):(a=encodeURIComponent(r.network),c=encodeURIComponent(r.horizon),i+="&network=custom&horizonURL=".concat(c,"&networkPassphrase=").concat(a)),e.abrupt("return",t.url+i);case 6:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()},a.copy={redirection:!1,textarea:!0,handler:function(){var e=i(n.mark(function e(t,r){return n.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.lock();case 2:return e.abrupt("return",r.xdr);case 3:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()},a)a[s]=Object.assign({},c,a[s]);a.defaults=c}]);
//# sourceMappingURL=index.js.map