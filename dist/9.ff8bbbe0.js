(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"+F3B":function(e,t,r){"use strict";var a=r("oFM2"),u=r.n(a);u.a},"/syf":function(e,t,r){"use strict";var a=r("Aqdx"),u=r.n(a);u.a},"0oul":function(e,t,r){"use strict";var a=r("zDU5"),u=r.n(a);u.a},"4gWU":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Row",{attrs:{gutter:10}},[r("Col",{attrs:{sm:12}},[r("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[r("p",{attrs:{slot:"title"},slot:"title"},[e._v("基础面积图")]),r("BaseArea")],1)],1),r("Col",{attrs:{sm:12}},[r("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[r("p",{attrs:{slot:"title"},slot:"title"},[e._v("基础面积图（有负值）")]),r("BaseAreaNegative")],1)],1),r("Col",{attrs:{sm:12}},[r("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[r("p",{attrs:{slot:"title"},slot:"title"},[e._v("堆叠面积图")]),r("StackedArea")],1)],1),r("Col",{attrs:{sm:12}},[r("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[r("p",{attrs:{slot:"title"},slot:"title"},[e._v("分比堆叠面积图")]),r("StackedPercentageArea")],1)],1),r("Col",{attrs:{sm:24}},[r("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[r("p",{attrs:{slot:"title"},slot:"title"},[e._v("区间面积图")]),r("RangeArea")],1)],1)],1)},u=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"mountNode"}})},o=[],i=r("fxoc"),c=r.n(i),s={data:function(){return{data:[{year:"1991",value:15468},{year:"1992",value:16100},{year:"1993",value:15900},{year:"1994",value:17409},{year:"1995",value:17e3},{year:"1996",value:31056},{year:"1997",value:31982},{year:"1998",value:32040},{year:"1999",value:33233}]}},methods:{creatChart:function(e){var t=new c.a.Chart({container:"mountNode",padding:[40,20,40,40],forceFit:!0,height:400});t.source(e),t.scale({value:{min:1e4},year:{range:[0,1]}}),t.axis("value",{label:{formatter:function(e){return(e/1e4).toFixed(1)+"k"}}}),t.tooltip({crosshairs:{type:"line"}}),t.area().position("year*value"),t.line().position("year*value").size(2),t.render()}},mounted:function(){var e=this;this.$nextTick(function(){e.creatChart(e.data)})}},l=s,m=(r("sIt7"),r("KHd+")),y=Object(m["a"])(l,n,o,!1,null,null,null),p=y.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"mountNode2"}})},h=[],d=r("cQSq"),f=r.n(d),A={data:function(){return{data:[{year:"1996",north:322,south:162},{year:"1997",north:324,south:90},{year:"1998",north:329,south:50},{year:"1999",north:342,south:77},{year:"2000",north:348,south:35},{year:"2001",north:334,south:-45},{year:"2002",north:325,south:-88},{year:"2003",north:316,south:-120},{year:"2004",north:318,south:-156},{year:"2005",north:330,south:-123},{year:"2006",north:355,south:-88},{year:"2007",north:366,south:-66},{year:"2008",north:337,south:-45},{year:"2009",north:352,south:-29},{year:"2010",north:377,south:-45},{year:"2011",north:383,south:-88},{year:"2012",north:344,south:-132},{year:"2013",north:366,south:-146},{year:"2014",north:389,south:-169},{year:"2015",north:334,south:-184}]}},methods:{creatChart:function(e){var t=f.a,r=t.DataView,a=(new r).source(e);a.transform({type:"fold",fields:["north","south"],key:"type",value:"value"});var u=new c.a.Chart({container:"mountNode2",padding:[40,20,40,40],forceFit:!0,height:400});u.source(a,{year:{range:[0,1]}}),u.tooltip({crosshairs:{type:"line"}}),u.area().position("year*value").color("type"),u.line().position("year*value").color("type").size(2),u.render()}},mounted:function(){var e=this;this.$nextTick(function(){e.creatChart(e.data)})}},C=A,k=(r("c0vp"),Object(m["a"])(C,v,h,!1,null,null,null)),b=k.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"mountNode5"}})},E=[],w={data:function(){return{}},methods:{creatChart:function(){var e=[{time:12464064e5,temperature:[14.3,27.7]},{time:12464928e5,temperature:[14.5,27.8]},{time:12465792e5,temperature:[15.5,29.6]},{time:12466656e5,temperature:[16.7,30.7]},{time:1246752e6,temperature:[16.5,25]},{time:12468384e5,temperature:[17.8,25.7]},{time:12469248e5,temperature:[13.5,24.8]},{time:12470112e5,temperature:[10.5,21.4]},{time:12470976e5,temperature:[9.2,23.8]},{time:1247184e6,temperature:[11.6,21.8]},{time:12472704e5,temperature:[10.7,23.7]},{time:12473568e5,temperature:[11,23.3]},{time:12474432e5,temperature:[11.6,23.7]},{time:12475296e5,temperature:[11.8,20.7]},{time:1247616e6,temperature:[12.6,22.4]},{time:12477024e5,temperature:[13.6,19.6]},{time:12477888e5,temperature:[11.4,22.6]},{time:12478752e5,temperature:[13.2,25]},{time:12479616e5,temperature:[14.2,21.6]},{time:1248048e6,temperature:[13.1,17.1]},{time:12481344e5,temperature:[12.2,15.5]},{time:12482208e5,temperature:[12,20.8]},{time:12483072e5,temperature:[12,17.1]},{time:12483936e5,temperature:[12.7,18.3]},{time:124848e7,temperature:[12.4,19.4]},{time:12485664e5,temperature:[12.6,19.9]},{time:12486528e5,temperature:[11.9,20.2]},{time:12487392e5,temperature:[11,19.3]},{time:12488256e5,temperature:[10.8,17.8]},{time:1248912e6,temperature:[11.8,18.5]},{time:12489984e5,temperature:[10.8,16.1]}],t=[{time:12464064e5,temperature:21.5},{time:12464928e5,temperature:22.1},{time:12465792e5,temperature:23},{time:12466656e5,temperature:23.8},{time:1246752e6,temperature:21.4},{time:12468384e5,temperature:21.3},{time:12469248e5,temperature:18.3},{time:12470112e5,temperature:15.4},{time:12470976e5,temperature:16.4},{time:1247184e6,temperature:17.7},{time:12472704e5,temperature:17.5},{time:12473568e5,temperature:17.6},{time:12474432e5,temperature:17.7},{time:12475296e5,temperature:16.8},{time:1247616e6,temperature:17.7},{time:12477024e5,temperature:16.3},{time:12477888e5,temperature:17.8},{time:12478752e5,temperature:18.1},{time:12479616e5,temperature:17.2},{time:1248048e6,temperature:14.4},{time:12481344e5,temperature:13.7},{time:12482208e5,temperature:15.7},{time:12483072e5,temperature:14.6},{time:12483936e5,temperature:15.3},{time:124848e7,temperature:15.3},{time:12485664e5,temperature:15.8},{time:12486528e5,temperature:15.2},{time:12487392e5,temperature:14.8},{time:12488256e5,temperature:14.4},{time:1248912e6,temperature:15},{time:12489984e5,temperature:13.6}],r=new c.a.Chart({container:"mountNode5",padding:[40,20,40,40],forceFit:!0,height:400});r.scale({temperature:{sync:!0},time:{type:"time",mask:"MM-DD",tickInterval:1728e5}}),r.tooltip({crosshairs:{type:"line"}});var a=r.view();a.source(e),a.area().position("time*temperature").tooltip(!1);var u=r.view();u.source(t),u.axis(!1),u.line().position("time*temperature").size(2),u.point().position("time*temperature").size(4).shape("circle").style({stroke:"#fff",lineWidth:1,fillOpacity:1}),r.render()}},mounted:function(){var e=this;this.$nextTick(function(){e.creatChart()})}},x=w,_=(r("/syf"),Object(m["a"])(x,g,E,!1,null,null,null)),O=_.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"mountNode3"}})},N=[],$={data:function(){return{data:[{country:"Asia",year:"1750",value:502},{country:"Asia",year:"1800",value:635},{country:"Asia",year:"1850",value:809},{country:"Asia",year:"1900",value:5268},{country:"Asia",year:"1950",value:4400},{country:"Asia",year:"1999",value:3634},{country:"Asia",year:"2050",value:947},{country:"Africa",year:"1750",value:106},{country:"Africa",year:"1800",value:107},{country:"Africa",year:"1850",value:111},{country:"Africa",year:"1900",value:1766},{country:"Africa",year:"1950",value:221},{country:"Africa",year:"1999",value:767},{country:"Africa",year:"2050",value:133},{country:"Europe",year:"1750",value:163},{country:"Europe",year:"1800",value:203},{country:"Europe",year:"1850",value:276},{country:"Europe",year:"1900",value:628},{country:"Europe",year:"1950",value:547},{country:"Europe",year:"1999",value:729},{country:"Europe",year:"2050",value:408},{country:"Oceania",year:"1750",value:200},{country:"Oceania",year:"1800",value:200},{country:"Oceania",year:"1850",value:200},{country:"Oceania",year:"1900",value:460},{country:"Oceania",year:"1950",value:230},{country:"Oceania",year:"1999",value:300},{country:"Oceania",year:"2050",value:300}]}},methods:{creatChart:function(e){var t=new c.a.Chart({container:"mountNode3",padding:[40,20,40,40],forceFit:!0,height:400});t.source(e,{year:{type:"linear",tickInterval:50}}),t.tooltip({crosshairs:{type:"line"}}),t.areaStack().position("year*value").color("country"),t.lineStack().position("year*value").color("country").size(2),t.render()}},mounted:function(){var e=this;this.$nextTick(function(){e.creatChart(e.data)})}},S=$,z=(r("+F3B"),Object(m["a"])(S,F,N,!1,null,null,null)),B=z.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"mountNode4"}})},D=[],I={data:function(){return{data:[{country:"Asia",year:"1750",value:502},{country:"Asia",year:"1800",value:635},{country:"Asia",year:"1850",value:809},{country:"Asia",year:"1900",value:947},{country:"Asia",year:"1950",value:1402},{country:"Asia",year:"1999",value:3634},{country:"Asia",year:"2050",value:5268},{country:"Africa",year:"1750",value:106},{country:"Africa",year:"1800",value:107},{country:"Africa",year:"1850",value:111},{country:"Africa",year:"1900",value:133},{country:"Africa",year:"1950",value:221},{country:"Africa",year:"1999",value:767},{country:"Africa",year:"2050",value:1766},{country:"Europe",year:"1750",value:163},{country:"Europe",year:"1800",value:203},{country:"Europe",year:"1850",value:276},{country:"Europe",year:"1900",value:408},{country:"Europe",year:"1950",value:547},{country:"Europe",year:"1999",value:729},{country:"Europe",year:"2050",value:628}]}},methods:{creatChart:function(e){var t=f.a,r=t.DataView,a=(new r).source(e);a.transform({type:"percent",field:"value",dimension:"country",groupBy:["year"],as:"percent"});var u=new c.a.Chart({container:"mountNode4",padding:[40,20,40,40],forceFit:!0,height:400});u.source(a,{year:{type:"linear",tickInterval:50},percent:{formatter:function(e){return e=e||0,e*=100,parseInt(e)},alias:"percent(%)"}}),u.tooltip({crosshairs:{type:"line"}}),u.areaStack().position("year*percent").color("country"),u.lineStack().position("year*percent").color("country").size(2),u.render()}},mounted:function(){var e=this;this.$nextTick(function(){e.creatChart(e.data)})}},R=I,T=(r("PbHW"),Object(m["a"])(R,j,D,!1,null,null,null)),U=T.exports,M={components:{BaseArea:p,BaseAreaNegative:b,RangeArea:O,StackedArea:B,StackedPercentageArea:U}},P=M,V=(r("0oul"),Object(m["a"])(P,a,u,!1,null,null,null));t["default"]=V.exports},Aqdx:function(e,t,r){},PbHW:function(e,t,r){"use strict";var a=r("VlA7"),u=r.n(a);u.a},VlA7:function(e,t,r){},c0vp:function(e,t,r){"use strict";var a=r("vFRy"),u=r.n(a);u.a},hYuU:function(e,t,r){},oFM2:function(e,t,r){},sIt7:function(e,t,r){"use strict";var a=r("hYuU"),u=r.n(a);u.a},vFRy:function(e,t,r){},zDU5:function(e,t,r){}}]);
//# sourceMappingURL=9.ff8bbbe0.js.map