!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.app=t():e.app=t()}(self,(function(){return(()=>{"use strict";var e,t={840:(e,t,n)=>{n.r(t),n.d(t,{BulkActions:()=>h,show_management_search:()=>v});var r=n(169),o=n(442),a=n.n(o);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i,l,u=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}(document.querySelectorAll(".flaskbb-editor"));try{for(u.s();!(i=u.n()).done;){l=i.value,new(a())({autoDownloadFontAwesome:!1,element:l,forceSync:!0,spellChecker:!1,sideBySideFullscreen:!1,status:!1})}}catch(e){u.e(e)}finally{u.f()}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw a}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=document.querySelector("meta[name=csrf-token]").content;function v(){var e=document.querySelector(".search-form");"none"===window.getComputedStyle(e).display?(e.style.display="block",e.querySelector("input").focus()):e.style.display="none"}function m(e){var t=document.getElementById("flashed-messages"),n='<div class="alert alert-'+e.category+'">';"success"==e.category?n+='<span class="fas fa-ok-sign"></span>&nbsp;':"error"==e.category?n+='<span class="fas fa-exclamation-sign"></span>&nbsp;':n+='<span class="fas fa-info-sign"></span>&nbsp;',n+='<button type="button" class="close" data-dismiss="alert">&times;</button>'+e.message+"</div>",t.insertAdjacentHTML("beforeend",n)}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"execute",value:function(e){var t=document.querySelectorAll("input.action-checkbox:checked"),n={ids:[]};if(0===t.length)return!1;var r,o=f(t);try{for(o.s();!(r=o.n()).done;){var a=r.value;n.ids.push(a.value)}}catch(e){o.e(e)}finally{o.f()}return b(e,n),!1}},{key:"confirm",value:function(e,t){document.getElementById("confirmModal").querySelector(".confirmBtn").addEventListener("click",(function(n){n.preventDefault(),confirmModal.hide(),b(e,t)}),{once:!0})}}])&&p(t.prototype,n),e}();function b(e,t){fetch(e,{method:"POST",headers:{"X-CSRFToken":y,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){m(e);var t,n=f(e.data);try{for(n.s();!(t=n.n()).done;){var r=t.value,o="#".concat(r.type,"-").concat(r.id),a=document.querySelector(o);if(r.reverse){a.setAttribute("action",r.reverse_url);var c="";"ban"==r.reverse?c='<span class="fa fa-flag text-success" data-toggle="tooltip" data-placement="top" title="'+r.reverse_name+'"></span>':"unban"==r.reverse&&(c='<span class="fa fa-flag text-warning" data-toggle="tooltip" data-placement="top" title="'+r.reverse_name+'"></span>'),a.querySelector("button").innerHTML=c}else"delete"==r.type&&a.parentNode.parentNode.remove()}}catch(e){n.e(e)}finally{n.f()}})).catch((function(e){m(e)}))}document.addEventListener("DOMContentLoaded",(function(e){var t;document.querySelectorAll(".quote-btn").forEach((function(e){return e.addEventListener("click",(function(e){e.preventDefault();var t=e.target.dataset.postId,n="undefined"!==("undefined"==typeof FORUM_URL_PREFIX?"undefined":s(FORUM_URL_PREFIX))?FORUM_URL_PREFIX:"",r="".concat(n,"post/").concat(t,"/raw"),o=document.querySelector(".flaskbb-editor");fetch(r).then((function(e){return e.text()})).then((function(e){o.value=e,o.selectionStart=o.selectionEnd=o.value.length,o.scrollTop=o.scrollHeight,window.location.href="#content"})).catch((function(e){console.error("something bad happened",e)}))}))})),document.querySelectorAll(".action-checkall").forEach((function(e){return e.addEventListener("change",(function(e){for(var t=document.querySelectorAll("input.action-checkbox"),n=0;n<t.length;n++)t[n].checked=e.target.checked}))})),document.querySelectorAll("time").forEach((function(e){var t=new Date(e.getAttribute("datetime")),n={weekday:void 0,era:void 0,year:"numeric",month:"short",day:"numeric",second:void 0};"date-only"==e.dataset.what_to_display?(n.hour=void 0,n.minute=void 0):(n.hour="2-digit",n.minute="2-digit"),e.textContent=t.toLocaleString(void 0,n)})),t=document.body,twemoji.parse(t,{callback:function(e,t,n){switch(e){case"a9":case"ae":case"2122":return!1}return"".concat(t.base,t.size,"/",e,t.ext)},folder:"svg",ext:".svg"})}));var g,S=document.getElementById("confirmModal");S&&S.addEventListener("show.bs.modal",(function(e){var t=r.u_.getInstance(S),n=e.relatedTarget.closest("form");S.querySelector(".confirmBtn").addEventListener("click",(function(e){e.preventDefault(),n.checkValidity()?(n.submit(),t.hide()):(t.hide(),n.reportValidity())}),{once:!0})})),[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e){return new r.u(e)})),(g=n(649)).keys().map(g)},611:(e,t,n)=>{e.exports=n.p+"avatar.svg"},897:(e,t,n)=>{e.exports=n.p+"avatar100x100.png"},796:(e,t,n)=>{e.exports=n.p+"avatar150x150.png"},896:(e,t,n)=>{e.exports=n.p+"avatar400x400.png"},916:(e,t,n)=>{e.exports=n.p+"avatar80x80.png"},989:(e,t,n)=>{e.exports=n.p+"favicon.ico"}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var c=1/0;for(s=0;s<e.length;s++){for(var[n,o,a]=e[s],i=!0,l=0;l<n.length;l++)(!1&a||c>=a)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(i=!1,a<c&&(c=a));if(i){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,o,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/static/",(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[c,i,l]=n,u=0;for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(l)var s=l(r);for(t&&t(n);u<c.length;u++)a=c[u],r.o(e,a)&&e[a]&&e[a][0](),e[c[u]]=0;return r.O(s)},n=self.webpackChunk_name_=self.webpackChunk_name_||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[216],(()=>r(840)));return r.O(o)})()}));
//# sourceMappingURL=app.js.map