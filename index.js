var lib=function(t){function e(e){for(var r,o,i=e[0],a=e[1],c=0,s=[];c<i.length;c++)o=i[c],n[o]&&s.push(n[o][0]),n[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(u&&u(e);s.length;)s.shift()()}var r={},n={2:0};function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,o){r=n[t]=[e,o]});e.push(r[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(t){return o.p+""+({0:"gui",1:"ledger"}[t]||t)+".js"}(t),a=function(e){c.onerror=c.onload=null,clearTimeout(u);var r=n[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,r[1](a)}n[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonplib=window.webpackJsonplib||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=a;return o(o.s=8)}([function(t,e,r){t.exports=r(9)},function(t,e,r){"use strict";var n=e;n.delay=function(t){var e,r=!0;return function(){return r&&(r=!1,e=new Promise(function(e){return e(t())})),e}},n.timeout=function(t){return new Promise(function(e){setTimeout(e,t)})},n.capitalize=function(t){return t.substr(0,1).toUpperCase()+t.slice(1)},n.shorter=function(t){return t.length>50?t.substr(0,5)+"..."+t.substr(-5):t},n.setHiddenProperty=function(t,e,r){Object.defineProperty(t,e,{value:r,enumerable:!1,configurable:!0})},n.deprecated=function(t,e,r){console.error("Warning: ".concat(e," is deprecated and will be removed after ").concat(t,". Please use ").concat(r," instead."))},n.useExtra=function(t){return t[o]||n.setHiddenProperty(t,o,{}),t[o]};var o="@cosmic-plus";n.isUtf8=function(t){return!t.match(/[\0-\x1F\x7F-\x9F\xAD\uD7FC-\uF8FF]/)},n.isBase64=function(t){return!!t.match(/^[0-9a-zA-Z+\/]*=*$/)},n.copy=function(){return console.error("misc.copy() have been moved to html.copyString()")}},function(module,exports,__webpack_require__){(function(process,global){var env=exports;if(env.isBrowser="undefined"!=typeof window&&void 0!==window.document,env.isNode=void 0!==process&&process.versions&&process.versions.node,env.isEmbedded=env.isBrowser&&window.self!==window.top,env.window=env.isBrowser&&window,env.global=env.isNode&&global,env.nodeRequire=function(){},env.isNode){var stealth_require=eval("require");env.nodeRequire=function(t){return stealth_require(t)}}}).call(this,__webpack_require__(12),__webpack_require__(4))},function(t,e,r){var n=e,o=r(1).deprecated,i=r(2),a=i.window?i.window.document:void 0;i.isNode&&console.error("@cosmic-plus/jsutils/html is a browser-only module"),n.addStyles=function(t){var e=n.create("style",{type:"text/css"},t);n.append(a.head,e)},n.append=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];r.forEach(function(e){t.appendChild(n.convert(e))})},n.addClass=function(t,e){-1===t.className.split(" ").indexOf(e)&&(t.className+=" ".concat(e))},n.appendClass=function(t,e){return o("2019-07-16","html.appendClass()","html.addClass()"),n.addClass(t,e)},n.clear=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){t.innerHTML=""})},n.convert=function(t){return t instanceof Element||t instanceof HTMLDocument||t instanceof Text?t:null==t?a.createTextNode(""):t.domNode||a.createTextNode(t)},n.copyContent=function(t){if(t.selectionStart===t.selectionEnd){if(t.select)t.select();else{if(!window.getSelection)return;var e=a.createRange();e.selectNode(t),window.getSelection().removeAllRanges(),window.getSelection().addRange(e)}return a.execCommand("copy")}},n.copyString=function(t){var e=n.create("textarea",{},t);n.append(a.body,e),n.copyContent(e),n.destroy(e)},n.create=function(t,e){var r=a.createElement(t);if("string"==typeof e)switch(e.substr(0,1)){case"#":r.id=e.substr(1);break;case".":r.className=e.substr(1);break;default:throw new Error("Unhandled attribute")}else Object.assign(r,e);for(var o=arguments.length,i=new Array(o>2?o-2:0),c=2;c<o;c++)i[c-2]=arguments[c];return i.length>0&&n.append.apply(n,[r].concat(i)),r},n.destroy=function(t){try{t.parentNode&&t.parentNode.removeChild(t),t.innerHTML=""}catch(t){console.error(t)}},n.grab=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:a).querySelector(t)},n.hide=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return t.hidden=!0})},n.replace=function(t,e){var r=n.convert(e);return t.parentNode.replaceChild(r,t),r},n.rewrite=function(t){n.clear(t);for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];n.append.apply(n,[t].concat(r))},n.show=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return t.hidden=!1})}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}t.exports=n},function(t,e){NodeList.prototype.forEach||(NodeList.prototype.forEach=Array.prototype.forEach),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var n=arguments[1],o=0;o<r;){var i=e[o];if(t.call(n,i,o,e))return i;o++}},configurable:!0,writable:!0}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){"use strict";if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])}return r},writable:!0,configurable:!0}),Object.values||(Object.values=function(t){return Object.keys(t).map(function(e){return t[e]})})},function(t,e,r){var n=r(0);function o(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=e,c=r(3),u=r(13),s=r(14);a.array=[],a.nodes=[];var l=function(){"use strict";function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object.assign(this,e,s[e.protocol]),!this.buttonText&&this.redirection&&(this.buttonText="Go to "+this.name)}var e,r,a;return e=t,(r=[{key:"handle",value:function(){var t,e=(t=n.mark(function t(e){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.handler(this,e));case 1:case"end":return t.stop()}},t,this)}),function(){var e=this,r=arguments;return new Promise(function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)})});return function(t){return e.apply(this,arguments)}}()},{key:"node",get:function(){return c.create("option",{value:this.name},this.name)}}])&&i(e.prototype,r),a&&i(e,a),t}();for(var f in u){var p=new l(u[f]);e.array.push(p),e.nodes.push(p.node),e[p.name]=p}},function(t,e){},function(t,e,r){navigator.serviceWorker&&navigator.serviceWorker.register("worker.js"),r(5);var n=r(6),o=r(7);o.query=location.search.length>1&&location.search,o.authenticator=n[localStorage.authenticator]||n["Stellar Authenticator"],o.redirect="true"===localStorage.redirect,o.qrCode="true"===localStorage.QR,o.query&&o.redirect&&"cosmiclink"===o.authenticator.protocol?location.replace(o.authenticator.url+location.search):history.replaceState({},"",location.pathname.replace(/index.html$/,"")+location.search+location.hash),window.onload=function(){return r.e(0).then(r.t.bind(null,15,7))}},function(t,e,r){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(){return this||"object"===("undefined"==typeof self?"undefined":n(self))&&self}()||Function("return this")(),i=o.regeneratorRuntime&&Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime")>=0,a=i&&o.regeneratorRuntime;if(o.regeneratorRuntime=void 0,t.exports=r(10),i)o.regeneratorRuntime=a;else try{delete o.regeneratorRuntime}catch(t){o.regeneratorRuntime=void 0}},function(t,e,r){(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(r){"use strict";var n,o=Object.prototype,i=o.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",l="object"===e(t),f=r.regeneratorRuntime;if(f)l&&(t.exports=f);else{(f=r.regeneratorRuntime=l?t.exports:{}).wrap=x;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",v={},m={};m[c]=function(){return this};var w=Object.getPrototypeOf,g=w&&w(w(C([])));g&&g!==o&&i.call(g,c)&&(m=g);var b=L.prototype=S.prototype=Object.create(m);E.prototype=b.constructor=L,L.constructor=E,L[s]=E.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},f.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[u]=function(){return this},f.AsyncIterator=O,f.async=function(t,e,r,n){var o=new O(x(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},j(b),b[s]="Generator",b[c]=function(){return this},b.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=C,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function x(t,e,r,n){var o=e&&e.prototype instanceof S?e:S,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=p;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=T(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=k(t,e,r);if("normal"===u.type){if(n=r.done?y:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function k(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function S(){}function E(){}function L(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var r;this._invoke=function(n,o){function a(){return new Promise(function(r,a){!function r(n,o,a,c){var u=k(t[n],t,o);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===e(l)&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):Promise.resolve(l).then(function(t){s.value=t,a(s)},function(t){return r("throw",t,a,c)})}c(u.arg)}(n,o,r,a)})}return r=r?r.then(a,a):a()}}function T(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,T(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=k(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function C(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:n,done:!0}}}(function(){return this||"object"===("undefined"==typeof self?"undefined":e(self))&&self}()||Function("return this")())}).call(this,r(11)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&h())}function h(){if(!l){var t=c(p);l=!0;for(var e=s.length;e;){for(u=s,s=[];++f<e;)u&&u[f].run();f=-1,e=s.length}u=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];s.push(new d(t,e)),1!==s.length||l||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var r=e;r.StellarAuthenticator={name:"Stellar Authenticator",protocol:"cosmiclink",url:"https://stellar-authenticator.org/"},r.LedgerWallet={name:"Ledger Wallet",protocol:"ledgerwallet",needSource:!0,needNetwork:!0},r.Sep7Wallet={name:"Sep-0007 Wallet",protocol:"sep0007",url:"web+stellar:tx/",needNetwork:!0},r.StellarLaboratory={name:"Stellar Laboratory",protocol:"stellarlab",url:"https://stellar.org/laboratory/#txsigner",needSource:!0,needNetwork:!0},r.CopyPasteXdr={name:"Copy/Paste XDR",protocol:"copy",needSource:!0,needNetwork:!0}},function(t,e,r){var n=r(0);function o(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)})}}var a=e,c={redirection:!0,textarea:!1,qrCode:!0};function u(){return r.e(1).then(r.t.bind(null,16,7)).then(function(t){return t.default})}for(var s in a.cosmiclink={handler:function(t,e){return t.url+e.query}},a.ledgerwallet={buttonText:"Sign with Ledger Wallet",qrCode:!1,getAccountId:function(){var t=i(n.mark(function t(){var e;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:return e=t.sent,t.next=5,e.connect();case 5:return t.abrupt("return",e.publicKey);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handler:function(){var t=i(n.mark(function t(e,r){var o;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.lock();case 2:return t.next=4,u();case 4:return o=t.sent,t.abrupt("return",i(n.mark(function t(){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.sign(r.transaction));case 1:case"end":return t.stop()}},t,this)})));case 6:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),refresh:function(){var t=i(n.mark(function t(e){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:t.sent.onDisconnect=function(){return e()};case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),onExit:function(){var t=i(n.mark(function t(){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:t.sent.disconnect();case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},a.sep0007={handler:function(){var t=i(n.mark(function t(e,r){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.lock();case 2:return t.abrupt("return",r.sep7);case 3:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}()},a.stellarlab={handler:function(){var t=i(n.mark(function t(e,r){var o,i,a,c;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.lock();case 2:return o=encodeURIComponent(r.xdr),i="?xdr=".concat(o),"public"===r.network||"test"===r.network?i+="&network=".concat(r.network):(a=encodeURIComponent(r.network),c=encodeURIComponent(r.horizon),i+="&network=custom&horizonURL=".concat(c,"&networkPassphrase=").concat(a)),t.abrupt("return",e.url+i);case 6:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}()},a.copy={redirection:!1,textarea:!0,handler:function(){var t=i(n.mark(function t(e,r){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.lock();case 2:return t.abrupt("return",r.xdr);case 3:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}()},a)a[s]=Object.assign({},c,a[s]);a.defaults=c}]);
//# sourceMappingURL=index.js.map