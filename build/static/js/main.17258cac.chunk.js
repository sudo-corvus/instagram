(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[0],{18:function(t,e,n){t.exports=n(41)},23:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(13),s=n.n(i),c=(n(23),n(7)),u=n(14),a=n.n(u),p=n(1),l=n(2),d=n(8);function h(){var t=Object(p.a)(["\n  object-fit: cover;\n  width: 60%;\n  height: 100%;\n  border-radius: 50%;\n"]);return h=function(){return t},t}function m(){var t=Object(p.a)(["\n  display: flex;\n  justify-content : center;\n  align-items : center;\n  height: 100px;\n  width: 60px;\n  padding : 5px;\n  &:hover{\n  opacity : 0.7;\n  }\n"]);return m=function(){return t},t}function f(){var t=Object(p.a)(["\n  position: absolute;\n  right: 0;\n  top: 32px;\n  z-index: 5;\n  color : #ccc;\n  font-size: 24px;\n  cursor : pointer;\n  border : 3px solid #eee;\n  border-radius : 50%;\n"]);return f=function(){return t},t}function b(){var t=Object(p.a)(["\n  position: absolute;\n  left: 0;\n  top: 32px;\n  z-index: 5;\n  font-size: 24px;\n  color : #ccc;\n  cursor : pointer;\n  border : 3px solid #eee;\n  border-radius : 50%;\n"]);return b=function(){return t},t}function g(){var t=Object(p.a)(["\n  position: relative;\n  width: 60vw;\n  height: 100px;\n  margin: 20px auto;\n  background: #fff;\n  border: 1px solid #eee;\n"]);return g=function(){return t},t}var v=l.a.div(g()),x=Object(l.a)(d.a)(b()),j=Object(l.a)(d.b)(f()),w=l.a.div(m()),O=l.a.img.attrs((function(t){var e=t.image;return{src:"".concat(e)}}))(h()),E=[{userid:1,url:"https://picsum.photos/400/300"},{userid:2,url:"https://picsum.photos/500/300"},{userid:4,url:"https://picsum.photos/200/300"},{userid:5,url:"https://picsum.photos/900/300"},{userid:6,url:"https://picsum.photos/600/300"},{userid:7,url:"https://picsum.photos/800/600"},{userid:8,url:"https://picsum.photos/700/400"},{userid:9,url:"https://picsum.photos/500/200"},{userid:10,url:"https://picsum.photos/100/300"},{userid:11,url:"https://picsum.photos/200/600"},{userid:12,url:"https://picsum.photos/450/400"},{userid:13,url:"https://picsum.photos/576/200"}],k=function(){var t=Object(r.useState)(!1),e=Object(c.a)(t,2),n=e[0],i=e[1],s=Object(r.useState)(!0),u=Object(c.a)(s,2),p=u[0],l=u[1],d=Object(r.useRef)(),h={dots:!1,arrows:!1,infinite:!1,initialSlide:0,slidesToShow:5,slidesToScroll:4,speed:500,afterChange:function(t){return function(t){i(0!==t),l(t!==E.length-h.slidesToShow)}(t)}};return o.a.createElement(v,null,n&&o.a.createElement(x,{onClick:function(){d.current.slickPrev()}}),p&&o.a.createElement(j,{onClick:function(){d.current.slickNext()}}),o.a.createElement(a.a,Object.assign({ref:d},h),E.map((function(t,e){return o.a.createElement(w,{key:e},o.a.createElement(O,{image:t.url}))}))))},S=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.17258cac.chunk.js.map