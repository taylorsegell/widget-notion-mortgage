"use strict";!function(){var r,s=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return 0===e.toLowerCase().indexOf("script error")&&r<=0};(r=window).addEventListener("DOMContentLoaded",function(){var e=r.cgmt_error_queue||[],t=(r.TTCOM_Scripts||{}).splunk,n=[],o=(r.appVars||{}).csLogging||{},i=function(e,r){r.logKey=r.logKey||"clientSideJsError",r.logValue=e,r.url="/api/v1/cse/jsError",r.prettyMessage=r.prettyMessage||"unhandledException",t.logError(r,e,r.fileName,r.lineNumber)},a=function(e){if(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},n=e.message;return!(!n||n&&0<=r.indexOf(n)||!t.thirdPartyEnabled&&s(n,e.lineno))}(e,n,o)){var r=e.message,t=function(e){if(!e)return{};var r=e.filename,t=e.lineno,n=e.colno,o=e.message,i=e.timeStamp,a=e.error&&e.error.stack?'"'.concat(function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"").trim().replace(/(\r\n|\n|\r)/gm," ")}(e.error.stack),'"'):void 0;return{timeStamp:i,messageCode:s(o,t)?"thirdPartyJavaScriptError":"javaScriptError",logKey:"clientSideJsError",fileName:r,lineNumber:t,columnNumber:n,stackTrace:a}}(e);return i(r,t),n.push(r),!0}return!1};r.addEventListener("error",a,!0),r.removeEventListener("error",r.cgmt_error_handler,!0),function(){(0<arguments.length&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){var r;r=e,setTimeout(function(){a(r)||r.target&&function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=e.src||e.href;return!(!r||-1===r.indexOf("/widgets/")||-1!==r.indexOf("/handlebars/common/"))}(r.target)&&i("Widget resources failed to load. 400 error.",{messageCode:"widgetResourceNotFound",fileName:r.target.src||r.target.href})},0)})}(e)})}();