(this.webpackJsonpsubFormat=this.webpackJsonpsubFormat||[]).push([[0],{176:function(e,t,a){},233:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=(a(176),a(25)),s=a(38),l=a(21),d=a(16),j=a(96),b=a(281),f=a(283),u=a(284),p=a(285),h=a(294),x=a(287),m=a(288),O=a(280),v=a(163),g=a(292),k=a(296),w=a(282),y=a(289),S=a(51),N=a(157),C=a(19),B=a(286),I=a(97),P=a(98),R=a(148),z=a.n(R),F=a(50),L=a.n(F),M=a(72),U=(a(159),a(293),a(272),a(274)),W=(a(276),a(290)),$=a(18),D=(a(277),a(297),a(271),a(273),a(275),a(158),a(113),a(151),a(152),a(114),a(153)),E=a.n(D),J=(a(61),a(84)),T=(a(147),a(154),function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.join(" ")}),A=(a(79),a(5));E()();var G=a(52);function V(e){var t=e.darkState,a=Object(S.a)((function(e){return{title:{color:t?"#ffffff":"#343a40",textShadow:"3px 3px 2px ".concat(t?"rgba(0, 0, 0, 1)":"rgba(150, 150, 150, 1)")}}}))();return Object(A.jsxs)("div",{className:"text-center",children:[Object(A.jsx)("h1",{className:T(a.title,"text-6xl font-bold hp"),children:"404"}),Object(A.jsx)(G.a,{paragraph:!0,variant:"h5",color:"textSecondary",children:"We are sorry but we could not find the page you are looking."})]})}var q=a(279);function H(e){var t=e.darkState,a=Object(S.a)((function(e){return{title:{color:t?"#ffffff":"#343a40",textShadow:"3px 3px 2px ".concat(t?"rgba(0, 0, 0, 1)":"rgba(150, 150, 150, 1)")},button:{margin:e.spacing(1)}}}))(),c=(Object(n.useRef)(null),r.a.useState("")),o=Object(l.a)(c,2),i=o[0],s=o[1],d=r.a.useState(!1),j=Object(l.a)(d,2),b=j[0],f=j[1],u=r.a.useState("myFile"),p=Object(l.a)(u,2),h=p[0],x=p[1];return Object(A.jsxs)($.a,{locale:"it",utils:J.a,children:[Object(A.jsxs)("h1",{className:T(a.title,"text-6xl font-bold hp"),children:["Copy",Object(A.jsx)("span",{className:"text-primary",children:"Srt"})]}),Object(A.jsxs)("div",{id:"space",children:[Object(A.jsx)(W.a,{id:"name",label:"Name file",variant:"outlined",defaultValue:h,size:"small",onChange:function(e){var t=e.target.value;return x(t)}}),Object(A.jsx)(U.a,{variant:"contained",color:"primary",onClick:function(){var e=parseInt(h);x(e)},children:"Inc"}),Object(A.jsx)(U.a,{variant:"contained",color:"primary",onClick:function(){var e=Object(M.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,navigator.clipboard.readText();case 3:(a=e.sent).length>0&&(n=a.split("\n").map((function(e){return e.includes("->")&&(e=e.replace(/\b(\d\d:\d\d:\d\d)\.(\d\d\d)\b/g,"$1,$2")),e})),s(n.join("\n")),f(!1),navigator.clipboard.writeText(""));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Paste"}),Object(A.jsx)(U.a,{variant:"contained",color:"primary",onClick:function(e){var t=document.createElement("a"),a=new Blob([i],{type:"text/plain"});t.href=URL.createObjectURL(a),t.download=h+".srt",document.body.appendChild(t),t.click()},children:"Download"})]}),Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),b&&Object(A.jsx)(q.a,{}),i.split("\n").map((function(e,t){return parseInt(e)&&!e.includes("->")?Object(A.jsx)("div",{style:{color:"#155e14"},children:e},t):e.includes("->")?Object(A.jsx)("div",{style:{color:"#e26823"},children:e},t):Object(A.jsx)("div",{style:{color:"#1292d5"},children:e},t)}))]})}a(233);var K=240;var Q=function(e){var t=e.wind,a=void 0!==t?function(){return t().document.body}:void 0,n=window.matchMedia("(prefers-color-scheme: dark)").matches,c=localStorage.getItem("dark"),o=null===c?n:"true"===c,R=Object(d.f)().pathname.replace("/","");""===R&&(R="docx");var F=r.a.useState({mobileOpen:!1,darkState:o}),L=Object(l.a)(F,2),M=L[0],U=L[1],W=M.mobileOpen,$=M.darkState,D=Object(S.a)((function(e){var t;return{root:{display:"flex"},drawer:Object(s.a)({},e.breakpoints.up("lg"),{width:K,flexShrink:0}),appBar:Object(s.a)({},e.breakpoints.up("lg"),{width:"calc(100% - ".concat(K,"px)"),marginLeft:K}),menuButton:(t={marginRight:e.spacing(2)},Object(s.a)(t,e.breakpoints.up("lg"),{display:"none"}),Object(s.a)(t,"backgroundColor",$?I.a[900]:P.a[500]),t),toolbar:e.mixins.toolbar,drawerPaper:{width:K,color:"#ffffff",backgroundColor:$?I.a[900]:P.a[500]},content:{flexGrow:1,padding:e.spacing(3)}}})),E=$?"dark":"light",J=$?I.a[900]:P.a[500],T=$?I.a[800]:P.a[300],G=Object(N.a)({palette:{type:E,primary:{main:J},secondary:{main:T}}}),q=D(),Q=Object(C.a)(),X=function(){return U((function(e){return Object(i.a)(Object(i.a)({},e),{},{mobileOpen:!W})}))},Y=r.a.useCallback((function(){localStorage.setItem("dark",!$),U((function(e){return Object(i.a)(Object(i.a)({},e),{},{darkState:!e.darkState})}))}),[]),Z=[{title:"Copy Srt",path:"docx",icon:Object(A.jsx)(w.a,{})}],_=[{path:"/",obj:Object(A.jsx)(H,{darkState:$})},{path:"copy",obj:Object(A.jsx)(H,{darkState:$})}],ee=Object(A.jsxs)("div",{className:"mt-32",children:[Object(A.jsx)("div",{className:q.toolbar}),Object(A.jsx)(b.a,{children:Z.map((function(e,t){var a=e.title,n=e.path,r=e.icon,c=e.badge;return Object(A.jsx)(j.b,{to:"/".concat(n),children:Object(A.jsxs)(f.a,{button:!0,onClick:function(){return e=n,U((function(t){return Object(i.a)(Object(i.a)({},t),{},{page:e})}));var e},children:[Object(A.jsx)(u.a,{style:{color:n===R?"#ffffff":"#ffffff80"},children:r}),Object(A.jsx)(p.a,{primary:Object(A.jsx)("span",{className:"font-bold",children:a}),style:{color:n===R?"#ffffff":"#ffffff80"}}),c&&Object(A.jsx)(h.a,{label:c,size:"small",color:"secondary",className:"font-bold",style:{color:"#ffffff"}})]},a)},a)}))})]});return Object(A.jsx)(B.a,{theme:G,children:Object(A.jsxs)("div",{className:q.root,children:[Object(A.jsx)(x.a,{}),Object(A.jsx)(m.a,{position:"fixed",className:q.appBar,style:{backgroundColor:$?"#303030":I.a[50],boxShadow:"none"},children:Object(A.jsxs)(O.a,{className:"shadow-none",children:[Object(A.jsx)(v.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:X,className:q.menuButton,children:Object(A.jsx)(y.a,{})}),Object(A.jsx)("div",{className:"ml-auto text-right flex",children:Object(A.jsx)(z.a,{onChange:Y,checked:$,size:60})})]})}),Object(A.jsxs)("nav",{className:q.drawer,"aria-label":"mailbox folders",children:[Object(A.jsx)(g.a,{mdUp:!0,implementation:"css",children:Object(A.jsx)(k.a,{container:a,variant:"temporary",anchor:"rtl"===Q.direction?"right":"left",open:W,onClose:X,classes:{paper:q.drawerPaper},ModalProps:{keepMounted:!0},children:ee})}),Object(A.jsx)(g.a,{mdDown:!0,implementation:"css",children:Object(A.jsx)(k.a,{classes:{paper:q.drawerPaper},variant:"permanent",open:!0,children:ee})})]}),Object(A.jsxs)("main",{className:q.content,children:[Object(A.jsx)("div",{className:q.toolbar}),Object(A.jsxs)(d.c,{children:[_.map((function(e,t){var a=e.path,n=e.obj;return Object(A.jsx)(d.a,{exact:!0,path:"/".concat(a),component:function(){return n}},t)})),Object(A.jsx)(d.a,{path:"/lib",component:function(){return Object(A.jsx)("div",{children:"ciao"})}}),Object(A.jsx)(d.a,{component:function(){return Object(A.jsx)(V,{darkState:$})}})]})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(A.jsx)(j.a,{basename:"/",children:Object(A.jsx)(Q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){}},[[237,1,2]]]);
//# sourceMappingURL=main.1d72a523.chunk.js.map