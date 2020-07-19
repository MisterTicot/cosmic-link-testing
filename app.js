(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(t,e,n){"use strict";class i{constructor(t){return"embed"===t.mode?new i.Embed(t):new i.Full(t)}}i.Embed=n(239),i.Full=n(293),t.exports=i},200:function(t,e,n){"use strict";const{type:i}=n(15),{StellarSdk:o}=n(90),s=n(240),r=n(241),c=n(201),a=n(242);r.protocols=new s(c),r.protocols.ingest(n(256));const u=new s(r);u.ingest(n(257));class h extends a{constructor(t){super(t),this.$import(t,["automaticRedirection","authenticators","authenticatorId","showQrCode"]);const e=this.authenticators.get("TestAccount");if(e.keypair=o.Keypair.fromSecret(t.testAccount),this.authenticator===e&&this.$trigger("authenticator"),!0===this.interrupt)throw"redirect";console.log("State:",this)}}const d=h.prototype;d.authenticators=u,d.$define("authenticator",["authenticators","authenticatorId"],(function(){return this.authenticators.get(this.authenticatorId)})),d.$define("interrupt",["automaticRedirection","cosmicLink","authenticator","target"],(function(){if("string"===i(this.target))return this.cosmicLink&&this.automaticRedirection?(this.sign(),!0):void 0})),d.$on("authenticator",(function(t,e){e&&e.onExit&&e.onExit()})),t.exports=h},201:function(t,e,n){"use strict";n(30);const{LiveObject:i}=n(31);t.exports=class extends i{constructor(t){super(),this.redirection=!0,this.textarea=!1,this.qrCode=!0,this.$pick(t,["id","redirection","textArea","qrCode","buttonText","getAddress","resolveRequest","requestToUri","requestToXdr","signRequest","onExit"])}async resolveRequest(t){return await t.lock(),t}}},208:function(t,e,n){"use strict";const{View:i}=n(52),o=n(258),s=n(259),r=n(263);t.exports=class extends i{constructor(t){super('\n<section class="SigningWidget">\n  <h2>Stellar Transaction Request</h2>\n  <hr>\n\n  <section>\n    <h3>Step 1: Check the Transaction</h3>\n    %txDescription\n  </section>\n  <hr>\n\n  <section>\n    <h3>Step 2: Select a Signing Method</h3>\n    %handlerForm\n  </section>\n  <hr>\n\n  <section>\n    <h3>Step 3: Sign the Transaction</h3>\n    %redirectionForm\n  </section>\n    '),this.txDescription=new o(t),this.handlerForm=new s(t),this.redirectionForm=new r(t)}}},239:function(t,e,n){"use strict";const{View:i}=n(52),o=n(200),s=n(208);t.exports=class extends i{constructor(t){super('\n<div class="CosmicLinkApp" %hidden>\n  <main>\n    <hr>\n    %signingWidget\n  </main>\n</div>\n    '),this.state=new o(t),this.signingWidget=new s(this.state),this.$pull("route",this.state,"query",t=>t||"")}}},240:function(t,e,n){"use strict";n(32);const{LiveArray:i}=n(31),{xeach:o,hide:s}=n(2);class r extends i{constructor(t){super(),s(this,"Class",t)}$store(t,e){e in t&&this.ingestJson(t[e]),this.$on("$change",()=>t[e]=this.toJson())}toObject(){return this.map(t=>t.toObject())}toJson(){return JSON.stringify(this.toObject())}ingest(t){o(t,(t,e)=>{const n=this.put(t);n.id||(n.id=e)})}ingestJson(t){this.ingest(JSON.parse(t))}put(t){const e=function(t,e){return e instanceof t?e:new t(e)}(this.Class,t);return this.delete(e.id),this.push(e),e}get(t){return this.find(e=>e.id===t)}delete(t){const e=this.findIndex(e=>e.id===t);-1!==e&&this.splice(e,1)}}const c=r.prototype;c.$on("$add",(function([t]){this.$listen(t,"$set",()=>{this.$trigger("$change")})})),c.$on("$remove",(function([t]){this.$ignore(t,"$set")})),t.exports=r},241:function(t,e,n){"use strict";const i=n(201);class o extends i{constructor(t){super(o.protocols.get(t.protocol)),delete this.id,this.$import(t,["id","name","protocol","url","federation","target","needSource","needNetwork"]),!this.buttonText&&this.redirection&&(this.buttonText="Go to "+this.name)}}t.exports=o},242:function(t,e,n){"use strict";n(30),n(16);const{CosmicLink:i,config:o}=n(180),s=n(207),{isEmbedded:r}=n(2),c=n(255);class a extends c{constructor(t){super(t)}open(){this.uri&&(!r||"new"!==this.authenticator.target&&"external"!==this.authenticator.target?location.replace(this.uri):(open(this.uri),window.parent.postMessage("close","*")))}async sign(){if(!this.authenticator.signRequest)return null;const t=await this.authenticator.signRequest(this.resolved);this.signed=t||this.resolved}}const u=a.prototype;u.$on(["open","cosmicLink"],(function(t,e){const n=e||this.cosmicLink;this.needSource&&!n.tdesc.source&&(this.lastAccountId=this.accountId)})),u.$define("resolved",["authenticator","accountId","network","horizon"],(async function(){if(!this.cosmicLink)return;if(this.needSource&&!this.lockSource&&!this.accountId)return new Error("Please set a source account");if(this.needNetwork){if(!this.network&&!this.lockNetwork)return new Error("Please set a network");if(!this.horizon)return new Error("Please set an Horizon address")}const t=new i(this.cosmicLink.query);o.source=this.accountId,o.network=this.network;try{return await this.authenticator.resolveRequest(t)}catch(e){throw e.cosmicLink=t,e}})),u.$on("authenticator",(function(){this.signed=null})),u.$define("uri",["resolved"],(function(){return this.resolved?this.authenticator.requestToUri?this.authenticator.requestToUri(this.resolved,this.authenticator):null:this.authenticator.uri})),u.$define("xdr",["resolved"],(function(){return this.resolved&&this.authenticator.requestToXdr?this.authenticator.requestToXdr(this.resolved,this.authenticator):null})),u.$define("action",["resolved"],(function(){return this.authenticator.signRequest?()=>this.sign():()=>this.open()})),u.$on("signed",(function(){this.signed&&(this.query=this.signed.query)})),u.$define("result",["signed"],(function(){return this.signed?s.forCosmicLink(this.signed).then(t=>(window.parent.postMessage("close","*"),t)):this.signed})),t.exports=a},255:function(t,e,n){"use strict";const{CosmicLink:i,resolve:o,config:s}=n(180),{LiveObject:r}=n(31);class c extends r{constructor(t){super(),this.network="public",this.accountId=null,this.$import(t,["network","horizon","accountId","lastAccountId","authenticator","query","cosmicLink"])}}const a=c.prototype;a.$on("network",(function(){const t=o.networkName(this.network);this.network===t||(this.network=t)})),a.$define("horizon",["network"],(function(){return o.horizon(this.network)||this.cosmicLink&&this.cosmicLink.tdesc.horizon||""})),a.$define("cosmicLink",["query"],(function(){return this.query&&this.query.length>1?new i(this.query):null})),a.$define("query",["cosmicLink"],(function(){return this.cosmicLink?this.cosmicLink.query:null})),a.$define("needSource",["authenticator"],(function(){if(this.authenticator)return!!this.authenticator.needSource})),a.$define("needNetwork",["authenticator"],(function(){if(this.authenticator)return!!this.authenticator.needNetwork})),a.$define("lockSource",["cosmicLink"],(function(){if(this.cosmicLink)return!!this.cosmicLink.tdesc.source})),a.$define("lockNetwork",["cosmicLink"],(function(){if(this.cosmicLink)return!!this.cosmicLink.tdesc.network})),a.$on("authenticator",(function(t,e){e.getAddress&&(this.accountId=null)})),a.$on(["authenticator","cosmicLink"],(function(){this.authenticator.getAddress?this.accountId=this.authenticator.getAddress():this.lockSource?this.accountId=this.cosmicLink.tdesc.source:this.accountId||(this.accountId=this.lastAccountId)})),a.$define("network",["cosmicLink"],(function(){return this.lockNetwork?this.cosmicLink.tdesc.network:this.network||"public"})),a.$on("horizon",(function(){if(this.horizon.length>4&&"http"!==this.horizon.substr(0,4))return void(this.horizon="https://".concat(this.horizon));const t=o.networkPassphrase(this.network);s.setupNetwork(this.network,this.horizon,t)})),t.exports=c},256:function(t,e,n){"use strict";n(30);const i=e,{friendbot:o}=n(90),s=n(180).withConfig({network:"test"});function r(){return Promise.all([n.e(4),n.e(2)]).then(n.t.bind(null,296,7)).then(t=>t.default)}function c(){return n.e(5).then(n.t.bind(null,313,7)).then(t=>(t.register("https://cosmic.link","mister.ticot@cosmic.plus"),t.default))}i.cosmiclink={resolveRequest:t=>t,requestToUri:(t,e)=>"".concat(e.url).concat(t.query)},i.ledgerwallet={buttonText:"Sign with Ledger Wallet",qrCode:!1,async getAddress(){const t=await r();return await t.connect(),t.publicKey},async signRequest(t){const e=await r();await e.sign(t.transaction)},async onExit(){(await r()).disconnect()}},i.trezorwallet={buttonText:"Sign with Trezor Wallet",qrCode:!1,async getAddress(){const t=await c();return await t.connect(),t.publicKey},async signRequest(t){const e=await c();await e.sign(t.transaction)},async onExit(){(await c()).disconnect()}},i.sep0007={requestToUri(t,e){const n=t.sep7;if("web+stellar:"!==e.url){const t=encodeURIComponent(n);return"".concat(e.url).concat(t)}return n}},i.stellarlab={async requestToUri(t,e){const n=encodeURIComponent(t.xdr);let i="".concat(n);if("public"===t.network||"test"===t.network)i+="&network=".concat(t.network);else{const e=encodeURIComponent(t.network),n=encodeURIComponent(t.horizon);i+="&network=custom&horizonURL=".concat(n),i+="&networkPassphrase=".concat(e)}return"".concat(e.url).concat(i)}},i.copy={redirection:!1,textarea:!0,requestToXdr:t=>t.xdr},i.testAccount={buttonText:"Sign with Testnet Account",qrCode:!1,async getAddress(){if(!this.keypair)return;const t=this.keypair.publicKey();return await s.resolve.isAccountEmpty(t)&&await o(t).catch(()=>null),t},signRequest(t){t.sign(this.keypair)}}},257:function(t,e,n){"use strict";const i=e;i.Keybase={name:"Keybase",protocol:"sep0007",url:"web+stellar:",federation:"keybase.io",target:"external",needSource:!0,needNetwork:"public"},i.LedgerWallet={name:"Ledger Wallet",protocol:"ledgerwallet",needSource:!0,needNetwork:!0},i.TrezorWallet={name:"Trezor Wallet",protocol:"trezorwallet",needSource:!0,needNetwork:!0},i.StellarAuthenticator={name:"Stellar Authenticator",protocol:"cosmiclink",url:"https://stellar-authenticator.org/"},i.Lobstr={name:"Lobstr Web (partial support)",protocol:"sep0007",url:"https://lobstr.co/?tx=",target:"new",needNetwork:"public"},i.StellarTerm={name:"StellarTerm (partial support)",protocol:"sep0007",url:"https://stellarterm.com/?tx=",target:"new",needNetwork:"public"},i.Sep7Wallet={name:"Sep-0007 Wallet",protocol:"sep0007",url:"web+stellar:",target:"external",needSource:!0,needNetwork:!0},i.StellarLaboratory={name:"Stellar Laboratory (Sign)",protocol:"stellarlab",url:"https://stellar.org/laboratory/#txsigner?xdr=",target:"new",needSource:!0,needNetwork:!0},i.StellarLaboratoryView={name:"Stellar Laboratory (View)",protocol:"stellarlab",url:"https://stellar.org/laboratory/#xdr-viewer?type=TransactionEnvelope&input=",target:"new",needSource:!0,needNetwork:!0},i.TestAccount={name:"Test Account",protocol:"testAccount",needSource:!0,needNetwork:"test"},i.CopyPasteXdr={name:"Copy/Paste XDR",protocol:"copy",needSource:!0,needNetwork:!0}},258:function(t,e,n){"use strict";const{View:i,html:o}=n(52),{type:s}=n(15),r=n(185);class c extends i{constructor(t){super('\n<div class="TxDescription cosmiclink_description">\n  %description\n  %status\n  %signers\n</div>\n    '),this.$import(t,["cosmicLink","result","resolved"])}}const a=c.prototype;a.$define("description",["cosmicLink"],(function(){return this.cosmicLink&&this.cosmicLink.tdesc.operations?this.cosmicLink.htmlDescription:"No transaction"})),a.$customDefine("status",["resolved"],(function(){if(!this.cosmicLink||this.cosmicLink.status)return;if(!(this.resolved instanceof Error))return;const t=this.resolved.cosmicLink;if(!t)return;const e=t.htmlDescription;return o.grab(".cosmiclib_statusNode",e)})),a.$customDefine("signers",["resolved"],(function(){if(!this.resolved||"object"===!s(this.resolved))return;const t=this.resolved,e=this.resolved.transaction;return e?r.signatures(t,e):void 0})),t.exports=c},259:function(t,e,n){"use strict";const{View:i}=n(52),o=n(260),s=n(261),r=n(262);t.exports=class extends i{constructor(t){super('\n<form class="HandlerForm" onsubmit="return false">\n  %handlerSelector\n  <div hidden=%not:needSource>%accountInput</div>\n  <div hidden=%not:needNetwork>%networkSelector</div>\n</form>\n    '),this.$import(t,["needSource","needNetwork"]),this.handlerSelector=new s(t),this.accountInput=new o(t),this.networkSelector=new r(t)}}},260:function(t,e,n){"use strict";n(16);const{View:i}=n(52),{type:o}=n(15),{copyContent:s}=n(2);class r extends i{constructor(t){super('\n<div class="AccountInput">\n  <input type="text" value=%user autocomplete="stellar-user"\n    placeholder="Username"\n    hidden=%not:federation>\n  <input type="text" value=%filter:accountId %onclick %readonly %placeholder\n    disabled=%notAvailable:accountId autocomplete="stellar-address"\n    $ref="accountIdInput" hidden=%federation>\n</div>\n      '),this.accountId="",this.$import(t,["cosmicLink","authenticator"]),this.$link(t,["accountId"])}onclick(){this.readonly&&s(this.$ref.accountIdInput)}}const c=r.prototype;c.$on(["user","federation"],(function(){this.federation&&(this.accountId=this.user?"".concat(this.user,"*").concat(this.federation):null)})),c.$on(["federation","accountId"],(function(){if(!this.federation||!this.accountId)return void(this.user=null);const t="\\*".concat(this.federation,"$"),e=new RegExp(t);this.accountId.match(e)?this.user=this.accountId.replace(e,""):(this.accountId=null,this.user=null)})),c.$define("federation",["authenticator"],(function(){return this.authenticator.federation})),c.$define("readonly",["cosmicLink","authenticator"],(function(){return!!(this.cosmicLink&&this.cosmicLink.tdesc.source||this.authenticator.getAddress)})),c.$customDefine("placeholder",["accountId"],(function(){switch(o(this.accountId)){case"promise":return"Connecting...";case"error":return this.accountId;default:return"Federated Address or Public Key"}})),r.helpers.filter=function(t){if("string"===o(t))return t},t.exports=r},261:function(t,e,n){"use strict";const{View:i,html:o}=n(52),{timeout:s}=n(2);class r extends i{constructor(t){super('\n<select class="HandlerSelector" value=%authenticatorId>\n  %toOption:...filteredHandlers\n</select>\n    '),this.$import(t,["authenticators","cosmicLink"]),this.$link(t,["authenticatorId"])}}const c=r.prototype;c.$define("filteredHandlers",["authenticators","cosmicLink"],(function(){const t=this.cosmicLink&&this.cosmicLink.tdesc.network;return t?this.authenticators.filter(e=>{const n=e.needNetwork;return"string"!=typeof n||n===t}):this.authenticators})),c.$on("authenticatorId",(function(t){t&&s(0).then(()=>{if(!this.$ref("select"))switch(this.cosmicLink.network){case"public":case null:this.authenticatorId="Keybase";break;case"test":this.authenticatorId="TestAccount";break;default:this.authenticatorId="StellarLaboratory"}})})),r.helpers.toOption=function(t){return o("option",{value:t.id},t.name)},t.exports=r},262:function(t,e,n){"use strict";const{View:i}=n(52);class o extends i{constructor(t){super('\n<div class="NetworkSelector">\n\n  <div>\n    <input type="radio" $group="networkSelector" value="public"\n      disabled=%lockNetwork $label="Public">\n    <input type="radio" $group="networkSelector" value="test"\n      disabled=%lockNetwork $label="Test">\n    <input type="radio" $group="networkSelector" value="custom"\n      disabled=%lockNetwork $label="Custom">\n  </div>\n\n  <div hidden=%not:isCustom>\n    <input type="text" value=%network disabled=%lockNetwork\n      placeholder="Network Passphrase or Name">\n    <input type="text" value=%horizon\n      placeholder="Horizon URL">\n  </div>\n  \n</div>\n    '),this.$import(t,["lockNetwork"]),this.$link(t,["network","horizon"])}}const s=o.prototype;s.$define("networkSelector",["network"],(function(){return"public"===this.network||"test"===this.network?this.network:"custom"})),s.$define("isCustom",["networkSelector"],(function(){return"custom"===this.networkSelector})),s.$on("networkSelector",(function(){this.isCustom||(this.network=this.networkSelector)})),t.exports=o},263:function(t,e,n){"use strict";const{View:i,html:o}=n(52),{type:s}=n(15),r=n(264),c=n(290),a=n(291),u=n(292);class h extends i{constructor(t){super('\n<form class="RedirectionForm" hidden=%not:showButton>\n  %redirectionButton\n  <div $ref="messageBox"></div>\n  %txResultView\n</form>\n\n\n<form hidden=%not:showTextarea>\n  %xdrArea\n</form>\n\n<div hidden=%not:showQrCodeSwitcher>\n  %qrCodeSwitcher\n</div>\n    '),this.$import(t,["cosmicLink","authenticator","result"]),this.redirectionButton=new c(t),this.xdrArea=new u(t),this.qrCodeSwitcher=new r(t)}}const d=h.prototype;d.$define("showButton",["authenticator"],(function(){return this.authenticator.requestToUri||this.authenticator.signRequest})),d.$define("showTextarea",["authenticator"],(function(){return this.authenticator.requestToXdr})),d.$define("showQrCodeSwitcher",["cosmicLink","authenticator"],(function(){return this.cosmicLink&&(this.authenticator.requestToUri||this.authenticator.requestToXdr)})),d.$customDefine("txResultView",["result"],(function(){return"error"===s(this.result)?o("span",{className:"error"},this.result.message):new a(this.result)})),t.exports=h},264:function(t,e,n){"use strict";const{View:i}=n(52),{type:o}=n(15),s=n(265);class r extends i{constructor(t){super('\n<form id="qrForm">\n  <input type="button" value="QR Code" onclick=%switch %disabled>\n  <div %hidden>%canvas</div>\n</form>\n  '),this.$import(t,["uri","xdr"]),this.$link(t,["showQrCode"]),this.canvas=new s(this)}switch(){this.showQrCode=!this.showQrCode}}const c=r.prototype;c.$define("target",["uri","xdr"],(function(){return this.uri||this.xdr})),c.$customDefine("disabled",["target"],(function(){return"error"===o(this.target)})),c.$define("hidden",["showQrCode","disabled"],(function(){return!this.showQrCode||this.disabled})),t.exports=r},265:function(t,e,n){"use strict";const i=n(266),{View:o}=n(52),{type:s}=n(15),{timeout:r}=n(2);class c extends o{constructor(t){super('\n<div class="QrCodeCanvas">\n  <span class="cosmiclib_loadingAnim" hidden=%notPending:target></span>\n  <canvas $ref="canvas" title=%target hidden=%not:target></canvas>\n</div>\n'),this.$import(t,["target"])}}c.prototype.$on("target",(function(){var t,e;"string"===s(this.target)?(t=this.$ref.canvas,e=this.target,r(1).then(()=>{const n=Math.max(3,6-Math.floor(Math.sqrt(e)/10));i.toCanvas(t,e,{margin:0,scale:n})})):this.$ref.canvas&&function(t){t.getContext("2d").clearRect(0,0,t.width,t.height)}(this.$ref.canvas)})),t.exports=c},290:function(t,e,n){"use strict";n(16);const{View:i}=n(52),{type:o}=n(15);class s extends i{constructor(t){super('\n<div class="RedirectionButton">\n  <input type="button" hidden=%not:cosmicLink value=%buttonText\n    onclick=%linkAction disabled=%disabled>\n  <input type="button" hidden=%has:cosmicLink value=%noLinkButtonText\n    onclick=%noLinkAction disabled=%noLinkDisabled>\n  <input type="checkbox" checked=%automaticRedirection\n    $label="Automatic redirection">\n</div>\n    '),this.$import(t,["authenticator","resolved","action","result","cosmicLink"]),this.$link(t,["automaticRedirection"])}linkAction(){this.action()}noLinkAction(){open(this.authenticator.url)}}const r=s.prototype;r.$define("noLinkButtonText",["authenticator"],(function(){if(this.authenticator.url){const t=this.authenticator.name.replace(/ \(.*/,"");return"Go to ".concat(t)}return"No transaction"})),r.$define("noLinkDisabled",["authenticator"],(function(){return!this.authenticator.url})),r.$customDefine("buttonText",["authenticator","resolved","result"],(function(){return"promise"===o(this.signed)?"Signing...":"promise"===o(this.result)?"Sending...":this.result?"Done":"error"===o(this.resolved)?this.resolved:"promise"===o(this.resolved)?"...":"Sign with ".concat(this.authenticator.name)})),r.$customDefine("disabled",["action","result"],(function(){return!this.action||"promise"===o(this.action)||"error"===o(this.action)||this.result})),t.exports=s},291:function(t,e,n){"use strict";n(30);const i=n(207),{View:o,html:s}=n(52);class r extends o{static async forCosmicLink(t){const e=await i.forCosmicLink(t);return new r(e)}static fromResponse(t){const e=new i(t);return new r(e)}constructor(t){super('\n<div class="TxResultView cosmiclink_description">\n\n  <span class=%state>%title</span>\n\n  <ul class="error" hidden=%validated>\n    %{toLi:...errors}\n  </ul>\n\n</div>\n    '),this.$import(t,["title","errors","validated"]),this.state=this.validated?"info":"error"}}r.helpers.toLi=t=>s("li",[t]),t.exports=r},292:function(t,e,n){"use strict";const{View:i}=n(52),{type:o}=n(15),{copyContent:s}=n(2);class r extends i{constructor(t){super("\n<textarea rows=3 readonly %value %onclick %placeholder disabled=%not:xdr>\n</textarea>\n    "),this.$import(t,["cosmicLink","xdr"])}onclick(){s(this.domNode)}}const c=r.prototype;c.$customDefine("placeholder",["cosmicLink","xdr"],(function(){return this.cosmicLink?"promise"===o(this.xdr)?"Pending...":void 0:"No transaction"})),c.$customDefine("value",["xdr"],(function(){if("string"===o(this.xdr)||"error"===o(this.xdr))return this.xdr})),t.exports=r},293:function(t,e,n){"use strict";const{sep7Utils:i}=n(180),{View:o,html:s}=n(52),r=n(200),c=n(294),a=n(295),u=n(208),{copyContent:h}=n(2);class d extends o{constructor(t){super('\n<div class="CosmicLinkApp">\n  <header onclick=%copyHeader>\n    <h1>%location</h1><span>%query</span>\n  </header>\n\n  <img id="logo" src="icons/512x512.png" alt="">\n\n  <main>\n    %navigation\n    <hr>\n    %selectedTabView\n  </main>\n\n  <footer>\n    <a id="registerSep7Handler" onclick=%registerSep7Handler\n        hidden=%not:isSep7Supported>\n      Register as web+stellar links handler (SEP-0007)\n    </a>\n  </footer>\n\n  %antiTamper\n</div>\n'),this.selectedTabId="sign",this.state=new r(t),this.$import(this.state,["query"]),this.$import(t,["selectedTabId"]),"null"===location.origin?this.location=location.pathname:this.location="".concat(location.origin).concat(location.pathname),this.navigation=new c([{id:"sign",title:"Sign",view:new u(this.state)},{id:"about",title:"About",view:s.grab("#about")}]),this.navigation.$link(this,["selectedTabView","selectedTabId"]),this.selectedTabView||(this.selectedTabId="sign"),this.isSep7Supported=i.isWebHandlerSupported(),this.antiTamper=new a(t)}copyHeader(){h(this.$ref(":scope > header"))}registerSep7Handler(){const t=location.href.split(/[?#]/,1)[0];i.registerWebHandler(t,"Cosmic.link")}}d.prototype.$define("route",["query","selectedTabId"],(function(){const t=this.selectedTabId,e="sign"===t&&this.query||"",n="sign"===t?"":"#".concat(this.selectedTabId);return"".concat(e).concat(n)})),t.exports=d},294:function(t,e,n){"use strict";const{View:i,html:o}=n(52),{LiveArray:s}=n(31);class r extends i{constructor(t=[]){super("\n<nav>%toNavigationLink:...tabs</nav>\n    "),this.tabs=s.from(t)}}r.helpers.toNavigationLink=function(t){const e=o("a",null,t.title);return e.onclick=()=>this.selectedTabId=t.id,this.$on("selectedTabId",n=>{e.className=n===t.id?"selected":""}),e},r.prototype.$define("selectedTabView",["selectedTabId"],(function(){const t=this.tabs.find(t=>t.id===this.selectedTabId);if(t)return t.view})),t.exports=r},295:function(t,e,n){"use strict";const{View:i}=n(52);class o extends i{constructor(t={}){super('<img class="AntiTamper" %src>'),this.$import(t,["baseUrl","set","antiTamperHash"])}}const s=o.prototype;s.baseUrl="https://robohash.org",s.set="set1",s.$define("src",["baseUrl","set","antiTamperHash"],(function(){return"".concat(this.baseUrl,"/").concat(this.antiTamperHash,"?set=").concat(this.set)})),o.makeHash=function(t=32){const e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";let n="";for(let i=0;i<t;i++){const t=Math.floor(Math.random()*e.length);n+=e.charAt(t)}return n},t.exports=o}}]);
//# sourceMappingURL=app.js.map