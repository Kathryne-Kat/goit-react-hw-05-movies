"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[318],{8123:function(e,t,r){r.d(t,{Df:function(){return o},Ph:function(){return p},TP:function(){return f},tx:function(){return l},zv:function(){return m}});var n=r(5861),a=r(7757),s=r.n(a),c=r(1912),i="https://api.themoviedb.org/3/",u="25e4eeadea4cf520d825a9bf9fd0e85d",o=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"trending/movie/day"),{params:{api_key:u}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"search/movie"),{params:{api_key:u,query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"movie/").concat(t),{params:{api_key:u}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"movie/").concat(t,"/credits"),{params:{api_key:u}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"movie/").concat(t,"/reviews"),{params:{api_key:u}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2583:function(e,t,r){r.d(t,{O:function(){return m}});var n=r(8683),a=r(2007),s=r.n(a),c=r(1087),i=r(7689),u=r(4340),o=r(4234),p=r(184),f=function(e){var t=e.id,r=e.title,n=e.poster_path,a=(0,i.TH)(),s="https://image.tmdb.org/t/p/w200".concat(n);return(0,p.jsx)("li",{className:o.Z.poster,children:(0,p.jsxs)(c.rU,{to:"/movies/"+t,state:{from:a},children:[(0,p.jsx)("img",{className:o.Z.posterImg,src:n?s:u,alt:r}),(0,p.jsx)("h2",{className:o.Z.title,children:r})]})})},m=function(e){var t=e.movies;return(0,p.jsx)("div",{className:o.Z.container,children:(0,p.jsx)("ul",{className:o.Z.moviesList,children:t&&t.map((function(e){return(0,p.jsx)(f,(0,n.Z)({},e),e.id)}))})})};m.propType={movie:s().object}},5318:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(5861),a=r(9439),s=r(7757),c=r.n(s),i=r(8123),u=r(4154),o=r(2583),p=r(1087),f="serchForm_container__8-goi",m="serchForm_form__hvseB",l="serchForm_inputSearch__pxLEH",v="serchForm_btnSearch__JyfRa",h=r(184),d=function(){var e=(0,p.lr)(),t=(0,a.Z)(e,2)[1];return(0,h.jsx)("div",{className:f,children:(0,h.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault();var r=e.target.query.value.toLowerCase().trim();console.log(r),r&&t({search:r})},children:[(0,h.jsx)("input",{className:l,type:"text",placeholder:"Enter name of movie",name:"query"}),(0,h.jsx)("button",{className:v,type:"submit",children:"Search"})]})})},_=r(2791),x=function(){var e=(0,_.useState)(null),t=(0,a.Z)(e,2),r=t[0],s=t[1],f=(0,_.useState)(!1),m=(0,a.Z)(f,2),l=m[0],v=m[1],x=(0,_.useState)(null),Z=(0,a.Z)(x,2),g=Z[0],y=Z[1],k=(0,p.lr)(),w=(0,a.Z)(k,1)[0].get("search");return(0,_.useEffect)((function(){if(w){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,i.Ph)(w);case 4:t=e.sent,s(t),y(null),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),y(e.t0.message);case 12:return e.prev=12,v(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[w]),(0,_.useEffect)((function(){g&&alert(g)}),[g]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("section",{children:[(0,h.jsx)(d,{}),!(null===r||void 0===r||!r.length)&&(0,h.jsx)(o.O,{movies:r})]}),l&&(0,h.jsx)(u.a,{})]})}},4234:function(e,t){t.Z={container:"moviesList_container__kqJys",poster:"moviesList_poster__hGfPY",moviesList:"moviesList_moviesList__A7Eqi",title:"moviesList_title__UDpFK",titleList:"moviesList_titleList__mihWC",posterImg:"moviesList_posterImg__MDOee"}},4340:function(e,t,r){e.exports=r.p+"static/media/http-404-not-found-error.e2630566527ad704912f.jpg"}}]);
//# sourceMappingURL=318.1edae943.chunk.js.map