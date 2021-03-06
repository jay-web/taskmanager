(this.webpackJsonptasks=this.webpackJsonptasks||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n(0),a=n.n(r),i=n(10),s=n.n(i),o=(n(66),n(67),n(37)),j=n(73),u=n(111),l=n(112),d=n(113),b=n(105),O=n(110),h=n(9),f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(r.useState)(e),n=Object(h.a)(t,2),c=n[0],a=n[1],i=function(){a(!c)};return[c,i]},x=n(106),m=n(116),g=n(108),p=n(109),v=n(107),k=n(50),y=n.n(k),S=n(51),T=n.n(S),C=n(114),w=function(e){var t=Object(r.useState)(e),n=Object(h.a)(t,2),c=n[0],a=n[1];return[c,function(e){a(e.target.value)},function(){a("")}]},A=n(17),D=n(14),E=n(115),K=function(e,t){switch(t.type){case"ADD_TASK":return""===t.task?e:[].concat(Object(D.a)(e),[{id:Object(E.a)(),item:t.task,completed:!1}]);case"REMOVE_TASK":return e.filter((function(e){return e.id!==t.id}));case"TOGGLE_TASK":return e.map((function(e){return e.id===t.id?Object(A.a)(Object(A.a)({},e),{},{completed:!e.completed}):e}));case"UPDATE_TASK":return""===t.newTask?e:e.map((function(e){return e.id===t.id?Object(A.a)(Object(A.a)({},e),{},{item:t.newTask}):e}));default:return e}};var _=function(e,t,n){var c=Object(r.useReducer)(n,t,(function(){var n;try{n=JSON.parse(window.localStorage.getItem(e)||String(t))}catch(c){n=t}return n})),a=Object(h.a)(c,2),i=a[0],s=a[1];return Object(r.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(i))}),[i]),[i,s]},F=[{id:1,item:"lets do some tasks",completed:!1}],P=Object(r.createContext)(),I=Object(r.createContext)();function L(e){var t=_("todos",F,K),n=Object(h.a)(t,2),r=n[0],a=n[1];return Object(c.jsx)(P.Provider,{value:r,children:Object(c.jsx)(I.Provider,{value:a,children:e.children})})}var G=function(e){var t=e.task,n=e.toggle,a=w(t.item),i=Object(h.a)(a,3),s=i[0],o=i[1],j=i[2],u=Object(r.useContext)(I);return Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),u({type:"UPDATE_TASK",id:t.id,newTask:s}),n(),j()},style:{marginLeft:"1rem",width:"90%"},children:Object(c.jsx)(C.a,{fullWidth:!0,value:s,onChange:function(e){return o(e)}})})};function J(e){var t=e.task,n=e.completed,a=f(!1),i=Object(h.a)(a,2),s=i[0],o=i[1],j=Object(r.useContext)(I),u=n?"line-through":"none";return console.log(t),Object(c.jsx)("span",{children:Object(c.jsx)(x.a,{gutters:"true",style:{height:"64px",width:"80%"},children:s?Object(c.jsx)(G,{task:t,toggle:o}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m.a,{tabIndex:-1,checked:n,onClick:function(){return j({type:"TOGGLE_TASK",id:t.id})}}),Object(c.jsx)(g.a,{style:{textDecoration:u,wordWrap:"break-word"},disableTypography:!1,children:t.item}),Object(c.jsxs)(p.a,{style:{position:"absolute",right:"-100px"},children:[Object(c.jsx)(v.a,{"aria-label":"delete",onClick:function(){return j({type:"REMOVE_TASK",id:t.id})},children:Object(c.jsx)(y.a,{})}),Object(c.jsx)(v.a,{"aria-label":"edit",onClick:function(){return o()},children:Object(c.jsx)(T.a,{})})]})]})})})}var B=Object(r.memo)(J);var M=function(){var e=Object(r.useContext)(P);return e.length?Object(c.jsx)(j.a,{children:Object(c.jsx)(b.a,{children:e.map((function(t,n){return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(B,{task:t,completed:t.completed}),n<e.length-1&&Object(c.jsx)(O.a,{})]},t.id)}))})}):null};var R=function(){var e=w(""),t=Object(h.a)(e,3),n=t[0],a=t[1],i=t[2],s=Object(r.useContext)(I);return Object(c.jsx)(j.a,{style:{margin:"1rem 0",padding:"0 .2rem"},children:Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),s({type:"ADD_TASK",task:n}),i()},children:Object(c.jsx)(C.a,{value:n,onChange:a,label:"Add new task",fullWidth:!0})})})};var W=function(){var e=Object(r.useContext)(P);return Object(c.jsxs)(j.a,{style:{padding:0,margin:0,height:"100vh",backgroundColor:"#fafafa"},elevation:0,children:[Object(c.jsx)(u.a,{color:"primary",position:"static",style:{height:"64px",marginBottom:"1rem"},children:Object(c.jsx)(l.a,{children:Object(c.jsx)(o.a,{color:"inherit",variant:"h5",children:"Tasks"})})}),Object(c.jsx)(d.a,{container:!0,justify:"center",children:Object(c.jsxs)(d.a,{item:!0,xs:12,md:8,lg:6,children:[Object(c.jsx)(R,{}),Object(c.jsx)(M,{tasks:e})]})})]})};var N=function(){return Object(c.jsx)(L,{children:Object(c.jsx)(W,{})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,118)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),U()}},[[72,1,2]]]);
//# sourceMappingURL=main.ee05427d.chunk.js.map