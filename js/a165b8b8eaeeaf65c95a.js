(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{663:function(e,a,t){e.exports={gray:"_1myva",banner:"_2GJKw",mapwrapper:"_3rcv_",scrollweather:"_2LvpD",mainmeteopic:"_1J_JY"}},673:function(e,a,t){"use strict";var r=t(0),c=t.n(r);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,c=!1,n=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(t.push(l.value),!a||t.length!==a);r=!0);}catch(e){c=!0,n=e}finally{try{r||null==i.return||i.return()}finally{if(c)throw n}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return i(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}var s=function(e){if(!Array.isArray(e))return e;var a=e.find((function(e){return"image/webp"===e.type.toLowerCase()}));if(!a)return e;var t=e.filter((function(e){return e.type&&"image/webp"!==e.type.toLowerCase()}));return t.unshift(a),t},o=function(e){if("string"==typeof e)return e;if(Array.isArray(e)&&e.length>=2){var a=e.find((function(e){return"image/webp"!==e.type.toLowerCase()}));if(!a)a=l(e,1)[0];var t=a.placeholder&&a.placeholder.url?a.placeholder.url:"";if(t)return t;var r=a.sources&&"object"===n(a.sources)&&Object.keys(a.sources).length?a.sources:{},c=Object.keys(r);return c.length?r[c[c.length-1]]:""}return""},d=function(e){var a=e&&e.srcSet?e.srcSet:"";return a||"".concat(function(e){var a=e&&e.sources&&Object.keys(e.sources).length?e.sources:{},t=Object.keys(a);return t.length?a[t[t.length-1]]:""}(e)," 1w")};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alt:"",image:[],pictureClassName:"",imgClassName:"",top:0},a=e.alt,t=e.imgClassName,n=e.pictureClassName,i=e.image,m=e.top,V=Object(r.useState)(s(i)),u=l(V,1),b=u[0],p=Object(r.useState)(!1),N=l(p,2),R=N[0],Z=N[1],F=Object(r.useRef)(null),U=Object(r.useRef)(null),W=function(){U&&U.current&&F&&F.current&&(U.current.unobserve&&U.current.unobserve(F.current),U.current.disconnect&&U.current.disconnect(),U.current=null)},T=function(){if("IntersectionObserver"in window){var e={rootMargin:"".concat(m||0,"px"),threshold:.1};U.current=new window.IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0&&(W(),Z(!0))}))}),e),U.current.observe(F.current)}else Z(!0)};Object(r.useEffect)((function(){return"requestIdleCallback"in window?window.requestIdleCallback(T):setTimeout(T,1),function(){return W()}}),[F]);var g=function(){if(!R)return null;if("string"==typeof b)return c.a.createElement("img",{className:t,src:b,alt:a});var e=[];return Array.isArray(b)&&(e=b),e.map((function(e){var a=d(e);return c.a.createElement("source",{type:e.type,srcSet:a,key:a})}))},f=function(){return"string"==typeof i?null:c.a.createElement("img",{className:t,src:o(i),alt:a})};return c.a.createElement("picture",{className:n,ref:F},g(),f())}},897:function(e,a){e.exports=[{sources:{"1200w":"/images/d15287b99740be211756b3f6812a9b5e-coverage.png","1000w":"/images/d15287b99740be211756b3f6812a9b5e-coverage.png","800w":"/images/d15287b99740be211756b3f6812a9b5e-coverage.png","600w":"/images/4d283cf9f45216920f24c103cda91a86-coverage.png","400w":"/images/056fb326b89f5b6d603527396e1bc4fc-coverage.png"},type:"image/png",srcSet:"/images/d15287b99740be211756b3f6812a9b5e-coverage.png 1200w,/images/d15287b99740be211756b3f6812a9b5e-coverage.png 1000w,/images/d15287b99740be211756b3f6812a9b5e-coverage.png 800w,/images/4d283cf9f45216920f24c103cda91a86-coverage.png 600w,/images/056fb326b89f5b6d603527396e1bc4fc-coverage.png 400w",placeholder:{color:[182,181,177,1],url:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMTkiPgogICAgICAgICAgPGZpbHRlciBpZD0ieCI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIC8+CiAgICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgIDxpbWFnZSB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVRDQVlBQUFDUWpDMjFBQUFBQ1hCSVdYTUFBQ0U0QUFBaE9BRkZsakZnQUFBRXowbEVRVlE0eXpXVGZVelVkUnpIZjF2MlIyWHFMQithTGpmYW1vOFk2clRaTk5SbWFwS3VuT1lqUHVFVElQaVlzNXhGdXJsc3E1WFRlSlFuUVVUTjBsS013T000NzQ2RFF3UURQQWtONFo2Zm56aTBYbjN1bXJlOTlubDZmejdmeisvMi9TcmQ5NnFvUEpmRGxRdkZYQ3JMNVdKWmpzVFpYQzdQcGJJc240cVNYTW9LVDFGV2RKcnp4VG1VU2UxNjlrbTZqcVRTbFpYQlgxbVpkR2Z0RTV0QjUyYzdVUzVYNURMaXRUbU1IWmZJbUhIellvd1ZSbytkUzhLTWowaGNzSkU1aWV1Wk8yOEQ4eGNrTTJuV0t0NTVlVHhYQjczQWI2TmY1OWVSWTdnMjlCV3VEUi9GemNGRFVhNWRMbVRDbEtXOE5YMDVVNmN0SXo3aHc1aWRITCtVdVlsclNWcTJnNFdMdHpEL3ZXUStTTm91ZzljUlB6V0pHZkZMbUQ1cG9mQStNNmN1WWVJYjg3bFk4QU9LbzlmSTQxNHJ2WUxaWXNkbWMyR3hPTVE2c1lwdkZyK3Z6eFlqcW92V29ubXIweHZENXZKaGNYam9NYnV3Vys2aWhEM3REQXdNWURRMjBkYldTbE5USTBhaDY0R0o1dVltOUhvdGpZMEc5RHFkb0tXMTlTNFBIM2FMemtETG5XWU1EWHJ1TkJ0bHhoTWlYaE5LME4xSlpPQXBQcDhmdDF0T3RObXhPNXpZN1U1NmVucnA3bjZFMVdyRjRYRElkbGJKTzNDNVBiSzVOYVo5WnNQOVR3aTZPbEQ4dGdiOGpqOEplMHlFM2JLdHp5UW4zU2ZrN2lBUzlYMGQrRDBPQWw2M2FFVG43WkJhT3lGcEhwQ05vdnF3cDRPQTh4NCtxeDdGWjFZVHRPb0kydlNFclBVRUxmVUV6SFVFK3Vydzlxa0lXR3VwdWQ1TzFjL3RFdC9DYjZuRDFWT0R2YnVhZ0VVZDAzdk5xaGcraVpXUVhVZkllVWUyYXlYc2FpSG9iQ1RnYUNMb2FNUm4wOGtXRFRUVUcxSGQxQkx4YVBGYU5MS0pSZ2JmcHQrcEZ4b0lPWFRTbzhWdjE4aC8rRmhQeEd3Z1l0SHp4TjVDdUZjbmFPbnYwek5nYitaZlZ4dkJ2MlhiUnlxZU91N1NiMjRnM0hNYmowbjlQdy9VZUx2cWNkNi9oY3VrUXZuMjArTnNXNTNPM3BSRFpHdzZRTnI2UGFSdDJFTzZrTG41QUx1RjFQV1paRzQ1U0dyeUhuYXYzVWR5MmxhU2lwZnpjY2xLVnBXdFlVWDVhbGFXZnNLaXZDU1VGWXMzTW1od0FzTkd6R0xJcXpNWktuYll5TGQ1Y2RoMEppY3NaOEdpTGN5WXZZclo3NjRqY2VGRzR1SVc4ZHliRTNsK2Z4eWpEazlqK0tFcEREazRnWmYyanlmdW0xa29KdzUvemFhVXowbE55MkpYNnBmczNQVkZqQjA3ajVLVy9oVjc5NTlnZCtZeE1qS1BzMC84MVBRc3R1ODRTa3JLRVRadlBjeFc2ZDIyL1Fock5od2srOWozS0gwZG5VUi9UcmxuSHJlYlFDQkFVQWlGZ29URElZTEJvUGdodWFlK1dEMGFEMFFpUkNMOTlJZkRNVzNRNzQvTnVLL1JvdGk2SHVMMisxRFYxZEZrTk5MYTFvYWhzWkgyamc3MERRMW90RnBxYW1yUnlrdXAxMmd3TkRYUmFUSmhiRzZPMWFPeFhsNkx2ei9NQTUwQnBjdGd4Tzl5eStWMjRwTlg0Sk5iN3hVOFZodHVzeFZYbjVsL25rWjRFZ2xMYklubFl6VjVJVkhyczhtWGllK1YvcGFxYXBUYTdBSnU1UlpUWDN5ZTJqUDUxT1VXb2NvcG91Wkh5ZWVjNVEvSlZWYzJjNk5FTFg0T3RaS3JPcFZMOWVsODFIa2xvaW1rSmp0ZktJalZsTHE4WWpSRjUybTVXb1doNGdyYWtnclVaOCtoS1N4SGxWK0M1bXdSeGQvcEtEMVpKUVB5NVBCQ2ZwZGh0ZG1GUkh2Vm9vbm1ucUdvODB2UmwvOUVmVkU1aHNwZjBNaW10MHNyaFF0b3l5NWl2SFNWRzJjS3FaSk5HaXV2b01vcituOVFYaW1hZ25PeGdkRTRPcXhXK0EvRmE0OEl3WmpVOHdBQUFBQkpSVTVFcmtKZ2dnPT0iIGZpbHRlcj0idXJsKCN4KSIvPgogICAgICAgIDwvc3ZnPg==",ratio:1.0478260869565217}},{sources:{"1200w":"/images/17d2085f1f856c934cc5e313cff9ed0d-coverage.webp","1000w":"/images/17d2085f1f856c934cc5e313cff9ed0d-coverage.webp","800w":"/images/17d2085f1f856c934cc5e313cff9ed0d-coverage.webp","600w":"/images/8bbbcf8382e8060cb63c1b61a8b98624-coverage.webp","400w":"/images/41253080609c1a8cd859c602635f04b8-coverage.webp"},type:"image/webp",srcSet:"/images/17d2085f1f856c934cc5e313cff9ed0d-coverage.webp 1200w,/images/17d2085f1f856c934cc5e313cff9ed0d-coverage.webp 1000w,/images/17d2085f1f856c934cc5e313cff9ed0d-coverage.webp 800w,/images/8bbbcf8382e8060cb63c1b61a8b98624-coverage.webp 600w,/images/41253080609c1a8cd859c602635f04b8-coverage.webp 400w",placeholder:{color:[182,181,177,1],url:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMTkiPgogICAgICAgICAgPGZpbHRlciBpZD0ieCI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIC8+CiAgICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgIDxpbWFnZSB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVRDQVlBQUFDUWpDMjFBQUFBQ1hCSVdYTUFBQ0U0QUFBaE9BRkZsakZnQUFBRXowbEVRVlE0eXpXVGZVelVkUnpIZjF2MlIyWHFMQithTGpmYW1vOFk2clRaTk5SbWFwS3VuT1lqUHVFVElQaVlzNXhGdXJsc3E1WFRlSlFuUVVUTjBsS013T000NzQ2RFF3UURQQWtONFo2Zm56aTBYbjN1bXJlOTlubDZmejdmeisvMi9TcmQ5NnFvUEpmRGxRdkZYQ3JMNVdKWmpzVFpYQzdQcGJJc240cVNYTW9LVDFGV2RKcnp4VG1VU2UxNjlrbTZqcVRTbFpYQlgxbVpkR2Z0RTV0QjUyYzdVUzVYNURMaXRUbU1IWmZJbUhIellvd1ZSbytkUzhLTWowaGNzSkU1aWV1Wk8yOEQ4eGNrTTJuV0t0NTVlVHhYQjczQWI2TmY1OWVSWTdnMjlCV3VEUi9GemNGRFVhNWRMbVRDbEtXOE5YMDVVNmN0SXo3aHc1aWRITCtVdVlsclNWcTJnNFdMdHpEL3ZXUStTTm91ZzljUlB6V0pHZkZMbUQ1cG9mQStNNmN1WWVJYjg3bFk4QU9LbzlmSTQxNHJ2WUxaWXNkbWMyR3hPTVE2c1lwdkZyK3Z6eFlqcW92V29ubXIweHZENXZKaGNYam9NYnV3Vys2aWhEM3REQXdNWURRMjBkYldTbE5USTBhaDY0R0o1dVltOUhvdGpZMEc5RHFkb0tXMTlTNFBIM2FMemtETG5XWU1EWHJ1TkJ0bHhoTWlYaE5LME4xSlpPQXBQcDhmdDF0T3RObXhPNXpZN1U1NmVucnA3bjZFMVdyRjRYRElkbGJKTzNDNVBiSzVOYVo5WnNQOVR3aTZPbEQ4dGdiOGpqOEplMHlFM2JLdHp5UW4zU2ZrN2lBUzlYMGQrRDBPQWw2M2FFVG43WkJhT3lGcEhwQ05vdnF3cDRPQTh4NCtxeDdGWjFZVHRPb0kydlNFclBVRUxmVUV6SFVFK3Vydzlxa0lXR3VwdWQ1TzFjL3RFdC9DYjZuRDFWT0R2YnVhZ0VVZDAzdk5xaGcraVpXUVhVZkllVWUyYXlYc2FpSG9iQ1RnYUNMb2FNUm4wOGtXRFRUVUcxSGQxQkx4YVBGYU5MS0pSZ2JmcHQrcEZ4b0lPWFRTbzhWdjE4aC8rRmhQeEd3Z1l0SHp4TjVDdUZjbmFPbnYwek5nYitaZlZ4dkJ2MlhiUnlxZU91N1NiMjRnM0hNYmowbjlQdy9VZUx2cWNkNi9oY3VrUXZuMjArTnNXNTNPM3BSRFpHdzZRTnI2UGFSdDJFTzZrTG41QUx1RjFQV1paRzQ1U0dyeUhuYXYzVWR5MmxhU2lwZnpjY2xLVnBXdFlVWDVhbGFXZnNLaXZDU1VGWXMzTW1od0FzTkd6R0xJcXpNWktuYll5TGQ1Y2RoMEppY3NaOEdpTGN5WXZZclo3NjRqY2VGRzR1SVc4ZHliRTNsK2Z4eWpEazlqK0tFcEREazRnWmYyanlmdW0xa29KdzUvemFhVXowbE55MkpYNnBmczNQVkZqQjA3ajVLVy9oVjc5NTlnZCtZeE1qS1BzMC84MVBRc3R1ODRTa3JLRVRadlBjeFc2ZDIyL1Fock5od2srOWozS0gwZG5VUi9UcmxuSHJlYlFDQkFVQWlGZ29URElZTEJvUGdodWFlK1dEMGFEMFFpUkNMOTlJZkRNVzNRNzQvTnVLL1JvdGk2SHVMMisxRFYxZEZrTk5MYTFvYWhzWkgyamc3MERRMW90RnBxYW1yUnlrdXAxMmd3TkRYUmFUSmhiRzZPMWFPeFhsNkx2ei9NQTUwQnBjdGd4Tzl5eStWMjRwTlg0Sk5iN3hVOFZodHVzeFZYbjVsL25rWjRFZ2xMYklubFl6VjVJVkhyczhtWGllK1YvcGFxYXBUYTdBSnU1UlpUWDN5ZTJqUDUxT1VXb2NvcG91Wkh5ZWVjNVEvSlZWYzJjNk5FTFg0T3RaS3JPcFZMOWVsODFIa2xvaW1rSmp0ZktJalZsTHE4WWpSRjUybTVXb1doNGdyYWtnclVaOCtoS1N4SGxWK0M1bXdSeGQvcEtEMVpKUVB5NVBCQ2ZwZGh0ZG1GUkh2Vm9vbm1ucUdvODB2UmwvOUVmVkU1aHNwZjBNaW10MHNyaFF0b3l5NWl2SFNWRzJjS3FaSk5HaXV2b01vcituOVFYaW1hZ25PeGdkRTRPcXhXK0EvRmE0OEl3WmpVOHdBQUFBQkpSVTVFcmtKZ2dnPT0iIGZpbHRlcj0idXJsKCN4KSIvPgogICAgICAgIDwvc3ZnPg==",ratio:1.0478260869565217}}]},906:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(673),l=t(189),i=t(663),s=t.n(i),o=t(897),d=t.n(o);a.default=function(){return c.a.createElement(l.a,null,c.a.createElement("section",{className:"hero is-info"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("p",{className:"title"},"📍 Le Lieu"),c.a.createElement("p",{className:"subtitle"},"Comment s'y rendre ? Qu'y a-t-il aux alentours ?"))),c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:"section"},c.a.createElement("h1",{className:"title is-3"},"C'est quoi ? C'est où ?"),c.a.createElement("p",null,"Le gîte est situé au beau milieu de nulle part, à 20min à pied du lac de Saint Point, à 10min en voiture d'un Carrefour Express et à une petite demi-heure du grand super U de Prissé, en banlieue de Macon ! Avec ça, déconnexion garantie ! Les voisins les plus proches sont à 400m, plus loin sur les collines, séparés par des rangées d'arbres du Bernachon."),c.a.createElement("br",null),c.a.createElement("p",{className:"quote"},"⚠️ Ci-dessous, l'itinéraire le plus pratiquable pour y accéder en voiture. Maps propose d'autres itinéraires qui prennent par des chemins de terre pas pratiquables du tout !")),c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column is-2 is-hidden-mobile"}),c.a.createElement("div",{className:"column is-8"},c.a.createElement("div",{className:"".concat(s.a.mapwrapper)},c.a.createElement("iframe",{allowFullScreen:!0,src:"https://www.google.com/maps/embed?pb=!1m36!1m12!1m3!1d22036.197566568233!2d4.591221420845665!3d46.33912991373021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m21!3e0!4m3!3m2!1d46.343891!2d4.620384!4m3!3m2!1d46.344432!2d4.61254!4m3!3m2!1d46.345935!2d4.6053429999999995!4m3!3m2!1d46.334517!2d4.599646!4m3!3m2!1d46.331209!2d4.600778!5e0!3m2!1sen!2sfr!4v1622468747687!5m2!1sen!2sfr",loading:"lazy"}))),c.a.createElement("div",{className:"column is-2 is-hidden-mobile"})),c.a.createElement("section",{className:"section"},c.a.createElement("h1",{className:"title is-3"},"Rapport de connectivité"),c.a.createElement("p",null,"Comme on peut le voir sur les super figures ci-après, la couverture réseau est pas folle aux alentours de Saint Point... On n'a pas du tout de 4G a priori ! Par contre, on devrait, si l'on en croit les chiffres, pouvoir capter la 3G sans problème !",c.a.createElement("br",null),c.a.createElement("br",null),"Petit disclaimer : les chiffres ci-dessous datent de 2015 ! Il se peut que la couverture réseau se ssoit améliorée depuis !")),c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column is-4 is-hidden-mobile"}),c.a.createElement("div",{className:"column is-flex is-justify-content-center\t"},c.a.createElement(n.a,{alt:"Coverage",image:d.a})),c.a.createElement("div",{className:"column is-4 is-hidden-mobile"}))))}}}]);