(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{123:function(e,t,n){"use strict";var o=n(0),r=n(1),c=n(31),a=n(26),i=n(32),s=n(2),u=n(33),l=n(124),d=n(4),h=n(134),f=function(e){function t(e){var n;return r(this,t),n=c(this,a(t).call(this,'\n<div class="cosmiclink_description">\n\n  <span class=%state>%title</span>\n\n  <ul class="error" hidden=%validated>\n    %{toLi:errors...}\n  </ul>\n\n</div>\n    ')),Object.assign(i(n),e),n.state=n.validated?"info":"error",n}return u(t,e),s(t,null,[{key:"forCosmicLink",value:function(e){var n;return o.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.awrap(h.forCosmicLink(e));case 2:return n=r.sent,r.abrupt("return",new t(n));case 4:case"end":return r.stop()}}))}},{key:"fromResponse",value:function(e){return new t(new h(e))}}]),s(t,[{key:"has",value:function(e){return!!e}},{key:"toLi",value:function(e){return d.create("li",null,e)}}]),t}(l);e.exports=f},136:function(e,t,n){"use strict";n(41).tamper.src="https://robohash.org/"+function(){if(localStorage.myHash)return localStorage.myHash;for(var e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",t="",n=0;n<32;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return localStorage.myHash=t,t}()},19:function(e,t,n){"use strict";n(8).contextIsWidget?n(87):n(64)},64:function(e,t,n){"use strict";var o,r,c=n(49),a=n(41),i=n(4),s=n(97),u=n(8),l=n(71).copyContent;o=n(98),(r=s.add("Sign",a.sign)).onSelect=function(){history.replaceState("",null,location.pathname+location.search),o.refresh()},o.init(),u.contextIsWidget||("null"===location.origin?a.websiteUrl.textContent=location.pathname:a.websiteUrl.textContent=location.origin+location.pathname,a.query.textContent=location.search,a.header.onclick=function(){return l(a.header)},s.add("About",a.about),c.sep7Utils.isWebHandlerSupported()?a.registerSep7Handler.onclick=function(){c.sep7Utils.registerWebHandler(location.href.split(/[?#]/,1)[0],"Cosmic.link")}:a.registerSep7Handler.textContent="",i.show(a.registerSep7Handler),n(136)),s.current===r?r.onSelect():s.current||s.select("#sign")},71:function(e,t,n){"use strict";var o=t,r=n(41),c=n(4);o.enableButton=function(e,t,n){"string"==typeof t&&(e.value=t),e.onclick=n,e.disabled=!1},o.disableButton=function(e,t){"string"==typeof t&&(e.value=t),e.disabled=!0},o.readWriteBox=function(e,t,n){"string"==typeof n&&(e.value=n),"string"==typeof t&&(e.placeholder=t),e.disabled=!1,e.readOnly=!1,e.onclick=void 0,e.style.cursor="initial"},o.readOnlyBox=function(e,t){"string"==typeof t&&(e.value=t),e.disabled=!1,e.readOnly=!0,e.onclick=function(){return o.copyContent(e)},e.style.cursor="pointer"},o.disableBox=function(e,t){o.readWriteBox(e,t,""),e.disabled=!0},o.display=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=t?"."+t:null,r=o?c.create("span",o,n):n;c.rewrite(e,c.create("span",o,r))},o.showIf=function(e,t){e?c.show(t):c.hide(t)},o.switchPage=function(e,t){c.append(r.body,e),c.append(r.main,t)},o.copyContent=function(e){if(c.copyContent(e)&&document.activeElement.value){var t=c.grab("#copied");t&&c.destroy(t);var n=c.create("span","#copied","Copied");e.parentNode.insertBefore(n,e),setTimeout((function(){n.hidden=!0}),3e3)}}},87:function(e,t,n){"use strict";var o,r,c,a,i,s,u=n(0),l=n(4),d=n(63),h=n(9),f=n(8);function p(e){var t={};return e.substr(1).split("&").forEach((function(e){var n=e.split("=",1)[0],o=e.substr(n.length+1);t[n]=decodeURIComponent(o)})),t}u.async((function(e){for(;;)switch(e.prev=e.next){case 0:o=document.referrer.split("/",3).join("/"),r=location.hash,c=p(r),(a=l.grab("meta[http-equiv='Content-Security-Policy']")).content=a.content.replace("style-src *  ;","\n    style-src 'self'\n      'sha256-UpnKee22eAiBMULu1lvaV7de7xOzTjdN7K/WZDBil10='\n      ".concat(o,";\n  ")),c.handler&&((i=h.byId[c.handler])?f.authenticator=i:console.error("Unknown handler: ".concat(c.handler))),c.qrcode&&(f.qrCode="false"!==c.qrcode),console.log("Valid handlers: ",Object.keys(h.byId)),s=[],c.css?s.push(d.css("".concat(o,"/").concat(c.css)).catch(console.error)):(s.push(d.css("widget.css").catch(console.error)),c["css+"]&&s.push(d.css("".concat(o,"/").concat(c["css+"])).catch(console.error))),Promise.all(s).then((function(){return l.show(document.body)})),n(64),location.hash=r;case 13:case"end":return e.stop()}}))},98:function(e,t,n){"use strict";var o=n(0),r=t,c=n(49),a=c.CosmicLink,i=n(41),s=n(5),u=n(4),l=n(99),d=n(6).timeout,h=n(123),f=n(9),p=n(8),k=n(71),w=k.enableButton,b=k.disableButton,g=k.readWriteBox,m=k.readOnlyBox,v=k.disableBox,x=k.display,y=k.showIf;r.init=function(){for(var e in p.query||u.rewrite(i.cosmiclink_description,"No transaction"),f.nodes.forEach((function(e){return u.append(i.authenticators,e)})),i.authenticators.value=p.authenticator.name,p.redirect&&(i.redirectionCheckbox.checked=!0),p.qrCode&&L.enable(),localStorage)if("network:"===e.substr(0,8)){var t=e.substr(8),n=c.resolve.networkPassphrase(t);c.config.setupNetwork(t,localStorage[e],n)}},r.refresh=function(){return o.async((function(e){for(;;)switch(e.prev=e.next){case 0:p.query?p.cosmicLink=new a(p.query):p.cosmicLink={tdesc:{}},B.init(),I.init(),p.cosmicLink.query&&S.refresh();case 4:case"end":return e.stop()}}))};var S={refresh:function(){if(!p.authenticator.needSource||p.accountId)if(!p.authenticator.needNetwork||!i.customNetwork.checked||p.horizon&&p.network){c.config.source=p.accountId,c.config.network=p.network;var e=p.transaction=p.authenticator.handle(p.cosmicLink);p.transaction.then((function(t){p.transaction===e&&I.refresh(t)})).catch((function(){p.transaction===e&&I.error(p.cosmicLink.status)}))}else I.error("Please fill custom network fields");else p.authenticator.getAccountId||I.error("Please set a source account")}},B={init:function(){x(i.accountMsgbox,""),p.authenticator=f[i.authenticators.value],localStorage.authenticator=p.authenticator.name,p.authenticator.needSource?C.init():C.disable(),p.authenticator.needNetwork?q.init():q.disable(),p.authenticator.refresh&&p.authenticator.refresh(r.refresh)}},C={disable:function(){u.hide(i.accountDiv),p.accountId=void 0},init:function(){var e,t;return o.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(u.show(i.accountDiv),p.authenticator.getAccountId){n.next=5;break}p.cosmicLink.tdesc.source?p.cosmicLink.tdesc.source.error?v(i.accountIdBox,p.cosmicLink.tdesc.source.error.message):(p.accountId=!0,m(i.accountIdBox,p.cosmicLink.tdesc.source)):(p.accountId=localStorage.accountId,g(i.accountIdBox,"Federated Address or Public Key",p.accountId)),n.next=26;break;case 5:return p.accountId=void 0,v(i.accountIdBox,"Connecting..."),e=p.authenticator,n.prev=8,n.next=11,o.awrap(p.authenticator.getAccountId());case 11:if(t=n.sent,p.authenticator===e){n.next=14;break}return n.abrupt("return");case 14:p.accountId=t,m(i.accountIdBox,t),S.refresh(),n.next=26;break;case 19:if(n.prev=19,n.t0=n.catch(8),p.authenticator===e){n.next=23;break}return n.abrupt("return");case 23:i.accountIdBox.placeholder="Error",x(i.accountMsgbox,"error",n.t0.message+"."),console.error(n.t0);case 26:case"end":return n.stop()}}),null,null,[[8,19]])}},q={disable:function(){u.hide(i.networkDiv),p.network="public",p.horizon=void 0},init:function(){switch(u.show(i.networkDiv),u.hide(i.customNetworkSetup),p.network=p.cosmicLink.tdesc.network||localStorage.networkSelector,p.horizon=void 0,p.network){case void 0:case"public":i.publicNetwork.checked=!0,i.networkSelector.scrollLeft=0;break;case"test":i.testNetwork.checked=!0;break;default:i.networkSelector.onscroll&&i.networkSelector.onscroll(),d(1).then((function(){return i.networkSelector.scrollLeft=999})),i.customNetwork.checked=!0,u.show(i.customNetworkSetup),p.network||(p.network=localStorage.customPassphrase),p.horizon=c.resolve.horizon(p.network||"")||p.cosmicLink.tdesc.horizon,i.customPassphrase.value=p.network||"",i.customHorizon.value=p.horizon||""}p.cosmicLink.tdesc.network&&q.lock()},lock:function(){m(i.customPassphrase),i.publicNetwork.disabled=!0,i.testNetwork.disabled=!0,i.customNetwork.disabled=!0},switch:function(e){localStorage.networkSelector=e,r.refresh()}};i.authenticators.onchange=function(){p.authenticator&&p.authenticator.onExit&&p.authenticator.onExit(),p.redirect=localStorage.redirect=!1,i.redirectionCheckbox.checked=!1,r.refresh()},i.accountIdBox.onchange=function(){p.accountId=localStorage.accountId=i.accountIdBox.value,r.refresh()},i.networkSelector.onscroll=function(){i.networkSelector.style.textOverflow="initial",i.networkSelector.onscroll=void 0},i.publicNetwork.onchange=function(){return q.switch("public")},i.testNetwork.onchange=function(){return q.switch("test")},i.customNetwork.onchange=function(){return q.switch("")},i.customPassphrase.onchange=function(){var e=c.resolve.networkName(i.customPassphrase.value);localStorage.customPassphrase=e,q.switch("")},i.customHorizon.onchange=function(){if(p.horizon=i.customHorizon.value,p.horizon&&"http"!==p.horizon.substr(0,4)&&(p.horizon="https://"+p.horizon),p.network&&p.horizon){var e=c.resolve.networkPassphrase(p.network);c.config.setupNetwork(p.network,p.horizon,e),localStorage["network:"+e]=p.horizon}p.network&&r.refresh()};var I={init:function(){if(I.display(""),y(p.authenticator.redirection,i.redirectionForm),y(p.authenticator.textarea,i.textareaForm),y(p.query&&p.authenticator.qrCode,i.qrForm),p.query)p.authenticator.redirection&&b(i.redirectionButton,"…"),p.authenticator.textarea&&v(i.xdrBox,"Computing..."),p.authenticator.qrCode&&L.loadingAnim();else if(p.authenticator.url){w(i.redirectionButton,p.authenticator.buttonText,(function(){return location.href=p.authenticator.url}))}else I.error("No transaction")},refresh:function(e){if(p.authenticator.redirection){w(i.redirectionButton,p.authenticator.buttonText,(function(){return I.click(e)}))}p.redirect&&!p.contextIsWidget&&i.redirectionButton.onclick(),p.authenticator.textarea&&m(i.xdrBox,e),p.authenticator.qrCode&&L.refresh(e)},error:function(e){b(i.redirectionButton,e),v(i.xdrBox,e),u.clear(i.qrCode)},click:function(e){var t;return o.async((function(n){for(;;)switch(n.prev=n.next){case 0:if("string"!=typeof e){n.next=4;break}p.contextIsWidget||s.isEmbedded&&"new"===p.authenticator.target?(open(e,"_blank"),window.parent.postMessage("close","*")):s.isEmbedded&&"external"===p.authenticator.target?(open(e),window.parent.postMessage("close","*")):location.replace(e),n.next=20;break;case 4:if("function"!=typeof e){n.next=20;break}return x(i.redirectionMsgbox,"info","Waiting for confirmation..."),i.redirectionButton.disabled=!0,n.prev=7,n.next=10,o.awrap(e());case 10:return t=n.sent,n.next=13,o.awrap(I.sendTransaction(t));case 13:n.next=20;break;case 15:n.prev=15,n.t0=n.catch(7),console.error(n.t0.response||n.t0),I.display("error",n.t0.message.replace(/\.$/,"")),i.redirectionButton.disabled=!1;case 20:case"end":return n.stop()}}),null,null,[[7,15]])},sendTransaction:function(){var e;return o.async((function(t){for(;;)switch(t.prev=t.next){case 0:return I.display("info","Sending to the network..."),history.replaceState({},"",p.cosmicLink.query),q.lock(),i.query&&(i.query.textContent=p.cosmicLink.query),window.scrollTo(0,document.body.scrollHeight),t.next=7,o.awrap(h.forCosmicLink(p.cosmicLink));case 7:e=t.sent,I.display("",e),e.validated&&s.isEmbedded&&parent.postMessage("close","*"),document.referrer?w(i.redirectionButton,"Close",(function(){return history.back()})):i.redirectionButton.value="Done";case 11:case"end":return t.stop()}}))},display:function(e,t){x(i.redirectionMsgbox,e,t)}},L={loadingAnim:function(){u.rewrite(i.qrCode,u.create("span",".cosmiclib_loadingAnim"))},refresh:function(e){var t,n;return o.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.awrap(d(0));case 2:if(p.authenticator.qrCode&&e){r.next=4;break}return r.abrupt("return");case 4:t=u.create("canvas",{title:e}),n=Math.max(3,6-Math.floor(Math.sqrt(e)/10)),l.toCanvas(t,e,{margin:0,scale:n}),u.rewrite(i.qrCode,t);case 8:case"end":return r.stop()}}))},switch:function(){p.qrCode=localStorage.QR=!p.qrCode,p.qrCode?L.enable():L.disable()},enable:function(){i.qrButton.className="enabled",u.show(i.qrCode)},disable:function(){i.qrButton.className=void 0,u.hide(i.qrCode)}};i.redirectionButton.onclick=I.click,i.qrButton.onclick=L.switch,i.redirectionCheckbox.onchange=function(){p.redirect=localStorage.redirect=!p.redirect}}}]);
//# sourceMappingURL=app.js.map