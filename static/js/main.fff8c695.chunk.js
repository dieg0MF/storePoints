(this["webpackJsonpstore-Fried-Diego"]=this["webpackJsonpstore-Fried-Diego"]||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/coin.4669120c.svg"},34:function(e,t,n){e.exports=n(54)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){e.exports=n.p+"static/media/buy-blue.2f11a957.svg"},42:function(e,t,n){},43:function(e,t,n){e.exports=n.p+"static/media/aerolab-logo.71af6f4b.svg"},44:function(e,t,n){e.exports=n.p+"static/media/header-x1.f0b98264.png"},48:function(e,t,n){},49:function(e,t,n){e.exports=n.p+"static/media/arrow-left.2e6efe58.svg"},50:function(e,t,n){e.exports=n.p+"static/media/arrow-right.bedef383.svg"},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(5),r=n.n(c),l=(n(39),n(40),n(3)),i=o.a.createContext();function s(e){var t=e.children,n=Object(a.useState)([]),c=Object(l.a)(n,2),r=c[0],s=c[1],u=Object(a.useState)({}),d=Object(l.a)(u,2),m=d[0],p=d[1],g=Object(a.useState)([]),O=Object(l.a)(g,2),E=O[0],f=O[1],b=Object(a.useState)(null),h=Object(l.a)(b,2),j=h[0],C=h[1],P=Object(a.useState)(0),v=Object(l.a)(P,2),I=v[0],N=v[1],J=Object(a.useState)(),A=Object(l.a)(J,2),D=A[0],T=A[1],k=Object(a.useState)(""),y=Object(l.a)(k,2),L=y[0],Z=y[1],x=Object(a.useState)("principal"),w=Object(l.a)(x,2),S=w[0],H=w[1],M=Object(a.useState)("principal"),Q=Object(l.a)(M,2),z=Q[0],U=Q[1],B=Object(a.useState)([0,16]),K=Object(l.a)(B,2),R=K[0],V=K[1];return o.a.createElement(i.Provider,{value:{allProducts:r,setAllProducts:s,user:m,setUser:p,historyProducts:E,setHistoryProducts:f,points:j,setPoints:C,redeem:D,setRedeem:T,handlerPoints:I,setHandlerPoints:N,redeemProductId:L,setRedeemProductId:Z,orderProducts:S,setOrderProducts:H,higestLowest:z,setHigestLowest:U,pagination:R,setPagination:V}},t)}var u=function(){var e=Object(a.useContext)(i),t=(e.allProducts,e.setAllProducts),n=Object(a.useState)(!0),o=Object(l.a)(n,2),c=o[0],r=o[1];return Object(a.useEffect)((function(){c&&fetch("https://coding-challenge-api.aerolab.co/products",{method:"GET",headers:{"Content-Type":"application/json",Acept:"application/jsoon",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0ZDNhYzJiNjU3MDAwMWZjZTZjNDQiLCJpYXQiOjE2MDE0OTE4ODV9.z7gZETAOoSL2NAHAKubUs4br9ka9D407fZnCvns3I0c"}}).then((function(e){return e.json()})).then((function(e){t(e),r(!1)}))}),[c,t]),null},d=function(e){var t=e.product,c=Object(a.useContext)(i).user,r=Object(a.useContext)(i),l=(r.allProducts,r.setAllProductos,Object(a.useContext)(i)),s=(l.redeemProductId,l.setRedeemProductId);return o.a.createElement("article",{className:"Card"},o.a.createElement("img",{src:n(41),alt:"Logo",id:"buy-blue"}),o.a.createElement("img",{id:t._id,src:t.img.url,alt:"",width:"200",height:"200",onClick:function(e){s(e.target.id),console.log("MMMMM",e.target.id)}}),o.a.createElement("h5",null,t.name),o.a.createElement("section",null,o.a.createElement("h6",null,t.category),o.a.createElement(o.a.Fragment,null,c.points<t.cost?o.a.createElement("p",null," ",t.cost-c.points):o.a.createElement("p",null," ",t.cost," ",o.a.createElement("img",{src:n(29),alt:"Logo",id:"Coin"})," "))))},m=function(){var e=Object(a.useContext)(i),t=e.allProducts,n=(e.setAllProducts,Object(a.useState)(t)),c=Object(l.a)(n,2),r=c[0],s=c[1],u=Object(a.useContext)(i),m=u.higestLowest,p=(u.setHigestLowest,Object(a.useContext)(i)),g=p.orderProducts,O=(p.setOrderProducts,Object(a.useContext)(i)),E=O.pagination;O.setPagination;return console.log("LLegaaCARD",g),console.log("Products",r),console.log("LLegaaCARD",t),console.log("ProductsLLEGANDO",r),console.log("PaginaTIONNNNN",E),console.log("PaginaTIONNNNN 0",E[0]),console.log("PaginaTIONNNNN 1",E[1]),Object(a.useEffect)((function(){"principal"!==g&&(console.log("esta funcionando",t),console.log("BUENOOOO",t),s(t.filter((function(e){return e.category===g}))))}),[g]),"principal"===g&&"principal"===m?t.slice(E[0],E[1]).map((function(e){return o.a.createElement(d,{key:e._id,product:e})})):"principal"===g&&"Higest"===m?(console.log("esta funcionandoDOBLECONDI",r),t.sort((function(e,t){return parseFloat(t.cost)-parseFloat(e.cost)})).slice(E[0],E[1]).map((function(e){return o.a.createElement(d,{key:e._id,product:e})}))):"principal"===g&&"Lowest"===m?(console.log("esta funcionandoLOWESTTTTT",r),t.sort((function(e,t){return parseFloat(e.cost)-parseFloat(t.cost)})).slice(E[0],E[1]).map((function(e){return o.a.createElement(d,{key:e._id,product:e})}))):"principal"!==g&&"Higest"===m?(console.log("esta funcionandoDOBLECONDI",t),r.sort((function(e,t){return parseFloat(t.cost)-parseFloat(e.cost)})).map((function(e){return o.a.createElement(d,{key:e._id,product:e})}))):"principal"!==g&&"Lowest"===m?r.sort((function(e,t){return parseFloat(e.cost)-parseFloat(t.cost)})).map((function(e){return o.a.createElement(d,{key:e._id,product:e})})):"principal"!==g?(console.log("esta funcionando",t),console.log("BUENOOOO",t),r.map((function(e){return o.a.createElement(d,{key:e._id,product:e})}))):void 0};n(42);var p=function(){var e=Object(a.useContext)(i).user;return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"headerTop"},o.a.createElement("img",{className:"headerItems ",id:"aerolab",src:n(43),width:"25",height:"25",alt:"Logo"}),o.a.createElement("p",{className:"headerItems"},e.name," ",o.a.createElement("button",null,"  ",e.points,"    ",o.a.createElement("img",{src:n(29),alt:"Logo"})))),o.a.createElement("img",{id:"headerImg",src:n(44),alt:"Logo"}))},g=function(){var e=Object(a.useContext)(i),t=e.user,n=e.setUser,c=Object(a.useContext)(i),r=c.handlerPoints,l=(c.setHandlerPoints,Object(a.useContext)(i)),s=l.redeem;l.setRedeem;return Object(a.useEffect)((function(){fetch("https://coding-challenge-api.aerolab.co/user/me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0ZDNhYzJiNjU3MDAwMWZjZTZjNDQiLCJpYXQiOjE2MDE0OTE4ODV9.z7gZETAOoSL2NAHAKubUs4br9ka9D407fZnCvns3I0c"}}).then((function(e){return e.json()})).then((function(e){n(e)}))}),[n,s,r]),console.log("userActUALIZADOS",t),o.a.createElement("p",null)},O=function(){var e=Object(a.useContext)(i),t=e.historyProducts,n=e.setHistoryProducts,c=Object(a.useState)(!0),r=Object(l.a)(c,2),s=r[0],u=r[1],d=Object(a.useContext)(i),m=d.redeem;d.setRedeem;return Object(a.useEffect)((function(){fetch("https://coding-challenge-api.aerolab.co/user/history",{method:"GET",headers:{"Content-Type":"application/json",Acept:"application/jsoon",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0ZDNhYzJiNjU3MDAwMWZjZTZjNDQiLCJpYXQiOjE2MDE0OTE4ODV9.z7gZETAOoSL2NAHAKubUs4br9ka9D407fZnCvns3I0c"}}).then((function(e){return e.json()})).then((function(e){n(e),u(!1)}))}),[s,n,m]),console.log("history",t),o.a.createElement("p",null)},E=function(){var e=Object(a.useContext)(i),t=e.points,n=e.setPoints,o=Object(a.useContext)(i),c=o.handlerPoints,r=o.setHandlerPoints;return console.log("llega",c),Object(a.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json",Acept:"application/jsoon",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0ZDNhYzJiNjU3MDAwMWZjZTZjNDQiLCJpYXQiOjE2MDE0OTE4ODV9.z7gZETAOoSL2NAHAKubUs4br9ka9D407fZnCvns3I0c"},body:JSON.stringify({amount:parseInt(c)})};0!==c&&fetch("https://coding-challenge-api.aerolab.co/user/points",e).then((function(e){return e.json()})).then((function(e){n(e),r(0),console.log("addPoints",t),console.log("addPoints",c)}))}),[0!==c]),console.log("seVA",c),console.log("Puntos actualizados",t),null},f=function(){var e=Object(a.useContext)(i),t=e.redeem,n=e.setRedeem,c=Object(a.useState)(!0),r=Object(l.a)(c,2),s=(r[0],r[1]),u=Object(a.useContext)(i),d=u.redeemProductId,m=u.setRedeemProductId;return Object(a.useEffect)((function(){""!==d&&fetch("https://coding-challenge-api.aerolab.co/redeem",{method:"POST",headers:{"Content-Type":"application/json",Acept:"application/jsoon",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0ZDNhYzJiNjU3MDAwMWZjZTZjNDQiLCJpYXQiOjE2MDE0OTE4ODV9.z7gZETAOoSL2NAHAKubUs4br9ka9D407fZnCvns3I0c"},body:JSON.stringify({productId:d})}).then((function(e){return e.json()})).then((function(e){n(e),s(!1),m("")}))}),[d]),console.log("redeem",t),o.a.createElement("p",null)};var b=function(){var e=Object(a.useContext)(i),t=e.handlerPoints,n=e.setHandlerPoints,c=function(e){n(e.target.value),console.log("ADDPOINTS",e.target.value)};return console.log("handlerPoints",t),o.a.createElement("div",null,o.a.createElement("img",{className:"animate__shakeY ",src:"/money.png",alt:"no"}),o.a.createElement("img",{class:"animate__shakeY ",alt:"",src:"money.png",width:"30",height:"30"}),o.a.createElement("button",{value:"1000",onClick:c},"1000 ",o.a.createElement("img",{alt:"",src:"money.png",width:"20",height:"20"})),o.a.createElement("button",{value:"5000",onClick:c},"5000"),o.a.createElement("button",{value:"7500",onClick:c},"7500"))},h=n(83),j=n(80),C=n(82);function P(){var e=Object(a.useContext)(i),t=e.orderProducts,n=e.setOrderProducts,c=o.a.useState(null),r=Object(l.a)(c,2),s=r[0],u=r[1],d=function(e){n(e.target.id),u(null),console.log("KJKJKJKJK",t),console.log("KJKJKJKcdfddJK",e.target.id)};return o.a.createElement("div",null,o.a.createElement(h.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)}},"By Categories"),o.a.createElement(j.a,{id:"simple-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:function(){u(null)}},o.a.createElement(C.a,{id:"principal",onClick:d},"Todas las Categorias"),o.a.createElement(C.a,{id:"Cameras",onClick:d},"Cameras"),o.a.createElement(C.a,{id:"Gaming",onClick:d}," ","Gaming"),o.a.createElement(C.a,{id:"Monitors & TV",onClick:d},"Monitors & TV"),o.a.createElement(C.a,{id:"Phones",onClick:d},"Phones"),o.a.createElement(C.a,{id:"Drones",onClick:d},"Drones"),o.a.createElement(C.a,{id:"Audio",onClick:d},"Audio"),o.a.createElement(C.a,{id:"Tablets & E-readers",onClick:d},"Tablets & E-readers"),o.a.createElement(C.a,{id:"Phone Accessories",onClick:d},"Phone Accessories"),o.a.createElement(C.a,{id:"Phones",onClick:d},"Phones")))}var v=function(){var e=Object(a.useContext)(i),t=(e.orderProducts,e.setOrderProducts),n=Object(a.useContext)(i),c=(n.allProducts,n.setAllProducts,Object(a.useContext)(i)),r=c.higestLowest,l=c.setHigestLowest,s=function(e){l(e.target.value),console.log("BOTONAPRETADO",r)};return o.a.createElement("div",null,o.a.createElement("button",{value:"Lowest",onClick:s},"Lowest Price"),o.a.createElement("button",{value:"Higest",onClick:s},"Highest Price"),o.a.createElement("div",null,o.a.createElement(P,{handlerProductList:function(e){t(e.target.id)}})))},I=(n(48),function(){var e=Object(a.useContext)(i),t=e.pagination,c=e.setPagination,r=Object(a.useContext)(i),s=r.orderProducts,u=r.setOrderProducts,d=Object(a.useState)(!0),m=Object(l.a)(d,2),p=m[0],g=m[1],O=Object(a.useState)(!1),E=Object(l.a)(O,2),f=E[0],b=E[1],h=Object(a.useState)(o.a.createElement("p",null,"16 of 32 products")),j=Object(l.a)(h,2),C=j[0],P=j[1];Object(a.useEffect)((function(){"principal"!==s?(g(!0),b(!0)):(g(!0),b(!1))}),[s,u]);return o.a.createElement("div",{className:"pagination"},"principal"!==s?o.a.createElement("p",null):o.a.createElement("div",null,C),o.a.createElement("div",null," ",o.a.createElement("button",{disabled:p,value:[0,16],onClick:function(e){c([0,16]),g(!0),b(!1),P(o.a.createElement("p",null,"16 of 32 products")),console.log("JJJJJJJJJ",t)}},o.a.createElement("img",{src:n(49),alt:"Logo",id:"arrow-left"})),o.a.createElement("button",{disabled:f,value:[16,32],onClick:function(e){c([16,32]),g(!1),b(!0),P(o.a.createElement("p",null,"32 of 32 products")),console.log("QQQQQQQQ",e.target.value),console.log("HHHHHHHHH",t)}},o.a.createElement("img",{src:n(50),alt:"Logo",id:"arrow-right"}))))}),N=(n(51),n(52),function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("socialBar",null))});n(53);function J(){return o.a.createElement(s,null,o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement(b,null),o.a.createElement(v,null),o.a.createElement(g,null),o.a.createElement(O,null),o.a.createElement(E,null),o.a.createElement(u,null),o.a.createElement(f,null),o.a.createElement("div",{className:"Cards"}," ",o.a.createElement(m,null)," "),o.a.createElement(I,null),o.a.createElement("hr",{class:"line"}),o.a.createElement(N,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.fff8c695.chunk.js.map