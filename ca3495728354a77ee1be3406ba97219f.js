/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
var libFuncName=null;if("undefined"==typeof jQuery&&"undefined"==typeof Zepto&&"function"==typeof $)libFuncName=$;else if("function"==typeof jQuery)libFuncName=jQuery;else{if("function"!=typeof Zepto)throw new TypeError;libFuncName=Zepto}!function(t,e,n,i){"use strict";function o(t){return("string"==typeof t||t instanceof String)&&(t=t.replace(/^[\\'"]+|(;\s?})+|[\\'"]+$/g,"")),t}0===t("head").has(".foundation-mq-small").length&&t("head").append('<meta class="foundation-mq-small">'),0===t("head").has(".foundation-mq-medium").length&&t("head").append('<meta class="foundation-mq-medium">'),0===t("head").has(".foundation-mq-large").length&&t("head").append('<meta class="foundation-mq-large">'),/*
    matchMedia() polyfill - Test a CSS media 
    type/query in JS. Authors & copyright (c) 2012: 
    Scott Jehl, Paul Irish, Nicholas Zakas. 
    Dual MIT/BSD license

    https://github.com/paulirish/matchMedia.js
  */
e.matchMedia=e.matchMedia||function(t){var e,n=t.documentElement,i=n.firstElementChild||n.firstChild,o=t.createElement("body"),r=t.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",o.style.background="none",o.appendChild(r),function(t){return r.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(o,i),e=42===r.offsetWidth,n.removeChild(o),{matches:e,media:t}}}(n),Array.prototype.filter||(Array.prototype.filter=function(t){if(null==this)throw new TypeError;var e=Object(this),n=e.length>>>0;if("function"==typeof t){for(var i=[],o=arguments[1],r=0;n>r;r++)if(r in e){var a=e[r];t&&t.call(o,a,r,e)&&i.push(a)}return i}}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,i=function(){},o=function(){return n.apply(this instanceof i&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,o.prototype=new i,o}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){if(null==this)throw new TypeError;var e=Object(this),n=e.length>>>0;if(0===n)return-1;var i=0;if(arguments.length>1&&(i=Number(arguments[1]),i!=i?i=0:0!=i&&1/0!=i&&i!=-1/0&&(i=(i>0||-1)*Math.floor(Math.abs(i)))),i>=n)return-1;for(var o=i>=0?i:Math.max(n-Math.abs(i),0);n>o;o++)if(o in e&&e[o]===t)return o;return-1}),t.fn.stop=t.fn.stop||function(){return this},e.Foundation={name:"Foundation",version:"4.3.2",cache:{},media_queries:{small:o(t(".foundation-mq-small").css("font-family")),medium:o(t(".foundation-mq-medium").css("font-family")),large:o(t(".foundation-mq-large").css("font-family"))},stylesheet:t("<style></style>").appendTo("head")[0].sheet,init:function(e,n,i,o,r,a){var s,u=[e,i,o,r],f=[],a=a||!1;if(a&&(this.nc=a),this.rtl=/rtl/i.test(t("html").attr("dir")),this.scope=e||this.scope,n&&"string"==typeof n&&!/reflow/i.test(n)){if(/off/i.test(n))return this.off();if(s=n.split(" "),s.length>0)for(var l=s.length-1;l>=0;l--)f.push(this.init_lib(s[l],u))}else{/reflow/i.test(n)&&(u[1]="reflow");for(var h in this.libs)f.push(this.init_lib(h,u))}return"function"==typeof n&&u.unshift(n),this.response_obj(f,u)},response_obj:function(t,e){for(var n=0,i=e.length;i>n;n++)if("function"==typeof e[n])return e[n]({errors:t.filter(function(t){return"string"==typeof t?t:void 0})});return t},init_lib:function(t,e){return this.trap(function(){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),this.libs[t].init.apply(this.libs[t],e)):function(){}}.bind(this),t)},trap:function(t,e){if(!this.nc)try{return t()}catch(n){return this.error({name:e,message:"could not be initialized",more:n.name+" "+n.message})}return t()},patch:function(t){this.fix_outer(t),t.scope=this.scope,t.rtl=this.rtl},inherit:function(t,e){for(var n=e.split(" "),i=n.length-1;i>=0;i--)this.lib_methods.hasOwnProperty(n[i])&&(this.libs[t.name][n[i]]=this.lib_methods[n[i]])},random_str:function(t){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");t||(t=Math.floor(Math.random()*e.length));for(var n="",i=0;t>i;i++)n+=e[Math.floor(Math.random()*e.length)];return n},libs:{},lib_methods:{set_data:function(t,e){var n=[this.name,+new Date,Foundation.random_str(5)].join("-");return Foundation.cache[n]=e,t.attr("data-"+this.name+"-id",n),e},get_data:function(t){return Foundation.cache[t.attr("data-"+this.name+"-id")]},remove_data:function(e){e?(delete Foundation.cache[e.attr("data-"+this.name+"-id")],e.attr("data-"+this.name+"-id","")):t("[data-"+this.name+"-id]").each(function(){delete Foundation.cache[t(this).attr("data-"+this.name+"-id")],t(this).attr("data-"+this.name+"-id","")})},throttle:function(t,e){var n=null;return function(){var i=this,o=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(i,o)},e)}},data_options:function(e){function n(t){return!isNaN(t-0)&&null!==t&&""!==t&&t!==!1&&t!==!0}function i(e){return"string"==typeof e?t.trim(e):e}var o,r,a={},s=(e.attr("data-options")||":").split(";"),u=s.length;for(o=u-1;o>=0;o--)r=s[o].split(":"),/true/i.test(r[1])&&(r[1]=!0),/false/i.test(r[1])&&(r[1]=!1),n(r[1])&&(r[1]=parseInt(r[1],10)),2===r.length&&r[0].length>0&&(a[i(r[0])]=i(r[1]));return a},delay:function(t,e){return setTimeout(t,e)},scrollTo:function(n,i,o){if(!(0>o)){var r=i-t(e).scrollTop(),a=10*(r/o);this.scrollToTimerCache=setTimeout(function(){isNaN(parseInt(a,10))||(e.scrollTo(0,t(e).scrollTop()+a),this.scrollTo(n,i,o-10))}.bind(this),10)}},scrollLeft:function(t){return t.length?"scrollLeft"in t[0]?t[0].scrollLeft:t[0].pageXOffset:void 0},empty:function(t){if(t.length&&t.length>0)return!1;if(t.length&&0===t.length)return!0;for(var e in t)if(hasOwnProperty.call(t,e))return!1;return!0},register_media:function(e,n){Foundation.media_queries[e]===i&&(t("head").append('<meta class="'+n+'">'),Foundation.media_queries[e]=o(t("."+n).css("font-family")))},addCustomRule:function(t,e){if(e===i)Foundation.stylesheet.insertRule(t,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[e];n!==i&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[e]+"{ "+t+" }")}}},fix_outer:function(t){t.outerHeight=function(t,e){return"function"==typeof Zepto?t.height():"undefined"!=typeof e?t.outerHeight(e):t.outerHeight()},t.outerWidth=function(t,e){return"function"==typeof Zepto?t.width():"undefined"!=typeof e?t.outerWidth(e):t.outerWidth()}},error:function(t){return t.name+" "+t.message+"; "+t.more},off:function(){return t(this.scope).off(".fndtn"),t(e).off(".fndtn"),!0},zj:t},t.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(libFuncName,this,this.document);
;