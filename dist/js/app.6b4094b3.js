(function(e){function t(t){for(var a,c,o=t[0],l=t[1],u=t[2],i=0,f=[];i<o.length;i++)c=o[i],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(f.length)f.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(a=!1)}a&&(n.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},r={app:0},n=[];function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=l;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"025c":function(e,t,s){"use strict";var a=s("bd91"),r=s.n(a);r.a},1:function(e,t){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],c=(s("cf25"),s("2877")),o={},l=Object(c["a"])(o,r,n,!1,null,null,null),u=l.exports,d=s("8c4f"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("h2",[e._v("Globally:")]),e.summary.Global?s("vs-row",e._l(e.summary.Global,(function(t,a,r){return s("vs-col",{key:r,attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-lg":"2","vs-sm":"6","vs-xs":"12"}},[s("vs-alert",{staticClass:"summary",attrs:{title:a,color:e.colors[r],active:"true"}},[e._v(e._s(t)+" ")])],1)})),1):e._e(),s("hr"),s("h2",[e._v("Locally:")]),s("vs-select",{staticClass:"selectExample",attrs:{autocomplete:"",label:"Select Country:"},on:{change:e.countryChanged},model:{value:e.selectedCountry,callback:function(t){e.selectedCountry=t},expression:"selectedCountry"}},e._l(e.summary.Countries,(function(e,t){return s("vs-select-item",{key:t,attrs:{value:e.CountryCode,text:e.Country}})})),1),s("div",{attrs:{id:"loadingResults"}},[e.lastScan?s("div",[s("h4",[e._v(" Last update: "+e._s(e.lastScan.Date.slice(0,10))+" ")]),s("vs-row",[s("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-lg":"4","vs-sm":"3","vs-xs":"12"}},[s("vs-alert",{staticClass:"summary",attrs:{title:"Confirmed",color:e.colors[0],active:"true"}},[e._v(e._s(e.lastScan.Confirmed||0)+" ")])],1),s("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-lg":"4","vs-sm":"3","vs-xs":"12"}},[s("vs-alert",{staticClass:"summary",attrs:{title:"Deaths",color:e.colors[3],active:"true"}},[e._v(e._s(e.lastScan.Deaths||0)+" ")])],1),s("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-lg":"4","vs-sm":"3","vs-xs":"12"}},[s("vs-alert",{staticClass:"summary",attrs:{title:"Recovered",color:e.colors[5],active:"true"}},[e._v(e._s(e.lastScan.Recovered||0)+" ")])],1)],1)],1):e._e()]),e._m(0)],1)},f=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chart-container"},[s("canvas",{attrs:{id:"globalChart"}})])}],b=(s("4160"),s("fb6a"),s("d3b7"),s("25f0"),s("159b"),s("30ef")),j=s.n(b),v={name:"Dashboard",data:function(){return{summary:{},colors:["primary","success","danger","dark","warning","#5b3cc4"],selectedCountry:null,country:null,lastScan:null}},components:{},methods:{countryChanged:function(){var e=this;this.country=null,this.lastScan=null,this.selectedCountry&&this.$http.get("country/".concat(this.selectedCountry.toString())).then((function(t){e.country=t.body,e.lastScan=e.country[e.country.length-1],e.drawGlobalChart(e.country)}))},drawGlobalChart:function(e){var t={Active:[],City:[],CityCode:[],Confirmed:[],Country:[],CountryCode:[],Date:[],Deaths:[],Lat:[],Lon:[],Province:[],Recovered:[]};e.forEach((function(e){t.Active.push(e.Active),t.City.push(e.City),t.CityCode.push(e.CityCode),t.Confirmed.push(e.Confirmed),t.Country.push(e.Country),t.CountryCode.push(e.CountryCode),t.Date.push(e.Date.slice(0,10)),t.Deaths.push(e.Deaths),t.Lat.push(e.Lat),t.Lon.push(e.Lon),t.Province.push(e.Province),t.Recovered.push(e.Recovered)}));var s=document.getElementById("globalChart");new j.a(s,{type:"line",data:{labels:t.Date,datasets:[{label:"Confirmed",type:"line",borderColor:"#2fa2a2",backgroundColor:"rgba(47,162,162,0.3)",data:t.Confirmed,borderWidth:1},{label:"Recovered",type:"line",borderColor:"#6bcd01",backgroundColor:"rgba(47,162,162,0.3)",data:t.Recovered,borderWidth:1},{label:"Deaths",type:"line",borderColor:"#001521",backgroundColor:"rgba(0,0,0,0.3)",data:t.Deaths,borderWidth:1}]},options:{title:{display:!0,text:"Covid-19 infection"},scales:{yAxes:[{ticks:{beginAtZero:!1}}]}}})}},computed:{latestScan:function(){return this.country[this.country.length-1]}},created:function(){var e=this;this.$http.get("summary").then((function(t){e.summary=t.body}))}},h=v,y=(s("025c"),Object(c["a"])(h,i,f,!1,null,null,null)),p=y.exports;a["default"].use(d["a"]);var m=[{path:"/",name:"Dashboard",component:p}],g=new d["a"]({mode:"history",base:"/",routes:m}),C=g,k=s("fb9a"),_=s.n(k),w=s("28dd");s("04f2"),s("c789");a["default"].use(w["a"]),a["default"].http.options.root="https://api.covid19api.com/",a["default"].use(_.a,{}),a["default"].config.productionTip=!1,new a["default"]({router:C,render:function(e){return e(u)}}).$mount("#app")},bd91:function(e,t,s){},cf25:function(e,t,s){"use strict";var a=s("fea6"),r=s.n(a);r.a},fea6:function(e,t,s){}});
//# sourceMappingURL=app.6b4094b3.js.map