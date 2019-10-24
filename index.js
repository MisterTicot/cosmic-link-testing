!function(e){function t(t){for(var r,o,i=t[0],a=t[1],c=0,s=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&s.push(n[o][0]),n[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(u&&u(t);s.length;)s.shift()()}var r={},n={1:0};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+({0:"app",2:"ledger",3:"trezor",4:"vendors~app",5:"vendors~ledger",6:"vendors~trezor"}[e]||e)+".js"}(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,r[1](u)}n[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=a;o(o.s=13)}([function(e,t,r){e.exports=r(4)},function(e,t){function r(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,u,"next",e)}function u(e){r(a,o,i,c,u,"throw",e)}c(void 0)}))}}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(e,t,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(e,t,r);if("normal"===u.type){if(n=r.done?h:f,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var l="suspendedStart",f="suspendedYield",p="executing",h="completed",d={};function v(){}function y(){}function w(){}var m={};m[i]=function(){return this};var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==r&&n.call(b,i)&&(m=b);var x=w.prototype=v.prototype=Object.create(m);function k(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function E(e){var t;this._invoke=function(r,o){function i(){return new Promise((function(t,i){!function t(r,o,i,a){var c=s(e[r],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(e){t("next",e,i,a)}),(function(e){t("throw",e,i,a)})):Promise.resolve(l).then((function(e){u.value=e,i(u)}),(function(e){return t("throw",e,i,a)}))}a(c.arg)}(r,o,t,i)}))}return t=t?t.then(i,i):i()}}function L(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function S(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:_}}function _(){return{value:t,done:!0}}return y.prototype=x.constructor=w,w.constructor=y,w[c]=y.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},k(E.prototype),E.prototype[a]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,n,o){var i=new E(u(t,r,n,o));return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){"use strict";var n=t;n.delay=function(e){var t,r=!0;return function(){return r&&(r=!1,t=new Promise((function(t){return t(e())}))),t}},n.timeout=function(e){return new Promise((function(t){return setTimeout(t,e)}))},n.capitalize=function(e){return e.substr(0,1).toUpperCase()+e.slice(1)},n.shorter=function(e){return e.length>50?e.substr(0,5)+"..."+e.substr(-5):e},n.setHiddenProperty=function(e,t,r){Object.defineProperty(e,t,{value:r,enumerable:!1,configurable:!0})},n.deprecated=function(e,t,r){console.error("Warning: ".concat(t," is deprecated and will be removed after ").concat(e,". Please use ").concat(r," instead."))},n.useExtra=function(e){return e[o]||n.setHiddenProperty(e,o,{}),e[o]};var o="@cosmic-plus";n.isUtf8=function(e){return!e.match(/[\0-\x1F\x7F-\x9F\xAD\uD7FC-\uF8FF]/)},n.isBase64=function(e){return!!e.match(/^[0-9a-zA-Z+/]*=*$/)},n.day=function(e){return(e?new Date(e):new Date).toISOString().replace(/T.*/,"")},n.copy=function(){return console.error("misc.copy() have been moved to html.copyString()")}},function(module,exports,__webpack_require__){(function(process,global){var env=exports;if(env.isBrowser="undefined"!=typeof window&&void 0!==window.document,env.isNode=void 0!==process&&process.versions&&process.versions.node,env.isEmbedded=env.isBrowser&&window.self!==window.top,env.window=env.isBrowser&&window,env.global=env.isNode&&global,env.nodeRequire=function(){},env.isNode){var stealth_require=eval("require");env.nodeRequire=function(e){return stealth_require(e)}}}).call(this,__webpack_require__(12),__webpack_require__(8))},function(e,t,r){var n=t,o=r(6),i=r(5),a=o.window?o.window.document:void 0;o.isNode&&console.error("@cosmic-plus/domutils is a browser-only module"),n.addStyles=function(e){var t=n.create("style",{type:"text/css"},e);n.append(a.head,t)},n.append=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];r.forEach((function(t){return e.appendChild(n.convert(t))}))},n.addClass=function(e,t){-1===e.className.split(" ").indexOf(t)&&(e.className+=" ".concat(t))},n.appendClass=function(e,t){return i.deprecated("2019-07-16","html.appendClass()","html.addClass()"),n.addClass(e,t)},n.clear=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach((function(e){return e.innerHTML=""}))},n.convert=function(e){return e instanceof Element||e instanceof HTMLDocument||e instanceof Text?e:null==e?a.createTextNode(""):e.domNode||a.createTextNode(e)},n.copyContent=function(e){if(e.selectionStart===e.selectionEnd){if(e.select)e.select();else{if(!window.getSelection)return;var t=a.createRange();t.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}return a.execCommand("copy")}},n.copyString=function(e){var t=n.create("textarea",{},e);n.append(a.body,t),n.copyContent(t),n.destroy(t)},n.create=function(e,t){var r=a.createElement(e);if("string"==typeof t)switch(t.substr(0,1)){case"#":r.id=t.substr(1);break;case".":r.className=t.substr(1);break;default:throw new Error("Unhandled attribute")}else Object.assign(r,t);for(var o=arguments.length,i=new Array(o>2?o-2:0),c=2;c<o;c++)i[c-2]=arguments[c];return i.length>0&&n.append.apply(n,[r].concat(i)),r},n.destroy=function(e){try{e.parentNode&&e.parentNode.removeChild(e),e.innerHTML=""}catch(e){console.error(e)}},n.grab=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return t.querySelector(e)},n.hide=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach((function(e){return e.hidden=!0}))},n.replace=function(e,t){var r=n.convert(t);return e.parentNode.replaceChild(r,e),r},n.rewrite=function(e){n.clear(e);for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n.append.apply(n,[e].concat(r))},n.show=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach((function(e){return e.hidden=!1}))}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){},function(e,t){NodeList.prototype.forEach||(NodeList.prototype.forEach=Array.prototype.forEach),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),r=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var n=arguments[1],o=0;o<r;){var i=t[o];if(e.call(n,i,o,t))return i;o++}},configurable:!0,writable:!0}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(e),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])}return r},writable:!0,configurable:!0});var r=Function.bind.call(Function.call,Array.prototype.reduce),n=Function.bind.call(Function.call,Object.prototype.propertyIsEnumerable),o=Function.bind.call(Function.call,Array.prototype.concat),i=Object.getOwnPropertyNames;Object.values||(Object.values=function(e){return r(i(e),(function(t,r){return o(t,"string"==typeof r&&n(e,r)?[e[r]]:[])}),[])}),Object.entries||(Object.entries=function(e){return r(i(e),(function(t,r){return o(t,"string"==typeof r&&n(e,r)?[[r,e[r]]]:[])}),[])})},function(e,t,r){var n=r(0),o=r(1),i=r(2),a=r(3),c=t,u=r(7),s=r(14),l=r(15);c.array=[],c.nodes=[];var f=function(){"use strict";function e(t){i(this,e),Object.assign(this,t,l[t.protocol]),!this.buttonText&&this.redirection&&(this.buttonText="Go to "+this.name)}var t;return a(e,[{key:"handle",value:(t=o(n.mark((function e(t){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.handler(this,t));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"node",get:function(){return u.create("option",{value:this.name},this.name)}}]),e}();for(var p in s){var h=new f(s[p]);t.array.push(h),t.nodes.push(h.node),t[h.name]=h}},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&h())}function h(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new d(e,t)),1!==s.length||l||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){"use strict";var n=navigator.serviceWorker;n&&(n.register("worker.js"),n.addEventListener("controllerchange",(function(){return location.reload()}))),r(10);var o=r(11),i=r(9),a=location.pathname.replace(/.*\//,"");if(i.contextIsWidget="widget.html"===a,i.query=location.search.length>1&&location.search,i.authenticator=o[localStorage.authenticator]||o["Stellar Authenticator"],i.redirect=i.contextIsWidget&&"true"===localStorage.redirect,i.qrCode="true"===localStorage.QR,i.query&&i.redirect&&"cosmiclink"===i.authenticator.protocol){var c=i.authenticator.url+location.search;location.replace(c)}else"index.html"===a&&history.replaceState({},"",location.pathname.replace(/index.html$/,"")+location.search+location.hash);window.onload=function(){return Promise.all([r.e(4),r.e(0)]).then(r.t.bind(null,19,7))}},function(e,t){var r=t;r.StellarAuthenticator={name:"Stellar Authenticator",protocol:"cosmiclink",url:"https://stellar-authenticator.org/"},r.LedgerWallet={name:"Ledger Wallet",protocol:"ledgerwallet",needSource:!0,needNetwork:!0},r.TrezorWallet={name:"Trezor Wallet (beta)",protocol:"trezorwallet",needSource:!0,needNetwork:!0},r.Sep7Wallet={name:"Sep-0007 Wallet",protocol:"sep0007",url:"web+stellar:tx/",target:"external",needSource:!0,needNetwork:!0},r.StellarLaboratory={name:"Stellar Laboratory",protocol:"stellarlab",url:"https://stellar.org/laboratory/#txsigner",target:"new",needSource:!0,needNetwork:!0},r.CopyPasteXdr={name:"Copy/Paste XDR",protocol:"copy",needSource:!0,needNetwork:!0}},function(e,t,r){var n,o,i,a,c,u,s,l,f,p,h,d=r(0),v=r(1),y=t,w={redirection:!0,textarea:!1,qrCode:!0};function m(){return Promise.all([r.e(5),r.e(2)]).then(r.t.bind(null,20,7)).then((function(e){return e.default}))}function g(){return Promise.all([r.e(6),r.e(3)]).then(r.t.bind(null,21,7)).then((function(e){return e.register("https://cosmic.link","mister.ticot@cosmic.plus"),e.default}))}for(var b in y.cosmiclink={handler:function(e,t){return e.url+t.query}},y.ledgerwallet={buttonText:"Sign with Ledger Wallet",qrCode:!1,getAccountId:(a=v(d.mark((function e(){var t;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return t=e.sent,e.next=5,t.connect();case 5:return e.abrupt("return",t.publicKey);case 6:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)}),handler:(i=v(d.mark((function e(t,r){var n;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.lock();case 2:return e.next=4,m();case 4:return n=e.sent,e.abrupt("return",v(d.mark((function e(){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.sign(r.transaction));case 1:case"end":return e.stop()}}),e)}))));case 6:case"end":return e.stop()}}),e)}))),function(e,t){return i.apply(this,arguments)}),refresh:(o=v(d.mark((function e(t){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:e.sent.onDisconnect=function(){return t()};case 4:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)}),onExit:(n=v(d.mark((function e(){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:e.sent.disconnect();case 4:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})},y.trezorwallet={buttonText:"Sign with Trezor Wallet",qrCode:!1,getAccountId:(l=v(d.mark((function e(){var t;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,e.next=5,t.connect();case 5:return e.abrupt("return",t.publicKey);case 6:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)}),handler:(s=v(d.mark((function e(t,r){var n;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.lock();case 2:return e.next=4,g();case 4:return n=e.sent,e.abrupt("return",v(d.mark((function e(){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.sign(r.transaction));case 1:case"end":return e.stop()}}),e)}))));case 6:case"end":return e.stop()}}),e)}))),function(e,t){return s.apply(this,arguments)}),refresh:(u=v(d.mark((function e(t){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:e.sent.onDisconnect=function(){return t()};case 4:case"end":return e.stop()}}),e)}))),function(e){return u.apply(this,arguments)}),onExit:(c=v(d.mark((function e(){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:e.sent.disconnect();case 4:case"end":return e.stop()}}),e)}))),function(){return c.apply(this,arguments)})},y.sep0007={handler:(f=v(d.mark((function e(t,r){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.lock();case 2:return e.abrupt("return",r.sep7);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return f.apply(this,arguments)})},y.stellarlab={handler:(p=v(d.mark((function e(t,r){var n,o,i,a;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.lock();case 2:return n=encodeURIComponent(r.xdr),o="?xdr=".concat(n),"public"===r.network||"test"===r.network?o+="&network=".concat(r.network):(i=encodeURIComponent(r.network),a=encodeURIComponent(r.horizon),o+="&network=custom&horizonURL=".concat(a,"&networkPassphrase=").concat(i)),e.abrupt("return",t.url+o);case 6:case"end":return e.stop()}}),e)}))),function(e,t){return p.apply(this,arguments)})},y.copy={redirection:!1,textarea:!0,handler:(h=v(d.mark((function e(t,r){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.lock();case 2:return e.abrupt("return",r.xdr);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return h.apply(this,arguments)})},y)y[b]=Object.assign({},w,y[b]);y.defaults=w}]);
//# sourceMappingURL=index.js.map