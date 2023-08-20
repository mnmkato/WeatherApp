(()=>{var t={426:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([t.id,"body{\n    margin: 0;\n    height: 100vh;\n    background-color: bisque;\n}\n.container{\n    display: flex;\n    grid-template-columns: repeat(3,1fr);\n    align-items: flex-start;\n    justify-content: space-between;\n    background-color: aqua;\n    height: 70%\n}\n\n.timediv{\n    padding: 1rem;\n    margin: 1rem;\n    font-weight: bold;\n}\n.searchDiv{\n    margin: 1rem;\n    padding: 1rem;\n    min-width: fit-content;\n    background-color: green;\n}\n.locationdiv{\n    margin: 1rem;\n    padding: 1rem;\n    text-align: right;\n}\n.locationdiv>h1{\n    margin: 0;\n}\n@media (max-width: 500px) {\n    .container {\n        flex-direction: column;    \n        align-items: center;\n    }\n    .locationdiv{\n        text-align: center;\n    }\n}\n.datadiv{\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(150px,1fr));\n    width: 100%;\n    background-color: greenyellow;\n}\n.div{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 1rem;\n    padding: 1rem;\n    background-color: grey;\n}",""]);const s=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);n&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},301:(t,e,r)=>{r(147),t.exports=self.fetch.bind(self)},379:t=>{"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],u=n.base?c[0]+n.base:c[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var f=r(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var p=o(h,n);n.byIndex=s,e.splice(s,0,{identifier:l,updater:p,references:1})}a.push(l)}return a}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=r(i[a]);e[s].references--}for(var c=n(t,o),u=0;u<i.length;u++){var d=r(i[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:t=>{"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},147:(t,e,r)=>{"use strict";r.r(e),r.d(e,{DOMException:()=>E,Headers:()=>d,Request:()=>b,Response:()=>g,fetch:()=>x});var n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==r.g&&r.g||{},o={searchParams:"URLSearchParams"in n,iterable:"Symbol"in n&&"iterator"in Symbol,blob:"FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in n,arrayBuffer:"ArrayBuffer"in n};if(o.arrayBuffer)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(t){return t&&i.indexOf(Object.prototype.toString.call(t))>-1};function s(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function c(t){return"string"!=typeof t&&(t=String(t)),t}function u(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o.iterable&&(e[Symbol.iterator]=function(){return e}),e}function d(t){this.map={},t instanceof d?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){if(2!=t.length)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+t.length);this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function l(t){if(!t._noBody)return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function f(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function h(t){var e=new FileReader,r=f(e);return e.readAsArrayBuffer(t),r}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:o.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():o.arrayBuffer&&o.blob&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||a(t))?this._bodyArrayBuffer=p(t):this._bodyText=t=Object.prototype.toString.call(t):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer)return l(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer));if(o.blob)return this.blob().then(h);throw new Error("could not read as ArrayBuffer")},this.text=function(){var t,e,r,n,o,i=l(this);if(i)return i;if(this._bodyBlob)return t=this._bodyBlob,r=f(e=new FileReader),o=(n=/charset=([A-Za-z0-9_-]+)/.exec(t.type))?n[1]:"utf-8",e.readAsText(t,o),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(t,e){t=s(t),e=c(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},d.prototype.delete=function(t){delete this.map[s(t)]},d.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},d.prototype.set=function(t,e){this.map[s(t)]=c(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),u(t)},d.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),u(t)},d.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),u(t)},o.iterable&&(d.prototype[Symbol.iterator]=d.prototype.entries);var m=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function b(t,e){if(!(this instanceof b))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,i=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,i||null==t._bodyInit||(i=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(o=(r=e.method||this.method||"GET").toUpperCase(),m.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal||function(){if("AbortController"in n)return(new AbortController).signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(i),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var a=/([?&])_=[^&]*/;a.test(this.url)?this.url=this.url.replace(a,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function v(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function g(t,e){if(!(this instanceof g))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},y.call(b.prototype),y.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:200,statusText:""});return t.status=0,t.type="error",t};var w=[301,302,303,307,308];g.redirect=function(t,e){if(-1===w.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})};var E=n.DOMException;try{new E}catch(t){(E=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),E.prototype.constructor=E}function x(t,e){return new Promise((function(r,i){var a=new b(t,e);if(a.signal&&a.signal.aborted)return i(new E("Aborted","AbortError"));var u=new XMLHttpRequest;function l(){u.abort()}if(u.onload=function(){var t,e,n={status:u.status,statusText:u.statusText,headers:(t=u.getAllResponseHeaders()||"",e=new d,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();try{e.append(n,o)}catch(t){console.warn("Response "+t.message)}}})),e)};n.url="responseURL"in u?u.responseURL:n.headers.get("X-Request-URL");var o="response"in u?u.response:u.responseText;setTimeout((function(){r(new g(o,n))}),0)},u.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},u.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},u.onabort=function(){setTimeout((function(){i(new E("Aborted","AbortError"))}),0)},u.open(a.method,function(t){try{return""===t&&n.location.href?n.location.href:t}catch(e){return t}}(a.url),!0),"include"===a.credentials?u.withCredentials=!0:"omit"===a.credentials&&(u.withCredentials=!1),"responseType"in u&&(o.blob?u.responseType="blob":o.arrayBuffer&&(u.responseType="arraybuffer")),e&&"object"==typeof e.headers&&!(e.headers instanceof d||n.Headers&&e.headers instanceof n.Headers)){var f=[];Object.getOwnPropertyNames(e.headers).forEach((function(t){f.push(s(t)),u.setRequestHeader(t,c(e.headers[t]))})),a.headers.forEach((function(t,e){-1===f.indexOf(e)&&u.setRequestHeader(e,t)}))}else a.headers.forEach((function(t,e){u.setRequestHeader(e,t)}));a.signal&&(a.signal.addEventListener("abort",l),u.onreadystatechange=function(){4===u.readyState&&a.signal.removeEventListener("abort",l)}),u.send(void 0===a._bodyInit?null:a._bodyInit)}))}x.polyfill=!0,n.fetch||(n.fetch=x,n.Headers=d,n.Request=b,n.Response=g)}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nc=void 0,(()=>{"use strict";function t(t,e){fetch(`https://api.weatherapi.com/v1/current.json?key=fd064e880a3f4e2886292005231808&q=${t}`,{mode:"cors"}).then((t=>t.json())).then((t=>{e(t)}))}r(301);var e=r(379),n=r.n(e),o=r(795),i=r.n(o),a=r(569),s=r.n(a),c=r(565),u=r.n(c),d=r(216),l=r.n(d),f=r(589),h=r.n(f),p=r(426),y={};y.styleTagTransform=h(),y.setAttributes=u(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=l(),n()(p.Z,y),p.Z&&p.Z.locals&&p.Z.locals;const m=document.querySelector(".container"),b=document.querySelector(".dataContainer");t("Kampala",(function e(r){m.innerHTML="",b.innerHTML="",function(t){const e=document.createElement("div");e.classList.add("timediv"),e.textContent=t,m.appendChild(e)}(r.location.localtime),function(){const r=document.createElement("div");r.classList.add("searchDiv"),m.appendChild(r);const n=document.createElement("form");r.appendChild(n);const o=document.createElement("input");o.setAttribute("type","search"),n.appendChild(o);const i=document.createElement("button");i.textContent="Search",i.setAttribute("type","submit"),n.appendChild(i),n.addEventListener("submit",(r=>{r.preventDefault(),t(o.value,e)}))}(),function(t,e){const r=document.createElement("div");r.classList.add("locationdiv"),m.appendChild(r);const n=document.createElement("h1");n.textContent=t,r.appendChild(n);const o=document.createElement("p");o.textContent=e,r.appendChild(o)}(r.location.name,r.location.country);const n=document.createElement("div");n.classList.add("datadiv"),b.appendChild(n);const o=function(t,e){const r=document.createElement("div");r.classList.add("div");const n=document.createElement("img");n.src=t,r.appendChild(n);const o=document.createElement("p");return o.textContent=e,r.appendChild(o),r}(r.current.condition.icon,r.current.condition.text);n.appendChild(o);const i=function(t){const e=document.createElement("div");e.classList.add("div");const r=document.createElement("h1");return r.textContent=t+"°",e.appendChild(r),e}(r.current.temp_c);n.appendChild(i)}))})()})();