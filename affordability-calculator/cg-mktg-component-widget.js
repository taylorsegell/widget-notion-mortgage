(function(r){var n={};function o(e){if(n[e]){return n[e].exports}var t=n[e]={i:e,l:false,exports:{}};r[e].call(t.exports,t,t.exports,o);t.l=true;return t.exports}o.m=r;o.c=n;o.d=function(e,t,r){if(!o.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};o.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};o.t=function(t,e){if(e&1)t=o(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var r=Object.create(null);o.r(r);Object.defineProperty(r,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r};o.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};o.d(e,"a",e);return e};o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};o.p="";return o(o.s=3)})([function(e){e.exports=JSON.parse('{"id":"widget","name":"Layer: Widget (react)","topic":"Component","subtopic":"Layer","catalogId":"cg-mktg-component-widget","version":"1.2.2","description":"Load a widget","author":"justin laugesen <justin_laugesen@intuit.com>","contributors":[]}')},function(e,t,r){e.exports=r(2)},function(e,t,r){var n=function(a){"use strict";var e=Object.prototype;var f=e.hasOwnProperty;var u;var t=typeof Symbol==="function"?Symbol:{};var o=t.iterator||"@@iterator";var r=t.asyncIterator||"@@asyncIterator";var n=t.toStringTag||"@@toStringTag";function i(e,t,r){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true});return e[t]}try{i({},"")}catch(e){i=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof s?t:s;var i=Object.create(o.prototype);var a=new P(n||[]);i._invoke=L(e,r,a);return i}a.wrap=c;function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}var d="suspendedStart";var h="suspendedYield";var p="executing";var g="completed";var v={};function s(){}function y(){}function m(){}var w={};w[o]=function(){return this};var b=Object.getPrototypeOf;var x=b&&b(b(N([])));if(x&&x!==e&&f.call(x,o)){w=x}var E=m.prototype=s.prototype=Object.create(w);y.prototype=E.constructor=m;m.constructor=y;y.displayName=i(m,n,"GeneratorFunction");function O(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}a.isGeneratorFunction=function(e){var t=typeof e==="function"&&e.constructor;return t?t===y||(t.displayName||t.name)==="GeneratorFunction":false};a.mark=function(e){if(Object.setPrototypeOf){Object.setPrototypeOf(e,m)}else{e.__proto__=m;i(e,n,"GeneratorFunction")}e.prototype=Object.create(E);return e};a.awrap=function(e){return{__await:e}};function C(c,u){function s(e,t,r,n){var o=l(c[e],c,t);if(o.type==="throw"){n(o.arg)}else{var i=o.arg;var a=i.value;if(a&&typeof a==="object"&&f.call(a,"__await")){return u.resolve(a.__await).then(function(e){s("next",e,r,n)},function(e){s("throw",e,r,n)})}return u.resolve(a).then(function(e){i.value=e;r(i)},function(e){return s("throw",e,r,n)})}}var t;function e(r,n){function e(){return new u(function(e,t){s(r,n,e,t)})}return t=t?t.then(e,e):e()}this._invoke=e}O(C.prototype);C.prototype[r]=function(){return this};a.AsyncIterator=C;a.async=function(e,t,r,n,o){if(o===void 0)o=Promise;var i=new C(c(e,t,r,n),o);return a.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})};function L(a,c,u){var s=d;return function e(t,r){if(s===p){throw new Error("Generator is already running")}if(s===g){if(t==="throw"){throw r}return I()}u.method=t;u.arg=r;while(true){var n=u.delegate;if(n){var o=j(n,u);if(o){if(o===v)continue;return o}}if(u.method==="next"){u.sent=u._sent=u.arg}else if(u.method==="throw"){if(s===d){s=g;throw u.arg}u.dispatchException(u.arg)}else if(u.method==="return"){u.abrupt("return",u.arg)}s=p;var i=l(a,c,u);if(i.type==="normal"){s=u.done?g:h;if(i.arg===v){continue}return{value:i.arg,done:u.done}}else if(i.type==="throw"){s=g;u.method="throw";u.arg=i.arg}}}}function j(e,t){var r=e.iterator[t.method];if(r===u){t.delegate=null;if(t.method==="throw"){if(e.iterator["return"]){t.method="return";t.arg=u;j(e,t);if(t.method==="throw"){return v}}t.method="throw";t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=l(r,e.iterator,t.arg);if(n.type==="throw"){t.method="throw";t.arg=n.arg;t.delegate=null;return v}var o=n.arg;if(!o){t.method="throw";t.arg=new TypeError("iterator result is not an object");t.delegate=null;return v}if(o.done){t[e.resultName]=o.value;t.next=e.nextLoc;if(t.method!=="return"){t.method="next";t.arg=u}}else{return o}t.delegate=null;return v}O(E);i(E,n,"Generator");E[o]=function(){return this};E.toString=function(){return"[object Generator]"};function S(e){var t={tryLoc:e[0]};if(1 in e){t.catchLoc=e[1]}if(2 in e){t.finallyLoc=e[2];t.afterLoc=e[3]}this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal";delete t.arg;e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}];e.forEach(S,this);this.reset(true)}a.keys=function(r){var n=[];for(var e in r){n.push(e)}n.reverse();return function e(){while(n.length){var t=n.pop();if(t in r){e.value=t;e.done=false;return e}}e.done=true;return e}};function N(t){if(t){var e=t[o];if(e){return e.call(t)}if(typeof t.next==="function"){return t}if(!isNaN(t.length)){var r=-1,n=function e(){while(++r<t.length){if(f.call(t,r)){e.value=t[r];e.done=false;return e}}e.value=u;e.done=true;return e};return n.next=n}}return{next:I}}a.values=N;function I(){return{value:u,done:true}}P.prototype={constructor:P,reset:function(e){this.prev=0;this.next=0;this.sent=this._sent=u;this.done=false;this.delegate=null;this.method="next";this.arg=u;this.tryEntries.forEach(k);if(!e){for(var t in this){if(t.charAt(0)==="t"&&f.call(this,t)&&!isNaN(+t.slice(1))){this[t]=u}}}},stop:function(){this.done=true;var e=this.tryEntries[0];var t=e.completion;if(t.type==="throw"){throw t.arg}return this.rval},dispatchException:function(r){if(this.done){throw r}var n=this;function e(e,t){i.type="throw";i.arg=r;n.next=e;if(t){n.method="next";n.arg=u}return!!t}for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];var i=o.completion;if(o.tryLoc==="root"){return e("end")}if(o.tryLoc<=this.prev){var a=f.call(o,"catchLoc");var c=f.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc){return e(o.catchLoc,true)}else if(this.prev<o.finallyLoc){return e(o.finallyLoc)}}else if(a){if(this.prev<o.catchLoc){return e(o.catchLoc,true)}}else if(c){if(this.prev<o.finallyLoc){return e(o.finallyLoc)}}else{throw new Error("try statement without catch or finally")}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&f.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}if(o&&(e==="break"||e==="continue")&&o.tryLoc<=t&&t<=o.finallyLoc){o=null}var i=o?o.completion:{};i.type=e;i.arg=t;if(o){this.method="next";this.next=o.finallyLoc;return v}return this.complete(i)},complete:function(e,t){if(e.type==="throw"){throw e.arg}if(e.type==="break"||e.type==="continue"){this.next=e.arg}else if(e.type==="return"){this.rval=this.arg=e.arg;this.method="return";this.next="end"}else if(e.type==="normal"&&t){this.next=t}return v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e){this.complete(r.completion,r.afterLoc);k(r);return v}}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if(n.type==="throw"){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){this.delegate={iterator:N(e),resultName:t,nextLoc:r};if(this.method==="next"){this.arg=u}return v}};return a}(true?e.exports:undefined);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){"use strict";r.r(t);var n=r(1);var s=r.n(n);var p=r(0);var o=function e(o){return new Promise(function(e,t){if(!o){t(new Error("No Library url provided."))}var r=document.getElementsByTagName("head")[0];var n=document.createElement("script");n.type="text/javascript";n.src=o;n.async=true;n["cross-domain"]="anonymous";n.onreadystatechange=e;n.onload=e;n.onerror=t;r.appendChild(n)})};var c=o;function i(e){return f(e)||u(e)||w(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){if(typeof Symbol!=="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function f(e){if(Array.isArray(e))return b(e)}function l(e,t,r,n,o,i,a){try{var c=e[i](a);var u=c.value}catch(e){r(e);return}if(c.done){t(u)}else{Promise.resolve(u).then(n,o)}}function d(c){return function(){var e=this,a=arguments;return new Promise(function(t,r){var n=c.apply(e,a);function o(e){l(n,t,r,o,i,"next",e)}function i(e){l(n,t,r,o,i,"throw",e)}o(undefined)})}}function h(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function v(e,t,r){if(t)g(e.prototype,t);if(r)g(e,r);return e}function y(e,t){return E(e)||x(e,t)||w(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(e,t){if(!e)return;if(typeof e==="string")return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}function b(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,n=new Array(t);r<t;r++){n[r]=e[r]}return n}function x(e,t){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var n=[];var o=true;var i=false;var a,c;try{for(r=r.call(e);!(o=(a=r.next()).done);o=true){n.push(a.value);if(t&&n.length===t)break}}catch(e){i=true;c=e}finally{try{if(!o&&r["return"]!=null)r["return"]()}finally{if(i)throw c}}return n}function E(e){if(Array.isArray(e))return e}function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);if(e){n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})}r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};if(e%2){O(Object(r),true).forEach(function(e){L(t,e,r[e])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))}else{O(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}}return t}function L(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var j=function e(n){var o=Date.now();return function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(!window.coreServiceAdapter){return}var r=Date.now()-o;window.coreServiceAdapter.logger.info("".concat(n," onReady timing: ").concat(e),C(C({},t),{},{widget:n,timeElapsed:r,componentId:p.catalogId,componentVersion:p.version}))}};var S=function e(t,r){window.coreServiceAdapter.logger.error(t,C(C({},r),{},{componentId:p.catalogId,componentVersion:p.version}))};var k=function e(t,r){window.coreServiceAdapter.logger.info(t,C(C({},r),{},{componentId:p.catalogId,componentVersion:p.version}))};var P=function e(t){var r=t.dataset.widgetExperience||"".concat(t.dataset.widgetName,".default");return r.split(".")};var N=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return t.widgetCaasEnabled===true||t.widgetCaasEnabled==="true"};var I=function e(t){var r=t.element,n=t.caasExperience;var o=n?n.split("|"):P(r),i=y(o,2),a=i[0],c=i[1];if(!window[a]){S("findReactComponent Error: Library ".concat(a," not found"));return null}if(!window[a][c]){S("findReactComponent Error: Experience with name ".concat(c," not found in library ").concat(a));return null}return window[a][c]};var _=function(){function a(e,t){var r,n,o,i;h(this,a);this.element=e;this.dataset=this.element.dataset;this.widgetName=this.dataset.widgetName;this.widgetConfig=null;this.appConfigId="widgetsConfig";this.appConfig={};this.sandbox=t;this.sharedPropsForLogging={componentId:p.catalogId,componentVersion:p.version,widgetName:this.widgetName,experience:this.experience,cid:(r=this.element)===null||r===void 0?void 0:(n=r.closest)===null||n===void 0?void 0:(o=n.call(r,"[data-auto-sel]"))===null||o===void 0?void 0:(i=o.dataset)===null||i===void 0?void 0:i.autoSel}}v(a,[{key:"logError",value:function e(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.sandbox.logger.error(t,C(C(C({},r),this.sharedPropsForLogging),{},{logKey:"clientSideJsError",messageCode:"handledException"}))}},{key:"logInfo",value:function e(t,r){this.sandbox.logger.info(t,C(C({},r),this.sharedPropsForLogging))}},{key:"getAppConfig",value:function(){var e=d(s.a.mark(function e(){var r=this;var n;return s.a.wrap(function e(t){while(1){switch(t.prev=t.next){case 0:t.next=2;return this.sandbox.data.getData(this.appConfigId)["catch"](function(e){n={};r.logError(e,{messageCode:"handledException"})});case 2:n=t.sent;this.appConfig=n;case 4:case"end":return t.stop()}}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getWidgetConfig",value:function(){var e=d(s.a.mark(function e(){var r=this;var n,o,i,a,c,u;return s.a.wrap(function e(t){while(1){switch(t.prev=t.next){case 0:if(!this.widgetConfig){t.next=2;break}return t.abrupt("return");case 2:n=true;o=Date.now();i=this.appConfig.url||"https://mtxwidgets.config-cdn.a.intuit.com/MTXWidgets-prd.json";t.next=7;return fetch(i)["catch"](function(e){n=false;r.logError(e,{messageCode:"apiResponseError",endpoint:i})});case 7:a=t.sent;c=Date.now()-o;if(!(n&&a.ok)){t.next=16;break}t.next=12;return a.json();case 12:u=t.sent;this.setWidgetConfig(u.widgets);t.next=17;break;case 16:if(n&&!a.ok){n=false;this.logError("".concat(a.status," Response returned from CaaS"),{messageCode:"apiResponseError",endpoint:i,responseStatus:a.status})}case 17:this.logInfo("CaaS Response Time: ".concat(c),{messageCode:"performanceData",endpoint:i,responseTime:c,responseOk:n});case 18:case"end":return t.stop()}}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"setWidgetConfig",value:function e(t){if(t[this.widgetName]){this.widgetConfig=t[this.widgetName]}}},{key:"getWidgetConfigErrorList",value:function e(){var t=[];if(!this.widgetConfig){t.push("no widget config exists");return t}if(!this.widgetConfig.path){t.push("Path is not specified in widget config")}if(!this.widgetConfig.experience){t.push("Experience is not specified in widget config")}return t}},{key:"handleCaasWidget",value:function(){var e=d(s.a.mark(function e(){var r,n,o,i;return s.a.wrap(function e(t){while(1){switch(t.prev=t.next){case 0:r=this.widgetName;if(r){t.next=4;break}this.logError("Widget name could not be found in element.dataset.widgetName");return t.abrupt("return");case 4:t.next=6;return this.getAppConfig();case 6:if(this.appConfig){t.next=8;break}return t.abrupt("return");case 8:t.next=10;return this.getWidgetConfig();case 10:n=this.getWidgetConfigErrorList();if(!(n.length===0)){t.next=20;break}this.experience=this.widgetConfig.experience;t.next=15;return c(this.widgetConfig.path);case 15:o=C({sandbox:this.sandbox,onReady:j(this.experience),sharedPropsForLogging:this.sharedPropsForLogging},this.widgetConfig.props);i=I({element:this.element,caasExperience:this.widgetConfig.experience});ReactDOM.render(React.createElement(i,o),this.element);t.next=21;break;case 20:this.logError(n.join(", "));case 21:case"end":return t.stop()}}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]);return a}();var A=function e(t){var h=t;var r=i(document.querySelectorAll("div[data-widget-container]"));r.forEach(function(e){var t=e.dataset.widgetName?e.dataset.widgetName:"";k("Starting render of widget: ".concat(t),{widgetName:t});var r=N(e.dataset);if(r){var n=new _(e,h);n.handleCaasWidget()}else{var o,i,a;var c=I({element:e});var u=P(e),s=y(u,2),f=s[0],l=s[1];var d={sandbox:h,onReady:j("".concat(f,"|").concat(l)),sharedPropsForLogging:{experience:l,componentId:p.catalogId,componentVersion:p.version,widgetName:f,cid:(o=e.closest)===null||o===void 0?void 0:(i=o.call(e,"[data-auto-sel]"))===null||i===void 0?void 0:(a=i.dataset)===null||a===void 0?void 0:a.autoSel}};ReactDOM.render(React.createElement(c,d),e)}k("Finished render of widget: ".concat(t),{widgetName:t})})};var R=A;window.addEventListener("DOMContentLoaded",function(){R(window.coreServiceAdapter)})}]);