"use strict";function _asyncToGenerator(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}var request=require("request-promise-native");function HttpServiceConstructor(){var a=this;return this.request=function(){var b=_asyncToGenerator(regeneratorRuntime.mark(function b(c,d){var e;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,request(c,d);case 2:return e=a.sent,a.abrupt("return",e);case 4:case"end":return a.stop();}},b,a)}));return function(){return b.apply(this,arguments)}}(),this}module.exports=HttpServiceConstructor;