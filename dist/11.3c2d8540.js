(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"0+dr":function(t,e,n){},"18Au":function(t,e,n){"use strict";var o=n("aqQv"),a=n.n(o);a.a},"1JBF":function(t,e,n){"use strict";var o=n("vQfT"),a=n.n(o);a.a},"1lld":function(t,e,n){"use strict";var o=n("Tfm2"),a=n.n(o);a.a},"3KZJ":function(t,e,n){"use strict";var o=n("Kd2X"),a=n.n(o);a.a},"5WMf":function(t,e,n){"use strict";var o=n("0+dr"),a=n.n(o);a.a},"60+H":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",{attrs:{gutter:10}},[n("Col",{attrs:{sm:12}},[n("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("基础饼图")]),n("BasePie")],1)],1),n("Col",{attrs:{sm:12}},[n("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("基础饼图-内部文本")]),n("BaseInPie")],1)],1),n("Col",{attrs:{sm:12}},[n("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("基础环形")]),n("BaseDonut")],1)],1),n("Col",{attrs:{sm:12}},[n("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("单色南丁格尔玫瑰图")]),n("nightingaleRose")],1)],1),n("Col",{attrs:{sm:12}},[n("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("多色南丁格尔玫瑰图")]),n("nightingaleRoseMore")],1)],1),n("Col",{attrs:{sm:12}},[n("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("南丁格尔玫瑰环图")]),n("nightingaleRoseDonut")],1)],1)],1)},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mountNode"}})},i=[],l=n("fxoc"),s=n.n(l),u=n("cQSq"),c=n.n(u),p={data:function(){return{data:[{item:"事例一",count:40},{item:"事例二",count:21},{item:"事例三",count:17},{item:"事例四",count:13},{item:"事例五",count:9}]}},methods:{creatChart:function(t){var e=c.a,n=e.DataView,o=new n;o.source(t).transform({type:"percent",field:"count",dimension:"item",as:"percent"});var a=new s.a.Chart({container:"mountNode",padding:[20,20,60,20],forceFit:!0,height:400});a.source(o,{percent:{formatter:function(t){return t=100*t+"%",t}}}),a.coord("theta",{radius:.75}),a.tooltip({showTitle:!1,itemTpl:'<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'}),a.intervalStack().position("percent").color("item").label("percent",{formatter:function(t,e){return e.point.item+": "+t}}).tooltip("item*percent",function(t,e){return e=100*e+"%",{name:t,value:e}}).style({lineWidth:1,stroke:"#fff"}),a.render()}},mounted:function(){var t=this;this.$nextTick(function(){t.creatChart(t.data)})}},d=p,f=(n("1JBF"),n("KHd+")),m=Object(f["a"])(d,r,i,!1,null,null,null),h=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mountNode1"}})},y=[],g={data:function(){return{data:[{item:"事例一",count:40},{item:"事例二",count:21},{item:"事例三",count:17},{item:"事例四",count:13},{item:"事例五",count:9}]}},methods:{creatChart:function(t){var e=c.a,n=e.DataView,o=new n;o.source(t).transform({type:"percent",field:"count",dimension:"item",as:"percent"});var a=new s.a.Chart({container:"mountNode1",padding:[20,20,60,20],forceFit:!0,height:400});a.source(o,{percent:{formatter:function(t){return t=100*t+"%",t}}}),a.coord("theta"),a.tooltip({showTitle:!1,itemTpl:'<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'}),a.intervalStack().position("percent").color("item").label("percent",{offset:-40,textStyle:{rotate:0,textAlign:"center",shadowBlur:2,shadowColor:"rgba(0, 0, 0, .45)"}}).tooltip("item*percent",function(t,e){return e=100*e+"%",{name:t,value:e}}).style({lineWidth:1,stroke:"#fff"}),a.render()}},mounted:function(){var t=this;this.$nextTick(function(){t.creatChart(t.data)})}},C=g,b=(n("5WMf"),Object(f["a"])(C,v,y,!1,null,null,null)),w=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mountNode3"}})},k=[],x={data:function(){return{data:[{item:"事例一",count:40},{item:"事例二",count:21},{item:"事例三",count:17},{item:"事例四",count:13},{item:"事例五",count:9}]}},methods:{creatChart:function(t){var e=c.a,n=e.DataView,o=new n;o.source(t).transform({type:"percent",field:"count",dimension:"item",as:"percent"});var a=new s.a.Chart({container:"mountNode3",padding:[20,20,60,20],forceFit:!0,height:400});a.source(o,{percent:{formatter:function(t){return t=100*t+"%",t}}}),a.coord("theta",{radius:.75,innerRadius:.6}),a.tooltip({showTitle:!1,itemTpl:'<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'}),a.guide().html({position:["50%","50%"],html:'<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',alignX:"middle",alignY:"middle"});var r=a.intervalStack().position("percent").color("item").label("percent",{formatter:function(t,e){return e.point.item+": "+t}}).tooltip("item*percent",function(t,e){return e=100*e+"%",{name:t,value:e}}).style({lineWidth:1,stroke:"#fff"});a.render(),r.setSelected(o.rows[0])}},mounted:function(){var t=this;this.$nextTick(function(){t.creatChart(t.data)})}},T=x,N=(n("vb4U"),Object(f["a"])(T,_,k,!1,null,null,null)),$=N.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mountNode4"}})},E=[],O={data:function(){return{data:[{year:"2001",population:41.8},{year:"2002",population:38},{year:"2003",population:33.7},{year:"2004",population:30.7},{year:"2005",population:25.8},{year:"2006",population:31.7},{year:"2007",population:33},{year:"2008",population:46},{year:"2009",population:38.3},{year:"2010",population:28},{year:"2011",population:42.5},{year:"2012",population:30.3}]}},methods:{creatChart:function(t){var e=new s.a.Chart({container:"mountNode4",padding:[20,20,60,20],forceFit:!0,height:400});e.source(t),e.coord("polar"),e.axis(!1),e.interval().position("year*population").label("year",{offset:-15}).style({lineWidth:1,stroke:"#fff"}),e.render()}},mounted:function(){var t=this;this.$nextTick(function(){t.creatChart(t.data)})}},R=O,F=(n("ePOE"),Object(f["a"])(R,B,E,!1,null,null,null)),W=F.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mountNode5"}})},D=[],J={data:function(){return{data:[{year:"2001",population:41.8},{year:"2002",population:38},{year:"2003",population:33.7},{year:"2004",population:30.7},{year:"2005",population:25.8},{year:"2006",population:31.7},{year:"2007",population:33},{year:"2008",population:46},{year:"2009",population:38.3},{year:"2010",population:28},{year:"2011",population:42.5},{year:"2012",population:30.3}]}},methods:{creatChart:function(t){var e=new s.a.Chart({container:"mountNode5",padding:[60,20,20,20],forceFit:!0,height:400});e.source(t),e.coord("polar"),e.legend({position:"right",offsetY:-window.innerHeight/2+180,offsetX:-140}),e.axis(!1),e.interval().position("year*population").color("year",s.a.Global.colors_pie_16).style({lineWidth:1,stroke:"#fff"}),e.render()}},mounted:function(){var t=this;this.$nextTick(function(){t.creatChart(t.data)})}},P=J,S=(n("1lld"),Object(f["a"])(P,j,D,!1,null,null,null)),A=S.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mountNode6"}})},Q=[],X={data:function(){return{data:[{year:"2001",population:41.8},{year:"2002",population:38},{year:"2003",population:33.7},{year:"2004",population:30.7},{year:"2005",population:25.8},{year:"2006",population:31.7},{year:"2007",population:33},{year:"2008",population:46},{year:"2009",population:38.3},{year:"2010",population:28},{year:"2011",population:42.5},{year:"2012",population:30.3}]}},methods:{creatChart:function(t){var e=new s.a.Chart({container:"mountNode6",padding:[60,20,20,20],forceFit:!0,height:400});e.source(t),e.coord("polar",{innerRadius:.2}),e.legend({position:"right",offsetY:-window.innerHeight/2+180,offsetX:-140}),e.axis(!1),e.interval().position("year*population").color("year",s.a.Global.colors_pie_16).style({lineWidth:1,stroke:"#fff"}),e.render()}},mounted:function(){var t=this;this.$nextTick(function(){t.creatChart(t.data)})}},Y=X,H=(n("3KZJ"),Object(f["a"])(Y,K,Q,!1,null,null,null)),M=H.exports,q={components:{BasePie:h,BaseInPie:w,BaseDonut:$,nightingaleRose:W,nightingaleRoseMore:A,nightingaleRoseDonut:M}},V=q,z=(n("18Au"),Object(f["a"])(V,o,a,!1,null,null,null));e["default"]=z.exports},ArnY:function(t,e,n){},Kd2X:function(t,e,n){},Tfm2:function(t,e,n){},aqQv:function(t,e,n){},ePOE:function(t,e,n){"use strict";var o=n("govN"),a=n.n(o);a.a},govN:function(t,e,n){},vQfT:function(t,e,n){},vb4U:function(t,e,n){"use strict";var o=n("ArnY"),a=n.n(o);a.a}}]);
//# sourceMappingURL=11.3c2d8540.js.map