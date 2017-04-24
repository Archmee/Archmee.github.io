define(function(){"use strict";function e(e){return W.call(e)===Z.NUMBER}function t(e){return W.call(e)===Z.STRING}function n(e){return W.call(e)===Z.BOOL}function r(e){return(Array.isArray||function(e){return W.call(e)===Z.ARRAY})(e)}function o(e){return W.call(e)===Z.FUNCTION}function c(e){return W.call(e)===Z.OBJECT}function u(e){return W.call(e)===Z.DATE}function a(e){return W.call(e)===Z.REGEXP}function i(e){return W.call(e)===Z.Null}function l(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function s(i){var l;if(!i||t(i)||e(i)||n(i))l=i;else if(u(i))l=new Date(i);else if(r(i)||c(i)){l=r(i)?[]:{};for(var f in i)!i.hasOwnProperty(f)||o(i[f])||a(i[f])||(l[f]=s(i[f]))}return l}function f(n){for(var r=[],o=0,c=n.length;o<c;o++)e(n[o])?r[n[o]]=n[o]:t(n[o])&&(r["s_"+n[o]]=n[o]);return r}function p(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function d(e,t){if(!o(t))return!1;for(var n=0,r=e.length;n<r;n++)t.call(e,n,e[n])}function g(e){var t=0;if(Object.keys)t=Object.keys(e).length;else for(var n in e)e.hasOwnProperty(n)&&t++;return t}function v(e){return/^[\w-]+@[\w-]+(\.[a-zA-Z\d]+){1,2}$/i.test(e)}function E(e){return/^(\+?86)?1\d{10}$/.test(e)}function y(e,t){return e.parentNode===t.parentNode}function m(e){var t={x:0,y:0};if(e.getBoundingClientRect){var n=e.getBoundingClientRect();t.x=n.left,t.y=n.top}else{for(var r=e;r;)t.x+=r.offsetLeft,t.y+=r.offsetTop,r=r.offsetParent;t.x-=document.body.scrollLeft||document.documentElement.scrollLeft,t.y-=document.body.scrollTop||document.documentElement.scrollTop}return t}function h(e,t){e&&t&&(b(e,t)?N(e,t):w(e,t))}function b(e,t){return!!(e&&e.className&&t)&&new RegExp("(^|\\s+)"+t+"(\\s+|$)","g").test(e.className)}function w(e,t){e&&t&&(b(e,t)||(e.className+=" "+t))}function N(e,t){if(e&&e.className&&t){var n=new RegExp("(^|\\s+)"+t+"(\\s+|$)","g");e.className=e.className.replace(n,"$2")}}function O(e,t){if(!e)return null;var n=[];if(document.createNodeIterator)for(var r=document.createNodeIterator(e,NodeFilter.SHOW_ELEMENT,null,!1),c=r.nextNode();null!=(c=r.nextNode());)o(t)&&!t(c)||n.push(c);else!function(e){e=e.children||e.childNodes;for(var r=0,c=e.length;r<c;r++)1===e[r].nodeType&&(o(t)&&!t(e[r])||n.push(e[r]),arguments.callee(e[r]))}(e);return n}function R(e,n){if(!e.className||!n||!t(n))return!1;for(var r=n.split(/\s+/),o=0,c=r.length;o<c;o++)if(!b(e,r[o]))return!1;return!0}function x(e,t){return O(e,function(e){return R(e,t)})}function C(e,t){return O(e,function(e){return e.id===t})}function j(e,t){return O(e,function(e){return e.nodeName.toLowerCase()===t.toLowerCase()})}function T(e,t,n,r){return O(e,function(e){return(!t||t.toUpperCase()===e.nodeName)&&S(e,n,r)})}function S(e,t,n){for(var r=e.attributes,o=0,c=r.length;o<c;o++)if(r[o].specified&&r[o].nodeName===t.toLowerCase())return!n||r[o].nodeValue===n;return!1}function k(e,t){var n=null;if(/^[\w]+$/.test(t))n=j(e,t);else if(/^#([-\w]+)$/.test(t))t=RegExp.$1,n=C(e,t);else if(/^\.([-\w]+)$/.test(t))t=RegExp.$1,n=x(e,t);else if(/^(\w*)\[([-\w]+)(\=['"]?([-\w]+)['"]?)?\]$/.test(t)){var r=RegExp.$1,o=RegExp.$2,c=RegExp.$4;n=T(e,r,o,c)}return n}function $(e,t){var n=e.split(/\s+/),r=t||document;return function(e,t){var r=k(e,n[t]);if(null==r||r.length<1)return null;if(t===n.length-1)return r[0];t++;for(var o=0,c=r.length;o<c;o++){var u=arguments.callee(r[o],t);if(null!=u)return u}return null}(r,0)}function A(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function L(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function P(e){return e||window.event}function I(e){return e.target||e.srcElement}function M(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function B(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function D(e,t){A(e,"click",t)}function F(e,t){A(e,"keyup",function(n){n=P(n),n.keyCode=n.keyCode||n.which,13===n.keyCode&&t.call(e,n)})}function U(e,t,n,r){A(e,n,function(e){e=P(e),e.target=I(e),e.target.nodeName===t.toUpperCase()&&r.call(e.target,e)})}function G(){return!window.opera&&/MSIE ([^;]+)/i.test(window.navigator.userAgent)?document.documentMode||+RegExp.$1:-1}function q(e,t,n){n=n||0;var r=new Date(Date.now()+24*n*60*60*1e3);document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+(n?"; expires="+r.toString():"")}function X(e){e=encodeURIComponent(e)+"=";var t=document.cookie.indexOf(e),n=null;if(t>-1){var r=document.cookie.indexOf(";",t);-1==r&&(r=document.cookie.length),n=decodeURIComponent(document.cookie.substring(t+e.length,r))}return n}function H(e){q(e,"",new Date(0))}function J(e,t){var n=null;n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),n.onreadystatechange=function(){4==n.readyState&&(n.status>=200&&n.status<300||304==n.status?t.onsuccess&&t.onsuccess.call(t,n.responseText,n):t.onfail&&t.onfail.call(t,n))};var r="";if(t.data){if("string"==typeof t.data){r=t.data.split("&"),t.data={};for(var o=0,c=r.length;o<c;o++){var u=r[o].split("=");t.data[u[0]]=u[1]}}r=encodeObject(t.data)}t.type=t.type?t.type.toUpperCase():"GET","GET"===t.type?(n.open("GET",e+"?"+r,!0),n.send(null)):"POST"===t.type&&(n.open("POST",e,!0),n.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8"),n.send(r))}function V(e,t){return e.currentStyle?e.currentStyle[t]:getComputedStyle(e,!1)[t]}function Y(e){return e.init&&(window.onload=e.init()),e}function _(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;").replace(/\'/g,"&#39;").replace(/\"/g,"&quot;")}function z(e){return e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&quot;/g,'"')}var W=Object.prototype.toString,Z={NUMBER:"[object Number]",STRING:"[object String]",BOOL:"[object Boolean]",ARRAY:"[object Array]",FUNCTION:"[object Function]",OBJECT:"[object Object]",DATE:"[object Date]",REGEXP:"[object RegExp]",Null:"[object Null]"};return Array.prototype.indexOf=Array.prototype.indexOf||function(e,t){var n;if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),o=r.length>>>0;if(0===o)return-1;var c=+t||0;if(Math.abs(c)===1/0&&(c=0),c>=o)return-1;for(n=Math.max(c>=0?c:o-Math.abs(c),0);n<o;){if(n in r&&r[n]===e)return n;n++}return-1},Object.keys=Object.keys||function(e){var t=Object.prototype.hasOwnProperty,n=!{toString:null}.propertyIsEnumerable("toString"),r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],o=r.length;if("object"!=typeof e&&("function"!=typeof e||null===e))throw new TypeError("Object.keys called on non-object");var c,u,a=[];for(c in e)t.call(e,c)&&a.push(c);if(n)for(u=0;u<o;u++)t.call(e,r[u])&&a.push(r[u]);return a},$.on=function(e,t,n){A($(e),t,n)},$.un=function(e,t,n){L($(e),t,n)},$.click=function(e,t){D($(e),t)},$.enter=F,$.delegate=function(e,t,n,r){U($(e),t,n,r)},{$:$,isNumber:e,isString:t,isBool:n,isArray:r,isFunction:o,isObject:c,isDate:u,isRegExp:a,isNull:i,RegExpEscape:l,cloneObject:s,uniqArray:f,trim:p,each:d,getObjectLength:g,isEmail:v,isMobilePhone:E,isSiblingNode:y,getPosition:m,toggleClass:h,hasClass:b,addClass:w,removeClass:N,addEvent:A,removeEvent:L,getEvent:P,getEventTarget:I,preventDefault:M,cancelBubble:B,isIE:G,setCookie:q,getCookie:X,unsetCookie:H,ajax:J,getStyle:V,library:Y,stripTag:function(e){return e.replace(/<\/?([^>]+)>/g,"")},htmlEncode:_,htmlDecode:z}});