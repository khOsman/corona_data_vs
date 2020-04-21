(this.webpackJsonpcorona_data_vs=this.webpackJsonpcorona_data_vs||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__vbHDj",card:"Cards_card__2C9fT",infected:"Cards_infected__vWJFe",recovered:"Cards_recovered__jSIAQ",recoveredheader:"Cards_recoveredheader__XKWHB",deaths:"Cards_deaths__4pKXk"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(73),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(74),d=a(75),m=a(85),p=a(84),f=a(32),v=a.n(f),h="https://covid19.mathdro.id/api",b=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=h,t&&(a="".concat(h,"/countries/").concat(t)),e.prev=2,e.next=5,v.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat(h,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat(h,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),y=a(33),g=a.n(y),C=a(225),x=a(229),w=a(226),O=a(227),j=a(34),k=a.n(j),D=a(13),N=a.n(D),S=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:N.a.container},r.a.createElement(C.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(C.a,{item:!0,xs:12,md:3,component:x.a,className:k()(N.a.card,N.a.infected)},r.a.createElement(w.a,null,r.a.createElement(O.a,{variant:"h5",color:"primary",gutterBottom:!0},"Infected"),r.a.createElement(O.a,{variant:"h5",component:"h2"},r.a.createElement(g.a,{start:0,end:a.value,duration:2.75,separator:","})),r.a.createElement(O.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(O.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19."))),r.a.createElement(C.a,{item:!0,xs:12,md:3,component:x.a,className:k()(N.a.card,N.a.recovered)},r.a.createElement(w.a,null,r.a.createElement(O.a,{className:N.a.recoveredheader,variant:"h5",gutterBottom:!0},"Recovered"),r.a.createElement(O.a,{variant:"h5",component:"h2"},r.a.createElement(g.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(O.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(O.a,{variant:"body2",component:"p"},"Number of recoveries from COVID-19."))),r.a.createElement(C.a,{item:!0,xs:12,md:3,component:x.a,className:k()(N.a.card,N.a.deaths)},r.a.createElement(w.a,null,r.a.createElement(O.a,{variant:"h5",color:"secondary",gutterBottom:!0},"Deaths"),r.a.createElement(O.a,{variant:"h5",component:"h2"},r.a.createElement(g.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(O.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(O.a,{variant:"body2",component:"p"},"Number of deaths caused by COVID-19."))))):"Loading..."},I=a(31),V=a(46),A=a(81),B=a.n(A),F=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)({}),d=Object(I.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(V.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,v=m[0]?r.a.createElement(V.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:B.a.container},u?f:v)},L=a(230),T=a(228),U=a(82),W=a.n(U),G=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(I.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,_();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(L.a,{className:W.a.formControl},r.a.createElement(T.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},H=a(35),J=a.n(H),K=function(){return r.a.createElement("div",{className:J.a.container},r.a.createElement("p",{className:J.a.footerTag},"Re-developed by"," ",r.a.createElement("a",{className:J.a.footerLink,href:"https://www.linkedin.com/in/md-osman-haruni-shin-32127818b/",target:"_blank"},r.a.createElement("strong",null,"Khan Osman"))))},R=a(47),X=a.n(R),P=a(83),z=a.n(P),M=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:X.a.container},r.a.createElement("img",{className:X.a.image,src:z.a,alt:"COVID-19"}),r.a.createElement(S,{data:t}),r.a.createElement(G,{handleCountryChange:this.handleCountryChange}),r.a.createElement(F,{data:t,country:a}),r.a.createElement(K,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(M,null),document.getElementById("root"))},35:function(e,t,a){e.exports={container:"Footer_container__3pGdA",footerTag:"Footer_footerTag__Fmcmj",footerLink:"Footer_footerLink__UXHoc"}},47:function(e,t,a){e.exports={container:"App_container__2WOC2",image:"App_image__1igZp"}},81:function(e,t,a){e.exports={container:"Chart_container__1wyGV"}},82:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2CxWz"}},83:function(e,t,a){e.exports=a.p+"static/media/corona2.ff66dce0.png"},88:function(e,t,a){e.exports=a(208)}},[[88,1,2]]]);
//# sourceMappingURL=main.a52dd1aa.chunk.js.map