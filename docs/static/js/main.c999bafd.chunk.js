(this.webpackJsonpsubFormat=this.webpackJsonpsubFormat||[]).push([[0],{174:function(e,t,a){},231:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),o=a.n(r),i=(a(174),a(25)),l=a(38),s=a(24),d=a(16),j=a(94),b=a(278),f=a(280),p=a(281),u=a(282),h=a(291),x=a(284),m=a(285),O=a(277),g=a(161),v=a(289),k=a(293),w=a(279),y=a(286),S=a(50),N=a(155),C=a(19),B=a(283),P=a(95),F=a(96),I=a(147),R=a.n(I),U=(a(71),a(109),a(157),a(290),a(270),a(272)),D=(a(274),a(287),a(18)),L=(a(275),a(294),a(269),a(271),a(273),a(156),a(110),a(150),a(151),a(111),a(152)),M=a.n(L),W=(a(59),a(82)),$=(a(146),a(153),function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.join(" ")}),z=(a(77),a(5));M()();var E=a(51);function J(e){var t=e.darkState,a=Object(S.a)((function(e){return{title:{color:t?"#ffffff":"#343a40",textShadow:"3px 3px 2px ".concat(t?"rgba(0, 0, 0, 1)":"rgba(150, 150, 150, 1)")}}}))();return Object(z.jsxs)("div",{className:"text-center",children:[Object(z.jsx)("h1",{className:$(a.title,"text-6xl font-bold hp"),children:"404"}),Object(z.jsx)(E.a,{paragraph:!0,variant:"h5",color:"textSecondary",children:"We are sorry but we could not find the page you are looking."})]})}function A(e){var t=e.darkState,a=Object(S.a)((function(e){return{title:{color:t?"#ffffff":"#343a40",textShadow:"3px 3px 2px ".concat(t?"rgba(0, 0, 0, 1)":"rgba(150, 150, 150, 1)")},button:{margin:e.spacing(1)}}}))(),r=(Object(n.useRef)(null),c.a.useState("")),o=Object(s.a)(r,2),i=o[0],l=o[1];return Object(z.jsxs)(D.a,{locale:"it",utils:W.a,children:[Object(z.jsxs)("h1",{className:$(a.title,"text-6xl font-bold hp"),children:["Copy",Object(z.jsx)("span",{className:"text-primary",children:"Srt"})]}),Object(z.jsx)(U.a,{variant:"contained",color:"primary",onClick:function(e){navigator.clipboard.readText().then((function(e){var t=e.split("\n").map((function(e){return e.includes("->")&&(e=e.replace(/\b(\d\d:\d\d:\d\d)\.(\d\d\d)\b/g,"$1,$2")),e}));l(t.join("\n"))})).catch((function(e){console.error("Failed to read clipboard contents: ",e)}))},children:"Paste"}),Object(z.jsx)(U.a,{variant:"contained",color:"primary",onClick:function(e){var t=document.createElement("a"),a=new Blob([i],{type:"text/plain"});t.href=URL.createObjectURL(a),t.download="myFile.srt",document.body.appendChild(t),t.click()},children:"Download"}),Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),i.split("\n").map((function(e,t){return parseInt(e)&&!e.includes("->")?Object(z.jsx)("div",{style:{color:"#155e14"},children:e},t):e.includes("->")?Object(z.jsx)("div",{style:{color:"#e26823"},children:e},t):Object(z.jsx)("div",{style:{color:"#1292d5"},children:e},t)}))]})}a(231);var G=240;var T=function(e){var t=e.wind,a=void 0!==t?function(){return t().document.body}:void 0,n=window.matchMedia("(prefers-color-scheme: dark)").matches,r=localStorage.getItem("dark"),o=null===r?n:"true"===r,I=Object(d.f)().pathname.replace("/","");""===I&&(I="docx");var U=c.a.useState({mobileOpen:!1,darkState:o}),D=Object(s.a)(U,2),L=D[0],M=D[1],W=L.mobileOpen,$=L.darkState,E=Object(S.a)((function(e){var t;return{root:{display:"flex"},drawer:Object(l.a)({},e.breakpoints.up("lg"),{width:G,flexShrink:0}),appBar:Object(l.a)({},e.breakpoints.up("lg"),{width:"calc(100% - ".concat(G,"px)"),marginLeft:G}),menuButton:(t={marginRight:e.spacing(2)},Object(l.a)(t,e.breakpoints.up("lg"),{display:"none"}),Object(l.a)(t,"backgroundColor",$?P.a[900]:F.a[500]),t),toolbar:e.mixins.toolbar,drawerPaper:{width:G,color:"#ffffff",backgroundColor:$?P.a[900]:F.a[500]},content:{flexGrow:1,padding:e.spacing(3)}}})),T=$?"dark":"light",q=$?P.a[900]:F.a[500],H=$?P.a[800]:F.a[300],K=Object(N.a)({palette:{type:T,primary:{main:q},secondary:{main:H}}}),Q=E(),V=Object(C.a)(),X=function(){return M((function(e){return Object(i.a)(Object(i.a)({},e),{},{mobileOpen:!W})}))},Y=c.a.useCallback((function(){localStorage.setItem("dark",!$),M((function(e){return Object(i.a)(Object(i.a)({},e),{},{darkState:!e.darkState})}))}),[]),Z=[{title:"Upload Docx",path:"docx",icon:Object(z.jsx)(w.a,{})}],_=[{path:"/",obj:Object(z.jsx)(A,{darkState:$})},{path:"copy",obj:Object(z.jsx)(A,{darkState:$})}],ee=Object(z.jsxs)("div",{className:"mt-32",children:[Object(z.jsx)("div",{className:Q.toolbar}),Object(z.jsx)(b.a,{children:Z.map((function(e,t){var a=e.title,n=e.path,c=e.icon,r=e.badge;return Object(z.jsx)(j.b,{to:"/".concat(n),children:Object(z.jsxs)(f.a,{button:!0,onClick:function(){return e=n,M((function(t){return Object(i.a)(Object(i.a)({},t),{},{page:e})}));var e},children:[Object(z.jsx)(p.a,{style:{color:n===I?"#ffffff":"#ffffff80"},children:c}),Object(z.jsx)(u.a,{primary:Object(z.jsx)("span",{className:"font-bold",children:a}),style:{color:n===I?"#ffffff":"#ffffff80"}}),r&&Object(z.jsx)(h.a,{label:r,size:"small",color:"secondary",className:"font-bold",style:{color:"#ffffff"}})]},a)},a)}))})]});return Object(z.jsx)(B.a,{theme:K,children:Object(z.jsxs)("div",{className:Q.root,children:[Object(z.jsx)(x.a,{}),Object(z.jsx)(m.a,{position:"fixed",className:Q.appBar,style:{backgroundColor:$?"#303030":P.a[50],boxShadow:"none"},children:Object(z.jsxs)(O.a,{className:"shadow-none",children:[Object(z.jsx)(g.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:X,className:Q.menuButton,children:Object(z.jsx)(y.a,{})}),Object(z.jsx)("div",{className:"ml-auto text-right flex",children:Object(z.jsx)(R.a,{onChange:Y,checked:$,size:60})})]})}),Object(z.jsxs)("nav",{className:Q.drawer,"aria-label":"mailbox folders",children:[Object(z.jsx)(v.a,{mdUp:!0,implementation:"css",children:Object(z.jsx)(k.a,{container:a,variant:"temporary",anchor:"rtl"===V.direction?"right":"left",open:W,onClose:X,classes:{paper:Q.drawerPaper},ModalProps:{keepMounted:!0},children:ee})}),Object(z.jsx)(v.a,{mdDown:!0,implementation:"css",children:Object(z.jsx)(k.a,{classes:{paper:Q.drawerPaper},variant:"permanent",open:!0,children:ee})})]}),Object(z.jsxs)("main",{className:Q.content,children:[Object(z.jsx)("div",{className:Q.toolbar}),Object(z.jsxs)(d.c,{children:[_.map((function(e,t){var a=e.path,n=e.obj;return Object(z.jsx)(d.a,{exact:!0,path:"/".concat(a),component:function(){return n}},t)})),Object(z.jsx)(d.a,{path:"/lib",component:function(){return Object(z.jsx)("div",{children:"ciao"})}}),Object(z.jsx)(d.a,{component:function(){return Object(z.jsx)(J,{darkState:$})}})]})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(z.jsx)(j.a,{basename:"/",children:Object(z.jsx)(T,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){}},[[235,1,2]]]);
//# sourceMappingURL=main.c999bafd.chunk.js.map