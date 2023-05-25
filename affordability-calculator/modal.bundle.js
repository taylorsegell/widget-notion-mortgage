!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=3)}([function(e,t,n){e.exports={"screen-xs-max":"479px","screen-sm-min":"480px","screen-sm-max":"767px","screen-md-min":"768px","screen-md-max":"1023px","screen-lg-min":"1024px","screen-lg-max":"1199px","screen-xl-min":"1200px","screen-xl-max":"1440px"}},,,function(e,t,n){"use strict";n.r(t);n(0);function u(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=1;d=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],s=function(){function s(e){var t=e.targetModal,n=e.triggers,n=void 0===n?[]:n,o=e.onShow,o=void 0===o?function(){}:o,i=e.onClose,i=void 0===i?function(){}:i,r=e.openTrigger,r=void 0===r?"data-micromodal-trigger":r,a=e.closeTrigger,a=void 0===a?"data-micromodal-close":a,c=e.disableScroll,c=void 0!==c&&c,l=e.disableFocus,l=void 0!==l&&l,d=e.awaitCloseAnimation,d=void 0!==d&&d,e=e.debugMode,e=void 0!==e&&e;if(!(this instanceof s))throw new TypeError("Cannot call a class as a function");this.modal=document.getElementById(t),this.config={debugMode:e,disableScroll:c,openTrigger:r,closeTrigger:a,onShow:o,onClose:i,awaitCloseAnimation:d,disableFocus:l},0<n.length&&this.registerTriggers.apply(this,u(n)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var e,t,n;return e=s,(t=[{key:"registerTriggers",value:function(){for(var t=this,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];n.forEach(function(e){e.addEventListener("click",function(){return t.showModal()})})}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal)}},{key:"closeModal",value:function(){var t=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",function e(){t.classList.remove("is-open"),t.removeEventListener("animationend",e,!1)},!1):t.classList.remove("is-open")}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:"",height:""});break;case"disable":Object.assign(t.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),e.preventDefault())}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.maintainFocus(e)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(d);return Object.keys(t).map(function(e){return t[e]})}},{key:"setFocusToFirstNode",value:function(){var e;this.config.disableFocus||(e=this.getFocusableNodes()).length&&e[0].focus()}},{key:"maintainFocus",value:function(e){var t,n=this.getFocusableNodes();this.modal.contains(document.activeElement)?(t=n.indexOf(document.activeElement),e.shiftKey&&0===t&&(n[n.length-1].focus(),e.preventDefault()),e.shiftKey||t!==n.length-1||(n[0].focus(),e.preventDefault())):n[0].focus()}}])&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),s}(),m=null,f=function(e){if(!document.getElementById(e))return console.warn("MicroModal v".concat(r,": ❗Seems like you have missed %c'").concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1};function a(e){v=e.touches[0].clientY,g=!0}function c(){v=0,g=!1}function l(e){!1!==g&&200<=e.touches[0].clientY-v&&(v=0,g=!1,p())}function y(e){return e.replace(/[^a-z0-9\-_]|^[^a-z]+/gi,"")}var d,s,m,f,h,b={init:function(e){var n,o,t=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),e=u(document.querySelectorAll("[".concat(t.openTrigger,"]"))),i=(n=t.openTrigger,o=[],e.forEach(function(e){var t=e.attributes[n].value;void 0===o[t]&&(o[t]=[]),o[t].push(e)}),o);if(!0!==t.debugMode||!1!==function(e,t){if(h(e),t)for(var n in t)f(n);return!0}(e,i))for(var r in i){var a=i[r];t.targetModal=r,t.triggers=u(a),new s(t)}},show:function(e,t){t=t||{};t.targetModal=e,!0===t.debugMode&&!1===f(e)||(m=new s(t)).showModal()},close:function(){m.closeModal()}},v=0,g=!(h=function(e){if(e.length<=0)return console.warn("MicroModal v".concat(r,": ❗Please specify at least one %c'micromodal-trigger'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'),!1}),p=function(){},w=function(){p=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){},document.addEventListener("touchstart",a,!1),document.addEventListener("touchmove",l,!1),document.addEventListener("touchend",c,!1)},E=function(){document.removeEventListener("touchstart",a,!1),document.removeEventListener("touchmove",l,!1),document.removeEventListener("touchend",c,!1)};function k(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var S=function(n){var e,t=n.querySelector(".cgmt-modal__content"),o=n.querySelector('[data-content-id="modal-scroll-overlay"]');t&&o&&t.scrollHeight>t.offsetHeight&&(e=n.querySelector(".cgmt-modal__footer").clientHeight,o.style.display="block",o.style.bottom="".concat(e,"px"),window.addEventListener("resize",function(){var e=n,t=o;e=n.querySelector(".cgmt-modal__footer").clientHeight,t.style.bottom="".concat(e,"px")},1e3),t.addEventListener("scroll",function(){var e;e=o,t.scrollTop+t.offsetHeight===t.scrollHeight?e.style.display="none":"none"===e.style.display&&(e.style.display="block")},1e3))};!function(){function i(e){return y(e.getAttribute("href"))}function t(e){var t,n,o,e=e.target.matches(a)?e.target:e.target.closest(a);document.getElementById(v(e))?(t=(e.dataset.isDynamic?i:v)(e),g(t)):(e.dataset.isDynamic=!0,t=i(e),e=e.getAttribute("href"),n=e,o=t,fetch(n,{credentials:"same-origin"}).then(function(e){200<=e.status&&e.status<300?e.text().then(function(e){e=m(e,o);document.body.appendChild(e),g(o,n)}):(d("error",{modalError:"unexpected status returned in response: ".concat(e.status),modalId:o,modalUrl:n}),l=!1)}).catch(function(e){l=!1,d("error",{modalId:o,modalUrl:n,modalError:e})}))}var n,o,r,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'[data-toggle="modal"],[href^="/modals"]',c={show:"modalShow",shown:"modalShown",hide:"modalHide",hidden:"modalHidden",error:"modalError"},l=!1,d=function(e){e=new CustomEvent(c[e],{detail:1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}});document.dispatchEvent(e)},s=Object.assign({openTrigger:"data-micromodal-open",closeTrigger:"data-modal-close",disableScroll:!0,disableFocus:!1,awaitCloseAnimation:!1,debugMode:!0},1<arguments.length?arguments[1]:void 0),u=(n=document.createElement("div"),r=null,n&&n.style&&(o={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"},Object.keys(o).forEach(function(e){n.style&&void 0!==n.style[e]&&(r=o[e])})),r),m=(s.onShow=function(t){d("show",{modalId:t.id}),t.classList.add("is-open"),t.classList.remove("is-closed");for(var e=function e(){t.removeEventListener(u,e),d("shown",{modalId:t.id})},n=t,o=n.querySelectorAll('[data-dismiss="modal"], .modal-dialog'),i=o.length,r=0;r<i;r+=1)o[r].addEventListener("click",function(e){e.preventDefault(),b.close(n.id)});t.addEventListener(u,e)},s.onClose=function(t){d("hide",{modalId:t.id}),E(),t.addEventListener(u,function e(){t.removeEventListener(u,e),t.dataset.dynamic&&t.parentNode?t.parentNode.removeChild(t):(t.classList.remove("is-open"),t.classList.add("is-closed")),l=!1,d("hidden",{modalId:t.id})})},function(e,t){var n=document.createElement("div"),e=(n.innerHTML=e.trim(),n.firstChild);return e.id=t,e.dataset.dynamic=!0,e.getAttribute("data-com-id")||e.setAttribute("data-com-id","com-modal"),e}),f=function(e){d("show",{modalId:e,modalUrl:1<arguments.length&&void 0!==arguments[1]?arguments[1]:null}),b.show(e,s),w(function(){b.close(e)})},h=function(e){e=document.getElementById(e);e&&document.body.appendChild(e)},v=function(e){e=e.dataset&&e.dataset.target?e.dataset.target:y(e.getAttribute("href"));return 0===e.indexOf("#")?e.substr(1):e},g=function(e,t){var n=document.getElementById(e);!n||n.hasAttribute("aria-hidden")&&"true"!==n.getAttribute("aria-hidden").toString()||(h(e),f(e,t),k(document.querySelectorAll('[data-com-id="com-modal"]')).forEach(function(e){S(e)}))};document.addEventListener("click",function(e){(e.target.matches(a)||e.target.closest(a))&&(e.preventDefault(),l||(l=!0,t(e)))},!1)}('[data-toggle="modal"],[href^="/modals"]',{})}]);