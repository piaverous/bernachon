(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{663:function(e,t,a){e.exports={gray:"_1myva",banner:"_2GJKw",mapwrapper:"_3rcv_",scrollweather:"_2LvpD",mainmeteopic:"_1J_JY"}},673:function(e,t,a){"use strict";var r=a(0),n=a.n(r);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var l=function(e){if(!Array.isArray(e))return e;var t=e.find((function(e){return"image/webp"===e.type.toLowerCase()}));if(!t)return e;var a=e.filter((function(e){return e.type&&"image/webp"!==e.type.toLowerCase()}));return a.unshift(t),a},u=function(e){if("string"==typeof e)return e;if(Array.isArray(e)&&e.length>=2){var t=e.find((function(e){return"image/webp"!==e.type.toLowerCase()}));if(!t)t=o(e,1)[0];var a=t.placeholder&&t.placeholder.url?t.placeholder.url:"";if(a)return a;var r=t.sources&&"object"===c(t.sources)&&Object.keys(t.sources).length?t.sources:{},n=Object.keys(r);return n.length?r[n[n.length-1]]:""}return""},s=function(e){var t=e&&e.srcSet?e.srcSet:"";return t||"".concat(function(e){var t=e&&e.sources&&Object.keys(e.sources).length?e.sources:{},a=Object.keys(t);return a.length?t[a[a.length-1]]:""}(e)," 1w")};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alt:"",image:[],pictureClassName:"",imgClassName:"",top:0},t=e.alt,a=e.imgClassName,c=e.pictureClassName,i=e.image,d=e.top,m=Object(r.useState)(l(i)),g=o(m,1),U=g[0],b=Object(r.useState)(!1),f=o(b,2),p=f[0],Q=f[1],F=Object(r.useRef)(null),v=Object(r.useRef)(null),B=function(){v&&v.current&&F&&F.current&&(v.current.unobserve&&v.current.unobserve(F.current),v.current.disconnect&&v.current.disconnect(),v.current=null)},N=function(){if("IntersectionObserver"in window){var e={rootMargin:"".concat(d||0,"px"),threshold:.1};v.current=new window.IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0&&(B(),Q(!0))}))}),e),v.current.observe(F.current)}else Q(!0)};Object(r.useEffect)((function(){return"requestIdleCallback"in window?window.requestIdleCallback(N):setTimeout(N,1),function(){return B()}}),[F]);var h=function(){if(!p)return null;if("string"==typeof U)return n.a.createElement("img",{className:a,src:U,alt:t});var e=[];return Array.isArray(U)&&(e=U),e.map((function(e){var t=s(e);return n.a.createElement("source",{type:e.type,srcSet:t,key:t})}))},y=function(){return"string"==typeof i?null:n.a.createElement("img",{className:a,src:u(i),alt:t})};return n.a.createElement("picture",{className:c,ref:F},h(),y())}},842:function(e,t){e.exports=[{sources:{"1200w":"/images/d4dbe18f982fffb5447e06effa153028-cute-goat.jpeg","1000w":"/images/d7bf571637bf6c88f348c4d2a3bf01c4-cute-goat.jpeg","800w":"/images/8f72f5c7e4ddea2fb5f7a0754cea3a68-cute-goat.jpeg","600w":"/images/844fac496fd0ac44cdb4921b4b84b8b8-cute-goat.jpeg","400w":"/images/9bec6d29a398c0ab03a14b515d132a8f-cute-goat.jpeg"},type:"image/jpeg",srcSet:"/images/d4dbe18f982fffb5447e06effa153028-cute-goat.jpeg 1200w,/images/d7bf571637bf6c88f348c4d2a3bf01c4-cute-goat.jpeg 1000w,/images/8f72f5c7e4ddea2fb5f7a0754cea3a68-cute-goat.jpeg 800w,/images/844fac496fd0ac44cdb4921b4b84b8b8-cute-goat.jpeg 600w,/images/9bec6d29a398c0ab03a14b515d132a8f-cute-goat.jpeg 400w",placeholder:{color:[120,83,63,1],url:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMTMiPgogICAgICAgICAgPGZpbHRlciBpZD0ieCI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIC8+CiAgICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgIDxpbWFnZSB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai8yd0JEQUFZRUJRWUZCQVlHQlFZSEJ3WUlDaEFLQ2drSkNoUU9Ed3dRRnhRWUdCY1VGaFlhSFNVZkdoc2pIQllXSUN3Z0l5WW5LU29wR1I4dE1DMG9NQ1VvS1NqLzJ3QkRBUWNIQndvSUNoTUtDaE1vR2hZYUtDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2ovd0FBUkNBQU5BQlFEQVNJQUFoRUJBeEVCLzhRQUZ3QUFBd0VBQUFBQUFBQUFBQUFBQUFBQUFBVUhCdi9FQUNjUUFBSUJBd01EQXdVQUFBQUFBQUFBQUFFQ0F3UUZFUUFHSVFjeFFSSVRGQ0pSWVlIeC84UUFGUUVCQVFBQUFBQUFBQUFBQUFBQUFBQUFCQVgveEFBZkVRRUFBUU1FQXdBQUFBQUFBQUFBQUFBQkFnQUVFUU1GSVpFU0ZkSC8yZ0FNQXdFQUFoRURFUUEvQUpkdXV3Vk56NmhQYmxMUi9FcFlJSE1XRjkyWVJxRGdueVc4L2pXeWs2ZWJac2RsRmJjNUoycW9GOXN5Vjh4V0JwOGNoa0M1d3A3Yzg0NTBtb3E1MGtNamd1ODA1bmtQcUk5VDhFdDk4blR5czNWY0Z2TkRRMWNyMWRKY0MwRTBjclpCWHY1R01lRHh5TlNJMzJzeThJcUh5cVViZUFaVExVbGJhMTBqd0lvYVNvaU9Ta3BKK3NaNy93QjBhb3Q1cVJGWE5Ha1VhcWlxQUZHQU9BZUIrOUdteDNLNEFPT2ltZW90bmx6M1gvL1oiIGZpbHRlcj0idXJsKCN4KSIvPgogICAgICAgIDwvc3ZnPg==",ratio:1.5}},{sources:{"1200w":"/images/ab4d45c4e23ed11c4a75edf91e02280e-cute-goat.webp","1000w":"/images/795106264b1d8e1c541170a7e52c1cef-cute-goat.webp","800w":"/images/4de8097e858d976d0eb7d81933458318-cute-goat.webp","600w":"/images/3d62d6a1c2f4ce6fac6ff7d3c2eb5c65-cute-goat.webp","400w":"/images/da3a73f3ef49c87e467363504e99fac8-cute-goat.webp"},type:"image/webp",srcSet:"/images/ab4d45c4e23ed11c4a75edf91e02280e-cute-goat.webp 1200w,/images/795106264b1d8e1c541170a7e52c1cef-cute-goat.webp 1000w,/images/4de8097e858d976d0eb7d81933458318-cute-goat.webp 800w,/images/3d62d6a1c2f4ce6fac6ff7d3c2eb5c65-cute-goat.webp 600w,/images/da3a73f3ef49c87e467363504e99fac8-cute-goat.webp 400w",placeholder:{color:[120,83,63,1],url:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMTMiPgogICAgICAgICAgPGZpbHRlciBpZD0ieCI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIC8+CiAgICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgIDxpbWFnZSB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai8yd0JEQUFZRUJRWUZCQVlHQlFZSEJ3WUlDaEFLQ2drSkNoUU9Ed3dRRnhRWUdCY1VGaFlhSFNVZkdoc2pIQllXSUN3Z0l5WW5LU29wR1I4dE1DMG9NQ1VvS1NqLzJ3QkRBUWNIQndvSUNoTUtDaE1vR2hZYUtDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2ovd0FBUkNBQU5BQlFEQVNJQUFoRUJBeEVCLzhRQUZ3QUFBd0VBQUFBQUFBQUFBQUFBQUFBQUFBVUhCdi9FQUNjUUFBSUJBd01EQXdVQUFBQUFBQUFBQUFFQ0F3UUZFUUFHSVFjeFFSSVRGQ0pSWVlIeC84UUFGUUVCQVFBQUFBQUFBQUFBQUFBQUFBQUFCQVgveEFBZkVRRUFBUU1FQXdBQUFBQUFBQUFBQUFBQkFnQUVFUU1GSVpFU0ZkSC8yZ0FNQXdFQUFoRURFUUEvQUpkdXV3Vk56NmhQYmxMUi9FcFlJSE1XRjkyWVJxRGdueVc4L2pXeWs2ZWJac2RsRmJjNUoycW9GOXN5Vjh4V0JwOGNoa0M1d3A3Yzg0NTBtb3E1MGtNamd1ODA1bmtQcUk5VDhFdDk4blR5czNWY0Z2TkRRMWNyMWRKY0MwRTBjclpCWHY1R01lRHh5TlNJMzJzeThJcUh5cVViZUFaVExVbGJhMTBqd0lvYVNvaU9Ta3BKK3NaNy93QjBhb3Q1cVJGWE5Ha1VhcWlxQUZHQU9BZUIrOUdteDNLNEFPT2ltZW90bmx6M1gvL1oiIGZpbHRlcj0idXJsKCN4KSIvPgogICAgICAgIDwvc3ZnPg==",ratio:1.5}}]},902:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(189),o=a(673),i=a(58),l=a(663),u=a.n(l),s=a(842),d=a.n(s),m=function(e){var t=e.title,a=e.description,r=e.link;return n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"card"},n.a.createElement("header",{className:"card-header"},n.a.createElement("p",{className:"card-header-title"},n.a.createElement(i.b,{to:r},t))),a&&a.length>0?n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"content"},a)):null))};t.default=function(){return n.a.createElement(c.a,null,n.a.createElement("section",{className:"".concat(u.a.banner," hero is-medium is-info is-bold")},n.a.createElement(o.a,{alt:"Cute Goat",image:d.a})),n.a.createElement("section",{className:"m-t-lg"},n.a.createElement("div",{className:"container p-l-md p-r-md"},n.a.createElement("h4",{className:"title is-4"},"Venez vous ressourcer au gîte ",n.a.createElement("i",null,"le Fournil du Bernachon"),", véritable havre de paix en pleine campagne bourguignonne 🐐"),n.a.createElement("p",null,"Vous bénéficierez de belles vues dégagées sur les monts alentours ⛰ et profiterez de nos sentiers pour découvrir notre belle région, à 🦶🏼, à 🐴, à 🚲... Ni chambre d'hôte, ni gîte d'étape, mais un gîte indépendant en gestion libre. À la fois isolé et à proximité de tout, vous pourrez visiter le château de Lamartine et son tombeau, la ville de Cluny et son abbaye, et aussi nager, faire du pédalo ou pêcher la carpe dans le lac de St Point."),n.a.createElement("hr",null),n.a.createElement("div",{className:"columns"},n.a.createElement(m,{title:"📆 Dates",link:"/dates",description:"Checke les dates du séjour et regarde qui est là en même temps que toi !"}),n.a.createElement(m,{title:"🏡 Le Lieu",link:"/location",description:"Pour en apprendre plus sur le lieu, comment s'y rendre, ce qu'il y a autour..."}),n.a.createElement(m,{title:"🌤 Météo",link:"/weather",description:"La météo quoi, rien de fou... Mais c'est toujours pratique !"})))))}}}]);