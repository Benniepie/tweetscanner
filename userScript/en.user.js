// ==UserScript==
// @name         Shadowban Scanner (en)
// @namespace    https://github.com/Robot-Inventor/shadowban-scanner/
// @version      1.1.1
// @description  A browser extension that detects shadowbans on Twitter.
// @author       Robot-Inventor (ろぼいん / @keita_roboin)
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// @match        https://tweetdeck.twitter.com/*
// @icon         https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/src/image/icon128.png
// @downloadURL  https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/userScript/en.user.js
// @updateURL    https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/userScript/en.user.js
// @grant        none
// ==/UserScript==

(()=>{"use strict";var e={402:(e,t,s)=>{s.d(t,{Z:()=>i});var n=s(213),a=s.n(n),r=s(645),o=s.n(r)()(a());o.push([e.id,".shadowban-scanner-message {\n    padding: 1em;\n    border-radius: 0.5em;\n    background: rgb(255, 0, 0, 0.2);\n    margin: 1em 0;\n}\n\n.shadowban-scanner-message-no-problem {\n    background: rgb(0, 255, 0, 0.2);\n}\n\n.shadowban-scanner-message button {\n    cursor: pointer;\n    color: inherit;\n    border: none;\n    background: none;\n}\n\n.shadowban-scanner-message pre {\n    font-family: inherit;\n    line-height: inherit;\n    margin: 0.5rem 0 0 0;\n}\n",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",n=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),n&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),n&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,n,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),s&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=s):d[2]=s),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},213:e=>{e.exports=function(e){return e[1]}},962:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});var n=s(379),a=s.n(n),r=s(795),o=s.n(r),i=s(569),c=s.n(i),l=s(565),d=s.n(l),u=s(216),w=s.n(u),p=s(589),h=s.n(p),m=s(402),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=w(),a()(m.Z,g);const b=m.Z&&m.Z.locals?m.Z.locals:void 0},379:e=>{var t=[];function s(e){for(var s=-1,n=0;n<t.length;n++)if(t[n].identifier===e){s=n;break}return s}function n(e,n){for(var r={},o=[],i=0;i<e.length;i++){var c=e[i],l=n.base?c[0]+n.base:c[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var w=s(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==w)t[w].references++,t[w].updater(p);else{var h=a(p,n);n.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function a(e,t){var s=t.domAPI(t);return s.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;s.update(e=t)}else s.remove()}}e.exports=function(e,a){var r=n(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var i=s(r[o]);t[i].references--}for(var c=n(e,a),l=0;l<r.length;l++){var d=s(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},569:e=>{var t={};e.exports=function(e,s){var n=function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}t[e]=s}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(s)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,s)=>{e.exports=function(e){var t=s.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(s){!function(e,t,s){var n="";s.supports&&(n+="@supports (".concat(s.supports,") {")),s.media&&(n+="@media ".concat(s.media," {"));var a=void 0!==s.layer;a&&(n+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),n+=s.css,a&&(n+="}"),s.media&&(n+="}"),s.supports&&(n+="}");var r=s.sourceMap;r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,s)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},36:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Color=void 0,t.Color=class{constructor(){}get textColor(){const e=document.querySelector("[data-testid='User-Name'] div:first-child span, [data-testid='UserName'] div:first-child span");if(!e)throw new Error("Failed to get user name span of tweet");const{color:t}=getComputedStyle(e);return t}}},564:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Core=void 0;const n=s(296),a=s(915),r=s(338);s(962),t.Core=class{constructor(e){const t=new MutationObserver((()=>{const t=document.querySelectorAll(`[data-testid="tweet"]:not([${a.CHECKED_DATA_ATTRIBUTE}]`);for(const s of t)new r.TweetChecker(s).run(),e();const s=document.querySelector(`:not([data-testid="tweet"]) [data-testid="UserName"]:not([${a.CHECKED_DATA_ATTRIBUTE}])`);s&&(new n.ProfileChecker(s).run(),e())})),s=new MutationObserver((()=>{const e=document.querySelector("main");e&&(s.disconnect(),t.observe(e,{subtree:!0,childList:!0}))}));s.observe(document.body,{subtree:!0,childList:!0})}}},552:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageElement=void 0;const n=s(915);t.MessageElement=class{constructor(e,t,s){if(this.div=document.createElement("div"),this.div.classList.add(n.MESSAGE_CLASS_NAME),this.div.dataset.messageType=s,this.div.style.color=t,"tweet"===e){const e=document.createElement("pre");e.style.display="none",this.div.appendChild(e);const t=document.createElement("button");t.addEventListener("click",(()=>{e.style.display="block",t.remove()})),this.div.appendChild(t)}}set messageType(e){this.div.dataset.messageType=e}get element(){return this.div}}},531:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageType=void 0,t.MessageType=class{constructor(){}fromTweetStatus(e){return e.user.possiblySensitive||e.tweet.possiblySensitive?e.user.possiblySensitive?e.tweet.possiblySensitive?e.tweet.possiblySensitiveEditable?"accountShadowbannedAndTweetFlaggedAsSensitive":"accountAndTweetShadowbanned":"accountShadowbanned":e.tweet.possiblySensitiveEditable?"tweetFlaggedAsSensitive":"tweetShadowbanned":"tweetNoProblem"}}},296:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileChecker=void 0;const n=s(36),a=s(552),r=s(204),o=s(915);t.ProfileChecker=class{constructor(e){this.userName=e}run(){this.userName.setAttribute(o.CHECKED_DATA_ATTRIBUTE,"true");const e=new r.ProfileReactProps(this.userName).get();if(!Boolean(e.user.possibly_sensitive))return;const t=(new n.Color).textColor,s=new a.MessageElement("account",t,"accountShadowbanned"),i=document.querySelector("[data-testid='UserDescription']");if(!i)throw new Error("Failed to get user description of profile");i.insertAdjacentElement("afterend",s.element)}}},204:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileReactProps=t.TweetReactProps=void 0;class s{constructor(e){this.element=e,this.reactPropsName=Object.getOwnPropertyNames(e).filter((e=>e.startsWith("__reactProps$")))[0]}get(){return this.element[this.reactPropsName].children[1].props}}t.TweetReactProps=class{constructor(e){this.tweet=e}get(){return new s(this.tweet).get().retweetWithCommentLink.state.quotedStatus}},t.ProfileReactProps=class{constructor(e){this.userName=e}get(){return new s(this.userName).get()}}},338:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TweetChecker=void 0;const n=s(36),a=s(552),r=s(531),o=s(204),i=s(915);t.TweetChecker=class{constructor(e){this.tweet=e}run(){this.tweet.setAttribute(i.CHECKED_DATA_ATTRIBUTE,"true");const e=this.tweet.querySelector("div[role='group'][id]");if(!e)throw new Error("Failed to get menu bar of tweet");const t=new o.TweetReactProps(e).get(),s={tweet:{possiblySensitive:t.possibly_sensitive,possiblySensitiveEditable:t.possibly_sensitive_editable,isTweetByCurrentUser:null===t.user.following},user:{possiblySensitive:t.user.possibly_sensitive}},c=(new n.Color).textColor,l=new a.MessageElement("tweet",c);s.tweet.isTweetByCurrentUser&&l.element.classList.add(i.CURRENT_USERS_TWEET_CLASS_NAME);const d=(new r.MessageType).fromTweetStatus(s);l.messageType=d,"tweetNoProblem"===d&&l.element.classList.add("shadowban-scanner-message-no-problem"),e.insertAdjacentElement("beforebegin",l.element)}}},294:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_SETTINGS=void 0,t.DEFAULT_SETTINGS={alwaysDetailedView:!1,showMessageInAllTweets:!1,enableOnlyForCurrentUsersTweets:!1}},915:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MESSAGE_CLASS_NAME=t.CURRENT_USERS_TWEET_CLASS_NAME=t.EVENT_GENERATOR_ID=t.CHECKED_DATA_ATTRIBUTE=void 0,t.CHECKED_DATA_ATTRIBUTE="data-shadowban-checked",t.EVENT_GENERATOR_ID="shadowban-scanner-event-generator",t.CURRENT_USERS_TWEET_CLASS_NAME="tweet-by-current-user",t.MESSAGE_CLASS_NAME="shadowban-scanner-message"},34:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TextFlow=void 0;const n=s(915);t.TextFlow=class{constructor(e){if(!e.showMessageInAllTweets){const e=document.createElement("style");e.textContent=".shadowban-scanner-message-no-problem { display: none; }",document.body.appendChild(e)}if(e.enableOnlyForCurrentUsersTweets){const e=document.createElement("style");e.textContent=`.${n.MESSAGE_CLASS_NAME}:not(.${n.CURRENT_USERS_TWEET_CLASS_NAME}) {display: none;}`,document.body.appendChild(e)}this.allWaysDetailedView=e.alwaysDetailedView,this.translator=e.translator}run(){const e=document.querySelector(".shadowban-scanner-message:not(.text-inserted");if(!e)return;e.classList.add("text-inserted");const{messageType:t}=e.dataset;if(!t)throw new Error("Failed to get message type");const s=this.translator(t);e.insertAdjacentText("afterbegin",s);const n=e.querySelector("button");if(!n)return;this.allWaysDetailedView?n.click():n.textContent=this.translator("showMore");const a=e.querySelector("pre");a&&(a.textContent=this.translator(`${t}StatusMessage`))}}},798:function(e,t,s){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(s(533));new(s(651).UserScriptBase)(a.default)},651:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UserScriptBase=void 0;const n=s(564),a=s(34),r=s(294);t.UserScriptBase=class{constructor(e){const t={showMessageInAllTweets:r.DEFAULT_SETTINGS.showMessageInAllTweets,alwaysDetailedView:r.DEFAULT_SETTINGS.alwaysDetailedView,enableOnlyForCurrentUsersTweets:r.DEFAULT_SETTINGS.enableOnlyForCurrentUsersTweets,translator:t=>e[t].message},s=new a.TextFlow(t);new n.Core((()=>{s.run()}))}}},533:e=>{e.exports=JSON.parse('{"manifest_description":{"message":"A browser extension that detects shadowbans on Twitter."},"accountShadowbanned":{"message":"This user may be shadowbanned, so this tweet may not appear in search results."},"accountShadowbannedStatusMessage":{"message":"🚫Account may be shadowbanned.\\n✅Tweet is not flagged as sensitive.\\n✅Tweet has no age limit.\\n🚫Tweet may not appear in search results."},"accountShadowbannedAndTweetFlaggedAsSensitive":{"message":"This user may be shadowbanned so this tweet may not appear in search results. Also, this tweet is flagged as sensitive."},"accountShadowbannedAndTweetFlaggedAsSensitiveStatusMessage":{"message":"🚫Account may be shadowbanned.\\n🚫Tweet is flagged as sensitive.\\n✅Tweet has no age limit.\\n🚫Tweet may not appear in search results."},"accountAndTweetShadowbanned":{"message":"This tweet is age-restricted and cannot be viewed by users under the age of 18 or who are not logged in. This tweet may not appear in search results."},"accountAndTweetShadowbannedStatusMessage":{"message":"🚫Account may be shadowbanned.\\n🚫Tweet is flagged as sensitive.\\n🚫Tweet has age limit.\\n🚫Tweet may not appear in search results."},"tweetFlaggedAsSensitive":{"message":"This tweet is flagged as sensitive and will not appear in search results depending on the viewer\'s preferences."},"tweetFlaggedAsSensitiveStatusMessage":{"message":"✅Account is not shadowbanned.\\n🚫Tweet is flagged as sensitive.\\n✅Tweet has no age limit.\\n⚠️Tweet may not appear in search results depending on viewer preferences."},"tweetShadowbanned":{"message":"This tweet is age-restricted and cannot be viewed by users under the age of 18 or who are not logged in. This tweet may not appear in search results."},"tweetShadowbannedStatusMessage":{"message":"✅Account is not shadowbanned.\\n🚫Tweet is flagged as sensitive.\\n🚫Tweet has age limit.\\n🚫Tweet may not appear in search results."},"tweetNoProblem":{"message":"No problems was found with this tweet."},"tweetNoProblemStatusMessage":{"message":"✅Account is not shadowbanned.\\n✅Tweet is not flagged as sensitive.\\n✅Tweet has no age limit.\\n✅Tweet will appear in search results."},"showMore":{"message":"▶show more"},"settingsAlwaysDetailedView":{"message":"Always display detailed information"},"settingsShowMessageInAllTweets":{"message":"Show check results in all tweets"},"settingsEnableOnlyForCurrentUsersTweets":{"message":"Display check results only in your own tweets (beta)"},"settingsPleaseReload":{"message":"Please reload Twitter once you have changed the settings."}}')}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={id:n,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nc=void 0,s(798)})();