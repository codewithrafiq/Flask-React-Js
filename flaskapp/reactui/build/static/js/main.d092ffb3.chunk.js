(this.webpackJsonpreactui=this.webpackJsonpreactui||[]).push([[0],{79:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(11),a=n.n(c),i=(n(79),n(43)),r=n(9),s=n(16),l=n(117),j="",d=n(128),u=n(120),h=n(3),b=function(e){var t=e.func,n=Object(o.useState)(""),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(h.jsxs)(l.a,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",children:[Object(h.jsx)(d.a,{label:"Title",placeholder:"Title",fullWidth:!0,margin:"normal",value:a,onChange:function(e){return i(e.target.value)}}),Object(h.jsx)(u.a,{onClick:function(){a.length>0?fetch("".concat(j,"/api/posts"),{method:"POST",headers:{"Content-Type":"application/json","x-access-tokens":localStorage.getItem("token")},body:JSON.stringify({title:a})}).then((function(e){return e.json()})).then((function(e){console.log(e),i(""),t(e)})).catch((function(e){return console.log(e)})):alert("Please fill in all the fields")},variant:"contained",color:"primary",children:"Add Todo"})]})},p=n(121),f=n(122),O=n(129),g=n(123),x=n(124),m=n(62),v=n.n(m),y=n(63),C=n.n(y),S=function(e){var t=e.refunc,n=e.todo,o=e.id,c=Object(r.f)();return Object(h.jsx)(p.a,{children:Object(h.jsx)(f.a,{children:Object(h.jsxs)(O.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(h.jsxs)(O.a,{children:[Object(h.jsxs)(g.a,{variant:"h5",children:[Object(h.jsxs)("b",{children:[o,"  "]}),n.component?Object(h.jsx)("del",{children:n.title}):n.title]}),Object(h.jsxs)(g.a,{variant:"body2",component:"p",children:[Object(h.jsx)("b",{children:"Added="}),n.date_posted," ",n.date_updated?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("b",{children:"Updated="}),n.date_updated]}):""]})]}),Object(h.jsxs)(O.a,{children:[Object(h.jsx)(x.a,{onClick:function(e){return function(e,t){c.push("/todo-".concat(e,"-").concat(t))}(n.title,n.id)},color:"primary",children:Object(h.jsx)(v.a,{})}),Object(h.jsx)(x.a,{onClick:function(e){return o=n.id,void fetch("".concat(j,"/api/posts/")+o,{method:"DELETE",headers:{"Content-Type":"application/json","x-access-tokens":localStorage.getItem("token")}}).then((function(e){console.log("===================================="),console.log("data-----\x3e",e),console.log("===================================="),200===e.status&&t(e)})).catch((function(e){console.log("===================================="),console.log("error=======>",e),console.log("====================================")}));var o},color:"secondary",children:Object(h.jsx)(C.a,{})})]})]})})})},k=function(){var e=Object(o.useState)(),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(),i=Object(s.a)(a,2),r=i[0],d=i[1],u=function(e){d(e)};return Object(o.useEffect)((function(){fetch("".concat(j,"/api/posts"),{method:"GET",headers:{"Content-Type":"application/json","x-access-tokens":localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){console.log(e.posts),c(e.posts)})).catch((function(e){return console.log(e)}))}),[r]),Object(h.jsxs)(l.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"stretch",spacing:3,children:[Object(h.jsx)(l.a,{container:!0,item:!0,children:Object(h.jsx)(b,{func:u})}),Object(h.jsx)(l.a,{container:!0,item:!0,children:Object(h.jsx)(l.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"stretch",spacing:1,children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(h.jsx)(l.a,{item:!0,children:Object(h.jsx)(S,{refunc:u,id:t+1,todo:e},t)},t)}))})})]})},w=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(""),i=Object(s.a)(a,2),r=i[0],b=i[1];return Object(h.jsxs)(l.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(h.jsx)("h1",{children:"Login Page"}),Object(h.jsx)(d.a,{onChange:function(e){return c(e.target.value)},label:"Email",placeholder:"Username",type:"email",variant:"outlined"}),Object(h.jsx)(d.a,{onChange:function(e){return b(e.target.value)},label:"Password",placeholder:"Password",type:"password",variant:"outlined"}),Object(h.jsx)(u.a,{onClick:function(){console.log(n,r),fetch("".concat(j,"/api/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:r,email:n})}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("token",e.token),window.location.href="/"})).catch((function(e){console.log(e)}))},variant:"contained",color:"primary",children:"Login"})]})},T=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(""),i=Object(s.a)(a,2),b=i[0],p=i[1],f=Object(o.useState)(""),O=Object(s.a)(f,2),g=O[0],x=O[1],m=Object(r.f)();return Object(h.jsxs)(l.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(h.jsx)("h1",{children:"Register Page"}),Object(h.jsx)(d.a,{label:"Email",placeholder:"Email",type:"email",variant:"outlined",value:g,onChange:function(e){return x(e.target.value)}}),Object(h.jsx)(d.a,{label:"Password",placeholder:"Password",type:"password",variant:"outlined",value:n,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)(d.a,{label:"Confirm Password",placeholder:"Confirm Password",type:"password",variant:"outlined",value:b,onChange:function(e){return p(e.target.value)}}),Object(h.jsx)(u.a,{onClick:function(){console.log(n,b,g),fetch("".concat(j,"/api/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n,email:g})}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.clear(),m.push("/")})).catch((function(e){console.log(e)}))},variant:"contained",color:"primary",children:"Register"})]})},I=n(125),P=n(126),E=n(127),J=Object(I.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function N(){var e=J(),t=Object(r.f)();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(P.a,{position:"sticky",children:Object(h.jsxs)(E.a,{children:[Object(h.jsx)(g.a,{style:{cursor:"pointer"},onClick:function(e){return t.push("/")},variant:"h6",className:e.title,children:"Todo App"}),localStorage.getItem("token")?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(u.a,{color:"inherit",onClick:function(){localStorage.removeItem("token"),window.location.reload(),window.location.href="/"},children:"Logout"})}):Object(h.jsx)(h.Fragment,{})]})})})}var F=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(null),i=Object(s.a)(a,2),b=(i[0],i[1]),p=Object(r.g)(),f=(p.todotitle,p.todoid),O=Object(r.f)();Object(o.useEffect)((function(){fetch("".concat(j,"/api/posts/").concat(f),{method:"GET",headers:{"Content-Type":"application/json","x-access-tokens":localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){console.log("===================================="),console.log("data-------\x3e",e.post),b(e.post),c(e.post.title),console.log("====================================")}))}),[]);return Object(h.jsxs)(l.a,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",children:[Object(h.jsx)(d.a,{fullWidth:!0,margin:"normal",value:n,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){n.length>0?fetch("".concat(j,"/api/posts/").concat(f),{method:"POST",headers:{"Content-Type":"application/json","x-access-tokens":localStorage.getItem("token")},body:JSON.stringify({title:n})}).then((function(e){return e.json()})).then((function(e){console.log(e),O.push("/")})).catch((function(e){return console.log(e)})):alert("Please fill in all the fields")},children:"Update Todo"})]})},G=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(N,{}),Object(h.jsx)(r.c,{children:localStorage.getItem("token")?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(r.a,{exact:!0,path:"/",component:k}),Object(h.jsx)(r.a,{exact:!0,path:"/todo-:todotitle-:todoid",component:F})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(r.a,{exact:!0,path:"/",component:w}),Object(h.jsx)(r.a,{exact:!0,path:"/register",component:T})]})})]})};a.a.render(Object(h.jsx)(G,{}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.d092ffb3.chunk.js.map