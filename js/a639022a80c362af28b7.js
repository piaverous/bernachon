(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{684:function(t,e,n){"use strict";var o={};e.a={isLoggedIn:function(){return o.getItem&&"function"==typeof o.getItem&&"allowmein"===o.getItem("secretKey")},logout:function(){return o.removeItem&&"function"==typeof o.removeItem&&o.removeItem("secretKey")}}},908:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var o=n(0),r=n.n(o),u=n(4),c=n(684);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=p(t);if(e){var r=p(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(s,t);var e,n,o,i=l(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=i.call(this,t)).onLogoutRedirectUrl="/login",e.state={logout:!1},e}return e=s,(n=[{key:"componentDidMount",value:function(){c.a.logout(),this.setState({logout:!0})}},{key:"render",value:function(){return this.state.logout?r.a.createElement(u.a,{to:this.onLogoutRedirectUrl}):null}}])&&f(e.prototype,n),o&&f(e,o),s}(r.a.Component)}}]);