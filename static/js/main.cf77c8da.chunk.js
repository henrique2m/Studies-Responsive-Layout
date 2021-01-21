(this.webpackJsonpstudy=this.webpackJsonpstudy||[]).push([[0],{35:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),i=t.n(a),o=t(20),c=t.n(o),s=t(9),d=t(2),m=t(18),l=t(7),u=t(8);function b(){var n=Object(l.a)(["\n  main form {\n    display: flex;\n    width: 100%;\n\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  main form img {\n    width: 10rem;\n    height: 10rem;\n\n    margin-bottom: 3rem;\n  }\n\n  main form input {\n    width: 30rem;\n    height: 5rem;\n    border-radius: 5px;\n    height: 3.2rem;\n    margin-bottom: 1rem;\n    padding-left: 1rem;\n  }\n\n  main form button {\n    width: 30rem;\n    height: 30rem;\n    border-radius: 5px;\n    height: 3.2rem;\n    cursor: pointer;\n    font-weight: bold;\n    font-size: 1.8rem;\n    margin-bottom: 1rem;\n  }\n\n  main form div {\n    width: 30rem;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  main form div span,\n  strong {\n    font-size: 1.4rem;\n    font-weight: bold;\n    color: #fff;\n  }\n\n  @media screen and (max-width: 600px) {\n    main form input {\n      width: 100%;\n      height: 5rem;\n    }\n    main form button {\n      width: 100%;\n      height: 5rem;\n    }\n    main form input {\n      width: 100%;\n    }\n\n    main form div {\n      width: 100%;\n    }\n  }\n"]);return b=function(){return n},n}var h=u.b.section(b()),j=t.p+"static/media/logo.a7098f92.png";function x(){var n=Object(l.a)(["\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  background: var(--color-background);\n\n  section {\n    width: 70rem;\n    height: 48rem;\n    display: flex;\n    justify-content: space-between;\n    background: var(--color-background);\n    border-radius: 1rem;\n  }\n\n  section main:first-child {\n    display: flex;\n    width: 50%;\n    justify-content: center;\n    align-items: center;\n    border-radius: 1rem 0 0 1rem;\n  }\n\n  section aside:last-child {\n    width: 50%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    overflow: auto;\n    align-items: center;\n    border-radius: 0 1rem 1rem 0;\n\n    ::-webkit-scrollbar-track {\n      background-color: #74d4d4;\n      border-radius: 5px;\n    }\n    ::-webkit-scrollbar {\n      width: 10px;\n      background: #24182b;\n    }\n    ::-webkit-scrollbar-thumb {\n      background: rgba(0, 0, 0, 0.2);\n      border-radius: 5px;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    padding: 0;\n    min-height: 100%;\n\n    section {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center;\n      padding: 2rem 2rem;\n      border-radius: 0;\n    }\n\n    section main:first-child {\n      width: 100%;\n      display: flex;\n    }\n\n    section aside:last-child {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      margin-top: 3rem;\n      border-radius: 10px;\n      background: var(--color-background);\n    }\n  }\n"]);return x=function(){return n},n}var p=u.b.div(x()),f=function(n){var e=n.children;return Object(r.jsx)(p,{children:e})};function g(){var n=Object(l.a)(["\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  }\n\n  max-width: 30rem;\n  min-height: 30rem;\n\n  display: flex;\n  flex-direction: column;\n  background: #74d4d4;\n  border-radius: 1rem;\n  padding: 1rem;\n  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.1);\n  margin-bottom: 1rem;\n\n  animation: fadeIn 02s ease;\n\n  header {\n    width: 100%;\n    height: 4.8rem;\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid #000;\n    padding-bottom: 1rem;\n  }\n\n  header img {\n    width: 4rem;\n    height: 4rem;\n\n    border-radius: 50%;\n    border: 1px solid #000;\n  }\n\n  header strong {\n    font-size: 1.8rem;\n    font-weight: bold;\n    margin-left: 1rem;\n  }\n\n  P {\n    margin-top: 1rem;\n    font-size: 1.8rem;\n    margin-left: 1rem;\n    color: #fff;\n  }\n\n  @media screen and (max-width: 600px) {\n    max-width: 100%;\n    width: 100%;\n    display: flex;\n  }\n"]);return g=function(){return n},n}var v=u.b.div(g()),O=function(n){var e=n.avatar,t=n.username,a=n.text;return Object(r.jsxs)(v,{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("img",{src:e,alt:t}),Object(r.jsx)("strong",{children:t})]}),Object(r.jsx)("p",{children:a})]})},w=t.p+"static/media/nine.dbc62b37.png";function y(){var n=Object(a.useState)(""),e=Object(m.a)(n,2),t=e[0],i=e[1],o=Object(a.useState)(""),c=Object(m.a)(o,2),d=c[0],l=c[1];return Object(r.jsx)(f,{children:Object(r.jsxs)(h,{children:[Object(r.jsx)("main",{children:Object(r.jsxs)("form",{children:[Object(r.jsx)("img",{src:j,alt:"logo"}),Object(r.jsx)("input",{type:"text",id:"email",name:"email",placeholder:"E-mail",onChange:function(n){return i(n.target.value)}}),Object(r.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Senha",onChange:function(n){return l(n.target.value)}}),Object(r.jsx)("button",{type:"submit",onClick:function(n){n.preventDefault(),console.log(t,d)},children:"ENTRAR"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:Object(r.jsx)(s.b,{to:"/newuser",children:"Criar uma conta"})}),Object(r.jsx)("span",{children:Object(r.jsx)(s.b,{to:"/forgot",children:"Recuperar senha"})})]})]})}),Object(r.jsx)("aside",{children:Object(r.jsx)(O,{avatar:w,username:"@nine",text:'"Depois que meu come\xe7ou a aulas pelo aplicativo, \n            ele teve uma melhora consider\xe1vel no seu rendimento escolar..."'})})]})})}function k(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  h1 {\n    font-size: 4.8rem;\n    font-weight: bold;\n    margin-bottom: 3rem;\n    text-align: center;\n    color: #fff;\n  }\n\n  div {\n    display: flex;\n  }\n\n  div button {\n    width: 15rem;\n    height: 15rem;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.4rem;\n    font-weight: bold;\n    border-radius: 0.5rem;\n    color: #fff;\n    background: #f45;\n    transition: background 2s;\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n  }\n\n  div & button {\n    margin-right: 1rem;\n  }\n\n  @keyframes moveY {\n    from {\n      transform: translateY(0);\n    }\n\n    to {\n      transform: translateY(5px);\n    }\n  }\n\n  div button:hover {\n    animation: moveY 0.2s ease alternate;\n    background: #f455;\n  }\n\n  div {\n    margin-left: 1rem;\n    font-size: 1.8rem;\n  }\n\n  @media screen and (max-width: 600px) {\n  }\n"]);return k=function(){return n},n}var A=u.b.div(k());function z(){return Object(r.jsx)(f,{children:Object(r.jsxs)("section",{children:[Object(r.jsx)("main",{children:Object(r.jsxs)(A,{children:[Object(r.jsx)("h1",{children:"Voc\xea deseja entrar como ?"}),Object(r.jsxs)("div",{children:[Object(r.jsx)(s.b,{to:"/teacher",children:Object(r.jsx)("button",{type:"button",children:" PROFESSOR "})}),Object(r.jsx)(s.b,{to:"/student",children:Object(r.jsx)("button",{type:"button",children:" ALUNO "})})]})]})}),Object(r.jsx)("aside",{children:Object(r.jsx)(O,{avatar:w,username:"@nine",text:"Eu tinha acabado de sair de um relacionamento, e eu e a Annie  est\xe1vamos come\xe7ando a sair com mulheres e est\xe1vamos as duas nervosas  e indo devagar por um tempo! A gente se apaixonou perdidamente muito  r\xe1pido e sab\xedamos que t\xednhamos encontrado companheiras rapidamente."})})]})})}var F=t.p+"static/media/lara.abc96928.png";function E(){return Object(r.jsx)(f,{children:Object(r.jsxs)("section",{children:[Object(r.jsx)("main",{children:Object(r.jsx)("h1",{children:"Formul\xe1rio Aluno"})}),Object(r.jsx)("aside",{children:Object(r.jsx)(O,{avatar:F,username:"@lara",text:"Eu tinha acabado de sair de um relacionamento, e eu e a Annie  est\xe1vamos come\xe7ando a sair com mulheres e est\xe1vamos as duas nervosas  e indo devagar por um tempo! A gente se apaixonou perdidamente muito  r\xe1pido e sab\xedamos que t\xednhamos encontrado companheiras rapidamente."})})]})})}var R=t.p+"static/media/pauly.cb2a8f3f.png";function S(){return Object(r.jsx)(f,{children:Object(r.jsxs)("section",{children:[Object(r.jsx)("main",{children:Object(r.jsx)("h1",{children:"Formul\xe1rio Professor"})}),Object(r.jsx)("aside",{children:Object(r.jsx)(O,{avatar:R,username:"@pauly",text:"Eu tinha acabado de sair de um relacionamento, e eu e a Annie  est\xe1vamos come\xe7ando a sair com mulheres e est\xe1vamos as duas nervosas  e indo devagar por um tempo! A gente se apaixonou perdidamente muito  r\xe1pido e sab\xedamos que t\xednhamos encontrado companheiras rapidamente."})})]})})}function q(){return Object(r.jsxs)(s.a,{basename:"/Studies-Responsive-Layout",children:[Object(r.jsx)(d.a,{path:"/",exact:!0,component:y}),Object(r.jsx)(d.a,{path:"/newuser",exact:!0,component:z}),Object(r.jsx)(d.a,{path:"/teacher",exact:!0,component:S}),Object(r.jsx)(d.a,{path:"/student",exact:!0,component:E})]})}var C=function(){return Object(r.jsx)(q,{})};function Y(){var n=Object(l.a)(["\n:root {\n  font-size: 60%;\n  --color-background: #292929;\n  --color-container: #FFFFFF;\n  --text-small-color: #404040;\n  --color-border: #c4cdcd;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  box-sizing: border-box;\n}\n\nhtml, body, #root {\n  width: 100vw;\n  overflow-x: hidden;\n}\n\nbody {\n  background: var(--color-background);\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\n}\n\na,\na:link,\na:visited,\na:active {\n  text-decoration: none;\n  color: #fff;\n}\n\nbody,\ninput,\nbutton,\ntextarea {\n  color: var(--text-small-color);\n  border: 0;\n  box-shadow: 0 0 0 0;\n  outline: 0;\n}\n"]);return Y=function(){return n},n}var I=Object(u.a)(Y());c.a.render(Object(r.jsxs)(i.a.StrictMode,{children:[Object(r.jsx)(I,{}),Object(r.jsx)(C,{})]}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.cf77c8da.chunk.js.map