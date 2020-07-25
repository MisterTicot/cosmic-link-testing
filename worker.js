!function(e){var s={};function t(n){if(s[n])return s[n].exports;var i=s[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=s,t.d=function(e,s,n){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(1&s&&(e=t(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var i in e)t.d(n,i,function(s){return e[s]}.bind(null,i));return n},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s=155)}({155:function(e,s,t){"use strict";const n=t(156),i=t(157);new n(i.name,i.version,"verbose").fromCache(["app.js","index.css","index.html","index.js","ledger.js","stellar-sdk.js","vendors~app.js","vendors~ledger.js","vendors~trezor.js","embed","embed.css","embed.html","fonts/rubik.woff","fonts/rubik.woff2","fonts/cousine.woff","fonts/cousine.woff2","browserconfig.xml","manifest.json","favicon.ico","icons/16x16.png","icons/32x32.png","icons/192x192.png","icons/512x512.png","icons/apple-touch.png","icons/mstile.png","icons/safari.svg"]).precache().register()},156:function(e,s){const t=e.exports=class{constructor(e,s,t){this.name=e,this.version=s,this.verbose=t,this.hostname=location.host.replace(/:.*/,""),this.enabled="localhost"!==this.hostname&&"127.0.0.1"!==this.hostname,this.root="".concat(location.protocol,"//").concat(location.host,"/"),this.startByRoot=new RegExp("^"+this.root),this.timeout=2e3,this.cacheName="".concat(e,"-").concat(s),this.files={},this.get=[]}development(){return this.enabled=!0,this}log(e){this.verbose&&console.log(e)}precache(){return this.get=Object.keys(this.files),this}register(){self.addEventListener("install",e=>{this.log("Installing ".concat(this.cacheName,"...")),e.waitUntil(function(e,s){const t=s.map(s=>"".concat(s,"?version=").concat(e.version));return caches.open(e.cacheName).then(e=>e.addAll(t))}(this,this.get).then(()=>self.skipWaiting()).then(()=>this.log("".concat(this.cacheName," installed"))))}),self.addEventListener("activate",e=>{var s;e.waitUntil((s=this.cacheName,caches.keys().then((function(e){return Promise.all(e.map(e=>{e!==s&&caches.delete(e)}))}))))}),self.addEventListener("fetch",e=>{if(!this.enabled||"GET"!==e.request.method)return;if(!e.request.url.match(this.startByRoot))return;let s=e.request.url.replace(/(\?|#).*$/,""),t=s.replace(this.startByRoot,"");t||(t="index.html",s+="index.html");const i="?version=".concat(this.version),o=new Request("".concat(s).concat(i)),c=this.files[t];c&&n[c]?e.respondWith(n[c](this,o,t)):e.respondWith(n.fromNetwork(this,o,t))})}};const n={};n.fromCache=function(e,s,t){return e.log("Looking for ".concat(t," into ").concat(e.cacheName," cache...")),caches.open(e.cacheName).then(e=>e.match(s))},n.fromNetwork=function(e,s,t){return e.log("Downloading ".concat(t,"...")),new Promise((function(t,n){const i=setTimeout(n,e.timeout);return fetch(s).then((function(e){clearTimeout(i),t(e)}))}))},n.cacheOrNetwork=async function(e,s,t){const i=await n.fromCache(e,s,t);if(i)return i;const o=await n.fromNetwork(e,s,t);return function(e,s,t){const n=t.clone();caches.open(e.cacheName).then(e=>e.put(s,n))}(e,s,o),o};for(let e in n)t.prototype[e]=function(s){return s.forEach(s=>this.files[s]=e),this}},157:function(e){e.exports=JSON.parse('{"name":"cosmic-link","version":"2.0.0-beta.11","description":"The Cosmic.link website","author":"MisterTicot <mister.ticot@cosmic.plus>","homepage":"https://cosmic.link","repository":"github:cosmic-plus/webapp-cosmic-link","license":"MIT","keywords":[],"scripts":{"test":"jasmine \'test/**/*.spec.js\'","get":"git submodule update -i --recursive","clean":"rm -rf web/*","prettier":"prettier --write --no-semi \'src/**/*.{js,json,md}\' \'*.{js,json,md}\'","eslint":"eslint --fix \'src/**/*.js\' \'*.js\'","lint":"npm run prettier && npm run eslint","set-dev":"sh setenv.sh -d","set-prod":"sh setenv.sh -p","build-js":"webpack -p && cp -f node_modules/stellar-sdk/dist/stellar-sdk.min.js web/stellar-sdk.js","build-index-scss":"node-sass style/index.scss -o web -t compressed","build-embed-scss":"node-sass style/embed.scss -o web -t compressed","build-scss":"npm run build-index-scss && npm run build-embed-scss","build-css":"npm run build-scss && autoprefixer-cli web/index.css web/embed.css","build-static":"cp -a static/. web","build-misc":"cp -f *.md package-lock.json web","build-all":"for i in js css static misc; do npm run build-$i || return; done","build":"npm run clean && npm run set-prod && npm run build-all","rebuild":"npm run get && cp -f web/package-lock.json . && npm ci && npm run build","check":"npm run rebuild && cd web && git status && [ ! \\"$(git status -z)\\" ]","watch-index-css":"node-sass style/index.scss -wo web","watch-embed-css":"node-sass style/embed.scss -wo web","watch-css":"npm run watch-index-css & npm run watch-embed-css","watch-js":"webpack -d --watch","watch-static":"cp -fl static/*.* web","watch":"npm run watch-static && npm run watch-css & npm run watch-js","serve":"npm run set-dev && npm run watch & cd web && live-server --https=../node_modules/live-server-https","commit-web":"cd web && git ci -am \\"$message\\"","commit-main":"git ci -am \\"$message\\"","commit-all":"[ \\"$version\\" ] && npm run commit-web && npm run commit-main","commit-release":"export message=\\"Release $version\\" && npm run commit-all","tag-web":"cd web && git tag -s \\"$version\\" -m \\"$message\\"","tag-main":"git tag -s \\"$version\\" -m \\"$message\\"","tag-all":"[ \\"$version\\" -a \\"$message\\" ] && npm run tag-web && npm run tag-main","tag-release":"export version message=\\"Release $version\\" && npm run tag-all","push-release":"cd web && git push --follow-tags && cd .. && git push --follow-tags","make-release":"npm update && npm run build && npm run commit-release","publish-release":"npm run check && npm run tag-release && npm run push-release"},"devDependencies":{"@babel/core":"^7.10.5","@babel/plugin-syntax-dynamic-import":"^7.8.3","@babel/plugin-transform-runtime":"^7.10.5","@babel/preset-env":"^7.10.4","autoprefixer-cli":"^1.0.0","babel-eslint":"^10.1.0","babel-loader":"^8.1.0","eslint":"^5.16.0","live-server":"^1.2.1","live-server-https":"0.0.2","node-sass":"^4.14.0","prettier":"^1.19.1","webpack":"^4.44.0","webpack-cli":"^3.3.12"},"dependencies":{"@babel/runtime":"^7.10.5","@cosmic-plus/assets":"^1.6.0","@cosmic-plus/base":"^2.8.0","@cosmic-plus/ledger-wallet":"^2.4.0","@cosmic-plus/trezor-wallet":"^1.3.1","@cosmic-plus/tx-result":"^1.4.0","@kisbox/browser":"^1.0.0-beta.15","@kisbox/helpers":"^1.0.0-beta.10","@kisbox/model":"^1.0.0-beta.16","@kisbox/service-worker":"^1.0.0-beta.10","@kisbox/utils":"^1.0.0-beta.10","core-js":"^3.6.5","cosmic-lib":"^2.10.1","jasmine":"^3.6.1","qrcode":"^1.4.4"}}')}});
//# sourceMappingURL=worker.js.map