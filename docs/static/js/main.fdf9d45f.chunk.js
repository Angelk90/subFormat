(this.webpackJsonpsubFormat=this.webpackJsonpsubFormat||[]).push([[0],{174:function(e,t,a){},231:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=(a(174),a(25)),s=a(38),l=a(21),d=a(16),j=a(95),b=a(279),u=a(281),f=a(282),p=a(283),x=a(292),h=a(285),m=a(286),O=a(278),v=a(161),g=a(290),k=a(294),w=a(280),y=a(287),S=a(51),N=a(155),C=a(19),B=a(284),P=a(96),I=a(97),R=a(147),z=a.n(R),F=a(50),L=a.n(F),M=a(70),U=(a(157),a(291),a(270),a(272)),W=(a(274),a(288)),$=a(18),D=(a(275),a(295),a(269),a(271),a(273),a(156),a(110),a(150),a(151),a(111),a(152)),E=a.n(D),J=(a(60),a(83)),T=(a(146),a(153),function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.join(" ")}),A=(a(78),a(5));E()();var G=a(52);function V(e){var t=e.darkState,a=Object(S.a)((function(e){return{title:{color:t?"#ffffff":"#343a40",textShadow:"3px 3px 2px ".concat(t?"rgba(0, 0, 0, 1)":"rgba(150, 150, 150, 1)")}}}))();return Object(A.jsxs)("div",{className:"text-center",children:[Object(A.jsx)("h1",{className:T(a.title,"text-6xl font-bold hp"),children:"404"}),Object(A.jsx)(G.a,{paragraph:!0,variant:"h5",color:"textSecondary",children:"We are sorry but we could not find the page you are looking."})]})}var q=a(277);function H(e){var t=e.darkState,a=Object(S.a)((function(e){return{title:{color:t?"#ffffff":"#343a40",textShadow:"3px 3px 2px ".concat(t?"rgba(0, 0, 0, 1)":"rgba(150, 150, 150, 1)")},button:{margin:e.spacing(1)}}}))(),c=(Object(n.useRef)(null),r.a.useState("")),o=Object(l.a)(c,2),i=o[0],s=o[1],d=r.a.useState(!1),j=Object(l.a)(d,2),b=j[0],u=j[1],f=r.a.useState("myFile"),p=Object(l.a)(f,2),x=p[0],h=p[1];return Object(A.jsxs)($.a,{locale:"it",utils:J.a,children:[Object(A.jsxs)("h1",{className:T(a.title,"text-6xl font-bold hp"),children:["Copy",Object(A.jsx)("span",{className:"text-primary",children:"Srt"})]}),Object(A.jsxs)("div",{id:"space",children:[Object(A.jsx)(W.a,{id:"name",label:"Name",variant:"outlined",defaultValue:x,size:"small",onChange:function(e){var t=e.target.value;return h(t)}}),Object(A.jsx)(U.a,{variant:"contained",color:"primary",onClick:function(){var e=Object(M.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,navigator.clipboard.readText();case 3:a=e.sent,n=a.split("\n").map((function(e){return e.includes("->")&&(e=e.replace(/\b(\d\d:\d\d:\d\d)\.(\d\d\d)\b/g,"$1,$2")),e})),s(n.join("\n")),u(!1),navigator.clipboard.writeText("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Paste"}),Object(A.jsx)(U.a,{variant:"contained",color:"primary",onClick:function(e){var t=document.createElement("a"),a=new Blob([i],{type:"text/plain"});t.href=URL.createObjectURL(a),t.download=x+".srt",document.body.appendChild(t),t.click()},children:"Download"})]}),Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),b&&Object(A.jsx)(q.a,{}),i.split("\n").map((function(e,t){return parseInt(e)&&!e.includes("->")?Object(A.jsx)("div",{style:{color:"#155e14"},children:e},t):e.includes("->")?Object(A.jsx)("div",{style:{color:"#e26823"},children:e},t):Object(A.jsx)("div",{style:{color:"#1292d5"},children:e},t)}))]})}a(231);var K=240;var Q=function(e){var t=e.wind,a=void 0!==t?function(){return t().document.body}:void 0,n=window.matchMedia("(prefers-color-scheme: dark)").matches,c=localStorage.getItem("dark"),o=null===c?n:"true"===c,R=Object(d.f)().pathname.replace("/","");""===R&&(R="docx");var F=r.a.useState({mobileOpen:!1,darkState:o}),L=Object(l.a)(F,2),M=L[0],U=L[1],W=M.mobileOpen,$=M.darkState,D=Object(S.a)((function(e){var t;return{root:{display:"flex"},drawer:Object(s.a)({},e.breakpoints.up("lg"),{width:K,flexShrink:0}),appBar:Object(s.a)({},e.breakpoints.up("lg"),{width:"calc(100% - ".concat(K,"px)"),marginLeft:K}),menuButton:(t={marginRight:e.spacing(2)},Object(s.a)(t,e.breakpoints.up("lg"),{display:"none"}),Object(s.a)(t,"backgroundColor",$?P.a[900]:I.a[500]),t),toolbar:e.mixins.toolbar,drawerPaper:{width:K,color:"#ffffff",backgroundColor:$?P.a[900]:I.a[500]},content:{flexGrow:1,padding:e.spacing(3)}}})),E=$?"dark":"light",J=$?P.a[900]:I.a[500],T=$?P.a[800]:I.a[300],G=Object(N.a)({palette:{type:E,primary:{main:J},secondary:{main:T}}}),q=D(),Q=Object(C.a)(),X=function(){return U((function(e){return Object(i.a)(Object(i.a)({},e),{},{mobileOpen:!W})}))},Y=r.a.useCallback((function(){localStorage.setItem("dark",!$),U((function(e){return Object(i.a)(Object(i.a)({},e),{},{darkState:!e.darkState})}))}),[]),Z=[{title:"Copy Srt",path:"docx",icon:Object(A.jsx)(w.a,{})}],_=[{path:"/",obj:Object(A.jsx)(H,{darkState:$})},{path:"copy",obj:Object(A.jsx)(H,{darkState:$})}],ee=Object(A.jsxs)("div",{className:"mt-32",children:[Object(A.jsx)("div",{className:q.toolbar}),Object(A.jsx)(b.a,{children:Z.map((function(e,t){var a=e.title,n=e.path,r=e.icon,c=e.badge;return Object(A.jsx)(j.b,{to:"/".concat(n),children:Object(A.jsxs)(u.a,{button:!0,onClick:function(){return e=n,U((function(t){return Object(i.a)(Object(i.a)({},t),{},{page:e})}));var e},children:[Object(A.jsx)(f.a,{style:{color:n===R?"#ffffff":"#ffffff80"},children:r}),Object(A.jsx)(p.a,{primary:Object(A.jsx)("span",{className:"font-bold",children:a}),style:{color:n===R?"#ffffff":"#ffffff80"}}),c&&Object(A.jsx)(x.a,{label:c,size:"small",color:"secondary",className:"font-bold",style:{color:"#ffffff"}})]},a)},a)}))})]});return Object(A.jsx)(B.a,{theme:G,children:Object(A.jsxs)("div",{className:q.root,children:[Object(A.jsx)(h.a,{}),Object(A.jsx)(m.a,{position:"fixed",className:q.appBar,style:{backgroundColor:$?"#303030":P.a[50],boxShadow:"none"},children:Object(A.jsxs)(O.a,{className:"shadow-none",children:[Object(A.jsx)(v.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:X,className:q.menuButton,children:Object(A.jsx)(y.a,{})}),Object(A.jsx)("div",{className:"ml-auto text-right flex",children:Object(A.jsx)(z.a,{onChange:Y,checked:$,size:60})})]})}),Object(A.jsxs)("nav",{className:q.drawer,"aria-label":"mailbox folders",children:[Object(A.jsx)(g.a,{mdUp:!0,implementation:"css",children:Object(A.jsx)(k.a,{container:a,variant:"temporary",anchor:"rtl"===Q.direction?"right":"left",open:W,onClose:X,classes:{paper:q.drawerPaper},ModalProps:{keepMounted:!0},children:ee})}),Object(A.jsx)(g.a,{mdDown:!0,implementation:"css",children:Object(A.jsx)(k.a,{classes:{paper:q.drawerPaper},variant:"permanent",open:!0,children:ee})})]}),Object(A.jsxs)("main",{className:q.content,children:[Object(A.jsx)("div",{className:q.toolbar}),Object(A.jsxs)(d.c,{children:[_.map((function(e,t){var a=e.path,n=e.obj;return Object(A.jsx)(d.a,{exact:!0,path:"/".concat(a),component:function(){return n}},t)})),Object(A.jsx)(d.a,{path:"/lib",component:function(){return Object(A.jsx)("div",{children:"ciao"})}}),Object(A.jsx)(d.a,{component:function(){return Object(A.jsx)(V,{darkState:$})}})]})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(A.jsx)(j.a,{basename:"/",children:Object(A.jsx)(Q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,a){}},[[235,1,2]]]);
//# sourceMappingURL=main.fdf9d45f.chunk.js.map