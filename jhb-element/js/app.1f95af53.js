(function(e){function n(n){for(var r,u,c=n[0],i=n[1],l=n[2],s=0,f=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(f.length)f.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,u=1;u<t.length;u++){var c=t[u];0!==a[c]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},u={app:0},a={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1570c49b":"a3bfb8f5","chunk-191a89ae":"7e933629","chunk-1d1c598a":"3320abd2","chunk-219d0e84":"076adb77","chunk-26bf4a6e":"450aff34","chunk-2d653ed1":"684e6d32","chunk-30f42400":"f626aaf9","chunk-325e8f6f":"a786dad0","chunk-489ff133":"01e54daa","chunk-692c4907":"4b287b25","chunk-76f0a1bd":"8e86a455","chunk-be8751aa":"076300ca","chunk-c3cf1d6e":"23e15c88","chunk-d382435e":"6bff1334","chunk-e4012d44":"369f7e87"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1570c49b":1,"chunk-191a89ae":1,"chunk-1d1c598a":1,"chunk-219d0e84":1,"chunk-26bf4a6e":1,"chunk-2d653ed1":1,"chunk-30f42400":1,"chunk-325e8f6f":1,"chunk-489ff133":1,"chunk-692c4907":1,"chunk-76f0a1bd":1,"chunk-be8751aa":1,"chunk-c3cf1d6e":1,"chunk-d382435e":1,"chunk-e4012d44":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-1570c49b":"3cc3fcd5","chunk-191a89ae":"25654530","chunk-1d1c598a":"4903b6fc","chunk-219d0e84":"355dd7d4","chunk-26bf4a6e":"4303250b","chunk-2d653ed1":"59dfd696","chunk-30f42400":"4e5f2197","chunk-325e8f6f":"b95bfdd5","chunk-489ff133":"38d35d23","chunk-692c4907":"b75861ff","chunk-76f0a1bd":"5c744fef","chunk-be8751aa":"0154630d","chunk-c3cf1d6e":"e4622dc7","chunk-d382435e":"c54598f5","chunk-e4012d44":"813a980a"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return n()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===a)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete u[e],h.parentNode.removeChild(h),t(o)},h.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){u[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var f=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(h);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",f.name="ChunkLoadError",f.type=r,f.request=u,t[1](f)}a[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/jhb-element/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var h=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"4ffd":function(e,n,t){e.exports=t.p+"img/logo.d0ba2469.png"},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("a026"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e._m(0),t("div",{staticClass:"jhb-doc"},[t("div",{staticClass:"side-bar"},[t("div",{staticClass:"menu-list"},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),t("router-link",{attrs:{to:"/test"}},[e._v("Test")]),t("router-link",{attrs:{to:"/button"}},[e._v("Button")]),t("router-link",{attrs:{to:"/link"}},[e._v("Link")]),t("router-link",{attrs:{to:"/radio"}},[e._v("Radio")]),t("router-link",{attrs:{to:"/checkbox"}},[e._v("Checkbox")]),t("router-link",{attrs:{to:"/input"}},[e._v("Input")]),t("router-link",{attrs:{to:"/inputNumber"}},[e._v("InputNumber")]),t("router-link",{attrs:{to:"/select"}},[e._v("Select")]),t("router-link",{attrs:{to:"/time"}},[e._v("Time")]),t("router-link",{attrs:{to:"/alert"}},[e._v("Notice")]),t("router-link",{attrs:{to:"/tab"}},[e._v("Tabs")]),t("router-link",{attrs:{to:"/result"}},[e._v("Result")]),t("router-link",{attrs:{to:"/tag"}},[e._v("Tag")]),t("router-link",{attrs:{to:"/switch"}},[e._v("Switch")]),t("router-link",{attrs:{to:"/pagination"}},[e._v("Other")])],1)]),t("div",{staticClass:"app-main"},[t("div",{staticClass:"main-content"},[t("router-view")],1)])])])},a=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"logo-container"},[r("img",{staticClass:"icon-logo",attrs:{src:t("4ffd")}}),e._v("JHB Element UI\n  ")])}],o=(t("e338"),t("2877")),c={},i=Object(o["a"])(c,u,a,!1,null,"8f8b8062",null),l=i.exports,s=t("8c4f"),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("my-markdown")],1)},h=[],d=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h1",[e._v("jhb-element-ui")]),t("h4",[e._v("介绍")]),t("p",[e._v("本项目基于 Vue，对 Element-UI 常用组件进行二次封装，提供后台管理系统中常用组件的开箱即用。部分组件在相应文件夹下提供了配置文件，稍微改动配置或部分代码即可实现常见业务需求。本项目只提供组件的封装使用，不提供后台管理系统模板，请自行搭建或搭配其它后台管理系统模板")]),t("h4",[e._v("软件架构")]),t("ol",[t("li",[e._v("Vue.js")]),t("li",[e._v("element-ui")]),t("li",[e._v("axios（理论上兼容其它基于 Promise 的网络请求库)")])]),t("h4",[e._v("安装教程")]),t("p",[e._v("NPM:")]),t("ol",[t("li",[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v("npm install jhb-element-ui\n")])])]),t("li",[t("p",[e._v("main.js 引入 jhb-element-ui:")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v('    import JHBElement from "jhb-element-ui";\n    import ElementUI from \'element-ui\';\n    import "element-ui/lib/theme-chalk/index.css";\n    import "jhb-element-ui/lib/jhb-element-ui.css";\n\n    Vue.use(ElementUI);\n    Vue.use(JHBElement);\n\n')])])]),t("li",[t("p",[e._v("引用组件。")])])]),t("p",[e._v("克隆项目:")]),t("ol",[t("li",[e._v("下载或克隆本项目到本地；")]),t("li",[e._v("将根目录下 packages 文件夹内文件及其它依赖文件拷贝到开发项目中；")]),t("li",[e._v("配置组件默认参数，或根据自身需求修改源码；")]),t("li",[e._v("引用组件。")])]),t("h4",[e._v("使用说明")]),t("ol",[t("li",[t("h5",[e._v("JHBButton")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":""}},[e._v('<JHB-button base-style="Primary" right-icon="el-icon-dianzan">常规</JHB-button>\n\n')])])])])])}],m={},b=Object(o["a"])(m,d,p,!1,null,null,null),k=b.exports,v={components:{myMarkdown:k}},_=v,g=Object(o["a"])(_,f,h,!1,null,null,null),E=g.exports;r["default"].use(s["a"]);var y=[{path:"/",name:"Home",component:E},{path:"/test",name:"JHBMerchantStatistics",component:function(){return t.e("chunk-489ff133").then(t.bind(null,"feda"))}},{path:"/button",name:"ElButton",component:function(){return t.e("chunk-1d1c598a").then(t.bind(null,"f48c"))}},{path:"/link",name:"ElLink",component:function(){return t.e("chunk-26bf4a6e").then(t.bind(null,"9a83"))}},{path:"/radio",name:"ElRadio",component:function(){return t.e("chunk-76f0a1bd").then(t.bind(null,"94f5"))}},{path:"/checkbox",name:"ElCheckbox",component:function(){return t.e("chunk-e4012d44").then(t.bind(null,"4581"))}},{path:"/input",name:"ElInput",component:function(){return t.e("chunk-325e8f6f").then(t.bind(null,"1788"))}},{path:"/inputNumber",name:"ElInputNumber",component:function(){return t.e("chunk-be8751aa").then(t.bind(null,"73db"))}},{path:"/select",name:"ElSelect",component:function(){return t.e("chunk-2d653ed1").then(t.bind(null,"6f9e"))}},{path:"/time",name:"Eltime",component:function(){return t.e("chunk-c3cf1d6e").then(t.bind(null,"15d4"))}},{path:"/alert",name:"ElAlert",component:function(){return t.e("chunk-30f42400").then(t.bind(null,"edb2"))}},{path:"/tab",name:"ElTab",component:function(){return t.e("chunk-219d0e84").then(t.bind(null,"99ac"))}},{path:"/result",name:"ElResult",component:function(){return t.e("chunk-191a89ae").then(t.bind(null,"6231"))}},{path:"/tag",name:"Eltag",component:function(){return t.e("chunk-692c4907").then(t.bind(null,"6613"))}},{path:"/switch",name:"ElSwitch",component:function(){return t.e("chunk-1570c49b").then(t.bind(null,"5f7b"))}},{path:"/pagination",name:"ElPagination",component:function(){return t.e("chunk-d382435e").then(t.bind(null,"afea"))}}],w=new s["a"]({routes:y}),j=w,x=t("2f62");r["default"].use(x["a"]);var C=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=(t("a2f0"),t("cc5c"),t("5c96")),S=t.n(O);t("0fae");r["default"].config.productionTip=!1,r["default"].use(S.a),new r["default"]({router:j,store:C,render:function(e){return e(l)}}).$mount("#app")},a2f0:function(e,n,t){},cc5c:function(e,n,t){},db88:function(e,n,t){},e338:function(e,n,t){"use strict";t("db88")}});
//# sourceMappingURL=app.1f95af53.js.map