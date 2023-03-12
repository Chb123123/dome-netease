(function(){var e={2221:function(e,n,t){"use strict";var o=t(8935),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"appContainer"},[t("keep-alive",{attrs:{include:"musicHome, songListSquare, userLike"}},[t("router-view")],1)],1)},i=[],a={components:{}},u=a,c=t(1001),s=(0,c.Z)(u,r,i,!1,null,"3c0965b7",null),l=s.exports,d=t(2809);o.Z.use(d.Z);const f=[{path:"/",component:()=>Promise.all([t.e(972),t.e(272)]).then(t.bind(t,8272))},{path:"/login",component:()=>Promise.all([t.e(972),t.e(883)]).then(t.bind(t,2883))},{path:"/home",component:()=>Promise.all([t.e(972),t.e(272)]).then(t.bind(t,8272))},{path:"/register",component:()=>Promise.all([t.e(972),t.e(339)]).then(t.bind(t,7339))},{path:"/user",component:()=>Promise.all([t.e(972),t.e(800)]).then(t.bind(t,3800)),name:"userLike"},{path:"/like",component:()=>Promise.all([t.e(972),t.e(680)]).then(t.bind(t,8680))},{path:"/playmusic",component:()=>Promise.all([t.e(972),t.e(791)]).then(t.bind(t,6791))},{path:"/searchmusic",component:()=>Promise.all([t.e(972),t.e(177)]).then(t.bind(t,177))},{path:"/singerList",component:()=>t.e(659).then(t.bind(t,8659))},{path:"/songlist",component:()=>Promise.all([t.e(972),t.e(651)]).then(t.bind(t,8651))},{path:"/songlistmusic",name:"songlistmusic",component:()=>Promise.all([t.e(972),t.e(241)]).then(t.bind(t,1241))},{path:"/searchAbout",component:()=>Promise.all([t.e(972),t.e(378)]).then(t.bind(t,9378))},{path:"/comments",component:()=>Promise.all([t.e(972),t.e(897)]).then(t.bind(t,1897))},{path:"/playMv",component:()=>Promise.all([t.e(972),t.e(231)]).then(t.bind(t,5231))},{path:"/mvContainer",component:()=>Promise.all([t.e(972),t.e(698)]).then(t.bind(t,4698))}],p=new d.Z({mode:"history",routes:f});p.beforeEach();var m=p,h=t(5595);t(415),t(8185);o.Z.use(h.ZP),o.Z.filter("formatPlayCount",(function(e){return e>1e4?e>1e8?Math.ceil(e/1e8)+"亿":Math.ceil(e/1e4)+"万":e})),o.Z.config.productionTip=!1,new o.Z({router:m,render:e=>e(l)}).$mount("#app")},8185:function(){(function(e,n){const t=n.documentElement,o=e.devicePixelRatio||1;function r(){n.body?n.body.style.fontSize=12*o+"px":n.addEventListener("DOMContentLoaded",r)}function i(){const e=t.clientWidth/20;t.style.fontSize=e+"px"}if(r(),i(),e.addEventListener("resize",i),e.addEventListener("pageshow",(function(e){e.persisted&&i()})),o>=2){const e=n.createElement("body"),o=n.createElement("div");o.style.border=".5px solid transparent",e.appendChild(o),t.appendChild(e),1===o.offsetHeight&&t.classList.add("hairlines"),t.removeChild(e)}})(window,document)}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{177:"ed2bd3bb",231:"e4a9ea16",241:"601fc730",272:"3a48e24d",339:"b877b0be",378:"d516250b",651:"b1af3c84",659:"7f4b3e9c",680:"6add7671",698:"41a571e7",791:"493e0e75",800:"2ab98d63",883:"230906d8",897:"e1212569",972:"d49cdc46"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{177:"5cada477",231:"0241cd32",241:"168af880",272:"b32b32e4",339:"dab89362",378:"66f47f36",651:"5ecbeeaa",680:"f573f584",698:"21256dec",791:"b601455e",800:"572a8136",883:"7e6a552a",897:"f033af59"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="demo-netease:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=o),e[o]=[r];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),u=t.p+a;if(n(a,u))return r();e(o,u,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={177:1,231:1,241:1,272:1,339:1,378:1,651:1,680:1,698:1,791:1,800:1,883:1,897:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],u=o[1],c=o[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var l=c(t)}for(n&&n(o);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunkdemo_netease"]=self["webpackChunkdemo_netease"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2221)}));o=t.O(o)})();
//# sourceMappingURL=app.738385f0.js.map