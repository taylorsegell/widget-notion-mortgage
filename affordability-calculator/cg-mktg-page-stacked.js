(function(n){var r={};function o(e){if(r[e]){return r[e].exports}var t=r[e]={i:e,l:false,exports:{}};n[e].call(t.exports,t,t.exports,o);t.l=true;return t.exports}o.m=n;o.c=r;o.d=function(e,t,n){if(!o.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}};o.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};o.t=function(t,e){if(e&1)t=o(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var n=Object.create(null);o.r(n);Object.defineProperty(n,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n};o.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};o.d(e,"a",e);return e};o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};o.p="";return o(o.s=16)})([function(e,t,n){var j=n(1),h=n(4),E=n(7);var k="Expected a function";var O=Math.max,S=Math.min;function r(r,o,e){var a,i,u,c,n,f,d=0,t=false,l=false,v=true;if(typeof r!="function"){throw new TypeError(k)}o=E(o)||0;if(j(e)){t=!!e.leading;l="maxWait"in e;u=l?O(E(e.maxWait)||0,o):u;v="trailing"in e?!!e.trailing:v}function s(e){var t=a,n=i;a=i=undefined;d=e;c=r.apply(n,t);return c}function p(e){d=e;n=setTimeout(b,o);return t?s(e):c}function m(e){var t=e-f,n=e-d,r=o-t;return l?S(r,u-n):r}function y(e){var t=e-f,n=e-d;return f===undefined||t>=o||t<0||l&&n>=u}function b(){var e=h();if(y(e)){return _(e)}n=setTimeout(b,m(e))}function _(e){n=undefined;if(v&&a){return s(e)}a=i=undefined;return c}function g(){if(n!==undefined){clearTimeout(n)}d=0;a=f=i=n=undefined}function w(){return n===undefined?c:_(h())}function x(){var e=h(),t=y(e);a=arguments;i=this;f=e;if(t){if(n===undefined){return p(f)}if(l){clearTimeout(n);n=setTimeout(b,o);return s(f)}}if(n===undefined){n=setTimeout(b,o)}return c}x.cancel=g;x.flush=w;return x}e.exports=r},function(e,t){function n(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}e.exports=n},function(e,t,n){var r=n(5);var o=typeof self=="object"&&self&&self.Object===Object&&self;var a=r||o||Function("return this")();e.exports=a},function(e,t,n){var r=n(2);var o=r.Symbol;e.exports=o},function(e,t,n){var r=n(2);var o=function(){return r.Date.now()};e.exports=o},function(n,e,t){(function(e){var t=typeof e=="object"&&e&&e.Object===Object&&e;n.exports=t}).call(this,t(6))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){if(typeof window==="object")n=window}e.exports=n},function(e,t,n){var r=n(8),o=n(1),a=n(10);var i=0/0;var u=/^[-+]0x[0-9a-f]+$/i;var c=/^0b[01]+$/i;var f=/^0o[0-7]+$/i;var d=parseInt;function l(e){if(typeof e=="number"){return e}if(a(e)){return i}if(o(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=o(t)?t+"":t}if(typeof e!="string"){return e===0?e:+e}e=r(e);var n=c.test(e);return n||f.test(e)?d(e.slice(2),n?2:8):u.test(e)?i:+e}e.exports=l},function(e,t,n){var r=n(9);var o=/^\s+/;function a(e){return e?e.slice(0,r(e)+1).replace(o,""):e}e.exports=a},function(e,t){var n=/\s/;function r(e){var t=e.length;while(t--&&n.test(e.charAt(t))){}return t}e.exports=r},function(e,t,n){var r=n(11),o=n(14);var a="[object Symbol]";function i(e){return typeof e=="symbol"||o(e)&&r(e)==a}e.exports=i},function(e,t,n){var r=n(3),o=n(12),a=n(13);var i="[object Null]",u="[object Undefined]";var c=r?r.toStringTag:undefined;function f(e){if(e==null){return e===undefined?u:i}return c&&c in Object(e)?o(e):a(e)}e.exports=f},function(e,t,n){var r=n(3);var o=Object.prototype;var a=o.hasOwnProperty;var i=o.toString;var u=r?r.toStringTag:undefined;function c(e){var t=a.call(e,u),n=e[u];try{e[u]=undefined;var r=true}catch(e){}var o=i.call(e);if(r){if(t){e[u]=n}else{delete e[u]}}return o}e.exports=c},function(e,t){var n=Object.prototype;var r=n.toString;function o(e){return r.call(e)}e.exports=o},function(e,t){function n(e){return e!=null&&typeof e=="object"}e.exports=n},function(e,t,n){e.exports={main:"ElZy__main","background-image":"ElZy__background-image","background-image_center":"ElZy__background-image_center","background-image_top":"ElZy__background-image_top","background-image_bottom":"ElZy__background-image_bottom",pinned:"ElZy__pinned",pinned_center:"ElZy__pinned_center","header--absolute":"ElZy__header--absolute"}},function(e,t,n){"use strict";n.r(t);var r=n(0);var o=n.n(r);var a=n(15);var i=function e(){var t=document.querySelector(".pinned");var n=document.getElementById("main");var r=n.getBoundingClientRect().top;if(t&&r<=0){document.getElementById("fixed").style.top="0px"}if(t&&r>0){document.getElementById("fixed").style.top="".concat(r,"px")}};var f=1.5;var u="auto_modal_page_stacked";var c=function e(t){var n=t.key,r=t.value,o=t.expires,a=t.domain,i=a===void 0?".intuit.com":a,u=t.path,c=u===void 0?"/":u;document.cookie="".concat(n,"=").concat(encodeURIComponent(r),";domain=").concat(i,";path=").concat(c,";expires=").concat(o)};var d=function e(t){var n=t.key;var r=document.cookie.match("(^|;)\\s*".concat(n,"\\s*=\\s*([^;]+)"));return r?r.pop():undefined};var l=function e(t){return"".concat(u,"_").concat(t)};var v=function e(t,n,r){var o=24*60*60*1e3*r;c({key:t,value:n,expires:new Date(Date.now()+o)})};var s=function e(t,n){var r=d({key:t});return decodeURIComponent(r)!==n};var p=function e(t){var n=parseFloat(t,10);return!Number.isNaN(n)?n:0};var m=function e(t){t.analytics.trackEvent({action:"viewed",event:"content:viewed",event_class:"user_action",object:"content",ui_action:"viewed",ui_object:"modal",ui_object_detail:"viewed_pyamodal"})};var y=function e(t){var n=p(t,10);return n<0?0:n*1e3};var b=function e(){var t=document.querySelector('[data-link="modal-auto"]');if(t){var n=t.getAttribute("href");var r=t.getAttribute("data-modal-delay");var o=y(r||f);var a=t.getAttribute("data-modal-ttl");var i=p(a);var u=t.getAttribute("data-modal-page-instance");var c=l(u);if(!s(c,n)){return}window.setTimeout(function(){t.click();window.coreServiceAdapter&&m(window.coreServiceAdapter);if(i>0){v(c,n,i)}},o)}};var _=function e(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",b)}else{b()}};var g=false;var w=false;var x=false;var j=false;var h=function e(t){var n=t||{};var r=window.scrollY;var o=document.body.offsetHeight;var a=window.innerHeight;var i=r/(o-a);var u=Math.round(i*100);if(u===100&&!g){n.analytics.trackEvent({screen_object_state:"scroll_100"});g=true}else if(u>=75&&!w){n.analytics.trackEvent({screen_object_state:"scroll_75"});w=true}else if(u>=50&&!x){n.analytics.trackEvent({screen_object_state:"scroll_50"});x=true}else if(u>=25&&!j){n.analytics.trackEvent({screen_object_state:"scroll_25"});j=true}};var E=function e(){return j};var k=function e(){return x};var O=function e(){return w};var S=function e(){return g};var T=function e(n){var t=function e(){var t=document.getElementById("main");if(t.dataset.scrollDepthBeaconEnabled&&JSON.parse(t.dataset.scrollDepthBeaconEnabled)){window.addEventListener("scroll",o()(function(){return h(n)},260))}};if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",t)}else{t()}};_();window.addEventListener("scroll",o()(function(){i()},260));T(window.coreServiceAdapter)}]);