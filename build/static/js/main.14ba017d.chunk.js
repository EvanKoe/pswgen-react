(this["webpackJsonppswd-gen"]=this["webpackJsonppswd-gen"]||[]).push([[0],{130:function(M,c,j){},131:function(M,c,j){},137:function(M,c,j){},143:function(M,c){},145:function(M,c){},155:function(M,c){},157:function(M,c){},182:function(M,c){},183:function(M,c){},188:function(M,c){},190:function(M,c){},197:function(M,c){},216:function(M,c){},232:function(M,c,j){},237:function(M,c,j){},238:function(M,c,j){"use strict";j.r(c);var L=j(1),N=j.n(L),i=j(122),t=j.n(i),I=(j(130),j(65)),e=j(4),s=j(6),D=(j(131),j(0)),z=function(){var M=Object(e.e)(),c=Object(L.useState)("Your password !"),j=Object(s.a)(c,2),N=j[0],i=j[1],t=Object(L.useState)(!0),I=Object(s.a)(t,2),z=I[0],n=I[1],y=Object(L.useState)(!0),w=Object(s.a)(y,2),u=w[0],g=w[1],T=Object(L.useState)(12),d=Object(s.a)(T,2),a=d[0],C=d[1],x=Object(L.useState)(""),o=Object(s.a)(x,2),A=o[0],O=o[1],m=Object(L.useState)(""),b=Object(s.a)(m,2),l=b[0],v=b[1],r=function(M){return M<8?O("Length cannot be under 8 !"):M>30?O("Length can be up to 30 !"):(O(""),C(M))};return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsxs)("div",{className:"navbar",children:[Object(D.jsx)("img",{className:"nav active",alt:"Password generator",src:"https://img.icons8.com/ios/50/000000/password--v1.png"}),Object(D.jsx)("p",{className:"title",children:"Password generator"}),Object(D.jsx)("img",{className:"nav",alt:"Your vault",src:"https://img.icons8.com/pastel-glyph/50/000000/safe--v2.png",onClick:function(){return M.replace("/securevault")}})]}),Object(D.jsxs)("div",{className:"pswDiv",children:[Object(D.jsx)("p",{className:"rowDiv psw",children:N}),Object(D.jsx)("img",{className:"rowDiv img",alt:"Copy",src:"https://img.icons8.com/material-outlined/48/000000/copy.png",onClick:function(){if("Your password !"===N)return O("Generate a password before copying it !");navigator.clipboard.writeText(N),v("Password copied in your clipboard !")},height:20,width:20})]}),Object(D.jsx)("p",{className:"errorMsg",children:A}),Object(D.jsx)("p",{className:"errorMsg copied",children:l}),Object(D.jsxs)("div",{children:[Object(D.jsx)("p",{className:"rowDiv psw",children:" Length : "}),Object(D.jsx)("input",{type:"button",onClick:function(){return r(a-1)},value:"-",className:"button rowDiv size30",style:{padding:"10px 15px",marginLeft:5}}),Object(D.jsxs)("p",{className:"rowDiv size30 textCol",children:[" ",a," "]}),Object(D.jsx)("input",{type:"button",onClick:function(){return r(a+1)},value:"+",className:"button rowDiv size30",style:{padding:"10px 15px"}})]}),Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"optionDiv",children:[Object(D.jsx)("p",{className:"rowDiv check",children:" Include Letters "}),Object(D.jsx)("input",{type:"checkbox",checked:z,onChange:function(M){return n((function(M){return!M}))},className:"rowDiv checkboxes"})]}),Object(D.jsxs)("div",{className:"optionDiv",children:[Object(D.jsx)("p",{className:"rowDiv check",children:" Include special characters "}),Object(D.jsx)("input",{type:"checkbox",checked:u,onChange:function(M){return g((function(M){return!M}))},className:"rowDiv checkboxes"})]})]}),Object(D.jsx)("input",{type:"button",value:"Generate",onClick:function(){return function(){var M=[],c=void 0;c=z?u?"abcdefghijklmnopqrstuvwxyz0123456789,;:=?./+\xf9%^$*][}{)(-_ABCDEFGHIJKLMNOPQRSTUVWXYZ":"abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ":u?"0123456789,;:=?./+\xf9%^$*][}{)(-_":"0123456789";for(var j=0;j<a;++j){var L=0|Math.random()*(c.length-1);M.push(c[L])}return O(""),v(""),i(M.join(""))}()},className:"button genBtn"}),Object(D.jsx)("input",{type:"button",onClick:function(){return localStorage.clear()},value:"CLEAR"})]})},n=j(125),y=(j(137),function(){var M=Object(e.e)(),c=Object(L.useState)(void 0),j=Object(s.a)(c,2),N=j[0],i=j[1],t=Object(L.useState)(""),I=Object(s.a)(t,2),z=I[0],y=I[1],w=Object(L.useState)(""),u=Object(s.a)(w,2),g=u[0],T=u[1],d=function(M,c){navigator.clipboard.writeText(M),T(c?"'"+M+"' copied to your clipbord !":"Password copied to your clipboard !"),setTimeout((function(){return T("")}),2e3)};return Object(L.useEffect)((function(){var M=localStorage.getItem("pass");void 0!==(M=JSON.parse(M))&&null!==M&&i(M)}),[]),Object(D.jsxs)("div",{className:"container",children:[Object(D.jsxs)("div",{className:"navbar",children:[Object(D.jsx)("img",{className:"nav",alt:"Password generator",src:"https://img.icons8.com/ios/50/000000/password--v1.png",onClick:function(){return M.replace("/")}}),Object(D.jsx)("p",{className:"title",style:{color:"#f7f7f7"},children:"Your vault"}),Object(D.jsx)("img",{className:"nav active",alt:"Your vault",src:"https://img.icons8.com/pastel-glyph/50/000000/safe--v2.png"})]}),Object(D.jsxs)("div",{className:"nav2",children:[Object(D.jsx)("img",{src:"https://img.icons8.com/dotty/50/000000/lock-2.png",alt:"Lock your vault",className:"nav2btn",height:"50vh",onClick:function(){return M.replace("/securevault")}}),Object(D.jsx)("input",{type:"text",placeholder:"Research",onKeyDown:function(M){"Enter"===M.code&&function(){var M=localStorage.getItem("pass");i(""===z?JSON.parse(M):N.filter((function(M){return M.name.includes(z)})))}()},onChange:function(M){return y(M.target.value)},className:"inputv"}),Object(D.jsx)("img",{src:"https://img.icons8.com/fluency-systems-filled/48/000000/plus-math.png",alt:"add an entry",className:"nav2btn",height:"50vh",onClick:function(){return M.replace("/new")}})]}),Object(D.jsxs)("div",{style:void 0===N?{textAlign:"center"}:{},className:"mainv",children:[Object(D.jsxs)("p",{className:"msg",children:[" ",g," "]}),void 0===N?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("p",{className:"emptyText",children:"Nothing to see here"}),Object(D.jsx)("p",{style:{color:"#fff"},children:"Click '+' to add a new entry"})]}):N.map((function(c,j){return Object(D.jsxs)("div",{className:"eachPsw",children:[Object(D.jsx)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5MC4yIDQ5MC4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48bGluayB0eXBlPSJ0ZXh0L2NzcyIgaWQ9ImRhcmstbW9kZSIgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSIiPjwvbGluaz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNMzQxLjEsMzQuM2g5MC41bC0yMDYuOSwyMDdjLTYuNyw2LjctNi43LDE3LjYsMCwyNC4zYzMuMywzLjMsNy43LDUsMTIuMSw1czguOC0xLjcsMTIuMS01bDIwNy0yMDd2OTAuNSAgICAgYzAsOS41LDcuNywxNy4yLDE3LjEsMTcuMmM5LjUsMCwxNy4yLTcuNywxNy4yLTE3LjJWMTcuMkM0OTAuMiw3LjcsNDgyLjUsMCw0NzMsMEgzNDEuMWMtOS41LDAtMTcuMiw3LjctMTcuMiwxNy4yICAgICBDMzI0LDI2LjYsMzMxLjYsMzQuMywzNDEuMSwzNC4zeiIgZmlsbD0iI2Y3ZjdmNyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMTAyLjksNDkwLjJoMjg0LjNjNTYuOCwwLDEwMi45LTQ2LjIsMTAyLjktMTAyLjlWMjUzLjRjMC05LjUtNy43LTE3LjEtMTcuMi0xNy4xcy0xNy4xLDcuNy0xNy4xLDE3LjF2MTMzLjggICAgIGMwLDM3LjgtMzAuOCw2OC42LTY4LjYsNjguNkgxMDIuOWMtMzcuOCwwLTY4LjYtMzAuOC02OC42LTY4LjZWMTYxLjRWMTAzYzAtMzcuOCwzMC44LTY4LjYsNjguNi02OC42aDEzMi43ICAgICBjOS41LDAsMTcuMS03LjcsMTcuMS0xNy4yUzI0NSwwLDIzNS42LDBIMTAyLjlDNDYuMSwwLDAsNDYuMiwwLDEwMi45djU4LjR2MjI1LjlDMCw0NDQsNDYuMiw0OTAuMiwxMDIuOSw0OTAuMnoiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==",width:"40",height:"40",className:"openImg animatedButton",onClick:function(){return M.replace({pathname:"/new",state:{props:{gname:c.name,gusername:c.username,gpassword:c.password}}})}}),Object(D.jsxs)("div",{style:{flex:1},children:[Object(D.jsx)("p",{className:"pswTextName",children:c.name}),Object(D.jsx)("p",{className:"pswTextP",children:c.username.length>20?c.username.substring(0,20)+"...":c.username})]}),Object(D.jsx)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxsaW5rIHR5cGU9InRleHQvY3NzIiBpZD0iZGFyay1tb2RlIiByZWw9InN0eWxlc2hlZXQiIGhyZWY9IiI+PC9saW5rPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwYy03NC40MzksMC0xMzUsNjAuNTYxLTEzNSwxMzVzNjAuNTYxLDEzNSwxMzUsMTM1czEzNS02MC41NjEsMTM1LTEzNVMzMzAuNDM5LDAsMjU2LDB6IE0yNTYsMjQwICAgIGMtNTcuODk3LDAtMTA1LTQ3LjEwMy0xMDUtMTA1YzAtNTcuODk3LDQ3LjEwMy0xMDUsMTA1LTEwNWM1Ny44OTcsMCwxMDUsNDcuMTAzLDEwNSwxMDVDMzYxLDE5Mi44OTcsMzEzLjg5NywyNDAsMjU2LDI0MHoiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQyMy45NjYsMzU4LjE5NUMzODcuMDA2LDMyMC42NjcsMzM4LjAwOSwzMDAsMjg2LDMwMGgtNjBjLTUyLjAwOCwwLTEwMS4wMDYsMjAuNjY3LTEzNy45NjYsNTguMTk1ICAgIEM1MS4yNTUsMzk1LjUzOSwzMSw0NDQuODMzLDMxLDQ5N2MwLDguMjg0LDYuNzE2LDE1LDE1LDE1aDQyMGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1ICAgIEM0ODEsNDQ0LjgzMyw0NjAuNzQ1LDM5NS41MzksNDIzLjk2NiwzNTguMTk1eiBNNjEuNjYsNDgyYzcuNTE1LTg1LjA4Niw3OC4zNTEtMTUyLDE2NC4zNC0xNTJoNjAgICAgYzg1Ljk4OSwwLDE1Ni44MjUsNjYuOTE0LDE2NC4zNCwxNTJINjEuNjZ6IiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==",style:{padding:10},className:"animatedButton",height:"40",width:"40",onClick:function(){return d(c.username,!0)}}),Object(D.jsx)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDIgNTEyLjAwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGxpbmsgdHlwZT0idGV4dC9jc3MiIGlkPSJkYXJrLW1vZGUiIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iIj48L2xpbms+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8Y2lyY2xlIGN4PSIzNjQiIGN5PSIxNDAuMDYyIiByPSIzMiIgZmlsbD0iI2Y3ZjdmNyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik01MDYuNDc4LDE2NS45MzdjLTEwLjY4LTI3LjE5NC0zMC4yNjQtNjYuNDMxLTYyLjkxNS05OC45MjdjLTMyLjUzNS0zMi4zODQtNzEuMzU2LTUxLjQwOC05OC4xOTQtNjEuNjY2ICAgIGMtMjkuNDY0LTExLjI2MS02Mi45NDUtNC4xNjMtODUuMjk1LDE4LjA4MmwtNzguNTM4LDc4LjE3Yy0yMy4yODEsMjMuMTcxLTI5Ljk5MSw1OC44MjUtMTYuNjk4LDg4LjcyICAgIGM0LjEyMiw5LjI3Miw4LjYwNSwxOC4zNDEsMTMuMzk1LDI3LjEwM0w1Ljg1OCwzODkuNzkzQzIuMTA3LDM5My41NDQsMCwzOTguNjMxLDAsNDAzLjkzNnY4OGMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMGg4OCAgICBjMTEuMDQ2LDAsMjAtOC45NTQsMjAtMjB2LTM2bDM2LTAuMDAxYzExLjA0NiwwLDIwLTguOTU0LDIwLTIwdi0zNS45OTloMzZjMTEuMDQ2LDAsMjAtOC45NTQsMjAtMjBjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjBoLTU2ICAgIGMtMTEuMDQ2LDAtMjAsOC45NTQtMjAsMjB2MzUuOTk5bC0zNiwwLjAwMWMtMTEuMDQ2LDAtMjAsOC45NTQtMjAsMjB2MzZINDBWNDEyLjIybDE3Ny4zNTUtMTc3LjM1NCAgICBjNi41MTYtNi41MTYsNy43MzctMTYuNjM5LDIuOTU4LTI0LjUxN2MtNi45MzEtMTEuNDI0LTEzLjI5OC0yMy42MzItMTguOTIzLTM2LjI4NWMtNi41OTktMTQuODQxLTMuMjM3LTMyLjU3LDguMzY2LTQ0LjExOSAgICBsNzguNTM3LTc4LjE2OWMxMS4yMTMtMTEuMTU5LDI4LjAxMS0xNC43MTgsNDIuNzk4LTkuMDY4YzIzLjIyMiw4Ljg3Niw1Ni42OSwyNS4yMTQsODQuMjU2LDUyLjY1MiAgICBjMjcuNzM1LDI3LjYwNCw0NC42Miw2MS41NjcsNTMuOSw4NS4xOTdjNS43OTEsMTQuNzQ4LDIuMjcyLDMxLjUwMy04Ljk2NSw0Mi42ODdsLTc5LjQ4Niw3OS4xMTQgICAgYy0xMS41NzUsMTEuNTE5LTI4Ljg1MSwxNC44ODctNDQuMDE2LDguNThjLTEyLjUwNy01LjIwMi0yNC42Mi0xMS4zODItMzYtMTguMzY3Yy05LjQxMy01Ljc3OC0yMS43MjktMi44My0yNy41MDcsNi41ODQgICAgYy01Ljc3OCw5LjQxNC0yLjgzMSwyMS43Myw2LjU4MywyNy41MDhjMTMuMTUyLDguMDcyLDI3LjEzNiwxNS4yMDcsNDEuNTYyLDIxLjIwN2MzMC4xNDIsMTIuNTM5LDY0LjUyNSw1LjgsODcuNTk1LTE3LjE2MSAgICBsNzkuNDg2LTc5LjExM0M1MTEuMDQ0LDIyOS4xNTcsNTE4LjEwMSwxOTUuNTM0LDUwNi40NzgsMTY1LjkzN3oiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+",style:{padding:10},className:"animatedButton",height:"40",width:"40",onClick:function(){return d(c.password,!1)}}),Object(D.jsx)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQyNyA0MjcuMDAxMzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNDAsMCkiPjxsaW5rIHR5cGU9InRleHQvY3NzIiBpZD0iZGFyay1tb2RlIiByZWw9InN0eWxlc2hlZXQiIGhyZWY9IiI+PC9saW5rPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIzMi4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTE0LjM5ODQzOCAxNTQuNzAzMTI1Yy01LjUyMzQzOCAwLTEwIDQuNDc2NTYzLTEwIDEwdjE4OWMwIDUuNTE5NTMxIDQuNDc2NTYyIDEwIDEwIDEwIDUuNTIzNDM3IDAgMTAtNC40ODA0NjkgMTAtMTB2LTE4OWMwLTUuNTIzNDM3LTQuNDc2NTYzLTEwLTEwLTEwem0wIDAiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yOC4zOTg0MzggMTI3LjEyMTA5NHYyNDYuMzc4OTA2YzAgMTQuNTYyNSA1LjMzOTg0MyAyOC4yMzgyODEgMTQuNjY3OTY4IDM4LjA1MDc4MSA5LjI4NTE1NiA5LjgzOTg0NCAyMi4yMDcwMzIgMTUuNDI1NzgxIDM1LjczMDQ2OSAxNS40NDkyMTloMTg5LjIwMzEyNWMxMy41MjczNDQtLjAyMzQzOCAyNi40NDkyMTktNS42MDkzNzUgMzUuNzMwNDY5LTE1LjQ0OTIxOSA5LjMyODEyNS05LjgxMjUgMTQuNjY3OTY5LTIzLjQ4ODI4MSAxNC42Njc5NjktMzguMDUwNzgxdi0yNDYuMzc4OTA2YzE4LjU0Mjk2OC00LjkyMTg3NSAzMC41NTg1OTMtMjIuODM1OTM4IDI4LjA3ODEyNC00MS44NjMyODItMi40ODQzNzQtMTkuMDIzNDM3LTE4LjY5MTQwNi0zMy4yNTM5MDYtMzcuODc4OTA2LTMzLjI1NzgxMmgtNTEuMTk5MjE4di0xMi41Yy4wNTg1OTMtMTAuNTExNzE5LTQuMDk3NjU3LTIwLjYwNTQ2OS0xMS41MzkwNjMtMjguMDMxMjUtNy40NDE0MDYtNy40MjE4NzUtMTcuNTUwNzgxLTExLjU1NDY4NzUtMjguMDYyNS0xMS40Njg3NWgtODguNzk2ODc1Yy0xMC41MTE3MTktLjA4NTkzNzUtMjAuNjIxMDk0IDQuMDQ2ODc1LTI4LjA2MjUgMTEuNDY4NzUtNy40NDE0MDYgNy40MjU3ODEtMTEuNTk3NjU2IDE3LjUxOTUzMS0xMS41MzkwNjIgMjguMDMxMjV2MTIuNWgtNTEuMTk5MjE5Yy0xOS4xODc1LjAwMzkwNi0zNS4zOTQ1MzEgMTQuMjM0Mzc1LTM3Ljg3ODkwNyAzMy4yNTc4MTItMi40ODA0NjggMTkuMDI3MzQ0IDkuNTM1MTU3IDM2Ljk0MTQwNyAyOC4wNzgxMjYgNDEuODYzMjgyem0yMzkuNjAxNTYyIDI3OS44Nzg5MDZoLTE4OS4yMDMxMjVjLTE3LjA5NzY1NiAwLTMwLjM5ODQzNy0xNC42ODc1LTMwLjM5ODQzNy0zMy41di0yNDUuNWgyNTB2MjQ1LjVjMCAxOC44MTI1LTEzLjMwMDc4MiAzMy41LTMwLjM5ODQzOCAzMy41em0tMTU4LjYwMTU2Mi0zNjcuNWMtLjA2NjQwNy01LjIwNzAzMSAxLjk4MDQ2OC0xMC4yMTg3NSA1LjY3NTc4MS0xMy44OTQ1MzEgMy42OTE0MDYtMy42NzU3ODEgOC43MTQ4NDMtNS42OTUzMTMgMTMuOTI1NzgxLTUuNjA1NDY5aDg4Ljc5Njg3NWM1LjIxMDkzNy0uMDg5ODQ0IDEwLjIzNDM3NSAxLjkyOTY4OCAxMy45MjU3ODEgNS42MDU0NjkgMy42OTUzMTMgMy42NzE4NzUgNS43NDIxODggOC42ODc1IDUuNjc1NzgyIDEzLjg5NDUzMXYxMi41aC0xMjh6bS03MS4xOTkyMTkgMzIuNWgyNzAuMzk4NDM3YzkuOTQxNDA2IDAgMTggOC4wNTg1OTQgMTggMThzLTguMDU4NTk0IDE4LTE4IDE4aC0yNzAuMzk4NDM3Yy05Ljk0MTQwNyAwLTE4LTguMDU4NTk0LTE4LTE4czguMDU4NTkzLTE4IDE4LTE4em0wIDAiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNzMuMzk4NDM4IDE1NC43MDMxMjVjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjMtMTAgMTB2MTg5YzAgNS41MTk1MzEgNC40NzY1NjIgMTAgMTAgMTAgNS41MjM0MzcgMCAxMC00LjQ4MDQ2OSAxMC0xMHYtMTg5YzAtNS41MjM0MzctNC40NzY1NjMtMTAtMTAtMTB6bTAgMCIgZmlsbD0iI2Y3ZjdmNyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=",style:{padding:10},className:"animatedButton",height:"40",width:"40",onClick:function(){return function(M,c){var j=Object(n.a)(N);return j.splice(c,1),localStorage.setItem("pass",JSON.stringify(j)),i(j)}(0,j)}})]},"ep_"+j)}))]})]})}),w=j(67),u=(j(232),function(){var M=Object(L.useState)(""),c=Object(s.a)(M,2),N=c[0],i=c[1],t=Object(L.useState)(!1),I=Object(s.a)(t,2),z=I[0],n=I[1],y=Object(L.useState)(""),u=Object(s.a)(y,2),g=u[0],T=u[1],d=Object(e.e)(),a=function(){var M=localStorage.getItem("password");z?w.compare(N,M,(function(M,c){if(M)return console.log(M),T("Server error");c?d.replace("/vault"):T("Wrong password !")})):w.hash(N,0,(function(M,c){return M?(alert(M),T("Error setting your password")):(localStorage.setItem("password",c),n(!0),alert("Your password has been set !\nYou won't be able to recover it if you forget it !"))}))};return Object(L.useEffect)((function(){return T(z?"":"Please set your master password by typing it in the input field")}),[z]),Object(L.useEffect)((function(){j(233).config();var M=localStorage.getItem("password");return n(void 0!==M&&null!==M)}),[]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:"navbar",children:[Object(D.jsx)("img",{className:"nav",alt:"Password generator",src:"https://img.icons8.com/ios/50/000000/password--v1.png",onClick:function(){return d.replace("/")}}),Object(D.jsx)("p",{className:"title",children:"Your vault"}),Object(D.jsx)("img",{className:"nav active",alt:"Your vault",src:"https://img.icons8.com/pastel-glyph/50/000000/safe--v2.png"})]}),Object(D.jsxs)("div",{className:"form",children:[Object(D.jsx)("input",{className:"input",type:"password",placeholder:"Master password",value:N,onChange:function(M){return i(M.target.value)},onKeyDown:function(M){if("Enter"===M.code)return a()}}),Object(D.jsx)("p",{className:"error",children:g}),Object(D.jsx)("input",{type:"button",onClick:a,value:"Submit",className:"button"})]})]})}),g=(j(237),function(){var M=Object(e.e)(),c=Object(e.f)().state,j=c&&c.props?c.props:void 0,N=Object(L.useState)(void 0===j?"":j.gname),i=Object(s.a)(N,2),t=i[0],I=i[1],z=Object(L.useState)(void 0===j?"":j.gusername),n=Object(s.a)(z,2),y=n[0],w=n[1],u=Object(L.useState)(void 0===j?"":j.gpassword),g=Object(s.a)(u,2),T=g[0],d=g[1],a=Object(L.useState)(!1),C=Object(s.a)(a,2),x=C[0],o=C[1],A=j&&j.gname,O=function(){var c={name:t,username:y,password:T},L=localStorage.getItem("pass");if(L=JSON.parse(L),j){for(var N=0;L[N]&&L[N].name!==A;++N);L[N]=c,localStorage.setItem("pass",JSON.stringify(L))}else{var i=c;null!==L?(L.push(i),localStorage.setItem("pass",JSON.stringify(L))):localStorage.setItem("pass",JSON.stringify([i]))}return M.replace("/vault")};return Object(D.jsxs)("div",{style:{backgroundColor:"#212121",height:"100vh"},children:[Object(D.jsxs)("div",{className:"navbar",children:[Object(D.jsx)("img",{className:"nav",height:"40",width:"40",alt:"Go back",src:"https://img.icons8.com/ios-filled/50/000000/back.png",onClick:function(){return M.replace("/vault")}}),Object(D.jsx)("p",{className:"title",children:""===t?"Create new":"Modify"}),Object(D.jsx)("img",{className:"nav",height:"40",width:"40",alt:"Save",src:"https://img.icons8.com/ios-glyphs/30/000000/save--v1.png",onClick:function(){return O()}})]}),Object(D.jsxs)("div",{className:"mainn",children:[Object(D.jsx)("p",{className:"titlen",children:""===t?"New password":"Edit password"}),Object(D.jsx)("input",{type:"text",value:t,placeholder:"Name",className:"inputn",onChange:function(M){return I(M.target.value)}}),Object(D.jsx)("input",{type:"text",value:y,placeholder:"Username or email adress",className:"inputn",onChange:function(M){return w(M.target.value)}}),Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(D.jsx)("input",{type:"text",value:x?T:"*".repeat(T.length),onKeyDown:function(M){return 8===M.which?d((function(M){return M.slice(0,-1)})):13===M.which?O():1===M.key.length?d((function(c){return c.concat(M.key)})):void 0},placeholder:"Password",className:"inputn"}),Object(D.jsx)("img",{src:x?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGxpbmsgdHlwZT0idGV4dC9jc3MiIGlkPSJkYXJrLW1vZGUiIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iIj48L2xpbms+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzE2LjMzMiwxOTUuNjYyYy00LjE2LTQuMTYtMTAuOTIzLTQuMTYtMTUuMDgzLDBjLTQuMTYsNC4xNi00LjE2LDEwLjk0NCwwLDE1LjA4MyAgICBjMTIuMDc1LDEyLjA3NSwxOC43NTIsMjguMTM5LDE4Ljc1Miw0NS4yNDhjMCwzNS4yODUtMjguNzE1LDY0LTY0LDY0Yy0xNy4xMDksMC0zMy4xNzMtNi42NTYtNDUuMjQ4LTE4Ljc1MiAgICBjLTQuMTYtNC4xNi0xMC45MjMtNC4xNi0xNS4wODMsMGMtNC4xNiw0LjEzOS00LjE2LDEwLjkyMywwLDE1LjA4M2MxNi4wODUsMTYuMTI4LDM3LjUyNSwyNS4wMDMsNjAuMzMxLDI1LjAwMyAgICBjNDcuMDYxLDAsODUuMzMzLTM4LjI3Miw4NS4zMzMtODUuMzMzQzM0MS4zMzQsMjMzLjE4NywzMzIuNDYsMjExLjc0NywzMTYuMzMyLDE5NS42NjJ6IiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yNzAuODcsMTcyLjEzMWMtNC44NDMtMC44NTMtOS43OTItMS40NzItMTQuODY5LTEuNDcyYy00Ny4wNjEsMC04NS4zMzMsMzguMjcyLTg1LjMzMyw4NS4zMzMgICAgYzAsNS4wNzcsMC42MTksMTAuMDI3LDEuNDkzLDE0Ljg2OWMwLjkxNyw1LjE2Myw1LjQxOSw4LjgxMSwxMC40NzUsOC44MTFjMC42MTksMCwxLjIzNy0wLjA0MywxLjg3Ny0wLjE3MSAgICBjNS43ODEtMS4wMjQsOS42NjQtNi41NzEsOC42NC0xMi4zNTJjLTAuNjYxLTMuNjI3LTEuMTUyLTcuMzE3LTEuMTUyLTExLjE1N2MwLTM1LjI4NSwyOC43MTUtNjQsNjQtNjQgICAgYzMuODQsMCw3LjUzMSwwLjQ5MSwxMS4xNTcsMS4xMzFjNS42NzUsMS4xNTIsMTEuMzI4LTIuODU5LDEyLjM1Mi04LjY0QzI4MC41MzQsMTc4LjcwMiwyNzYuNjUyLDE3My4xNTUsMjcwLjg3LDE3Mi4xMzF6IiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik01MDkuNDYyLDI0OS4xMDJjLTIuNDExLTIuODU5LTYwLjExNy03MC4yMDgtMTM5LjcxMi0xMTEuNDQ1Yy01LjE2My0yLjcwOS0xMS42NjktMC42NjEtMTQuMzc5LDQuNTg3ICAgIGMtMi43MDksNS4yMjctMC42NjEsMTEuNjY5LDQuNTg3LDE0LjM3OWM2MS4zMTIsMzEuNzQ0LDExMC4yOTMsODEuMjgsMTI3LjA0LDk5LjM3MWMtMjUuNDI5LDI3LjU0MS0xMjUuNTA0LDEyOC0yMzAuOTk3LDEyOCAgICBjLTM1Ljc5NywwLTcxLjg3Mi04LjY0LTEwNy4yNjQtMjUuNzA3Yy01LjI0OC0yLjU4MS0xMS42NjktMC4zNDEtMTQuMjI5LDQuOTcxYy0yLjU4MSw1LjI5MS0wLjM0MSwxMS42NjksNC45NzEsMTQuMjI5ICAgIGMzOC4yOTMsMTguNDk2LDc3LjUwNCwyNy44NCwxMTYuNTIzLDI3Ljg0YzEzMS40MzUsMCwyNDguNTU1LTEzNi42MTksMjUzLjQ4My0xNDIuNDQzICAgIEM1MTIuODU0LDI1OC45MTUsNTEyLjgzMywyNTMuMDkxLDUwOS40NjIsMjQ5LjEwMnoiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTMyNS45OTYsMTE4Ljk0N2MtMjQuMjc3LTguMTcxLTQ3LjgyOS0xMi4yODgtNjkuOTk1LTEyLjI4OGMtMTMxLjQzNSwwLTI0OC41NTUsMTM2LjYxOS0yNTMuNDgzLDE0Mi40NDMgICAgYy0zLjExNSwzLjY2OS0zLjM3MSw5LjAwMy0wLjU5NywxMi45OTJjMS40NzIsMi4xMTIsMzYuNzM2LDUyLjE4MSw5Ny44NTYsOTIuNzc5YzEuODEzLDEuMjE2LDMuODQsMS43OTIsNS44ODgsMS43OTIgICAgYzMuNDM1LDAsNi44MjctMS42NjQsOC44NzUtNC44YzMuMjY0LTQuODg1LDEuOTItMTEuNTItMi45ODctMTQuNzYzYy00NC44ODUtMjkuODQ1LTc1LjYwNS02NS44NzctODcuMTA0LTgwLjUzMyAgICBjMjQuNTU1LTI2LjY2NywxMjUuMjkxLTEyOC41NzYsMjMxLjU1Mi0xMjguNTc2YzE5Ljg2MSwwLDQxLjEzMSwzLjc1NSw2My4xODksMTEuMTU3YzUuNTg5LDIuMDA1LDExLjY0OC0xLjA4OCwxMy41MDQtNi42OTkgICAgQzMzNC41NzIsMTI2Ljg2MiwzMzEuNTg1LDEyMC44MjUsMzI1Ljk5NiwxMTguOTQ3eiIgZmlsbD0iI2Y3ZjdmNyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDQ0Ljg2NSw2Ny4xMjhjLTQuMTYtNC4xNi0xMC45MjMtNC4xNi0xNS4wODMsMEw2Ny4xMTYsNDI5Ljc5NWMtNC4xNiw0LjE2LTQuMTYsMTAuOTIzLDAsMTUuMDgzICAgIGMyLjA5MSwyLjA2OSw0LjgyMSwzLjExNSw3LjU1MiwzLjExNWMyLjczMSwwLDUuNDYxLTEuMDQ1LDcuNTMxLTMuMTE1TDQ0NC44NjUsODIuMjExICAgIEM0NDkuMDI1LDc4LjA1MSw0NDkuMDI1LDcxLjI4OCw0NDQuODY1LDY3LjEyOHoiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxsaW5rIHR5cGU9InRleHQvY3NzIiBpZD0iZGFyay1tb2RlIiByZWw9InN0eWxlc2hlZXQiIGhyZWY9IiI+PC9saW5rPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTIwMy4wNywyNTguOTNjLTMuOS0zLjkxLTEwLjI0LTMuOTEtMTQuMTQsMGMtMy45MSwzLjktMy45MSwxMC4yNCwwLDE0LjE0YzMuOSwzLjkxLDEwLjI0LDMuOTEsMTQuMTQsMCAgICBDMjA2Ljk4LDI2OS4xNywyMDYuOTgsMjYyLjgzLDIwMy4wNywyNTguOTN6IiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yNTYsMjc2Yy0xNi41NDIsMC0zMCwxMy40NTgtMzAsMzBzMTMuNDU4LDMwLDMwLDMwczMwLTEzLjQ1OCwzMC0zMFMyNzIuNTQyLDI3NiwyNTYsMjc2eiBNMjU2LDMxNiAgICBjLTUuNTE0LDAtMTAtNC40ODYtMTAtMTBjMC01LjUxNCw0LjQ4Ni0xMCwxMC0xMGM1LjUxNCwwLDEwLDQuNDg2LDEwLDEwQzI2NiwzMTEuNTE0LDI2MS41MTQsMzE2LDI1NiwzMTZ6IiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yNTYsMjI2Yy0xMS4xNzgsMC0yMS45ODcsMi4yNTktMzIuMTI0LDYuNzE1Yy01LjA1NiwyLjIyMy03LjM1Myw4LjEyMy01LjEzMSwxMy4xNzkgICAgYzIuMjIyLDUuMDU2LDguMTIzLDcuMzUyLDEzLjE3OSw1LjEzMUMyMzkuNTA5LDI0Ny42OTEsMjQ3LjYxLDI0NiwyNTYsMjQ2YzMzLjA4NCwwLDYwLDI2LjkxNiw2MCw2MHMtMjYuOTE2LDYwLTYwLDYwICAgIHMtNjAtMjYuOTE2LTYwLTYwYzAtMC4zNDItMC4wMDEtMC42NzYsMC4wMDctMS4wMThjMC4xMjgtNS41MjEtNC4yNDQtMTAuMTAxLTkuNzY1LTEwLjIyOWMtNS41My0wLjEzOC0xMC4xMDEsNC4yNDMtMTAuMjI5LDkuNzY1ICAgIEMxNzYuMDAxLDMwNS4wMTYsMTc2LDMwNS41MDIsMTc2LDMwNmMwLDQ0LjExMiwzNS44ODgsODAsODAsODBzODAtMzUuODg4LDgwLTgwUzMwMC4xMTIsMjI2LDI1NiwyMjZ6IiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yNTYsNzZjLTUuNTIzLDAtMTAsNC40NzctMTAsMTB2NjBjMCw1LjUyMyw0LjQ3NywxMCwxMCwxMHMxMC00LjQ3NywxMC0xMFY4NkMyNjYsODAuNDc3LDI2MS41MjMsNzYsMjU2LDc2eiIgZmlsbD0iI2Y3ZjdmNyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTQ0LjI4MSwxNTAuMTM4bC00Mi40Mi00Mi40MmMtMy45MDUtMy45MDUtMTAuMjM3LTMuOTA1LTE0LjE0MywwYy0zLjkwNSwzLjkwNS0zLjkwNSwxMC4yMzcsMCwxNC4xNDNsNDIuNDIsNDIuNDIgICAgYzMuOTA1LDMuOTA1LDEwLjIzOCwzLjkwNiwxNC4xNDMsMEMxNDguMTg2LDE2MC4zNzYsMTQ4LjE4NiwxNTQuMDQ0LDE0NC4yODEsMTUwLjEzOHoiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQyNC4yODIsMTA3LjcxOGMtMy45MDUtMy45MDUtMTAuMjM3LTMuOTA1LTE0LjE0MywwbC00Mi40Miw0Mi40MmMtMy45MDUsMy45MDUtMy45MDUsMTAuMjM3LDAsMTQuMTQzICAgIGMzLjkwNCwzLjkwNSwxMC4yMzcsMy45MDYsMTQuMTQzLDBsNDIuNDItNDIuNDJDNDI4LjE4NywxMTcuOTU2LDQyOC4xODcsMTExLjYyNCw0MjQuMjgyLDEwNy43MTh6IiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik01MDkuNDk1LDMwNy43MUM0NDUuOTcsMjM1Ljc5MSwzNTEuNjQ2LDE3NiwyNTYsMTc2Yy05NS42NTksMC0xODkuOTgyLDU5LjgwNi0yNTMuNDk1LDEzMS43MSAgICBjLTMuNjU2LDQuMTQtMy4yNjQsMTAuNDU5LDAuODc1LDE0LjExNWM0LjE0LDMuNjU2LDEwLjQ2LDMuMjY0LDE0LjExNS0wLjg3NWMyLjEzMS0yLjQxMyw0LjMxNC00LjgxNyw2LjUyNS03LjIwNiAgICBDNzMuNDM1LDM4OC40MDgsMTYzLjAxMyw0MzYsMjU2LDQzNnMxODIuNTY1LTQ3LjU5MiwyMzEuOTgtMTIyLjI1NmMyLjIxMSwyLjM5LDQuMzk0LDQuNzk0LDYuNTI1LDcuMjA2ICAgIGMzLjY0NCw0LjEyNiw5Ljk2Myw0LjU0MiwxNC4xMTUsMC44NzVDNTEyLjc1OSwzMTguMTY5LDUxMy4xNTEsMzExLjg0OSw1MDkuNDk1LDMwNy43MXogTTI1Niw0MTYgICAgYy04Ny45MTUsMC0xNzIuNDcxLTQ1LjY3OS0yMTcuNjg5LTExNi45OEM3My45MzksMjY0LjEwOSwxNTYuMjYxLDE5NiwyNTYsMTk2Yzk5Ljc0LDAsMTgyLjA2MSw2OC4xMDksMjE3LjY4OSwxMDMuMDE5ICAgIEM0MjguNDcxLDM3MC4zMjEsMzQzLjkxNSw0MTYsMjU2LDQxNnoiIGZpbGw9IiNmN2Y3ZjciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+",style:{marginRight:30},width:40,height:40,onClick:function(){return o((function(M){return!M}))}})]}),Object(D.jsx)("input",{type:"button",style:{float:"right",marginRight:"30px"},className:"button",onClick:O,value:"Save"})]})]})}),T=function(){return Object(D.jsxs)(I.a,{basename:"/index.html",children:[Object(D.jsx)(e.a,{exact:!0,path:"/",component:z}),Object(D.jsx)(e.a,{exact:!0,path:"/securevault",component:u}),Object(D.jsx)(e.a,{exact:!0,path:"/vault",component:y}),Object(D.jsx)(e.a,{exact:!0,path:"/new",component:g})]})},d=function(M){M&&M instanceof Function&&j.e(3).then(j.bind(null,239)).then((function(c){var j=c.getCLS,L=c.getFID,N=c.getFCP,i=c.getLCP,t=c.getTTFB;j(M),L(M),N(M),i(M),t(M)}))};t.a.render(Object(D.jsx)(N.a.StrictMode,{children:Object(D.jsx)(T,{})}),document.getElementById("root")),d()}},[[238,1,2]]]);
//# sourceMappingURL=main.14ba017d.chunk.js.map